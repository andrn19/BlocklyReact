import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { mqttPublish, getClient } from '../MQTT/mqtt';

const PolicyQue = () => {

    const [policies, setPolicies] = useState([]);


    useEffect(() => {
        const query = '"@type": "scm:Table"'
        const frameToSend = { "frame": query }
        const frameString = JSON.stringify(frameToSend)
        mqttPublish('fcs/fcClientTopic', frameString);
    }, [])

    useEffect(() => {
        const client = getClient();
        client.on("message", (topic, message) => {
            if (topic === 'fcs/fcClientTopic') {
                if (localStorage.getItem("appliedPolicies") !== null) {
                    const localJSON = localStorage.getItem("appliedPolicies")
                    const storedJSON = localJSON.split(/(?=,{"@type")/g);
                    const sj = storedJSON.map(string => string.replaceAll(',{"@type"', '{ "@type"'));
                    //adding mock status
                    for (let ele of sj) {
                        const eleObj = JSON.parse(ele)
                        const newEle = { ...eleObj, status: policyStatus[Math.floor(Math.random() * 4)] }
                        const newEleString = JSON.stringify(newEle)
                        sj[sj.indexOf(ele)] = newEleString
                    }
                    setPolicies(sj)
                }
            }
        })
    }, [])


    // const onDragEnd = (param) => {
    //     const srcI = param.source.index;
    //     const desI = param.destination.index;
    //     if (desI != null) {
    //         list.splice(desI, 0, list.splice(srcI, 1)[0]);
    //         List.saveList(list);
    //     }
    // };

    // const list = List.getList();

    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 14) + 10
        const minuts = Math.floor(Math.random() * 50) + 10
        const randomTime = hours + ':' + minuts
        return randomTime
    }

    const policyStatus = ["Done", "In Progress", "Rejected", "Waiting"]

    const stateStyle = (state) => {
        if (state === "Done") {
            return { color: "green" }
        }
        if (state === "In Progress") {
            return { color: "blue" }
        }
        if (state === "Rejected") {
            return { color: "red" }
        }
        if (state === "Waiting") {
            return { color: "grey" }
        }
    }

    return (
        <div className="queDiv">
            <center style={{ color: "black" }}><h2>Tasks</h2></center>
            <DragDropContext
            // onDragEnd={}
            >
                <ul className="queList">
                    <Droppable droppableId="droppable-1">
                        {(provided, _) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {policies.map((policy, i) => (
                                    <Draggable key={JSON.parse(policy).policyOn[0].name.split("-")[1]}
                                        draggableId={'draggable-' + JSON.parse(policy).policyOn[0].name.split("-")[1]}
                                        index={i}>
                                        {(provided, snapshot) => (
                                            <p className="queListItem"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                Table {JSON.parse(policy).policyOn[0].name.split("-")[1]}: <span style={stateStyle(JSON.parse(policy).status)}>{JSON.parse(policy).status} {JSON.parse(policy).name}</span><br />
                                                <span style={{ fontSize: 14, color: "dimgrey" }}> Last cleaned {getRandomTime()}</span>
                                            </p>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ul>
            </DragDropContext>
        </div>
    );
}

export default PolicyQue
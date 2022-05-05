import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from "./data";
import jsonSimple from "json-simple";

const PolicyQue = () => {

    const [policies, setPolicies] = useState([]);

    // const query = '"@type": "scm:Table"'
    // const frameToSend = {
    //     "frame": { query }
    // }

    // useEffect(() => {
    //     const client = getClient();
    //     let isActive = true;
    //     if (isActive) {
    //         client.publish('fcs/fcServiceTopic', JSON.stringify(frameToSend))
    //         client.on("message", (topic, message) => {
    //             var msg = message.toString()
    //             var jsonMSG = jsonSimple.decode(msg)
    //             var policies = jsonMSG.@reverse.policyOn.name
    //             setPolicies(policies)
    //         });
    //         console.log(policies)
    //     }
    //     return () => { isActive = false }
    // }, []);

    const onDragEnd = (param) => {
        const srcI = param.source.index;
        const desI = param.destination.index;
        if (desI != null) {
            list.splice(desI, 0, list.splice(srcI, 1)[0]);
            List.saveList(list);
        }
    };

    const list = List.getList();

    const stateStyle = (state) => {
        if (state === "Done") {
            return { color: "green" }
        }
        if (state === "In Progress,") {
            return { color: "blue" }
        }
        if (state === "Rejected") {
            return { color: "red" }
        }
        else {
            return { color: "grey" }
        }
    }

    return (
        <div className="queDiv">
            <center style={{ color: "black" }}><h2>Tasks</h2></center>
            <DragDropContext
                onDragEnd={onDragEnd}>
                <ul className="queList">
                    <Droppable droppableId="droppable-1">
                        {(provided, _) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {list.map((item, i) => (
                                    <Draggable key={item.table}
                                        draggableId={'draggable-' + item.table}
                                        index={i}>
                                        {(provided, snapshot) => (
                                            <p className="queListItem"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                Table {item.table}: <span style={stateStyle(item.tableStatus)}>{item.tableStatus} {item.policy}</span><br />
                                                <span style={{ fontSize: 14, color: "dimgrey" }}> Last cleaned {item.lastClean}</span>
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
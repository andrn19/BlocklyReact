import React, { useEffect, useState } from "react";
import Table from "./DataTable";
import './ComponentStyles.css'
import { getClient } from "../MQTT/mqtt";

const TableInfoBox = () => {

    const [policies, setShownPolicies] = useState([]);
    const [appliedPolicies, setAppliedPolicies] = useState([])

    useEffect(() => {
        if (appliedPolicies.length > 0) {
            localStorage.setItem('appliedPolicies', appliedPolicies)
        }
    }, [appliedPolicies])

    useEffect(() => {
        if (localStorage.getItem("appliedPolicies") !== null) {
            const localJSON = localStorage.getItem("appliedPolicies")
            const storedJSON = localJSON.split(/(?=,{"@type")/g);
            const sj = storedJSON.map(string => string.replaceAll(',{"@type"', '{"@type"'));
            var td = []
            for (let ele of sj) {
                const tableData = { tableNr: 'Table ' + JSON.parse(ele).policyOn[0].name.split("-")[1], policy: JSON.parse(ele).name }
                td.push(tableData)
            }
            setShownPolicies(td)
            setAppliedPolicies(sj)
        }
    }, [])

    useEffect(() => {
        const client = getClient()
        client.on("message", (topic, message) => {
            if (topic === 'fcs/fcServiceTopic') {
                console.log(topic)
                const msg = message.toString()
                const jsonMSG = JSON.parse(msg).doc
                const jsonMSGString = JSON.stringify(jsonMSG)
                setAppliedPolicies(arr => [...arr, jsonMSGString])
                const tableData = { tableNr: 'Table ' + jsonMSG.policyOn[0].name.split("-")[1], policy: jsonMSG.name }
                setShownPolicies(arr => [...arr, tableData])
            }
        });
    }, [])

    const policyDelete = () => {
        policies.pop();
        setShownPolicies([...policies]);
    }

    const columns = [
        {
            Header: 'Applied Policies',
            columns: [
                {
                    Header: 'Table',
                    accessor: 'tableNr',
                },
                {
                    Header: 'Policy',
                    accessor: 'policy',
                },
                {
                    Header: 'Remove',
                    accessor: 'action',
                    Cell: () => (<button onClick={policyDelete}>X</button>)
                },
            ],
        },
    ]

    return (
        <div style={{ position: "fixed", top: "15%", left: "2%", height: "43%", width: "25%" }}>
            <Table columns={columns} data={policies} />
        </div>
    );
}


export default TableInfoBox;
import React, { useEffect, useState} from "react";
import Table from "./DataTable";
import './ComponentStyles.css'
import { useEmitter } from './Emitter';

const TableInfoBox = () => {
   
    const { data } = useEmitter(); 
    
    const [policies, setShownPolicies]=useState([]);

    useEffect(() => {
        if(typeof data === 'object') {
            setShownPolicies(arr => [...arr, data]);
        } 
    }, [data]);
    
    const policyDelete = () => {
        policies.pop();
        setShownPolicies([...policies]);
    }
 
    const columns = [
            {
                Header: 'Applied Policies',
                columns: [
                    {
                        Header: 'Table Nr.',
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
            <Table columns={columns} data={policies}/>
        </div>
    );
}


export default TableInfoBox;
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
    
    const hi = () => {
        policies.pop();
        setShownPolicies([...policies]);
    }
 
    const columns = [
            {
                Header: 'Table Info',
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
                        accessor: 'action',
                        Cell: () => (<button onClick={hi}>X</button>)
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
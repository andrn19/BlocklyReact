import React, { useState, useEffect } from "react";
import Table from "./DataTable";
import { BiCheckCircle } from "react-icons/bi";

import './ComponentStyles.css'


const StatusQue = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Status Que',
                columns: [
                    {
                        Header: 'Task',
                        accessor: 'task',
                    },
                    {
                        Header: 'Table Nr.',
                        accessor: 'tableNr',
                    },
                    {
                        Header: '',
                        accessor: 'status',
                    },
                ],
            },
        ],
        []
    );


    const data = [{ task: "Clean", tableNr: "2", status: <BiCheckCircle size="1.5em" style={{color: "green"}} /> }];

    return (
        <div style={{ position: "fixed", top: "4%", left: "2%", width: "20%" }}>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default StatusQue;
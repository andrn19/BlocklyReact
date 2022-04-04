import React from "react";
import Table from "./DataTable";

import './ComponentStyles.css'
import { useEmitter } from "./Emitter";


const TableLog = () => {

    const { data } = useEmitter();

    const columns = React.useMemo(
        () => [
            {
                Header: 'Table Log',
                columns: [
                    {
                        Header: 'Table Nr.',
                        accessor: 'tableNr',
                    },
                    {
                        Header: 'Event',
                        accessor: 'event',
                    },
                    {
                        Header: 'Time',
                        accessor: 'time',
                    },
                ],
            },
        ],
        []
    );

    const tableData = [{ tableNr: "1", event: "clear",  time: "12:00"}];

    return (
        <div style={{ position:"fixed", top:"50%", left:"2%", width:"20%"}}>
            <Table columns={columns} data={tableData} />
            <h1>{data}</h1>
        </div>
    );
}

export default TableLog;
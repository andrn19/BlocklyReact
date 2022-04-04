import React from "react";
import Table from "./DataTable";

import './ComponentStyles.css'


const TableLog = () => {

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

    const data = [];

    return (
        <div style={{ position:"fixed", top:"50%", left:"2%", width:"20%"}}>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default TableLog;
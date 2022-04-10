import React from "react";
import Table from "./DataTable";

import './ComponentStyles.css'


const TableInfoBox = () => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Table Info',
                columns: [
                    {
                        Header: 'Table Nr.',
                        accessor: 'tableNr',
                    },
                    {
                        Header: 'Method',
                        accessor: 'method',
                    },
                ],
            },
        ],
        []
    );

    const data = [
        { tableNr: "1", method: "Very long method :)" },
        { tableNr: "2", method: "clear" },
        { tableNr: "3", method: "clear" },
        { tableNr: "4", method: "clear" },
        { tableNr: "5", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "7", method: "clear" }
    ];

    return (
        <div style={{ position: "fixed", top: "15%", left: "2%", height: "43%", width: "25%" }}>
            <Table columns={columns} data={data} />
        </div>
    );
}

export default TableInfoBox;
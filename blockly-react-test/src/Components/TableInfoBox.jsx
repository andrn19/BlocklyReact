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
        { tableNr: "1", method: "Very long method så man kan se at boxen bliver stor :)" },
        { tableNr: "2", method: "clear" },
        { tableNr: "3", method: "clear" },
        { tableNr: "4", method: "clear" },
        { tableNr: "5", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "6", method: "clear" },
        { tableNr: "7", method: "clear" }
    ];

    return (
        <div id="TableInfoBox">
            <Table columns={columns} data={data} />
        </div>
    );
}

export default TableInfoBox;
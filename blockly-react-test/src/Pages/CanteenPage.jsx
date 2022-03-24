import React from "react";

//components
import ProgramButton from "../Components/ProgramButton";
import TableInfoBox from "../Components/TableInfoBox";
import ChooseMethod from "../Components/ChooseMethod";

const CanteenPage = () => {
    return (
        <div>
            <ProgramButton/>
            <center><h1>Canteen</h1></center>
            <ChooseMethod />
            <TableInfoBox />
        </div>
    );
}

export default CanteenPage
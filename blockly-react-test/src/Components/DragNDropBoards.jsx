import React from "react";
import "./ComponentStyles.css";
import "./DragNDropPolicies";
import DragNDropPolicies from "./DragNDropPolicies";

function DragNDropBoard(props) {
   
    return (
        <div id={props.id} className={'dragndropview'}>   
                <DragNDropPolicies/>
        </div>
        
    )
}

export default DragNDropBoard
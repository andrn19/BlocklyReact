import React from "react";
import { DragDropContainer} from 'react-drag-drop-container';

function DragNDropPolicies(props) {
  
    const policyArray = [
        {
            PolicyName: 'Policy 1',
            Id: '1'
        }, 
        {
            PolicyName: 'Policy 2',
            Id: '2'
        }, 
        {
            PolicyName: 'Policy 3',
            Id: '3'
        }, 
        {
            PolicyName: 'Policy 4',
            Id: '4'
        }
    ];

    const dropHandler = (e) => {
        console.log(`${e.dropData}`);
    };

    return (
        <div>  
            <div id={props.id} > 
                {policyArray.map((policy) => {
                    return <DragDropContainer 
                        targetKey="foo"  
                        dragData={policy.PolicyName}
                        onDrop={dropHandler}>                  
                    <ul className={'policies'} > {policy.PolicyName} </ul> 
                    </DragDropContainer>
                })} 
            </div>
        </div>
    )
}

export default DragNDropPolicies

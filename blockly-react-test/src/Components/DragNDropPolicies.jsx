import React from "react";
import { useEmitter } from './Emitter';
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
        },
        
    ];

    const { setDataEvent } = useEmitter();
    
    const dropHandler = (e) => {  
        setDataEvent(`${e.dropData}`);
    };

    return (
        <div>  
            <div id={props.id} > 
                <h1 style={{fontSize: 20, paddingLeft: 25}}>Drag and drop policies</h1>
                {policyArray.map((policy) => (
                    <DragDropContainer 
                        targetKey="foo"  
                        dragData={policy.PolicyName}
                        onDrop={dropHandler}>                  
                    <ul className={'policies'} > {policy.PolicyName} </ul> 
                    </DragDropContainer>
                ))} 
            </div>
        </div>
    )
}

export default DragNDropPolicies

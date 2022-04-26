import React from "react";
import { useEmitter } from './Emitter';
import { DragDropContainer} from 'react-drag-drop-container';

function DragNDropPolicies() {
  
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
                <h1 style={{fontSize: 20, paddingLeft: 25}}>Drag and drop policies</h1>
                <ul>
                    {policyArray.map((policy) => (
                    <DragDropContainer 
                        targetKey="foo"  
                        dragData={policy.PolicyName}
                        onDrop={dropHandler}
                        key={policy.Id}>                  
                    <ul className={'policies'}> {policy.PolicyName} </ul> 
                    </DragDropContainer>
                    ))}
                </ul>
            </div>
    )
}

export default DragNDropPolicies

import React from 'react';
import "./ComponentStyles.css";
import image from '../Assets/Canteen_walls.png';
import image2 from '../Assets/LargeTableHorizontal.png';
import image3 from '../Assets/LargeTableVertical.png';
import image4 from '../Assets/SmallTable.png';
import image5 from '../Assets/compass.png';
import {DropTarget} from 'react-drag-drop-container';
import { useEmitter } from './Emitter';


function Canteen(props) {

    const { setDataEvent } = useEmitter();
    const { data } = useEmitter();
    
    const dropHandler = (e) => { 
        const sentData = JSON.parse(data)
        setDataEvent({tableNr:sentData.number, policy: `${e.dragData}`});

    };

    return (
                <div className="container">
                    <img className="walls" src={image}/>
                    <div style={{ position: "absolute", top: "3%", left: "4%"}}>
                        <img src={image5}></img>
                    </div>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 1',
                        "tableData": 'table-1-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn1'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 2',
                        "tableData": 'table-2-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn2'} id='2' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 3',
                        "tableData": 'table-3-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn3'} id='3' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 4',
                        "tableData": 'table-4-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn4'} id='4' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 5',
                        "tableData": 'table-5-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn5'} id='5' src={image3} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 6',
                        "tableData": 'table-6-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn6'} id='6' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 7',
                        "tableData": 'table-7-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn7'} id='7' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 8',
                        "tableData": 'table-8-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn8'} id='8' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={
                        {
                        "number": 'Table 9',
                        "tableData": 'table-9-sdu-canteen-south'
                        }
                    }
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn9'} id='9' src={image4} />
                        </div>
                    </DropTarget>
                </div>
    );
}


export default Canteen;
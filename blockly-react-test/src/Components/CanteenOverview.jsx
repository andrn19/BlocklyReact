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
        setDataEvent({tableNr:data, policy: `${e.dragData}`});
    };

    return (
                <div class="container">
                    <img src={image}/>
                    <div style={{ position: "absolute", top: "3%", left: "4%"}}>
                        <img src={image5}></img>
                    </div>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 1'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn1'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 2'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn2'} id='2' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 3'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn3'} id='3' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 4'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn4'} id='4' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 5'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn5'} id='5' src={image3} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 6'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn6'} id='6' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 7'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn7'} id='7' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 8'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn8'} id='8' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    dropData={'Table 9'}
                    onHit={dropHandler}>
                        <div>
                        <img className={'btn9'} id='9' src={image4} />
                        </div>
                    </DropTarget>
                </div>
    );
}


export default Canteen;
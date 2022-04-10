import React, { useState, useEffect } from 'react';
import "./ComponentStyles.css";
import image from '../Assets/Canteen_walls.png';
import image2 from '../Assets/LargeTableHorizontal.png';
import image3 from '../Assets/LargeTableVertical.png';
import image4 from '../Assets/SmallTable.png';
import { useEmitter } from './Emitter';
import {DropTarget } from 'react-drag-drop-container';


function Canteen(props) {

    const dropHandler = (e) => {
        console.log(`${e.dragData} applied`);
    };

    return (
                <div class="container">
                    <img src={image}/>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 1'} 
                    >
                        <div>
                        <img className={'btn1'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 2'} 
                    >
                        <div>
                        <img className={'btn2'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 3'} 
                    >
                        <div>
                        <img className={'btn3'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 4'} 
                    >
                        <div>
                        <img className={'btn4'} id='1' src={image2} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 5'} 
                    >
                        <div>
                        <img className={'btn5'} id='1' src={image3} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 6'} 
                    >
                        <div>
                        <img className={'btn6'} id='1' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 7'} 
                    >
                        <div>
                        <img className={'btn7'} id='1' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 8'} 
                    >
                        <div>
                        <img className={'btn8'} id='1' src={image4} />
                        </div>
                    </DropTarget>
                    <DropTarget 
                    targetKey="foo" 
                    onHit={dropHandler}
                    dropData={'Table number 9'} 
                    >
                        <div>
                        <img className={'btn9'} id='1' src={image4} />
                        </div>
                    </DropTarget>
                </div>
    );
}


export default Canteen;
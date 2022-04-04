import React, { useState, useEffect } from 'react';
import "./ComponentStyles.css";
import image from '../Assets/Canteen_walls.png';
import image2 from '../Assets/LargeTableHorizontal.png';
import image3 from '../Assets/LargeTableVertical.png';
import image4 from '../Assets/SmallTable.png';
import { useEmitter } from './Emitter';

const Canteen = () => {

    const [tableNr, setTableNr] = useState([])
    const { setDataEvent } = useEmitter()

    useEffect(() => {
        setDataEvent(tableNr)
        tableNr.sort()
        console.log(tableNr)
    })

    const Hello = (event) => {
        const tableID = event.currentTarget.id
        setTableNr(arr => [...arr, tableID])
        
        // if (tableNr.includes(tableID)) {
        //     setTableNr(tableNr.splice(tableID, 1))
        // }
    }


    // Import result is the URL of your image
    return (
        <div class="container">
            <img src={image} alt="Canteen" />
            <button class="btn1" id={1} onClick={Hello}><img src={image2} alt="Table1Horizontal"
            /></button>
            <button class="btn2" id={2} onClick={Hello}><img src={image2} alt="Table2Horizontal"
            /></button>
            <button class="btn3" id={3} onClick={Hello}><img src={image2} alt="Table3Horizontal"
            /></button>
            <button class="btn4" id={4}  onClick={Hello}><img src={image2} alt="Table4Horizontal"
            /></button>
            <button class="btn5" id={5} onClick={Hello}><img src={image3} alt="Table5Horizontal"
            /></button>
            <button class="btn6" id={6} onClick={Hello}><img src={image4} alt="Table6Horizontal"
            /></button>
            <button class="btn7" id={7} onClick={Hello}><img src={image4} alt="Table7Horizontal"
            /></button>
            <button class="btn8" id={8} onClick={Hello}><img src={image4} alt="Table8Horizontal"
            /></button>
            <button class="btn9" id={9} onClick={Hello}><img src={image4} alt="Table9Horizontal"
            /></button>
        </div>
    );
}

export default Canteen;
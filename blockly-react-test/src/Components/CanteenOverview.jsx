import React, { useState, useEffect } from 'react';
import "./ComponentStyles.css";
import image from '../Assets/Canteen_walls.png';
import image2 from '../Assets/LargeTableHorizontal.png';
import image3 from '../Assets/LargeTableVertical.png';
import image4 from '../Assets/SmallTable.png';
import { useEmitter } from './Emitter';


function Canteen() {
    const [tableNr, setTableNr] = useState([])
    const [selectedTables, setSelectedTables] = useState([]);
    const { setDataEvent } = useEmitter()


    useEffect(() => {
        setDataEvent(tableNr)
        console.log(tableNr)
    })

    const toggle = (event) => {
        const tableID = event.currentTarget.id
        console.log(tableID)
        if (tableNr.includes(tableID)) {
            const index = tableNr.indexOf(tableID)
            tableNr.splice(index, 1)
            selectedTables.splice(index, 1)
            setTableNr(arr => [...arr])
            setSelectedTables(arr => [...arr])
        }
        else {
            setTableNr(arr => [...arr, tableID])
            setSelectedTables(arr => [...arr, tableID])
        }
    }

    return (
        <div class="container">
            <img src={image} alt="Canteen" />
            <img className={(selectedTables.includes("1") ? 'btn1Toggled' : 'btn1')} id='1' onClick={toggle} src={image2} />
            <img className={(selectedTables.includes("2") ? 'btn2Toggled' : 'btn2')} id='2' onClick={toggle} src={image2} />
            <img className={(selectedTables.includes("3") ? 'btn3Toggled' : 'btn3')} id='3' onClick={toggle} src={image2} />
            <img className={(selectedTables.includes("4") ? 'btn4Toggled' : 'btn4')} id='4' onClick={toggle} src={image2} />
            <img className={(selectedTables.includes("5") ? 'btn5Toggled' : 'btn5')} id='5' onClick={toggle} src={image3} />
            <img className={(selectedTables.includes("6") ? 'btn6Toggled' : 'btn6')} id='6' onClick={toggle} src={image4} />
            <img className={(selectedTables.includes("7") ? 'btn7Toggled' : 'btn7')} id='7' onClick={toggle} src={image4} />
            <img className={(selectedTables.includes("8") ? 'btn8Toggled' : 'btn8')} id='8' onClick={toggle} src={image4} />
            <img className={(selectedTables.includes("9") ? 'btn9Toggled' : 'btn9')} id='9' onClick={toggle} src={image4} />
        </div>
    );
}

export default Canteen;
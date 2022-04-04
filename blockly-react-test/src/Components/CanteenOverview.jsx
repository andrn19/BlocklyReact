import React from 'react';
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
function Canteen() {

    const[state1, setState1] = useState(false);
    const[state2, setState2] = useState(false);
    const[state3, setState3] = useState(false);
    const[state4, setState4] = useState(false);
    const[state5, setState5] = useState(false);
    const[state6, setState6] = useState(false);
    const[state7, setState7] = useState(false);
    const[state8, setState8] = useState(false);
    const[state9, setState9] = useState(false);

    const toggle1 = () => {
        setState1(!state1);
    }

    const toggle2 = () => {
        setState2(!state2);
    }

    const toggle3 = () => {
        setState3(!state3);
    }

    const toggle4 = () => {
        setState4(!state4);
    }

    const toggle5 = () => {
        setState5(!state5);
    }

    const toggle6 = () => {
        setState6(!state6);
    }

    const toggle7 = () => {
        setState7(!state7);
    }

    const toggle8 = () => {
        setState8(!state8);
    }

    const toggle9 = () => {
        setState9(!state9);
    }

    return (
        <div class="container">
            <img src={image} alt="Canteen" />
            <img className={(state1 ? 'btn1Toggled' : 'btn1')} id='1' onClick={toggle1} src={image2} />
            <img className={(state2 ? 'btn2Toggled' : 'btn2')} id='2' onClick={toggle2} src={image2} />
            <img className={(state3 ? 'btn3Toggled' : 'btn3')} id='3' onClick={toggle3} src={image2} />
            <img className={(state4 ? 'btn4Toggled' : 'btn4')} id='4' onClick={toggle4} src={image2} />
            <img className={(state5 ? 'btn5Toggled' : 'btn5')} id='5' onClick={toggle5} src={image3} />
            <img className={(state6 ? 'btn6Toggled' : 'btn6')} id='6' onClick={toggle6} src={image4} />
            <img className={(state7 ? 'btn7Toggled' : 'btn7')} id='7' onClick={toggle7} src={image4} />
            <img className={(state8 ? 'btn8Toggled' : 'btn8')} id='8' onClick={toggle8} src={image4} />
            <img className={(state9 ? 'btn9Toggled' : 'btn9')} id='9' onClick={toggle9} src={image4} />
        </div>
    );
}

export default Canteen;
import React from 'react';
import "./ComponentStyles.css";
import image from '../Assets/Canteen_walls.png';
import image2 from '../Assets/LargeTableHorizontal.png';
import image3 from '../Assets/LargeTableVertical.png';
import image4 from '../Assets/SmallTable.png';

function Canteen() {
    // Import result is the URL of your image
    return (
        <div class="container">
            <img src={image} alt="Canteen" />
            <button class="btn1" onClick={Hello}><img src={image2} alt="Table1Horizontal" 
            /></button>
            <button class="btn2" onClick={Hello}><img src={image2} alt="Table2Horizontal" 
            /></button>
            <button class="btn3" onClick={Hello}><img src={image2} alt="Table3Horizontal" 
            /></button>
            <button class="btn4" onClick={Hello}><img src={image2} alt="Table4Horizontal" 
            /></button>
            <button class="btn5" onClick={Hello}><img src={image3} alt="Table5Horizontal" 
            /></button>
            <button class="btn6" onClick={Hello}><img src={image4} alt="Table6Horizontal" 
            /></button>
            <button class="btn7" onClick={Hello}><img src={image4} alt="Table7Horizontal" 
            /></button>
            <button class="btn8" onClick={Hello}><img src={image4} alt="Table8Horizontal" 
            /></button>
            <button class="btn9" onClick={Hello}><img src={image4} alt="Table9Horizontal" 
            /></button>
        </div>
    ); 
}

function Hello () {
    console.log("You pressed me, Stop pressing me Senpai");
}
  
export default Canteen;
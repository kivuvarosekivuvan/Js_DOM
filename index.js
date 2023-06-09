document.getElementById(`heading`).style.color=`green`
document.getElementById(`heading`).style.background=`pink`
document.getElementById(`intro`).innerHTML =`Hey my name is Rose Kivuva` //ADDING AN ELEMENT IN HTML
document.getElementById(`intro`).style.fontSize=`30px`

//creating an element(child) inside a div
let paragraph= document.createElement(`p`);
paragraph.innerHTML = `I am a good, new  student `;
document.getElementById(`container`).appendChild(paragraph);
document.getElementById(`container`).removeChild(paragraph);

//checking if children are contained in element
let child = document.getElementById(`container`).children;
console.log({child});

//Button on clicks
let button = document.getElementById(`button`);
button.style.borderRadius=`30px`
button.style.padding=`10px 15px`
button.addEventListener(`click`, function(){
    button.innerHTML=`Clicked`
});

// adding Attributes(class,id)
document.getElementById(`container`).setAttribute(`class`, `containers`)
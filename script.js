// Get the body width
let bodyWidth = document.body.clientWidth;

console.log("Body Width: " + bodyWidth);
//Calculate how many icons per row to create
let calcHowManyIcons = Math.floor(bodyWidth/62.9) -1 ;
console.log("width/61: " + Math.floor(bodyWidth/62.9));

//Location to append the icons
let backgroundPatternLocation = document.querySelector("#backgroundPattern");

//String to concatenate the img HTML element, repeats 
let concatIcons = "";
for(let i = 0; i<calcHowManyIcons; i++){
    concatIcons += `<img src="./assets/mcm-pattern.svg" alt="" class="mcmPattern">
    `;
}

//We need to get the "recentProjectsBody" section height in order to calculate
//how many icon containers are needed to fill the space.

//Append "n" div containers with the img elements as childs, where n = recentProjectsBody / icon height = (Math.ceil(recentProjectsBody/62.9))
for(let i = 0; i <= 6 ; i++){
    backgroundPatternLocation.innerHTML += `
<div>
${concatIcons}
</div>
`;
}

let mcmPattern = document.querySelector(".mcmPattern");
let mcmPatterCollection = document.getElementsByClassName("mcmPattern")

for(let i=0; i< mcmPatterCollection.length ; i++){
    mcmPatterCollection[i].addEventListener('mouseover',()=>{
        //console.log("Pattern mouseover!")
        let rotation = getCurrentRotation(mcmPatterCollection[i]);
        rotation = Math.ceil(rotation/90.0)*90.0;
        //revisar si el angulo calculado es diferente de 0, 90, 180, 270  o 360, y redondear
        //if(rotation)
        //console.log("rotation: " + rotation);
        mcmPatterCollection[i].style.transform = `rotate(${rotation+90}deg)`;
    }) 
}

let resetPatternBtn = document.querySelector("#resetPattern");
resetPatternBtn.addEventListener("click",()=>{
    for(let i=0; i< mcmPatterCollection.length ; i++){
        mcmPatterCollection[i].style.transform = `rotate(0deg)`;
    }
})


function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "none";
    if (tm != "none") {
        var values = tm.split('(')[1].split(')')[0].split(',');
        /*
        a = values[0];
        b = values[1];
        angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
        */
       //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
       var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
       return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
}

let frontCard = document.querySelector("#frontCard");
let sectionStyle = window.getComputedStyle(frontCard,null);

let box = document.querySelector(".testClass");
let width = box.clientWidth;
let heigth = box.clientHeight;



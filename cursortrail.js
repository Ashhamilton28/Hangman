const container2 = document.querySelector(".container");

let drawFlowers
let mouseX=0,
mouseY = 0;
let flowers = []


//shades of pink
let colors = ["#fb6f92", "#ff8fab","#ffb3c6", "#B34180","#FCE2DB", "#FF8FB1"]

// event objects
let events = {
    mouse:{
        move:"mousemove",
        stop: "mouseout",
    },
    touch: {
        move:"touchmove",
        stop: "touchend",
    },
};

let deviceType= "";


//detect touch device
const isTouchDevice = ()=> {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch"
        return true;
    }
    catch(e){
        deviceType="mouse"
        return false;
    }
}

// random number in range
function randomNumberGenerator(min,max){
    return Math.random()+(max-min)+min;
}

//flowers function
function startCreation(){


    if (drawFlowers){
        let div = document.createElement("div");
        div.classList.add("flower-container")
        div.style.left = mouseX + randomNumberGenerator(5,50)+"px";
        div.style.left = mouseY + randomNumberGenerator(5,50)+"px";
        //random pink shades
        let randomColor=colors[Math.floor(randomNumberGenerator(0,colors.length-1))]

        //flower div
        div.innerHTML = `<div class ="flower"></div>`;
        div.style.opacity = 1;

        let root = document.querySelector(":root");
        let sizeValue= randomNumberGenerator(20,10);
        root.style.setProperty("--size", sizeValue + "px")
        root.style.setProperty("--color", randomColor);
        container2.appendChild(div);
        flowers.push({
            visible: true,
        });

    }
    updateFlowers();
    window.setTimeout(startCreation, 50);
}

function updateFlowers(){}
isTouchDevice();
document.addEventListener(events[deviceType].move,function(e){
    mouseX = isTouchDevice() ? e.touches[0].pageX : e.pageX
    mouseY= isTouchDevice()? e.touches[0].pageY : e.pageY
    drawFlowers=true;
})
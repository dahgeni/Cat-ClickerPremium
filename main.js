document.querySelector("#trever").addEventListener("click", showTrever);
document.querySelector("#silly").addEventListener("click", showSilly);
document.querySelector("#cool").addEventListener("click", showCool);
document.querySelector("#meow").addEventListener("click", showMeow);
document.querySelector("#bunny").addEventListener("click", showBunny);

//select diplay area
const display = document.querySelector("#display");


//create element for display area
const name = document.createElement("h1");
const image = document.createElement("img");
const counter = document.createElement("h3");
const div = document.createElement("div");

//declare counter variable
//let clickNum = 0; {
   
//}   
    let treverClick = 0;
    let sillyClick = 0;
    let coolClick = 0;
    let meowClick = 0;
    let bunnyClick = 0;
 
//add event listerner to the image
image.addEventListener("click", increment);
    function increment() {
       switch(name.textContent) {
            // "Clicks: <span>" + anyClick + "</span>"
        case "Trever":
            treverClick++;
            counter.innerHTML = `Clicks: <span>${treverClick}</span>`;
            break;
        case "Silly":
            sillyClick++;
            counter.innerHTML = `Clicks: <span>${sillyClick}</span>`;
            break;
        case "Cool":
            coolClick++;
            counter.innerHTML = `Clicks: <span>${coolClick}</span>`;
            break;
        case "Meow":
            meowClick++;
            counter.innerHTML = `Clicks: <span>${meowClick}</span>`;
            break;
        case "Bunny":
           bunnyClick++;
            counter.innerHTML = `Clicks: <span>${bunnyClick}</span>`;
            break;
       
       }             
        
}

function showTrever(){
    name.textContent ="Trever";
    image.setAttribute("src", "./image/trever.jpg");
    counter.innerHTML = "clicks0"; 

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);

}

function showSilly(){
    name.textContent ="Silly";
    image.setAttribute("src", "./image/silly.jpg");
    counter.innerHTML = "clicks 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

function showCool() { 
    name.textContent ="Cool";
    image.setAttribute("src", "./image/cool.jpg");
    counter.innerHTML = "clicks 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

function showMeow() {
    name.textContent ="Meow";
    image.setAttribute("src", "./image/meow.jpg")
    counter.innerHTML = "clicks 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

function showBunny(){
    name.textContent ="Bunny";
    image.setAttribute("src", "./image/bunny.jpg");
    counter.innerHTML = "clicks 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

    



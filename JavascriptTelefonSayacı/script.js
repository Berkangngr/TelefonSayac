let numberOfDispersal = 0; /*Değişkenimiz */

function phoneClick() {
    
    let phoneTık = document.getElementById("variable");
    numberOfDispersal = ++numberOfDispersal;
     phoneTık.innerHTML = numberOfDispersal;
}

function changeBackgroundRain() {
    document.body.style.backgroundImage = "url(image/umaong-mirip-dBxdumzKgTw-unsplash.jpg)";
}

function changeBackgroundSea() {
    document.body.style.backgroundImage = " url(image/hazel-aksoy-CURMAxyy9MU-unsplash.jpg)";
}
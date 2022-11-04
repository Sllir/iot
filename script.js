let button = document.querySelector("#btn")
let bg = document.querySelector('body')
let h1 = document.querySelector('h1')
let picker =document.querySelector("#cp");
let slider= document.querySelector("#sr");
let label = document.querySelector("#sr-num")
let ledBtn = document.querySelector("#led-btn")

slider.addEventListener('change', e=> {
    label.innerHTML = slider.value
})

button.addEventListener('click', e => {
    button.backgrpund= 'white';
    button.style.color="black";
    
    function sendReq(){
    fetch('http://10.0.0.25/sensor')
    .then((Response)=>{return Response.json()})
    .then((data)=>h1.innerHTML = data.sensor)

}
setTimeout(sendReq, 1000);

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'no-cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
        });
        return response //.json(); //
    }
    
    
    ledBtn.addEventListener('click', e => {
        postData("http://10.0.0.8:80/led", { "threshold": slider.value })
            .then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
        });
    });

    h1.style.color = "white"
    bg.style.background = picker.value;
    //h1.style.fontSize = slider.value;

})

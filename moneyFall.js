function fallingMoney(){

    for(let step = 0; step <500; step++){
        let dollar = document.createElement("div");
        let dollars = document.getElementById("dollars");
        dollar.innerHTML = `<p>$</p>`
        dollars.append(dollar);
    }
        

}

export{
    fallingMoney
};
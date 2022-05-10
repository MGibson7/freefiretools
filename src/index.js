import css from "./style.css";

import { pageLoad } from "../dist/initialpage";
import { tools } from "../dist/freetools";
import { journey } from "../dist/strategicguide";
import { resourceLoad } from "../dist/resources";
import { podcasting } from "../dist/podcast";

pageLoad();

document.getElementById("slideShow").style.display = "none";

let twenty = "<div id = twenty> <img src = ./twenty.png> </div> <div id = 'mainSlideCont'></div>";
    let thirty = "<div id = thirty> <img src = ./thirtyfive.png></div> <div id = 'mainSlideCont'></div>";
    let fourty = "<div id = fourty> <img src = ./fourtyfive.png> </div> <div id = 'mainSlideCont'></div>";
    let fifty = "<div id = fifty> <img src = ./fifty.png>  </div> <div id = 'mainSlideCont'></div>";
    let sixty = "<div id = sixty> <img src = ./sixty.webp>  </div> <div id = 'mainSlideCont'></div>";

    let twentyCont = "<div id = twentyCont> <h4>TWENTIES</h4> <h5>GOALS:</h5> <h5> WATCHOUT FOR: </h5> </div>";
    let thirtyCont = "<div id = thirtyCont> <h4>THIRTIES</h4> <h5>GOALS:</h5> <h5> WATCHOUT FOR: </h5>";
    let fourtyCont = "<div id = fourtyCont><h4>FOURTIES</h4> <h5>GOALS:</h5> <h5> WATCHOUT FOR: </h5>";
    let fiftyCont = "<div id = fiftyCont> <h4>FIFTIES</h4> <h5>GOALS:</h5> <h5> WATCHOUT FOR: </h5>";
    let sixtyCont = "<div id = sixtyCont> <h4>SIXTIES</h4> <h5>GOALS:</h5> <h5> WATCHOUT FOR: </h5>";

    let ages = [twenty, thirty, fourty, fifty, sixty];
    let agesCont = [twentyCont, thirtyCont, fourtyCont, fiftyCont, sixtyCont];
    let mainSlide = document.getElementById("mainSlide");


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function aging() {
        for(const age in ages){
            mainSlide.innerHTML = `${ages[age]}`
            let mainSlideCont = document.getElementById("mainSlideCont")
            mainSlideCont.innerHTML = `${agesCont[age]}`
            await sleep(7000);

            }
        aging();

          }
    aging();

let apps = document.getElementById("apps");
apps.addEventListener("click", event=>{
    tools();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("slideShow").style.display = "none";
});

let journeys = document.getElementById("journey");
journeys.addEventListener("click", event=>{
    journey();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("slideShow").style.display = "grid";
});

let resource = document.getElementById("resources");
resource.addEventListener("click", event=>{
    resourceLoad();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("slideShow").style.display = "none";
});

let podcast = document.getElementById("pod");
podcast.addEventListener("click", event=>{
    podcasting();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("slideShow").style.display = "none";
});

let subscribe = document.getElementById("subscriber");
subscribe.addEventListener("click", event=>{
    document.getElementById("overlay").style.display = "grid";
    document.getElementById("slideShow").style.display = "none";
});



let title = document.getElementById("title");
title.addEventListener("click", event=>{
    document.getElementById("overlay").style.display = "none";
    pageLoad();
});
import css from "./style.css";

import { pageLoad } from "../dist/initialpage";
import { tools } from "../dist/freetools";
import { journey } from "../dist/strategicguide";
import { resourceLoad } from "../dist/resources";
import { podcasting } from "../dist/podcast";
import { slideShow } from "../dist/newsletter";

pageLoad();

document.getElementById("slideShow").style.display = "none";



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
    slideShow();
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
    document.getElementById("slideShow").style.display = "none";
    pageLoad();
});
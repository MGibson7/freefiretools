function resourceLoad(){
    const javaContent = document.getElementById("javaContent");
    javaContent.innerHTML = ("<img src = ./resources.png> <div id ='newCont'><h3>check out the links to some of our favorite resources below</h3></div>");
    const mainSlide = document.getElementById("mainSlide");
    mainSlide.innerHTML = "<div id = 'mainSlideCont'></div>";
}

export{
    resourceLoad
};
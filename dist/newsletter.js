  function slideShow(){
    let twentyCont = "<div id = twentyCont> <h4>twenties</h4> <h5>goals: save at least some amount on a consistent basis to develop the habit </h5> <h5> watchout for: accumulating student loan debt for non lucrative career path </h5> </div>";
    let thirtyCont = "<div id = thirtyCont> <h4>thirties</h4> <h5>goals: advance your career and save at least 15% of income toward retirement</h5> <h5> watchout for: buying too much house and speculative investments </h5>";
    let fourtyCont = "<div id = fourtyCont><h4>fourties</h4> <h5>goals: save at least 25% of your income, be sure to have term life insurance</h5> <h5> watchout for: lifestyle creep </h5>";
    let fiftyCont = "<div id = fiftyCont> <h4>fifties</h4> <h5>goals: become debt free</h5> <h5> watchout for: insurance investing products </h5>";
    let sixtyCont = "<div id = sixtyCont> <h4>sixties</h4> <h5>goals: meet with financial advisor to discuss distribution strategy</h5> <h5> watchout for: overwithdrawing from accounts post retirement </h5>";

    let twenty = `<div id = twenty> <img src = ./twenty.png> </div> <div id = 'mainSlideCont'>${twentyCont}</div>`;
    let thirty = `<div id = thirty> <img src = ./thirtyfive.png></div> <div id = 'mainSlideCont'>${thirtyCont}</div>`;
    let fourty = `<div id = fourty> <img src = ./fourtyfive.png> </div> <div id = 'mainSlideCont'>${fourtyCont}</div>`;
    let fifty = `<div id = fifty> <img src = ./fifty.png>  </div> <div id = 'mainSlideCont'>${fiftyCont}</div>`;
    let sixty = `<div id = sixty> <img src = ./sixty.webp>  </div> <div id = 'mainSlideCont'>${sixtyCont}</div>`;

    

    let ages = [twenty, thirty, fourty, fifty, sixty];
    let agesCont = [twentyCont, thirtyCont, fourtyCont, fiftyCont, sixtyCont];
    let mainSlide = document.getElementById("mainSlide");


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function aging() {
        for(const age in ages){
            mainSlide.innerHTML = `${ages[age]} `
            await sleep(7000);

            }
        aging();

          }
          aging();

  }  
  export{
    slideShow
};

    

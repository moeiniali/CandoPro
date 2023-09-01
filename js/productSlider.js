// let next = document.getElementById("next");

// let product1 = document.getElementById("p1");
// let product2 = document.querySelectorAll(".p2");



// function pronext() {


//   for (let i = 0; i < product2.length; i++) {
//     product2[i].classList.add('next')
//   }

// }

// next.addEventListener('click', pronext);






"use strict";


productScroll();

function productScroll() {

  let slider = document.getElementById("slider");
  let item = document.getElementById("slide");
  let next = document.getElementsByClassName("pro-next")
  let prev = document.getElementsByClassName("pro-prev")


  for (let i = 0; i < next.length; i++) {
    let position = 0;

    prev[i].addEventListener('click', function () {
      if (position > 0 ) {
        position -= 1;
        console.log(position);
        translateX(position)
      }
    });
    next[i].addEventListener('click', function () {

      if (position >= 0 && position < hiddenItems()) {
        position += 1;
        console.log(position);
        translateX(position)
      }
      if (position == 8) {
        position = 0
        slide.style.left = 0;

      }
      slider.addEventListener('scroll' , function(){
        console.log("nextId");
      
      })

    });
  }


  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);

  }

};
function translateX(position) {
  slide.style.left = position * -210 + "px";

}


function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}





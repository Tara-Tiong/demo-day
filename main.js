var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
}
)
// this is for the typewriter
const Typewriter = function(txtElement,words,wait = 3000){
     this.txtElement =txtElement;
     this.words = words;
     this.txt = '';
     this.wordIndex = 0;
     this.wait = parseInt(wait,10);
     this.type();
     this.isDeleting = false;
}

// type method
Typewriter.prototype.type= function(){

     // current index of word
     const current= this.wordIndex % this.words.length;
     // get full text of current word
     const fulltxt = this.words[current];
    

     // check if deleting
     if(this.isDeleting){
          // remove char
          this.txt = fullTxt.substring(0.this.txt.length + 1);

     } else{
          // add char
          this.txt = fullTxt.substring(0.this.txt.length + 1);

     }
     // insert txt into element
     this.txtElement.innerHTML = '<span class="txt">'this.txt'</span>'; 
     // change

     setTimeout(() => this.type(), 500);
}

//  init on DOM load
document.addEventListener('DOMContentLoaded',init);

// init app
function init(){
     const txtElement = document.querySelector('.txt-type');
     const words = JSON.parse(txtElement.getAttribute('data-words'));
     const wait = txtElement.getAttribute('data-wait');
     // init typewriter
     new Typewriter(txtElement,words,wait);
}

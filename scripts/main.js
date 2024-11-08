const image = document.getElementById("aardvark-click");

let awake = "images/aardvark1.jpg";
let asleep = "images/aardvark2.jpg";

image.setAttribute('src', awake);

image.onclick = (e) => {
  if (e.target.getAttribute('src') === awake) {
    e.target.setAttribute('src', asleep);
  } else {
    e.target.setAttribute('src', awake);
  }
};

const image2 = document.getElementById("aardvark-hover");

image2.onmouseenter = (e) => {
    e.target.classList.remove('flip-left');   
    e.target.classList.add('flip-right');   
};

image2.onmouseleave = (e) => {
    e.target.classList.add('flip-left');      
    e.target.classList.remove('flip-right');
};





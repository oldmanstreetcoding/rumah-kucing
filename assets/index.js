// start script animasi background pills navigasi utama

const buttons = document.querySelectorAll(".btn-nav");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("btn-active");
      current[0].className = current[0].className.replace(" btn-active", "");
      this.className += " btn-active";
    });
}

// end script animasi background pills navigasi utama

// start script untuk membuat tombol go to the top

mybutton = document.getElementById("goTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// end script untuk membuat tombol go to the top


// start script untuk membuat animasi background button pada tampilan mobile version

const mbutton = document.querySelector("#box-nav-m");
const dropmbtn = document.querySelector("#drop-nav-m");

mbutton.addEventListener("click", function() {
  
  var cl = dropmbtn.className;
  
  if(cl == "hide"){
    dropmbtn.style.display = "block";
    dropmbtn.className = "";
  }else{
    dropmbtn.style.display = "none";
    dropmbtn.className = "hide";
  }

})

const btnam = document.querySelectorAll(".nav-a-m");

for (var i = 0; i < btnam.length; i++) {
    btnam[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("btn-active");
      current[0].className = current[0].className.replace(" btn-active", "");
      this.className += " btn-active";

      dropmbtn.style.display = "none";
    });
}

// end script untuk membuat animasi background button pada tampilan mobile version

// script untuk menampilkan di console log lebar browser secara realtime
window.onresize = () => {
  console.log(window.innerWidth);
}

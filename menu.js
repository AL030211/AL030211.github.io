function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function ToDivAbout() {
  var x1 = document.querySelector("#about");
  x1.scrollIntoView(
    {
      behavior: "smooth"
    }
  );
}

function ToDivSitebody() {
  var x1 = document.querySelector("#sitebody");
  x1.scrollIntoView(
    {
      behavior: "smooth"
    }
  );
}


function ToTop() {
  var x2 = document.querySelector(".navbar");
  x2.scrollIntoView(
    {
      behavior: "smooth"
    }
  );
}

var toTop = document.querySelector(".to-top");

/*window.addEventListener("Scroll", () => {
  if (window.pageYOffset > 100){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
})*/

function scrollFunction() {
  if (document.body.scrollTop < 1000 || document.documentElement.scrollTop < 1000) {
    toTop.style.display = "none";
  } else {
    toTop.style.display = "block";
  }
}

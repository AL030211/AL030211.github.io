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

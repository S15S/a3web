//This will be a javascript file
//Last Updated: 11/7/2021 by Kira
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "NavigationBar") {
      x.className += " responsive";
    } else {
      x.className = "NavigationBar";
    }
  }
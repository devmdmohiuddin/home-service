/*****************************
        slick
 ****************************/
$(document).ready(function(){
  $('.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  });
});
/*****************************
        select service
 ****************************/
function service(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "cleaning-service") {
        var optionArray = ["|", "appliances-cleaning|Appliances Cleaning", "deep-cleaning|Deep Cleaning", "furniture-cleaning|Furniture Cleaning", "hourly-cleaning|Hourly Cleaning", "water-tank-cleaning|Water Tank Cleaning"];
    } else if(s1.value == "handyman-service") {
        var optionArray = ["|", "carpentry-service|Carpentry Service", "computer-service|Computer Service", "electrical-service|Electrical Service", "plumbing-service|Plumbing Service"]; 
    } else if(s1.value == "home-appliances-repair") {
        var optionArray = ["|", "ac-service|AC Service", "fridge-service|Fridge Service", "geyser-service|Geyser Service", "oven-service|Oven Service", "tv-servicing|TV Servicing", "washing-machine-service|Washing Machine Service"]; 
    } else if(s1.value == "pack-shift") {
        var optionArray = ["|", "home-shifting|Home Shifting", "office-shifting|Office Shifting"]; 
    } else if(s1.value == "painting") {
        var optionArray = ["|", "exterior-painting|Exterior Painting", "interiro-painting|Interior Painting"]; 
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}


/*****************************
        collapsible service
 ****************************/
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


/*****************************
        collapsible service
 ****************************/
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


/*****************************
        history back service
 ****************************/
function goBack() {
  history.back();
}




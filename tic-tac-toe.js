window.onload=page;

function page(){
  a = document.getElementById("board").children;
  for (i=0; i<9; i++){
    a[i].setAttribute("class","square");
    a[i].addEventListener("click", function(){
      let v = square.innerHTML = "X";
      v.classList.add("square.x");
    })

  }
}


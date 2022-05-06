 const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");

var change_Education = 30;

  plus.addEventListener("click", ()=>{
    change_Education++; 
    if (num.innerText >= 100){
      plus.disabled = true 
    }
    else {change_Education = (change_Education < 10) ? "0" + change_Education : change_Education;
      num.innerText = change_Education; 
      console.log(change_Education);
      document.getElementById('education_fill').style.width = change_Education + "%";
    }
  })
 
  minus.addEventListener("click", ()=>{
    if(change_Education > 0){
      change_Education--; 
      change_Education = (change_Education < 10) ? "0" + change_Education : change_Education;
      num.innerText = change_Education;
    document.getElementById('education_fill').style.width = change_Education + "%";
    }
  })

function textGame() {
    //lets for tsv -> array
    let request = new XMLHttpRequest();
    request.open('GET', 'game.tsv', false);
    request.send();
    let text = "";
    text = request.responseText;
    let split = text.split("\n");
}
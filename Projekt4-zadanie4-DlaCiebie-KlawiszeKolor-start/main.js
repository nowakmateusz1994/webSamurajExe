/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  if (e.keyCode == 38 && red <= 255 && blue <= 255 && green <= 255) {
    red++;
    green++;
    blue++;
  } else if (e.keyCode == 40 && red >= 0 && blue >= 0 && green >= 0) {
    red--;
    green--;
    blue--;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}

window.addEventListener('keydown', changeColor)
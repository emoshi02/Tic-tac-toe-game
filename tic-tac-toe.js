var countPointsX = 0;
var countPoints0 = 0;
var whoNext = 1;
var filledCell = 0;
var image = document.createElement('img');
var winningText = document.createElement('p');
var closeIcon = 'x.png';
var heartIcon = 'alphabet.png';
var newParagraph = document.createElement('p');

const fillCell = (item) => {
  if (whoNext) {
    if (item.children[0].getAttribute('src') == 'white.png') {
      document.getElementById('info').children[0].innerHTML = "Player's 0 Turn";
      item.children[0].setAttribute('src', closeIcon);
      filledCell++;
      whoNext = 0;
      didWin();
    } 
  } else {
    if (item.children[0].getAttribute('src') == 'white.png') {
      document.getElementById('info').children[0].innerHTML = "Player's X Turn";
      item.children[0].setAttribute('src', heartIcon);
      filledCell++;
      whoNext = 1;
      didWin();
    }
  }
}

const clearBoard = () => {
  let index = document.querySelectorAll("div.c > img");
  document.getElementsByClassName('winner')[0].style.display="none";
  whoNext = 1;
  document.getElementById('info').children[0].innerHTML = "Player X Starts the Game.";
  for (let i = 0; i < index.length; i++) {
    index[i].setAttribute('src', 'white.png');
  }
  filledCell = 0;
}

const didWin = () => {
  let arr = document.querySelectorAll("div.c > img");

  if (arr[0].getAttribute('src') == closeIcon && arr[4].getAttribute('src') == closeIcon && arr[8].getAttribute('src') == closeIcon) {
    document.getElementById('info').children[0].innerHTML = "Player X Earns 1 Point.";
    document.getElementsByClassName('winner')[0].style.display="block";
    image.src = closeIcon;
    image.setAttribute('class', 'winnerImage');
    document.getElementsByClassName('winner')[0].appendChild(image);
    winningText.innerHTML = "Winner!";
    winningText.setAttribute('class', 'winningText');
    document.getElementsByClassName('winner')[0].appendChild(winningText);
    countPointsX++;
    document.getElementsByTagName('p')[2].innerHTML="Player X: " + countPointsX;
    return;
  } else if (arr[0].getAttribute('src') == heartIcon && arr[4].getAttribute('src') == heartIcon && arr[8].getAttribute('src') == heartIcon) {
    document.getElementById('info').children[0].innerHTML = "Player 0 Earns 1 Point.";
    document.getElementsByClassName('winner')[0].style.display="block";
    image.src = heartIcon;
    image.setAttribute('class', 'winnerImage');
    document.getElementsByClassName('winner')[0].appendChild(image);
    winningText.innerHTML = "Winner!";
    winningText.setAttribute('class', 'winningText');
    document.getElementsByClassName('winner')[0].appendChild(winningText);
    countPoints0++;
    document.getElementsByTagName('p')[3].innerHTML="Player 0: " + countPoints0;
    return;
  }

  if (arr[2].getAttribute('src') == closeIcon && arr[4].getAttribute('src') == closeIcon && arr[6].getAttribute('src') == closeIcon) {
    document.getElementById('info').children[0].innerHTML = "Player X Earns 1 Point.";
    document.getElementsByClassName('winner')[0].style.display="block";
    image.src = closeIcon;
    image.setAttribute('class', 'winnerImage');
    document.getElementsByClassName('winner')[0].appendChild(image);
    winningText.innerHTML = "Winner!";
    winningText.setAttribute('class', 'winningText');
    document.getElementsByClassName('winner')[0].appendChild(winningText);
    countPointsX++;
    document.getElementsByTagName('p')[2].innerHTML="Player X: " + countPointsX;
    return;
  } else if (arr[2].getAttribute('src') == heartIcon && arr[4].getAttribute('src') == heartIcon && arr[6].getAttribute('src') == heartIcon) {
    document.getElementById('info').children[0].innerHTML = "Player 0 Earns 1 Point.";
    document.getElementsByClassName('winner')[0].style.display="block";
    image.src = heartIcon;
    image.setAttribute('class', 'winnerImage');
    document.getElementsByClassName('winner')[0].appendChild(image);
    winningText.innerHTML = "Winner!";
    winningText.setAttribute('class', 'winningText');
    document.getElementsByClassName('winner')[0].appendChild(winningText);
    countPoints0++;
    document.getElementsByTagName('p')[3].innerHTML="Player 0: " + countPoints0;
    return;
  }
  for (let i = 0; i < 3; i++) {
    if (arr[i*3].getAttribute('src') == closeIcon && arr[i*3+1].getAttribute('src') == closeIcon && arr[i*3+2].getAttribute('src') == closeIcon) {
      document.getElementById('info').children[0].innerHTML = "Player X Earns 1 Point.";
      document.getElementsByClassName('winner')[0].style.display="block";
      image.src = closeIcon;
      image.setAttribute('class', 'winnerImage');
      document.getElementsByClassName('winner')[0].appendChild(image);
      winningText.innerHTML = "Winner!";
      winningText.setAttribute('class', 'winningText');
      document.getElementsByClassName('winner')[0].appendChild(winningText);
      countPointsX++;
      document.getElementsByTagName('p')[2].innerHTML="Player X: " + countPointsX;
      return;
    } else if  (arr[i*3].getAttribute('src') == heartIcon && arr[i*3+1].getAttribute('src') == heartIcon && arr[i*3+2].getAttribute('src') == heartIcon)  {
      document.getElementById('info').children[0].innerHTML = "Player 0 Earns 1 Point.";
      document.getElementsByClassName('winner')[0].style.display="block";
      image.src = heartIcon;
      image.setAttribute('class', 'winnerImage');
      document.getElementsByClassName('winner')[0].appendChild(image);
      winningText.innerHTML = "Winner!";
      winningText.setAttribute('class', 'winningText');
      document.getElementsByClassName('winner')[0].appendChild(winningText);
      countPoints0++;
      document.getElementsByTagName('p')[3].innerHTML="Player 0: " + countPoints0;
      return;
    }
    if (arr[i].getAttribute('src') == closeIcon && arr[i+3].getAttribute('src') == closeIcon && arr[i+6].getAttribute('src') == closeIcon) {
        document.getElementById('info').children[0].innerHTML = "Player X Earns 1 Point.";
        document.getElementsByClassName('winner')[0].style.display="block";
        image.src = closeIcon;
        image.setAttribute('class', 'winnerImage');
        document.getElementsByClassName('winner')[0].appendChild(image);
        winningText.innerHTML = "Winner!";
        winningText.setAttribute('class', 'winningText');
        document.getElementsByClassName('winner')[0].appendChild(winningText);
        countPointsX++;
        document.getElementsByTagName('p')[2].innerHTML="Player X: " + countPointsX;
        return;
    } else if (arr[i].getAttribute('src') == heartIcon && arr[i+3].getAttribute('src') == heartIcon && arr[i+6].getAttribute('src') == heartIcon) {
      document.getElementById('info').children[0].innerHTML = "Player 0 Earns 1 Point.";
      document.getElementsByClassName('winner')[0].style.display="block";
      image.src = heartIcon;
      image.setAttribute('class', 'winnerImage');
      document.getElementsByClassName('winner')[0].appendChild(image);
      winningText.innerHTML = "Winner!";
      winningText.setAttribute('class', 'winningText');
      document.getElementsByClassName('winner')[0].appendChild(winningText);
      countPoints0++;
      document.getElementsByTagName('p')[3].innerHTML="Player 0: " + countPoints0;
      return;
    }
  }

  if (filledCell == 9) {
    document.getElementById('info').children[0].innerHTML = "Tie. No One Earns a Point.";
    return;
  }
}

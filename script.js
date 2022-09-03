window.onload = () => {
  
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    let red = getRandomNumber(1, 255);
    let green = getRandomNumber(1, 255);
    let blue = getRandomNumber(1, 255);
    
    document.body.style.background = putValue(red, green, blue);
  });
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function putValue(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
}
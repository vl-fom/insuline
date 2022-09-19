window.onload = function(){
  const footer = document.querySelector(".footer");
  const earth = document.querySelector(".earth");
  TweenLite.from(earth, 1, {bottom: -150, delay: 1});
}
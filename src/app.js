/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = [diamonds, clubs, hearts, spades];
  let rank = [A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let card = document.querySelector(".card");
  let num = document.querySelector(".num");
  function getRandomArb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

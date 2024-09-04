/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my", "your"];
let adj = ["great", "big", "small", "bad", "pretty", "quick"];
let noun = ["jogger", "racoon", "cat", "dog", "duck"];
let extensions = [".com", ".net", ".us", ".io", ".dev", ".org", ".blog"];

function generateDomain() {
  let domain = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domain +=
            '<li class="list-group-item">' +
            pronoun[i] +
            adj[j] +
            noun[k] +
            extensions[l] +
            "</li>";
        }
      }
    }
  }
  return domain;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const list = document.getElementById("list");
  list.innerHTML = generateDomain();
};

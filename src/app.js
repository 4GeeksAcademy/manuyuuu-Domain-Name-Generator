import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'his', 'her'];
let adj = ['great', 'big', 'scary', 'weird'];
let noun = ['jogger', 'racoon', 'bird', 'being', 'firewoman'];
let dot = ['.com', '.es', '.io', '.net', '.org']

function generateDomains() {
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dot.length; l++){
          domains.push(pronoun[i] + adj[j] + noun[k] + dot[l]);
      }
     }
    }
  }
  return domains;
}

function generateRandomDomain() {
  let domains = generateDomains();
  let randomIndex = Math.floor(Math.random() * domains.length);
  return domains[randomIndex];
}

function updateDomain() {
  document.getElementById("domain").innerText = generateRandomDomain();
}

window.onload = function () {
  updateDomain();
  document.getElementById("btn").addEventListener("click", updateDomain);
};
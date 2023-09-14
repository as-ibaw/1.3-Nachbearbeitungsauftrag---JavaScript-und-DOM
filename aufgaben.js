// Aufgabe 1 - String umkehren

function reverseString(str) {
  return str.split("").reverse().join("");
}

function Aufgabe1() {
  function handleInput1() {
    const inputElement = document.getElementById("inputString1");
    const outputElement = document.getElementById("outputString1");
    const reversedString = reverseString(inputElement.value);
    outputElement.innerText = reversedString;
  }

  const inputElement1 = document.getElementById("inputString1");
  inputElement1.addEventListener("input", handleInput1);
}

// Aufgabe 2 - Schaltjahr

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

function Aufgabe2() {
  function handleInput2() {
    const inputElement = document.getElementById("inputString2");
    const outputElement = document.getElementById("outputString2");
    const inputValue = inputElement.value;

    if (inputValue.length === 4) {
      const isLeap = isLeapYear(inputValue);
      outputElement.innerText = isLeap
        ? "Das ist ein Schaltjahr."
        : "Das ist kein Schaltjahr.";
    } else {
      outputElement.innerText = "";
    }
  }

  const inputElement2 = document.getElementById("inputString2");
  inputElement2.addEventListener("input", handleInput2);
}

// Aufgabe 3 - Pangram

function isPangram(sentence) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  const lowerSentence = sentence.toLowerCase();

  for (const char of lowerSentence) {
    alphabetSet.delete(char);
  }

  return alphabetSet.size === 0;
}

function Aufgabe3() {
  function handleInput3() {
    const inputElement = document.getElementById("inputString3");
    const outputElement = document.getElementById("outputString3");
    const sentence = inputElement.value;

    if (sentence.trim() === "") {
      outputElement.innerText = "";
    } else {
      const isPang = isPangram(sentence);
      outputElement.innerText = isPang
        ? "Der Satz ist ein Pangramm."
        : "Der Satz ist kein Pangramm.";
    }
  }

  const inputElement3 = document.getElementById("inputString3");
  inputElement3.addEventListener("input", handleInput3);
}

// DOM Initialize

function initialize() {
  Aufgabe1();
  Aufgabe2();
  Aufgabe3();
}

window.addEventListener("DOMContentLoaded", initialize);

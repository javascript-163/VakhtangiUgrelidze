// 1. შექმენით გვერდი, სადაც იქნება წარმოდგენილი:
// 1. რაიმე ფოტო <img> ტეგში.
// 2 სხვადასხვა ღილაკი, 1. ფოტოს ზომის გადიდების; 2. ფოტოს ზომის შემცირების;

// DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.
// რაღაც ესეთი

let img = document.getElementById("img1");
let btn2 = document.getElementById("btn2");

function gadideba() {
  img.style.width = "500px";
}

btn2.addEventListener("click", () => {
  img.style.width = "100px";
});

// 2. შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. მოცემულობა ესეთია:
// 1. მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
// 2. ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი. ნახეთ მაგალითი ფოტოზე.

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

function changeColor1() {
  red.style.color = "red";
}
function changeColor2() {
  blue.style.color = "blue";
}
function changeColor3() {
  green.style.color = "green";
}

// 3. შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი.
// მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია.
//  ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.

let loremP = document.getElementById("loremP");
let LoremBtn = document.getElementById("LoremBtn");

function showHide() {
  if (loremP.style.display === "none") {
    LoremBtn.textContent = "დამალვა";
    loremP.style.display = "block";
  } else {
    LoremBtn.textContent = "ჩვენება";
    loremP.style.display = "none";
  }
}

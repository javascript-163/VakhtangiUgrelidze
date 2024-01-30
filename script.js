// დავალება 1
// ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა
// კოდის გაშვების შედეგად გამოდის ყველა ინფორმაცია 
// რაც არასწორია, უნდა გამოიტანოს მხოლოდ
// და გაჩერდეს კოდი. 
// იპოვეთ შეცდომა და გაასწორეთ იგი.

let action = "move";

switch (action) {
    case "move":
        alert("Your're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("invalid action.");
};

// დავალება 2
// switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ 
// ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.

switch(vegetables) {
    case "Carrot":
        alert("Hello")
        break;
    case "Broccoli":
        alert("Welcome")
        break;
};

switch(vegetables) {
    case "Broccoli":
        alert("Hello")
        break;
    case "Carrot":
        alert("Welcome")
        break;
    default:
        alert("Neither");
};


// დავალება 3
// შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ
// მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.

let age = prompt("შეიყვანეთ ასაკი");

if (age < 18) {
  alert("მომხმარებელს არ შეუძლია ხმის მიცემა");
} else {
  alert("მომხმარებელს შეუძლია ხმის მიცემა");
}

// დავალება 4
// შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.

function chakPassword(password) {

    console.log( typeof password);

  if (typeof password == "number") {
    console.log("პაროლი უარგისია");

  } else if (password.length < 3) {
    console.log("პაროლი უარგისია");
  } else if (password.length >= 3 && password.length <= 6) {
    console.log("პაროლი სუსტია");
  } else if (password.length > 6 && password.length <= 8) {
    console.log("პაროლი მისაღებია");
  } else if (password.length > 8 && password.length <= 16) {
    console.log("პაროლი ძლიერია");
  }
}

let password = 45342

chakPassword(password);


// დავალება 5 

const questions = [
    { question: "რას უდრის 2 + 2 ?", answer: "4" },
    { question: "როდის დაიბადა ილია ჭავჭავაძე?", answer: "1907" },
    { question: "როდის დაიწყო პირველი მსოფლიო ომი?", answer: "1918" },
    { question: "რამდენი ფეხი აქვს რვაფეხას?", answer: "12" },
    { question: "რა მქვია?", answer: "სახელი" },
  ];


  function quiz() {
    let correctAnswers = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const userAnswer = prompt(questions[i].question);
  
      if (userAnswer && userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
        correctAnswers++;
        alert("სწორია!");
      } else {
        alert("არასწორია!");
        continue; 
      }
    }
  
    alert(`შენ უპასუხე ${correctAnswers} კითხვას ${questions.length}-დან.`);
  }
  
  quiz();
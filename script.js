// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან
// შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 2; i < array.length; i += 3) {
  console.log(array[i]);
}

// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე.
// შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით,
// ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];
let newNames = [];

for (let i = 0; i < names.length; i++) {
  if (names[i] !== "Bob") {
    newNames.push(names[i]);
  }
}

console.log(newNames);

// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს,
//  მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ.
//  თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function fun(number, power) {
  if (power === 0) {
    return 1;
  } else {
    let result = 1;

    for (let i = 0; i < power; i++) {
      result *= number;
    }
    return result;
  }
}

console.log(fun(5, 2));

// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ,
//  და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz,
//   ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz,
//  ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.'

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს
//  მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,

function factorialCalculator(number) {
  if (number < 0) {
    console.log("negative numbers");
    return;
  }

  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  console.log(`${number}! = ${factorial}`);
}

factorialCalculator(5);

//   შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ.
//    javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function capitalizeFirstLetter(inputString) {
  if (typeof inputString !== "string" || inputString.length === 0) {
    console.log("try again");
    return;
  }

  const capitalizedString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1);
  console.log(capitalizedString);
}

capitalizeFirstLetter("javascript");

//   შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ.
//    blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს
//   თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(testString) {
  if (typeof testString !== "string") {
    console.log("Please provide a valid string");
    return;
  }

  if (testString.trim() === "") {
    console.log("This string is blank.");
  } else {
    console.log("This string is not blank.");
  }
}

blankStringChecker("   ");

//   შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ.
//    stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(testString) {
  if (typeof testString !== "string") {
    console.log("Please provide a valid string");
    return;
  }

  const stringArray = testString.split(" ");
  console.log(stringArray);
}

stringToArray("Hello, World");

// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის
//  ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function protectEmail(email) {
  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.split(".").length !== 2
  ) {
    console.log(
      "Please provide a valid email with first and last name separated by a dot."
    );
    return;
  }

  const [firstName, lastName] = email.split(".");
  const protectedFirstName = ".".repeat(lastName.length);

  const protectedEmail = `${protectedFirstName}@${lastName}`;

  console.log(`Protected Email: ${protectedEmail}`);
}

protectEmail("beqa.beqauri@gmail.com");

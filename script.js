// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
function findLongestWord(txt) {
    var words = txt.split(' ');
  
    var maxLength = 0;
  
    var longestWord = '';
  
    for (var i = 0; i < words.length; i++) {
      var cleanWord = words[i].replace(/[^a-zA-Z]/g, '');
  
      if (cleanWord.length > maxLength) {
        maxLength = cleanWord.length;
        longestWord = cleanWord;
      }
    }
  
    return longestWord;
  }
  
  var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  var result = findLongestWord(text);
  console.log("Longest word: " + result);
  
//   2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2,
//  ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide,
//   მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი,
//  სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

var calculator = {
    num1: 0,
    num2: 0,
  
    enterNumbers: function(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    },
  
    add: function() {
      return this.num1 + this.num2;
    },
  
    subtract: function() {
      return this.num1 - this.num2;
    },
  
    multiply: function() {
      return this.num1 * this.num2;
    },
  
    divide: function() {
      if (this.num2 !== 0) {
        return this.num1 / this.num2;
      } else {
        return "Cannot divide by zero";
      }
    }
  };
  
  calculator.enterNumbers(20, 5);
  console.log("Sum: " + calculator.add());
  console.log("Difference: " + calculator.subtract());
  console.log("Product: " + calculator.multiply());
  console.log("Quotient: " + calculator.divide());
  

//   3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად.
//    შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

//ჰოსტინგის მაგალითი 
exampleFunction();

// შექმნილი ფუნქცია
function exampleFunction() {
  console.log("ეს არის ჰოსტინგის მაგალითი.");
}
console.log("HomeWork_16");

/*
1. შექმენით 5 ეlმენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი. 
კონსოლში გამოიტანეთ ამ რიცხვების ჯამი და საშუალო არითმეტიკული
*/

const myArray = [10, 20, 30, 40, 50];
const sum = myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4];
console.log(sum);
const average = sum / myArray.length;
console.log(average);

/*
2. შექმენით ობიექტი რომელიმე წიგნის  შესახებ შემდეგი propertyებით: title, author, და yearPublished. 
ამ მნიშვნელობების დახმარებით კონსოლში გამოიტანეთ შემდეგი ტექსტი: "[title] by  [author]  was published in [yearPublished] ."
*/

const bookInfo = {
  title: "Dracula",
  author: "Bram Stoker",
  yearPublished: 1897,
};
//console.log(bookInfo);

const sentence1 =
  bookInfo.title +
  " by " +
  bookInfo.author +
  " was published in " +
  bookInfo.yearPublished;
console.log(sentence1);

/*
3. მე-2 დავალებაში შექმნილ ობეიქტში შეცვალეთ yearPublished მნიშვნელობა და კონსოლში გამოიტანეთ დარედაქტირებული ობიექტი.
*/

bookInfo.yearPublished = 1992;

const sentence2 =
  bookInfo.title +
  " by " +
  bookInfo.author +
  " was published in " +
  bookInfo.yearPublished;
console.log(sentence2);

/*
4. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი შემდეგი property-ებით: name, age, და score. 
კონსოლში გამოიტანეთ შექმნილი მასივი.
*/

const student1 = {
  name: "George",
  age: 35,
  score: 95,
};

const student2 = {
  name: "Mery",
  age: 28,
  score: 85,
};

const student3 = {
  name: "Anna",
  age: 31,
  score: 96,
};

const group = [student1, student2, student3];

console.log(group);

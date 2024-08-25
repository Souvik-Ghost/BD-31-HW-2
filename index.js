let express = require('express');
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`The Server running at http://localhost:${port}`);
})

let cartItems = [
  { item: 'Book', price: 30 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 50 },
  { item: 'Bag', price: 125 }
];

let students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'A' },
  { name: 'Jack', grade: 'B' },
  { name: 'Jill', grade: 'C' }
];

let temperatures = [0, 20, 30, 100];

let student_scores = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 70 },
  { name: 'Jill', score: 60 }
];

let sentence = 'The quick brown fox jumps over the lazy dog';

//1
function calculateTotalPrice(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price;
  }
  return total;
}
app.get('/cart/total', (req, res) => {
  let totalPrice = calculateTotalPrice(cartItems);
  res.json({ totalPrice });
});
//cart/total

//2
function filterStudentsByGrade(studentArray, grade) {
  let result = [];
  for (let i = 0; i < studentArray.length; i++) {
    if (studentArray[i].grade === grade) {
      result.push(studentArray[i]);
    }
  }
  return result;
}
app.get('/students/filter', (req, res) => {
  let grade = req.query.grade;
  let result = filterStudentsByGrade(students, grade);
  res.json( {students: result } );
});
//students/filter?grade=A

//3
function convertCelsiusToFahrenheit(temperatures) {
  let result = [];
  for (let i = 0; i < temperatures.length; i++) {
    result.push(temperatures[i] * 9/5 + 32);
  }
  return result;
}
app.get('/temperatures/convert', (req, res) => {
  let convertedTemperatures = convertCelsiusToFahrenheit(temperatures);
  res.json({ convertedTemperatures });
});
//temperatures/convert

//4
function calculateAverageScore(studentArray) {
  let totalScore = 0;
  for (let i = 0; i < studentArray.length; i++) {
    totalScore += studentArray[i].score;
  }
  return totalScore / studentArray.length;
}
app.get('/students/average-score', (req, res) => {
  let averageScore = calculateAverageScore(student_scores);
  res.json({ averageScore });
});
//students/average-score

//5
function countWords(sentence) {
  let wordCount = 1;
  for (let i = 0; i < sentence.length; i++)  {
    if (sentence[i] === ' ') {
      wordCount++;
    }
  }
  return wordCount;
}
app.get('/sentence/count-words', (req, res) => {
  let wordCount = countWords(sentence);
  res.json({ wordCount });
});
//sentence/count-words
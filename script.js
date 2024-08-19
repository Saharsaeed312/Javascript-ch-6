// question:no:1
var a = "10"
document.write(`Result:<br/>`)
document.write(`The value of a is:${a}<br/>`)
document.write(`..........................................<br/>`)
document.write(`The value of ++a is:${++a}<br/>`)
document.write(`Now the value of a is ${a}<br/>`)
document.write(`The value of a++ is: ${a++}<br>`);
document.write(`Now the value of a is: ${a}<br><br>`);
document.write(`The value of --a is: ${--a}<br>`);
document.write(`Now the value of a is: ${a}<br><br>`);
document.write(`The value of a-- is: ${a--}<br>`);
document.write(`Now the value of a is: ${a}<br/>`);
//  question:no:2:
var a = 2;
var b = 1;
document.write(`a is ${a}</br>`);
// --a;  decrement of 1 a = 1
// --a - --b;  decrement of 1 from 'a' and decrement of 1 from b  a = 1 , b = 0
// --a - --b + ++b;   1 - 0 + (increment of 1 in b) 1;
// --a - --b + ++b + b--;  1 - 0 + 1 + (after decrement) 1
var result = --a - --b + ++b + b--; // answer will be 3
document.write(`result is ${result}</br></br>`); document.write(`b is ${b}</br>`);
//  question:no;3
var username = prompt("Enter your name");
document.write("Good afternoon sir!")
// question:no:4
var num = prompt(`Enter a number:`);
num = parseInt(num) || 5;
result = `
 ${num} x 1 = ${num * 1}<br>
 ${num} x 2 = ${num * 2}<br>
 ${num} x 3 = ${num * 3}<br>
 ${num} x 4 = ${num * 4}<br>
 ${num} x 5 = ${num * 5}<br>
 ${num} x 6 = ${num * 6}<br>
 ${num} x 7 = ${num * 7}<br>
 ${num} x 8 = ${num * 8}<br>
 ${num} x 9 = ${num * 9}<br>
 ${num} x 10 = ${num * 10}<br>
 `;
document.write(result);
//  question:no:5
// a.
var subject1 = prompt(`Enter your subject`);
var subject2 = prompt(`Enter your subject`);
var subject3 = prompt(`Enter your subject`);
// b.
var totalMarks = 100;
// c.
var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));

// d.
var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));
//  e.
var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
//  f.
document.write("<h2>Marks and Percentage Calculator</h2>");
document.write("<tabel border='1' cellpading='10' cellspacing='0'");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + overallPercentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");

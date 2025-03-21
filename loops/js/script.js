var one;
var two = 3;
var add = one + two;

document.write("First No: ="+one+"<br>Second No: ="+two+"<br>");
document.write(one+"+"+two+"="+add+"<br>");




function showname()
{
	let num1 = parseFloat(prompt("Enter first number"));
	let num2 = parseFloat(prompt("Enter second number"));

	var total = num1 + num2;

	document.getElementById("showname").innerHTML = total;
}
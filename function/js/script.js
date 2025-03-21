function calculateAndAlertSum() {
  const a = 10;
  const b = 13;
  const c = a + b;
  console.log(c);
}

calculateAndAlertSum();

// 	<script type="text/javascript">
//		function sum(a, b)
//		{
//			var a = parseInt(prompt("Enter first number"));
//			var b = parseInt(prompt("Enter second number"));
//
//			var c = a + b;
//			document.getElementById("mytotal").innerHTML = c;
//		}
//	</script>

//	<script type="text/javascript">
//
//		var xyz = 500; //Global variable and it has global scope.
//
//		function a()
//		{
//			var xyz = 200;
//
//			if(xyz == 500)
//			{
//				xyz = "Good!";
//			}
//
//			document.write(xyz);
//		}
//
//		function b()
//		{
//			var abc = 200;
//			document.write(xyz);
//		}
//
//		a();
//		b();
//		a();
//	</script>

//	<script type="text/javascript">
//		function xyz()
//		{
//			var a = 10;
//			var b = 5;
//			var c = a + b;
//			return c;
//		}
//
//		console.log(xyz());
//	</script>

//	<script type="text/javascript">
//		//Ternary Operator-?, : (it works like if...else statement)
//
//		var num = 10;
//
//		(num >= 5) ? console.log("Num is big!") : console.log("Num is small");
//
//		//Multiple conditions
//		var marks = 90;
//
//		var res = (marks < 40) ? "Unsatisfactory" :
//				  (marks < 60) ? "Average" :
//				  (marks < 80) ? "Good" : "Excellent!";
//		document.write(res);
//	</script>

//Arrow function ES6 Edition

// var x = (x, y) => x * y;

// console.log(x(10, 3));

// var num = 2;

// var check =
//   num >= 10 ? () => console.log("Num is big!") : () => console.log("Num is small");
// check();

// let sum = (a,b)=>
// {
// 	let result = a + b;
// 	return result;
// }

// let res = sum(5,7);
// console.log(res);

// //Function as Expression

// const abc = function (square, xyz) {
//   return square * xyz;
// };

// document.write(multiply(3, 5));

// var result = multiply(2, 3);
// console.log(result);

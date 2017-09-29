/*-----part 4------*/

function azer() {
	console.log('salam');
}
function azer1(a) {
	console.log(a);
}

azer();
azer1('salam 1');

var studentObj={
	name:'Yasin',
	surname:'Quliyev',
	class:'P103',
	university:'ADNA',
	age:22
};

var studentArr=
[
	'Yasin',
	'BQuliyev',
	'CP103',
	'ADNA'
];

//console.log(studentArr[0]);
//console.log(studentObj[0]);

studentArr.sort();
studentArr.reverse();

for(index in studentArr){
	console.log(studentArr[index]);
}

/*-----part 3------*/
// var a=1;
// var b='test';
// var c;

// var d=true;
// var e=null;


// // console.log(typeof(a));
// // console.log(typeof(b));
// // console.log(typeof(c));
// // console.log(typeof(d));
// // console.log(typeof(e));
// var name="Azer";
// var student={
// 	name:'Yasin',
// 	surname:'Quliyev',
// 	age:22,
// 	class:'P103',
// 	university:'ADNA'
// };
// //console.log(student["name"]);

// for(sahlar in student){
// 	//console.log(sahlar+' = '+student[sahlar]);	
// 	console.log(sahlar);		
// 	console.log(student[sahlar]);
// 	console.log('----------------');
// }


// console.log(typeof(student));
// console.log(student);
// console.log(student.age);
// console.log(student.name+' '+student['name']);
// console.log(student.surname+' '+student.name);
// console.log('student fullname : '+student.fullname());
// console.log('teacher fullname : '+teacher.fullname());

/*-----part 2------*/
// var userStatus='guest';
// var a=2;
// switch(userStatus){
// 	// case 'user':
// 	// 	console.log('case admin');
// 	// 	break;

	
// 	case 'admin':
// 		//code block
// 		console.log('case admin');
// 		break;
	
// 	case 'guest':
// 		console.log('case guest');
// 		break;	
		
// 	default:
// 		console.log('error');
// 		break;
// }

// if (userStatus=='admin') {
// 	console.log('case admin');
// }
// else if (userStatus=='guest') {
// 	console.log('case guest');
// }
// else{
// 	console.log('error');
// }
/*-----part 1------*/

// var a=9;
// if (a==1) {
// 	console.log('if a 1');
// }

// if (a==2) {
// 	console.log('if a 2');
// }

// if (a==3) {
// 	console.log('if a 3');
// }

// if (a==5) {
// 	console.log('if a 5');
// }

// if (a!=1 && a!=2 && a!=3 && a!=5) {
// 	console.log('if a 4');
// }






// if (a==1) {
// 	console.log('if a 1');
// }
// else if (a==2) {
// 	console.log('if a 2');
// }
// else if (a==3) {
// 	console.log('if a 3');
// }
// else if (a==5) {
// 	console.log('if a 5');
// }
// else{
// 	console.log('if a 4');
// }

//console.log(a);


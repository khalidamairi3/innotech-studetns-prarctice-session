// -Create an array of student objects
// -each student object have name,date of birth,and grade
// -Create a function to calculate the average of students grades 
// -create a function to make an array of passing students with grade >= 60 
// - print the number of passing students 
// -Print the number of failing students
// -create a function to make an array of students whose names start with a specific string


//comment out the log statements to print out 


// 1 part 
var students = [{
    name : "jose",
    dob:"02-05-2000",
    grade: 25

},
{
    name : "khaled",
    dob:"02-05-2000",
    grade: 80

},
{
    name : "rainer",
    dob:"02-05-2000",
    grade: 102

},
{
    name : "nighat",
    dob:"02-05-2000",
    grade: 92

},
{
    name : "james",
    dob:"02-05-2000",
    grade: 49

},
{
    name : "rachel",
    dob:"02-05-2000",
    grade: 60

},
{
    name : "kaily",
    dob:"02-05-2000",
    grade: 41

},
{
    name : "student 8",
    dob:"02-05-2000",
    grade: 78

},
];

//part 2
function avg(array){
    var sum=0;
    for(var i=0; i< array.length ;i++){

        sum+=array[i].grade;

        
    }

    var average = sum/array.length;

    return average;

}
// 3 in loops
function passing_students(array){
    var passing =[];
    for (var i=0; i<array.length;i++){
        if(array[i].grade>=60)
        passing.push(array[i]);
    }
    return passing;
}

//3 with filter function
function checkgrade(student){
    return student.grade >=60;
}




// function to make an array of students whose names start with a specific string
function startsWithString(array,string){
    var list=[];
    for(var i=0;i<array.length;i++){
        if(array[i].name.startsWith(string))
        list.push(array[i]);
    }
    return list;

}









// var student_avg= avg(students);
// console.log(student_avg);


// var passed_students= passing_students(students);
// console.log(passed_students);
// var passed_withfilter = students.filter(checkgrade);
// console.log(passed_withfilter);


// console.log("the number of passing students: " + passed_students.length);

// var number_failing_students=students.length - passed_students.length;

// console.log("the number of failing students: " + number_failing_students);



// var students_startwith_ra = startsWithString(students,"ra");
// console.log(students_startwith_ra);






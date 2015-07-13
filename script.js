var students = [
  {name: "test", city: "somewhere"},
  {name: "john", city: "another"},
  {name: "sname", city: "denver"}
];

var cohort = {
  students : students,
  pickStudent : function(){
  var num = Math.floor(Math.random() * this.students.length);
  console.log(this.students[num].name);
}
};

// using no anon functions
var button = document.getElementsByTagName("button")[0];
button.addEventListener('click', cohort.pickStudent.bind(cohort));


// cohort.pickStudent();
// cohort.pickStudent();
// cohort.pickStudent();
// cohort.pickStudent();
// cohort.pickStudent();

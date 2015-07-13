var students = [
  {name: "test", city: "somewhere"},
  {name: "john", city: "another"},
  {name: "sname", city: "denver"}
];

var cohort = {
  students : students,
  pickStudent : function(){
  var num = Math.floor(Math.random() * this.students.length);
  document.getElementById('show').innerHTML = this.students[num].name;
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

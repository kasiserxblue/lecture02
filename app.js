var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded); // DOMContentLoaded triggers the function when the entire page is loaded and is instasiated inside the borwser's memory

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);  //triggers up a key listener
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value; //grabs the value of the input field (id="name") into the object student(name)

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}

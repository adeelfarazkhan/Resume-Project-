//get refrences to the form and display area 
var form = document.getElementById("Resume-Form"); // html ki id ko import krne k liye 
var resumeDisplayElement = document.getElementById("resume-display");
//Handle form submission 
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload  
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate the resume  content dynamically4
    var resumeHTML = "\n    <h2><b>Resume></b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3><b>Education</b><h3>\n    <p>").concat(education, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><b>Skills</b></h3>   \n    <p>").concat(skills, "</p>\n    ");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The rsume display element is missing');
    }
});

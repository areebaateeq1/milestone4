


// Get the form elements
const form = document.getElementById('resumeform') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const resumeOutput = document.getElementById('Resume output') as HTMLDivElement;

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the input values
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const education = educationInput.value;
  const experience = experienceInput.value;
  const skills = skillsInput.value;

  // Generate the resume
  const resume = `
    <h2>Personal Information</h2>
    <p><strong>Name:</strong><span id ="edit-name" class="editable"> ${name}</span></p>
    <p>Email: ${email}<span id ="edit-name" class = "editable">${email} <span></p></p>
    <p>Phone: ${phone}<span id ="edit-name" class = "editable">${phone} <span></p></p>
    <h2>Education</h2>
    <p id ="edit-education" class = "editable">${education}</p>
    <h2>Experience</h2>
    <p><span id ="edit-experience" class = "editable">${education}</p>
    <h2>Skills</h2>
    <p><span id ="edit-skills" class = "editable">${skills}</p>
  `;

  // Display the resume
 const resumeOutputElement = document.getElementById;('resumeOutput')
});if(resumeOutputElement){
    resumeOutputElement.innerHTML =resumeOutput;

makeEditable();
}
else{
    console.error('one or form elements are missing');
}
function makeEditable(){
    const editableElements =document .querySelectorAll('editable');
    editableElements.forEach(element=>{
element.addEventListener('click, function()'){
    const currentElement = Element as HTMLElement;
}
  }  )
}

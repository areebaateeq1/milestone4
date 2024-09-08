// Static data
var education = {
    school: '',
    degree: '',
    year: ''
};
var experience = {
    company: '',
    position: '',
    year: ''
};
// Function to generate resume
function generateResume() {
    var resume = '';
    // Check if education data exists
    if (education.school && education.degree && education.year) {
        resume += "\n      <h2>Education</h2>\n      <p>School: ".concat(education.school, "</p>\n      <p>Degree: ").concat(education.degree, "</p>\n      <p>Year: ").concat(education.year, "</p>\n    ");
    }
    else {
        resume += '<p>No education data available</p>';
    }
    // Check if experience data exists
    if (experience.company && experience.position && experience.year) {
        resume += "\n      <h2>Experience</h2>\n      <p>Company: ".concat(experience.company, "</p>\n      <p>Position: ").concat(experience.position, "</p>\n      <p>Year: ").concat(experience.year, "</p>\n    ");
    }
    else {
        resume += '<p>No experience data available</p>';
    }
    return resume;
}
// Display resume
var resumeOutput = document.getElementById('resume-output');
resumeOutput.innerHTML = generateResume();

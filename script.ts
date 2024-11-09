// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault()

// type assertion 
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email:') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;

const educationElement = document.getElementById('education') as HTMLInputElement;
const experenceElement = document.getElementById('experence') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;



if(nameElement && emailElement && phoneElement && educationElement && experenceElement && skillsElement ){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experence = experenceElement.value;
    const skills = skillsElement.value;


    // create resume output
const resumeOutput = `
<h2>Resume</h2>
<p> <strong>Name:</strong> ${name} </p>
<p> <strong>Email:</strong> ${email} </p>
<p> <strong>Phone Number:</strong> ${phone} </p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experence</h3>
<p>${experence}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;



   const ResumeOutputElement = document.getElementById(resumeOutput)
   if(ResumeOutputElement){
    ResumeOutputElement.innerHTML = resumeOutput

   } else {
    console.error('the resume output element missing')

   }

} else {
    console.error('one or more output element are missing')
}

})



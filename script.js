
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeOutputElement = document.getElementById('resumeOutput');

    // Ensure form exists
    if (form && resumeOutputElement) {
        form.addEventListener('submit', (event) => {
            // Prevent form submission and page reload
            event.preventDefault();

            // Get form data
            const profilePictureInput = document.getElementById('profilePicture');
            const nameElement = document.getElementById('name');
            const emailElement = document.getElementById('email');
            const phoneElement = document.getElementById('phone');
            const educationElement = document.getElementById('education');
            const experienceElement = document.getElementById('experience');
            const skillsElement = document.getElementById('skills');

            // Check if all elements exist
            if (
                profilePictureInput &&
                nameElement &&
                emailElement &&
                phoneElement &&
                educationElement &&
                experienceElement &&
                skillsElement
            ) {
                // Extract values from the form
                const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
                const name = nameElement.value;
                const email = emailElement.value;
                const phone = phoneElement.value;
                const education = educationElement.value;
                const experience = experienceElement.value;
                const skills = skillsElement.value;

                // Handle profile picture (if uploaded)
                const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

                // Create resume content for HTML display
                const resumeContent = `
                    <h2>Resume</h2>
                    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" />` : ''}
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <h3>Education</h3>
                    <p>${education}</p>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                `;

                // Display the resume content in the output section
                resumeOutputElement.innerHTML = resumeContent;

                // Remove previous download button if exists
                const existingDownloadButton = resumeOutputElement.querySelector('button');
                if (existingDownloadButton) {
                    existingDownloadButton.remove();
                }

                // // Create a button for PDF download
                // const downloadPDFButton = document.createElement('button');
                // downloadPDFButton.textContent = 'Download Your Resume as PDF';

                // // When the button is clicked, generate and download the PDF
                // downloadPDFButton.addEventListener('click', () => {
                //     try {
                //         // Create a new jsPDF instance
                //         const { jsPDF } = window.jspdf;
                //         const doc = new jsPDF();

                //         // Add content to the PDF
                //         doc.setFontSize(16);
                //         doc.text('Resume', 20, 20); // Title
                //         doc.setFontSize(12);
                //         doc.text(`Name: ${name}`, 20, 30);
                //         doc.text(`Email: ${email}`, 20, 40);
                //         doc.text(`Phone: ${phone}`, 20, 50);
                //         doc.text(`Education: ${education}`, 20, 60);
                //         doc.text(`Experience: ${experience}`, 20, 70);
                //         doc.text(`Skills: ${skills}`, 20, 80);

                //         // If profile picture is available, add it to the PDF
                //         if (profilePictureFile) {
                //             const imgURL = URL.createObjectURL(profilePictureFile);
                //             doc.addImage(imgURL, 'JPEG', 150, 20, 40, 40); // Image positioning and size
                //         }

                //         // Save the generated PDF
                //         doc.save(`${name.replace(/\s+/g, '_')}_resume.pdf`);
                //     } catch (error) {
                //         console.error('Error generating PDF:', error);
                //     }
                // });

                // Append the PDF download button to the output section
                resumeOutputElement.appendChild(downloadPDFButton);

                // Save the resume data in localStorage
                const resumeData = {
                    name,
                    email,
                    phone,
                    education,
                    experience,
                    skills,
                    profilePictureURL
                };

                const uniqueId = Date.now(); // Use current time as a unique identifier
                localStorage.setItem(uniqueId.toString(), JSON.stringify(resumeData));

                // Generate a shareable URL using the unique ID
                const shareableLink = `${window.location.href}?id=${uniqueId}`;

                // Display the shareable link
                const shareableLinkElement = document.createElement('p');
                shareableLinkElement.innerHTML = `
                    <strong>Shareable Link:</strong> 
                    <a href="${shareableLink}" target="_blank">${shareableLink}</a>
                `;
                resumeOutputElement.appendChild(shareableLinkElement);
            }
        });
    } else {
        console.error('Form element not found.');
    }
});







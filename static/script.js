let editingResumeId = null;
/* ================= OPEN BUILDER ================= */

function openBuilder() {

    document.getElementById("builder").scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= LIVE RESUME PREVIEW ================= */

function updateResume() {

    /* ================= PERSONAL INFORMATION ================= */

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let summary = document.getElementById("summary").value;

    let skillsElement = document.getElementById("skills");
    let skills = skillsElement ? skillsElement.value : "";


    document.getElementById("previewName").innerText =
        name || "Your Name";


    document.getElementById("previewContact").innerText =
        `${email || "Email"} | ${phone || "Phone"} | ${location || "Location"}`;


    document.getElementById("previewSummary").innerText =
        summary || "Your professional summary will appear here.";


    document.getElementById("previewSkills").innerText =
        skills || "Your technical skills will appear here.";


    /* ================= EDUCATION ================= */

    let educationPreview =
        document.getElementById("previewEducation");

    educationPreview.innerHTML = "";

    let educationItems =
        document.querySelectorAll(
            "#educationContainer .dynamic-item"
        );


    educationItems.forEach(function(item) {

        let degree =
            item.querySelector(".education-degree").value;

        let college =
            item.querySelector(".education-college").value;

        let year =
            item.querySelector(".education-year").value;


        if (degree || college || year) {

            let div = document.createElement("div");

            div.className = "preview-item";

            div.innerHTML = `
                <h4>${degree}</h4>
                <p>${college}</p>
                <p>${year}</p>
            `;

            educationPreview.appendChild(div);

        }

    });


    if (educationPreview.innerHTML === "") {

        educationPreview.innerText =
            "Your education details will appear here.";

    }


    /* ================= PROJECTS ================= */

    let projectsPreview =
        document.getElementById("previewProjects");

    projectsPreview.innerHTML = "";


    let projectItems =
        document.querySelectorAll(
            "#projectsContainer .dynamic-item"
        );


    projectItems.forEach(function(item) {

        let projectName =
            item.querySelector(".project-name").value;

        let description =
            item.querySelector(".project-description").value;

        let technologies =
            item.querySelector(".project-technologies").value;


        if (
            projectName ||
            description ||
            technologies
        ) {

            let div = document.createElement("div");

            div.className = "preview-item";

            div.innerHTML = `
                <h4>${projectName}</h4>
                <p>${description}</p>
                <p>
                    <strong>Technologies:</strong>
                    ${technologies}
                </p>
            `;

            projectsPreview.appendChild(div);

        }

    });


    if (projectsPreview.innerHTML === "") {

        projectsPreview.innerText =
            "Your projects will appear here.";

    }


    /* ================= CERTIFICATIONS ================= */

    let certificationPreview =
        document.getElementById(
            "previewCertifications"
        );

    certificationPreview.innerHTML = "";


    let certificationItems =
        document.querySelectorAll(
            "#certificationContainer .dynamic-item"
        );


    certificationItems.forEach(function(item) {

        let certification =
            item.querySelector(
                ".certification-name"
            ).value;

        let issuer =
            item.querySelector(
                ".certification-issuer"
            ).value;

        let year =
            item.querySelector(
                ".certification-year"
            ).value;


        if (
            certification ||
            issuer ||
            year
        ) {

            let div = document.createElement("div");

            div.className = "preview-item";

            div.innerHTML = `
                <h4>${certification}</h4>
                <p>${issuer}</p>
                <p>${year}</p>
            `;

            certificationPreview.appendChild(div);

        }

    });


    if (certificationPreview.innerHTML === "") {

        certificationPreview.innerText =
            "Your certifications will appear here.";

    }


    /* ================= EXPERIENCE ================= */

    let experiencePreview =
        document.getElementById(
            "previewExperience"
        );

    experiencePreview.innerHTML = "";


    let experienceItems =
        document.querySelectorAll(
            "#experienceContainer .dynamic-item"
        );


    experienceItems.forEach(function(item) {

        let position =
            item.querySelector(
                ".experience-position"
            ).value;

        let company =
            item.querySelector(
                ".experience-company"
            ).value;

        let duration =
            item.querySelector(
                ".experience-duration"
            ).value;

        let description =
            item.querySelector(
                ".experience-description"
            ).value;


        if (
            position ||
            company ||
            duration ||
            description
        ) {

            let div = document.createElement("div");

            div.className = "preview-item";

            div.innerHTML = `
                <h4>${position}</h4>
                <p>${company}</p>
                <p>${duration}</p>
                <p>${description}</p>
            `;

            experiencePreview.appendChild(div);

        }

    });


    if (experiencePreview.innerHTML === "") {

        experiencePreview.innerText =
            "Your experience will appear here.";

    }

}


/* ================= ADD EDUCATION ================= */

function addEducation() {

    let container =
        document.getElementById("educationContainer");

    let item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.innerHTML = `

        <input
            type="text"
            class="education-degree"
            placeholder="Degree / Course"
            oninput="updateResume()">

        <input
            type="text"
            class="education-college"
            placeholder="College / University"
            oninput="updateResume()">

        <input
            type="text"
            class="education-year"
            placeholder="Year / Percentage"
            oninput="updateResume()">

        <button
            type="button"
            class="remove-button"
            onclick="removeItem(this)">
            Remove
        </button>

    `;

    container.appendChild(item);

}


/* ================= ADD PROJECT ================= */

function addProject() {

    let container =
        document.getElementById("projectsContainer");

    let item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.innerHTML = `

        <input
            type="text"
            class="project-name"
            placeholder="Project Name"
            oninput="updateResume()">

        <textarea
            class="project-description"
            placeholder="Project Description"
            oninput="updateResume()"></textarea>

        <input
            type="text"
            class="project-technologies"
            placeholder="Technologies Used"
            oninput="updateResume()">

        <button
            type="button"
            class="remove-button"
            onclick="removeItem(this)">
            Remove
        </button>

    `;

    container.appendChild(item);

}


/* ================= ADD CERTIFICATION ================= */

function addCertification() {

    let container =
        document.getElementById(
            "certificationContainer"
        );

    let item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.innerHTML = `

        <input
            type="text"
            class="certification-name"
            placeholder="Certification Name"
            oninput="updateResume()">

        <input
            type="text"
            class="certification-issuer"
            placeholder="Issued By"
            oninput="updateResume()">

        <input
            type="text"
            class="certification-year"
            placeholder="Year"
            oninput="updateResume()">

        <button
            type="button"
            class="remove-button"
            onclick="removeItem(this)">
            Remove
        </button>

    `;

    container.appendChild(item);

}


/* ================= ADD EXPERIENCE ================= */

function addExperience() {

    let container =
        document.getElementById(
            "experienceContainer"
        );

    let item =
        document.createElement("div");

    item.className = "dynamic-item";

    item.innerHTML = `

        <input
            type="text"
            class="experience-position"
            placeholder="Job Position"
            oninput="updateResume()">

        <input
            type="text"
            class="experience-company"
            placeholder="Company Name"
            oninput="updateResume()">

        <input
            type="text"
            class="experience-duration"
            placeholder="Duration"
            oninput="updateResume()">

        <textarea
            class="experience-description"
            placeholder="Work Description"
            oninput="updateResume()"></textarea>

        <button
            type="button"
            class="remove-button"
            onclick="removeItem(this)">
            Remove
        </button>

    `;

    container.appendChild(item);

}


/* ================= REMOVE ITEM ================= */

function removeItem(button) {

    button.parentElement.remove();

    updateResume();

}


/* ================= CHANGE RESUME TEMPLATE ================= */

function changeTemplate() {

    let template =
        document.getElementById(
            "templateSelect"
        ).value;

    let resume =
        document.getElementById(
            "resumePreview"
        );


    resume.classList.remove(
        "professional-template",
        "modern-template",
        "simple-template"
    );


    if (template === "professional") {

        resume.classList.add(
            "professional-template"
        );

    }

    else if (template === "modern") {

        resume.classList.add(
            "modern-template"
        );

    }

    else if (template === "simple") {

        resume.classList.add(
            "simple-template"
        );

    }

}


/* ================= ATS SCORE CALCULATOR ================= */

function calculateATS() {

    let score = 0;
    let details = "";


    let name =
        document.getElementById("name")?.value.trim() || "";

    let email =
        document.getElementById("email")?.value.trim() || "";

    let phone =
        document.getElementById("phone")?.value.trim() || "";

    let location =
        document.getElementById("location")?.value.trim() || "";

    let linkedin =
        document.getElementById("linkedin")?.value.trim() || "";

    let github =
        document.getElementById("github")?.value.trim() || "";

    let summary =
        document.getElementById("summary")?.value.trim() || "";

    let skillsElement =
        document.getElementById("skills");

    let skills =
        skillsElement ? skillsElement.value.trim() : "";


    /* PERSONAL INFORMATION */

    if (name) {

        score += 8;

        details +=
            '<div class="ats-check">✅ Name added</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add your name</div>';

    }


    if (email) {

        score += 8;

        details +=
            '<div class="ats-check">✅ Email added</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add your email</div>';

    }


    if (phone) {

        score += 8;

        details +=
            '<div class="ats-check">✅ Phone number added</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add your phone number</div>';

    }


    if (location) {

        score += 5;

        details +=
            '<div class="ats-check">✅ Location added</div>';

    } else {

        details +=
            '<div class="ats-check">⚠️ Add your location</div>';

    }


    /* LINKEDIN / GITHUB */

    if (linkedin || github) {

        score += 5;

        details +=
            '<div class="ats-check">✅ Professional profile link added</div>';

    } else {

        details +=
            '<div class="ats-check">⚠️ Add LinkedIn or GitHub</div>';

    }


    /* SUMMARY */

    if (summary.length >= 30) {

        score += 10;

        details +=
            '<div class="ats-check">✅ Good professional summary</div>';

    } else {

        details +=
            '<div class="ats-check">⚠️ Add a detailed professional summary</div>';

    }


    /* SKILLS */

    if (skills.length >= 10) {

        score += 14;

        details +=
            '<div class="ats-check">✅ Skills section looks good</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add more technical skills</div>';

    }


    /* EDUCATION */

    let educationItems =
        document.querySelectorAll(
            "#educationContainer .dynamic-item"
        );

    if (educationItems.length > 0) {

        score += 12;

        details +=
            '<div class="ats-check">✅ Education details added</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add at least one education entry</div>';

    }


    /* PROJECTS */

    let projectItems =
        document.querySelectorAll(
            "#projectsContainer .dynamic-item"
        );

    if (projectItems.length > 0) {

        score += 14;

        details +=
            '<div class="ats-check">✅ Projects added</div>';

    } else {

        details +=
            '<div class="ats-check">❌ Add at least one project</div>';

    }


    /* CERTIFICATIONS */

    let certificationItems =
        document.querySelectorAll(
            "#certificationContainer .dynamic-item"
        );

    if (certificationItems.length > 0) {

        score += 6;

        details +=
            '<div class="ats-check">✅ Certifications added</div>';

    } else {

        details +=
            '<div class="ats-check">⚠️ Add certifications if available</div>';

    }


    /* EXPERIENCE */

    let experienceItems =
        document.querySelectorAll(
            "#experienceContainer .dynamic-item"
        );

    if (experienceItems.length > 0) {

        score += 10;

        details +=
            '<div class="ats-check">✅ Experience added</div>';

    } else {

        details +=
            '<div class="ats-check">⚠️ Add internship or experience details</div>';

    }


    /* MAXIMUM SCORE */

    if (score > 100) {

        score = 100;

    }


    /* DISPLAY SCORE */

    document.getElementById(
        "atsScore"
    ).textContent = score;


    /* PROGRESS BAR */

    document.getElementById(
        "atsProgress"
    ).style.width = score + "%";


    /* MESSAGE */

    let message = "";


    if (score >= 80) {

        message =
            "Excellent! Your resume is highly ATS-friendly.";

    }

    else if (score >= 60) {

        message =
            "Good! Your resume is ATS-friendly, but can be improved.";

    }

    else if (score >= 40) {

        message =
            "Average. Add more information to improve your ATS score.";

    }

    else {

        message =
            "Needs improvement. Complete more sections of your resume.";

    }


    document.getElementById(
        "atsMessage"
    ).textContent = message;


    /* DETAILS */

    document.getElementById(
        "atsDetails"
    ).innerHTML = details;

}
/* ================= JOB ROLE SUGGESTIONS ================= */

function showJobSuggestions() {

    let role =
        document.getElementById("jobRole").value;

    let suggestions =
        document.getElementById("jobSuggestions");


    if (role === "") {

        suggestions.innerHTML =
            "Select a job role to see recommended skills.";

        return;

    }


    let skills = [];


    if (role === "web") {

        skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Responsive Web Design"
        ];

    }


    else if (role === "python") {

        skills = [
            "Python",
            "Django",
            "Flask",
            "SQL",
            "NumPy",
            "Pandas",
            "Git"
        ];

    }


    else if (role === "java") {

        skills = [
            "Java",
            "OOP",
            "Spring Boot",
            "SQL",
            "JDBC",
            "Git"
        ];

    }


    else if (role === "data") {

        skills = [
            "Python",
            "SQL",
            "Excel",
            "Pandas",
            "NumPy",
            "Data Visualization",
            "Power BI"
        ];

    }


    else if (role === "software") {

        skills = [
            "Python",
            "Java",
            "C++",
            "Data Structures",
            "Algorithms",
            "SQL",
            "Git"
        ];

    }


    else if (role === "cybersecurity") {

        skills = [
            "Networking",
            "Linux",
            "Python",
            "Cryptography",
            "Ethical Hacking",
            "Cybersecurity",
            "Firewalls"
        ];

    }


    let skillList = "";


    skills.forEach(function(skill) {

        skillList += `<li>${skill}</li>`;

    });


    suggestions.innerHTML = `

        <h4>
            Recommended Skills for this Job
        </h4>

        <ul>
            ${skillList}
        </ul>

        <p class="suggestion-note">
            Add relevant skills from this list to improve
            your resume and ATS compatibility.
        </p>

    `;

}
/* ================= AI WRITING ASSISTANT ================= */

function generateAISuggestion() {

    let summary =
        document.getElementById("summary").value.trim();

    let suggestion =
        document.getElementById("aiSuggestion");


    if (summary === "") {

        suggestion.innerHTML =
            "Please enter your professional summary first.";

        return;
    }


    suggestion.innerHTML = `
        <strong>Suggested Improvement:</strong><br><br>

        ${summary}

        <br><br>

        <strong>Tip:</strong>
        Add your key technical skills, career goal,
        projects, and achievements to make your summary
        more professional and ATS-friendly.
    `;
}


/* ================= QR CODE GENERATOR ================= */

function generateQRCode() {

    let url =
        document.getElementById("portfolioURL").value.trim();

    let qrCode =
        document.getElementById("qrCode");


    if (url === "") {

        alert("Please enter a portfolio URL.");

        return;
    }


    qrCode.innerHTML = "";


    new QRCode(qrCode, {

        text: url,

        width: 150,

        height: 150

    });

}
/* ================= SAVE COMPLETE RESUME ================= */


function saveResume() {

    let resumeData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        location: document.getElementById("location").value,

        linkedin: document.getElementById("linkedin").value,

        github: document.getElementById("github").value,

        summary: document.getElementById("summary").value,

        education: [],

        projects: [],

        certifications: [],

        experience: []
    };


    // Add resume ID when editing
    if (editingResumeId !== null) {
        resumeData.resume_id = editingResumeId;
    }


    // Education

    document.querySelectorAll(
        "#educationContainer .dynamic-item"
    ).forEach(function(item) {

        resumeData.education.push({

            degree: item.querySelector(
                ".education-degree"
            ).value,

            college: item.querySelector(
                ".education-college"
            ).value,

            year: item.querySelector(
                ".education-year"
            ).value
        });

    });


    // Projects

    document.querySelectorAll(
        "#projectsContainer .dynamic-item"
    ).forEach(function(item) {

        resumeData.projects.push({

            name: item.querySelector(
                ".project-name"
            ).value,

            description: item.querySelector(
                ".project-description"
            ).value,

            technologies: item.querySelector(
                ".project-technologies"
            ).value
        });

    });


    // Certifications

    document.querySelectorAll(
        "#certificationContainer .dynamic-item"
    ).forEach(function(item) {

        resumeData.certifications.push({

            name: item.querySelector(
                ".certification-name"
            ).value,

            issuer: item.querySelector(
                ".certification-issuer"
            ).value,

            year: item.querySelector(
                ".certification-year"
            ).value
        });

    });


    // Experience

    document.querySelectorAll(
        "#experienceContainer .dynamic-item"
    ).forEach(function(item) {

        resumeData.experience.push({

            position: item.querySelector(
                ".experience-position"
            ).value,

            company: item.querySelector(
                ".experience-company"
            ).value,

            duration: item.querySelector(
                ".experience-duration"
            ).value,

            description: item.querySelector(
                ".experience-description"
            ).value
        });

    });


    // Save in browser

    localStorage.setItem(
        "smartResumeData",
        JSON.stringify(resumeData)
    );


    // Send to Flask

    fetch("/save-resume", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(resumeData)

    })

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        alert(data.message);

        if (data.success) {

    // Exit edit mode
    editingResumeId = null;


    // Change button back to Save Resume
    let saveButton = document.getElementById(
        "saveResumeButton"
    );

    if (saveButton) {

        saveButton.innerText = "💾 Save Resume";

    }


    loadSavedResumes();
}

    })

    .catch(function(error) {

        console.error("Error:", error);

        alert(
            "Resume saved in browser, but database connection failed."
        );

    });

}

/* ================= LOAD RESUME FROM MYSQL ================= */

function loadResume() {

    fetch("/load-resume")

    .then(function(response) {

        return response.json();

    })

    .then(function(result) {

        if (!result.success) {

            alert("No saved resume found.");

            return;

        }


        let resumeData = result.data;


        /* ---------- BASIC INFORMATION ---------- */

        document.getElementById("name").value =
            resumeData.name || "";

        document.getElementById("email").value =
            resumeData.email || "";

        document.getElementById("phone").value =
            resumeData.phone || "";

        document.getElementById("location").value =
            resumeData.location || "";

        document.getElementById("linkedin").value =
            resumeData.linkedin || "";

        document.getElementById("github").value =
            resumeData.github || "";

        document.getElementById("summary").value =
            resumeData.summary || "";

        document.getElementById("portfolioURL").value =
            resumeData.portfolioURL || "";


        /* ---------- EDUCATION ---------- */

        if (resumeData.education) {

            document.getElementById(
                "educationContainer"
            ).innerHTML = "";


            resumeData.education.forEach(function(edu) {

                addEducation();

                let items =
                    document.querySelectorAll(
                        "#educationContainer .dynamic-item"
                    );

                let item =
                    items[items.length - 1];


                item.querySelector(
                    ".education-degree"
                ).value = edu.degree || "";


                item.querySelector(
                    ".education-college"
                ).value = edu.college || "";


                item.querySelector(
                    ".education-year"
                ).value = edu.year || "";

            });

        }


        /* ---------- PROJECTS ---------- */

        if (resumeData.projects) {

            document.getElementById(
                "projectsContainer"
            ).innerHTML = "";


            resumeData.projects.forEach(function(project) {

                addProject();

                let items =
                    document.querySelectorAll(
                        "#projectsContainer .dynamic-item"
                    );

                let item =
                    items[items.length - 1];


                item.querySelector(
                    ".project-name"
                ).value = project.name || "";


                item.querySelector(
                    ".project-description"
                ).value = project.description || "";


                item.querySelector(
                    ".project-technologies"
                ).value =
                    project.technologies || "";

            });

        }


        /* ---------- CERTIFICATIONS ---------- */

        if (resumeData.certifications) {

            document.getElementById(
                "certificationContainer"
            ).innerHTML = "";


            resumeData.certifications.forEach(function(cert) {

                addCertification();

                let items =
                    document.querySelectorAll(
                        "#certificationContainer .dynamic-item"
                    );

                let item =
                    items[items.length - 1];


                item.querySelector(
                    ".certification-name"
                ).value =
                    cert.name || "";


                item.querySelector(
                    ".certification-issuer"
                ).value =
                    cert.issuer || "";


                item.querySelector(
                    ".certification-year"
                ).value =
                    cert.year || "";

            });

        }


        /* ---------- EXPERIENCE ---------- */

        if (resumeData.experience) {

            document.getElementById(
                "experienceContainer"
            ).innerHTML = "";


            resumeData.experience.forEach(function(exp) {

                addExperience();

                let items =
                    document.querySelectorAll(
                        "#experienceContainer .dynamic-item"
                    );

                let item =
                    items[items.length - 1];


                item.querySelector(
                    ".experience-position"
                ).value =
                    exp.position || "";


                item.querySelector(
                    ".experience-company"
                ).value =
                    exp.company || "";


                item.querySelector(
                    ".experience-duration"
                ).value =
                    exp.duration || "";


                item.querySelector(
                    ".experience-description"
                ).value =
                    exp.description || "";

            });

        }


        /* ---------- UPDATE PREVIEW ---------- */

        updateResume();


        /* ---------- UPDATE LOCAL STORAGE ---------- */

        localStorage.setItem(
            "smartResumeData",
            JSON.stringify(resumeData)
        );


        alert("Resume loaded successfully! 📂");

    })

    .catch(function(error) {

        console.error("Error:", error);

        alert(
            "Could not load resume from database."
        );

    });

}
/* ================= SAVED RESUME MANAGEMENT ================= */

function loadSavedResumes() {

    fetch("/resumes")

    .then(function(response) {

        return response.json();

    })

    .then(function(resumes) {

        let container =
            document.getElementById("savedResumes");


        if (resumes.length === 0) {

            container.innerHTML =
                "<p>No saved resumes found.</p>";

            return;

        }


        container.innerHTML = "";


        resumes.forEach(function(resume) {

            let item =
                document.createElement("div");

            item.className =
                "saved-resume-item";


            item.innerHTML = `

                <div class="saved-resume-info">

                    <strong>
                        ${resume.name || "Unnamed Resume"}
                    </strong>

                    <span>
                        ${resume.email || "No email"}
                    </span>

                </div>


                <div class="saved-resume-buttons">

                    <button
                        class="load-saved-button"
                        onclick="loadResumeById(${resume.id})">

                        📂 Load

                    </button>


                    <button
                        class="delete-saved-button"
                        onclick="deleteResume(${resume.id})">

                        🗑️ Delete

                    </button>

                </div>

            `;


            container.appendChild(item);

        });

    })

    .catch(function(error) {

        console.error(error);

    });

}


/* ================= LOAD SELECTED RESUME ================= */

function loadResumeById(id) {

    fetch("/load-resume/" + id)

    .then(function(response) {

        return response.json();

    })

    .then(function(result) {

        if (!result.success) {

            alert("Resume could not be loaded.");

            return;
        }


        let resumeData = result.data;


        // Remember which resume is being edited
        editingResumeId = id;
        let saveButton = document.getElementById(
    "saveResumeButton"
);

if (saveButton) {

    saveButton.innerText = "🔄 Update Resume";

}


        // Fill the form
        fillResumeData(resumeData);


        // Scroll to builder
        let builder = document.getElementById("builder");

        if (builder) {

            builder.scrollIntoView({
                behavior: "smooth"
            });

        }


        alert(
            "Resume loaded successfully! 📂\n\n" +
            "You can now edit this resume."
        );

    })

    .catch(function(error) {

        console.error(error);

        alert("Could not load resume.");

    });

}


/* ================= DELETE RESUME ================= */

function deleteResume(id) {

    let confirmation =
        confirm(
            "Are you sure you want to delete this resume?"
        );


    if (!confirmation) {

        return;

    }


    fetch("/delete-resume/" + id, {

        method: "POST"

    })

    .then(function(response) {

        return response.json();

    })

    .then(function(result) {

        alert(result.message);

        loadSavedResumes();

    })

    .catch(function(error) {

        console.error(error);

        alert("Could not delete resume.");

    });

}
/* ================= FILL RESUME DATA ================= */

function fillResumeData(resumeData) {


    /* ---------- BASIC INFORMATION ---------- */

    document.getElementById("name").value =
        resumeData.name || "";

    document.getElementById("email").value =
        resumeData.email || "";

    document.getElementById("phone").value =
        resumeData.phone || "";

    document.getElementById("location").value =
        resumeData.location || "";

    document.getElementById("linkedin").value =
        resumeData.linkedin || "";

    document.getElementById("github").value =
        resumeData.github || "";

    document.getElementById("summary").value =
        resumeData.summary || "";


    /* ---------- EDUCATION ---------- */

    document.getElementById(
        "educationContainer"
    ).innerHTML = "";


    if (resumeData.education) {

        resumeData.education.forEach(function(edu) {

            addEducation();

            let items =
                document.querySelectorAll(
                    "#educationContainer .dynamic-item"
                );

            let item =
                items[items.length - 1];


            item.querySelector(
                ".education-degree"
            ).value =
                edu.degree || "";


            item.querySelector(
                ".education-college"
            ).value =
                edu.college || "";


            item.querySelector(
                ".education-year"
            ).value =
                edu.year || "";

        });

    }


    /* ---------- PROJECTS ---------- */

    document.getElementById(
        "projectsContainer"
    ).innerHTML = "";


    if (resumeData.projects) {

        resumeData.projects.forEach(function(project) {

            addProject();

            let items =
                document.querySelectorAll(
                    "#projectsContainer .dynamic-item"
                );

            let item =
                items[items.length - 1];


            item.querySelector(
                ".project-name"
            ).value =
                project.name || "";


            item.querySelector(
                ".project-description"
            ).value =
                project.description || "";


            item.querySelector(
                ".project-technologies"
            ).value =
                project.technologies || "";

        });

    }


    /* ---------- CERTIFICATIONS ---------- */

    document.getElementById(
        "certificationContainer"
    ).innerHTML = "";


    if (resumeData.certifications) {

        resumeData.certifications.forEach(function(cert) {

            addCertification();

            let items =
                document.querySelectorAll(
                    "#certificationContainer .dynamic-item"
                );

            let item =
                items[items.length - 1];


            item.querySelector(
                ".certification-name"
            ).value =
                cert.name || "";


            item.querySelector(
                ".certification-issuer"
            ).value =
                cert.issuer || "";


            item.querySelector(
                ".certification-year"
            ).value =
                cert.year || "";

        });

    }


    /* ---------- EXPERIENCE ---------- */

    document.getElementById(
        "experienceContainer"
    ).innerHTML = "";


    if (resumeData.experience) {

        resumeData.experience.forEach(function(exp) {

            addExperience();

            let items =
                document.querySelectorAll(
                    "#experienceContainer .dynamic-item"
                );

            let item =
                items[items.length - 1];


            item.querySelector(
                ".experience-position"
            ).value =
                exp.position || "";


            item.querySelector(
                ".experience-company"
            ).value =
                exp.company || "";


            item.querySelector(
                ".experience-duration"
            ).value =
                exp.duration || "";


            item.querySelector(
                ".experience-description"
            ).value =
                exp.description || "";

        });

    }


    /* ---------- UPDATE PREVIEW ---------- */

    updateResume();

}

loadSavedResumes();
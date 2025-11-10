// Program database with details
const programs = {
  "Math Academic": {
    name: "Math Academic Class",
    ageRange: "4-18 years",
    focus: "Core math skills & foundational improvement",
    description:
      "Build strong mathematical foundations with personalized instruction tailored to your child's learning pace. Our Math Academic program focuses on strengthening core concepts and problem-solving skills.",
    link: "https://oaklearningcenter.com/join-small-group-math-tutorial/",
  },
  "Math Advanced": {
    name: "Math Advanced Class",
    ageRange: "4-18 years",
    focus: "Advanced math enrichment",
    description:
      "Challenge high-achieving students with advanced mathematical concepts, critical thinking, and competition-level problem-solving strategies.",
    link: "https://oaklearningcenter.com/cemc-contest-course/",
  },
  "English Academic": {
    name: "English Academic Class",
    ageRange: "4-18 years",
    focus: "Reading, writing, grammar",
    description:
      "Develop strong literacy skills through comprehensive reading, writing, and grammar instruction. Perfect for students who need foundational support in English.",
    link: "https://oaklearningcenter.com/writing-skill/",
  },
  "English Advanced": {
    name: "English Advanced Class",
    ageRange: "4-18 years",
    focus: "Advanced literacy & critical analysis",
    description:
      "Elevate your child's English skills with advanced reading comprehension, essay writing, and literary analysis for high-achieving students.",
    link: "#",
  },
  "Science Academic": {
    name: "Science Academic Class",
    ageRange: "4-18 years",
    focus: "Hands-on scientific learning",
    description:
      "Explore the wonders of science through hands-on experiments and interactive learning. Build foundational scientific knowledge and inquiry skills.",
    link: "#",
  },
  "Science Advanced": {
    name: "Science Advanced Class",
    ageRange: "4-18 years",
    focus: "Advanced scientific concepts",
    description:
      "Dive deep into advanced scientific concepts with laboratory work, research projects, and critical analysis for motivated science students.",
    link: "#",
  },
  "French Academic": {
    name: "French Academic Class",
    ageRange: "4-18 years",
    focus: "Language development",
    description:
      "Master French language skills through immersive learning, conversation practice, and cultural exploration. Perfect for beginners and intermediate learners.",
    link: "#",
  },
  "French Advanced": {
    name: "French Advanced Class",
    ageRange: "4-18 years",
    focus: "Advanced French proficiency",
    description:
      "Achieve fluency in French with advanced grammar, literature, and conversation skills. Ideal for students preparing for French immersion or certification.",
    link: "#",
  },
  "UARO Robotics": {
    name: "UARO Robotics Class",
    ageRange: "3-5 years",
    focus: "Early robotics exploration",
    description:
      "Introduce your young learner to robotics through hands-on building, early logic development, and creative problem-solving. Perfect for preschoolers who love to build and explore.",
    link: "#",
  },
  RoboKids: {
    name: "RoboKids Class",
    ageRange: "4-8 years",
    focus: "Intro to robotics & engineering",
    description:
      "Spark curiosity in robotics and engineering through fun, age-appropriate projects. Children learn basic programming concepts while building and programming robots.",
    link: "#",
  },
  RoboKIT: {
    name: "RoboKIT Class",
    ageRange: "9-13 years",
    focus: "Intermediate robotics & teamwork",
    description:
      "Take robotics skills to the next level with complex projects, teamwork challenges, and advanced programming. Perfect for students who enjoy engineering and building.",
    link: "#",
  },
  "Beginner Coding": {
    name: "Beginner Coding Class",
    ageRange: "8+ years",
    focus: "Foundational programming",
    description:
      "Start your coding journey with fun, interactive programming lessons. Learn fundamental coding concepts through games, animations, and creative projects.",
    link: "#",
  },
  "Advanced Coding": {
    name: "Advanced Coding Class",
    ageRange: "8+ years",
    focus: "Advanced logic & real projects",
    description:
      "Master advanced programming concepts and work on real-world projects. Perfect for students who are proficient with technology and enjoy problem-solving.",
    link: "#",
  },
  "iPath Self-Development": {
    name: "iPath Self-Development Class",
    ageRange: "8-15 years",
    focus: "Confidence, communication, growth mindset",
    description:
      "Develop essential life skills including confidence, communication, organization, and a growth mindset. Ideal for students facing non-academic challenges like focus, motivation, or self-esteem.",
    link: "#",
  },
  "DELF Preparation": {
    name: "DELF Preparation Class",
    ageRange: "9+ years",
    focus: "French certification readiness",
    description:
      "Prepare for the DELF (Diplôme d'Études en Langue Française) exam with comprehensive test preparation, practice exams, and skill-building sessions.",
    link: "#",
  },
  "Adult ESL": {
    name: "Adult ESL Class",
    ageRange: "18+ years",
    focus: "General English proficiency",
    description:
      "Improve your English language skills for daily communication, work, or personal growth. Our ESL program offers flexible scheduling for adult learners.",
    link: "#",
  },
  "Adult IELTS Prep": {
    name: "Adult IELTS Preparation Class",
    ageRange: "18+ years",
    focus: "Academic English testing",
    description:
      "Achieve your target IELTS score with comprehensive test preparation, practice exams, and expert strategies for international study or immigration.",
    link: "#",
  },
  "Adult CELPIP Prep": {
    name: "Adult CELPIP Preparation Class",
    ageRange: "18+ years",
    focus: "Canadian immigration English",
    description:
      "Prepare for the CELPIP test with targeted practice and proven strategies. Essential for Canadian immigration and citizenship applications.",
    link: "#",
  },
  "Adult FSL": {
    name: "Adult FSL Class",
    ageRange: "18+ years",
    focus: "French for adult learners",
    description:
      "Learn French as a second language with courses designed specifically for adult learners. Flexible scheduling and practical, real-world applications.",
    link: "#",
  },
};

// Form state
let currentSection = 1;
let formData = {};
const totalSections = 4;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeLanding();
  initializeForm();
});

// Landing page
function initializeLanding() {
  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", () => {
    document.getElementById("landing-page").classList.remove("active");
    document.getElementById("questionnaire-page").classList.add("active");
  });
}

// Form initialization
function initializeForm() {
  const form = document.getElementById("questionnaire-form");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const submitBtn = document.getElementById("submit-btn");

  nextBtn.addEventListener("click", () => {
    if (validateCurrentSection()) {
      saveCurrentSectionData();
      if (currentSection < totalSections) {
        currentSection++;
        showSection(currentSection);
      }
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentSection > 1) {
      currentSection--;
      showSection(currentSection);
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (validateCurrentSection()) {
      saveCurrentSectionData();

      // Generate recommendations first to include them in email
      const recommendations = generateRecommendationsData();

      // Debug logging
      console.log("Generated recommendations:", recommendations);

      // Check if we have recommendations
      if (!recommendations || recommendations.length === 0) {
        console.error("No recommendations generated");
        alert("Unable to generate recommendations. Please try again.");
        return;
      }

      // Show results page immediately
      document.getElementById("questionnaire-page").classList.remove("active");
      document.getElementById("results-page").classList.add("active");

      // Send email if in Oakville area before showing recommendations
      const isOakville = formData["oakville-area"] === "yes";

      if (isOakville && formData.email) {
        // Show loading state
        showLoadingState();

        try {
          const emailSent = await sendFormDataEmail(recommendations);
          if (emailSent) {
            // Show email success message
            showEmailSuccess();
            // Wait a moment before showing recommendations
            setTimeout(() => {
              hideLoadingState();
              hideEmailSuccess();
              displayRecommendationsFromObjects(recommendations);
            }, 2000);
          } else {
            // Email failed but still show recommendations
            hideLoadingState();
            displayRecommendationsFromObjects(recommendations);
          }
        } catch (error) {
          console.error("Error sending email:", error);
          hideLoadingState();
          // Still show recommendations even if email fails
          displayRecommendationsFromObjects(recommendations);
        }
      } else {
        // Not Oakville area, just show recommendations
        displayRecommendationsFromObjects(recommendations);
      }
    }
  });

  // Watch for age changes to update developmental questions
  const ageInput = document.getElementById("age");
  ageInput.addEventListener("change", () => {
    if (currentSection >= 3) {
      generateDevelopmentalQuestions();
    }
  });

  // Watch for Oakville area selection to show/hide email field
  const oakvilleYes = document.getElementById("oakville-yes");
  const oakvilleNo = document.getElementById("oakville-no");
  const emailGroup = document.getElementById("email-group");
  const emailInput = document.getElementById("email");

  oakvilleYes.addEventListener("change", () => {
    if (oakvilleYes.checked) {
      emailGroup.style.display = "block";
      emailInput.setAttribute("required", "required");
    }
  });

  oakvilleNo.addEventListener("change", () => {
    if (oakvilleNo.checked) {
      emailGroup.style.display = "none";
      emailInput.removeAttribute("required");
      emailInput.value = "";
    }
  });
}

// Show specific section
function showSection(sectionNum) {
  // Hide all sections
  document.querySelectorAll(".form-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show current section
  const currentSectionEl = document.querySelector(
    `[data-section="${sectionNum}"]`
  );
  if (currentSectionEl) {
    currentSectionEl.classList.add("active");
  }

  // Special handling for developmental section
  if (sectionNum === 3) {
    generateDevelopmentalQuestions();
  }

  // Update navigation buttons
  updateNavigationButtons();
  updateProgress();
}

// Generate developmental questions based on age
function generateDevelopmentalQuestions() {
  const age = parseInt(document.getElementById("age")?.value) || 0;
  const container = document.getElementById("developmental-questions");
  container.innerHTML = "";

  if (age < 5) {
    // Under 5 years
    const questions = [
      {
        id: "potty-trained",
        label: "Is your child potty trained?",
        type: "yesno",
      },
      {
        id: "knows-alphabet",
        label: "Does your child know their alphabet?",
        type: "yesno",
      },
      {
        id: "knows-read",
        label: "Does your child know how to read?",
        type: "yesno",
      },
      {
        id: "knows-count",
        label: "Does your child know how to count?",
        type: "yesno",
      },
      {
        id: "knows-add-subtract",
        label: "Does your child know how to add/subtract?",
        type: "yesno",
      },
    ];
    renderYesNoQuestions(questions, container);
  } else if (age >= 5 && age < 7) {
    // 5-6 years
    const questions = [
      {
        id: "knows-read-write",
        label: "Does your child know how to read/write?",
        type: "yesno",
      },
      {
        id: "knows-add-subtract",
        label: "Does your child know how to add/subtract?",
        type: "yesno",
      },
      {
        id: "knows-multiply-divide",
        label: "Does your child know how to multiply/divide?",
        type: "yesno",
      },
    ];
    renderYesNoQuestions(questions, container);
  } else if (age >= 7 && age < 8) {
    // 7 years
    const questions = [
      {
        id: "knows-multiply-divide",
        label: "Does your child know how to multiply/divide?",
        type: "yesno",
      },
      {
        id: "knows-essay",
        label: "Does your child know how to write an essay?",
        type: "yesno",
      },
      {
        id: "knows-type",
        label: "Does your child know how to type?",
        type: "yesno",
      },
      {
        id: "knows-code",
        label: "Does your child know how to program/code?",
        type: "yesno",
      },
    ];
    renderYesNoQuestions(questions, container);
  } else if (age >= 8 && age < 18) {
    // 8-17 years
    const questions = [
      {
        id: "knows-essay",
        label: "Does your child know how to write an essay?",
        type: "yesno",
      },
      {
        id: "knows-type",
        label: "Does your child know how to type?",
        type: "yesno",
      },
      {
        id: "knows-code",
        label: "Does your child know how to program/code?",
        type: "yesno",
      },
    ];
    renderYesNoQuestions(questions, container);
  } else {
    // Adults (18+)
    container.innerHTML =
      '<p class="section-description">No additional developmental questions for adult learners.</p>';
  }
}

// Render yes/no questions
function renderYesNoQuestions(questions, container) {
  questions.forEach((q) => {
    const questionGroup = document.createElement("div");
    questionGroup.className = "question-group";

    const label = document.createElement("label");
    label.textContent = q.label;

    const radioGroup = document.createElement("div");
    radioGroup.className = "radio-group";

    ["Yes", "No"].forEach((option) => {
      const radioOption = document.createElement("label");
      radioOption.className = "radio-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = option.toLowerCase();

      const span = document.createElement("span");
      span.textContent = option;

      radioOption.appendChild(input);
      radioOption.appendChild(span);
      radioGroup.appendChild(radioOption);
    });

    questionGroup.appendChild(label);
    questionGroup.appendChild(radioGroup);
    container.appendChild(questionGroup);
  });
}

// Validate current section
function validateCurrentSection() {
  const section = document.querySelector(
    `[data-section="${currentSection}"].active`
  );
  if (!section) return false;

  const requiredInputs = section.querySelectorAll(
    "input[required], select[required]"
  );
  let isValid = true;

  requiredInputs.forEach((input) => {
    if (input.type === "checkbox" || input.type === "radio") {
      const name = input.name;
      const checked = section.querySelector(`input[name="${name}"]:checked`);
      if (!checked) {
        isValid = false;
        input.closest(".question-group")?.classList.add("error");
      } else {
        input.closest(".question-group")?.classList.remove("error");
      }
    } else {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--coral)";
      } else {
        input.style.borderColor = "";
      }
    }
  });

  // Special validation for checkboxes (at least one)
  const checkboxGroups = section.querySelectorAll(".checkbox-group");
  checkboxGroups.forEach((group) => {
    const checked = group.querySelector("input:checked");
    if (!checked) {
      isValid = false;
      group.closest(".question-group")?.classList.add("error");
    } else {
      group.closest(".question-group")?.classList.remove("error");
    }
  });

  if (!isValid) {
    alert("Please answer all required questions before continuing.");
  }

  return isValid;
}

// Save current section data
function saveCurrentSectionData() {
  const section = document.querySelector(
    `[data-section="${currentSection}"].active`
  );
  if (!section) return;

  // Get all form inputs
  const inputs = section.querySelectorAll("input, select");
  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      if (!formData[input.name]) {
        formData[input.name] = [];
      }
      if (input.checked) {
        if (!formData[input.name].includes(input.value)) {
          formData[input.name].push(input.value);
        }
      } else {
        formData[input.name] = formData[input.name].filter(
          (v) => v !== input.value
        );
      }
    } else if (input.type === "radio") {
      if (input.checked) {
        formData[input.name] = input.value;
      }
    } else {
      formData[input.name] = input.value;
    }
  });
}

// Update navigation buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  prevBtn.style.display = currentSection > 1 ? "block" : "none";

  if (currentSection === totalSections) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
}

// Update progress bar
function updateProgress() {
  const progress = (currentSection / totalSections) * 100;
  document.getElementById("progress-fill").style.width = `${progress}%`;
  document.getElementById("current-step").textContent = currentSection;
  document.getElementById("total-steps").textContent = totalSections;
}

// Generate recommendations data (returns array of program names)
function generateRecommendationsData() {
  const age = parseInt(formData.age) || 0;
  const grade = formData.grade || "";
  const averageGrade = formData["average-grade"] || "";
  const favouriteSubject = formData["favourite-subject"] || "";
  const challenges = Array.isArray(formData.challenges)
    ? formData.challenges
    : [];
  const hobbies = Array.isArray(formData.hobbies) ? formData.hobbies : [];

  const recommendations = [];
  const scores = {};

  // Adult learners (18+)
  if (age >= 18 || grade === "Adult") {
    if (
      favouriteSubject === "English" ||
      hobbies.includes("Reading") ||
      hobbies.includes("Writing")
    ) {
      scores["Adult ESL"] = (scores["Adult ESL"] || 0) + 3;
      scores["Adult IELTS Prep"] = (scores["Adult IELTS Prep"] || 0) + 2;
      scores["Adult CELPIP Prep"] = (scores["Adult CELPIP Prep"] || 0) + 2;
    }
    if (favouriteSubject === "French") {
      scores["Adult FSL"] = (scores["Adult FSL"] || 0) + 3;
      scores["DELF Preparation"] = (scores["DELF Preparation"] || 0) + 2;
    }
  } else {
    // Academic performance logic
    const gradeValue = getGradeValue(averageGrade);
    const isHighAchiever = gradeValue >= getGradeValue("B");

    // Subject-based recommendations
    const subjectMap = {
      English: ["English Academic", "English Advanced"],
      Math: ["Math Academic", "Math Advanced"],
      Science: ["Science Academic", "Science Advanced"],
      French: ["French Academic", "French Advanced"],
    };

    if (favouriteSubject && subjectMap[favouriteSubject]) {
      const programType = isHighAchiever
        ? subjectMap[favouriteSubject][1]
        : subjectMap[favouriteSubject][0];
      scores[programType] = (scores[programType] || 0) + 5;
    }

    // Age-based recommendations
    if (age < 5) {
      scores["UARO Robotics"] = (scores["UARO Robotics"] || 0) + 4;
    }

    if (age >= 4 && age <= 8) {
      if (hobbies.includes("Building robotics")) {
        scores["RoboKids"] = (scores["RoboKids"] || 0) + 4;
      }
      if (!isHighAchiever) {
        if (favouriteSubject === "Math")
          scores["Math Academic"] = (scores["Math Academic"] || 0) + 2;
        if (favouriteSubject === "English")
          scores["English Academic"] = (scores["English Academic"] || 0) + 2;
        if (favouriteSubject === "Science")
          scores["Science Academic"] = (scores["Science Academic"] || 0) + 2;
      }
    }

    if (age >= 9 && age <= 13) {
      if (hobbies.includes("Building robotics")) {
        scores["RoboKIT"] = (scores["RoboKIT"] || 0) + 4;
      }
    }

    if (age >= 8) {
      if (
        hobbies.includes("Coding") ||
        favouriteSubject === "Computer Science" ||
        formData["knows-code"] === "yes" ||
        challenges.includes("STEM")
      ) {
        if (formData["knows-code"] === "yes" || age >= 10) {
          scores["Advanced Coding"] = (scores["Advanced Coding"] || 0) + 4;
        } else {
          scores["Beginner Coding"] = (scores["Beginner Coding"] || 0) + 4;
        }
      }
      // STEM challenge can also indicate interest in robotics
      if (challenges.includes("STEM") && age >= 4 && age <= 8) {
        scores["RoboKids"] = (scores["RoboKids"] || 0) + 2;
      }
      if (challenges.includes("STEM") && age >= 9 && age <= 13) {
        scores["RoboKIT"] = (scores["RoboKIT"] || 0) + 2;
      }
    }

    // iPath for non-academic challenges
    if (age >= 8 && age <= 15) {
      const nonAcademicChallenges = [
        "Paying attention",
        "Organization",
        "Public speaking",
        "Confidence",
        "Motivation",
      ];
      if (challenges.some((c) => nonAcademicChallenges.includes(c))) {
        scores["iPath Self-Development"] =
          (scores["iPath Self-Development"] || 0) + 5;
      }
    }

    // DELF for French learners
    if (
      age >= 9 &&
      (favouriteSubject === "French" || hobbies.includes("Reading"))
    ) {
      scores["DELF Preparation"] = (scores["DELF Preparation"] || 0) + 2;
    }
  }

  // Get top 3 recommendations
  const sortedPrograms = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  // If we have fewer than 3, add fallback recommendations
  if (sortedPrograms.length < 3) {
    if (age < 18) {
      const fallbacks = [
        "Math Academic",
        "English Academic",
        "Science Academic",
      ];
      fallbacks.forEach((fb) => {
        if (!sortedPrograms.includes(fb) && sortedPrograms.length < 3) {
          sortedPrograms.push(fb);
        }
      });
    } else {
      if (!sortedPrograms.includes("Adult ESL")) {
        sortedPrograms.push("Adult ESL");
      }
    }
  }

  // Return program objects with full details
  const programObjects = sortedPrograms
    .map((name) => {
      const program = programs[name];
      if (!program) {
        console.warn(`Program "${name}" not found in programs database`);
      }
      return program;
    })
    .filter((p) => p !== undefined && p !== null);

  // If we still don't have programs, add fallbacks
  if (programObjects.length === 0) {
    console.warn("No valid programs found, using fallbacks");
    return [
      programs["Math Academic"],
      programs["English Academic"],
      programs["Science Academic"],
    ].filter((p) => p);
  }

  return programObjects;
}

// Display recommendations from program names (legacy method)
function displayRecommendations(recommendationNames) {
  // Convert names to objects
  const recommendationObjects = recommendationNames
    .map((name) => {
      // Try to find by key first
      let program = programs[name];
      if (!program) {
        // Try to find by name
        const programKey = Object.keys(programs).find(
          (key) => programs[key].name === name
        );
        if (programKey) {
          program = programs[programKey];
        }
      }
      return program;
    })
    .filter((p) => p);

  displayRecommendationsFromObjects(recommendationObjects);
}

// Generate recommendations (legacy function - now calls generateRecommendationsData)
function generateRecommendations() {
  const recommendations = generateRecommendationsData();
  displayRecommendationsFromObjects(recommendations);
}

// Get grade value for comparison
function getGradeValue(grade) {
  const gradeMap = {
    "A+": 12,
    A: 11,
    "A-": 10,
    "B+": 9,
    B: 8,
    "B-": 7,
    "C+": 6,
    C: 5,
    "C-": 4,
    D: 3,
    F: 2,
    "N/A": 0,
  };
  return gradeMap[grade] || 0;
}

// Display recommendations
// Show loading state
function showLoadingState() {
  document.getElementById("loading-state").style.display = "block";
  document.getElementById("recommendations-container").style.display = "none";
  document.getElementById("email-success").style.display = "none";
}

// Hide loading state
function hideLoadingState() {
  document.getElementById("loading-state").style.display = "none";
}

// Show email success message
function showEmailSuccess() {
  document.getElementById("email-success").style.display = "block";
}

// Hide email success message
function hideEmailSuccess() {
  document.getElementById("email-success").style.display = "none";
}

// Display recommendations from program objects (new preferred method)
function displayRecommendationsFromObjects(recommendationObjects) {
  // Make sure results page is active
  document.getElementById("questionnaire-page").classList.remove("active");
  document.getElementById("results-page").classList.add("active");

  const container = document.getElementById("recommendations-container");
  container.innerHTML = "";

  // Show container
  container.style.display = "grid";

  // Debug logging
  console.log(
    "Displaying recommendations from objects:",
    recommendationObjects
  );

  // Check if we have valid recommendations
  if (!recommendationObjects || recommendationObjects.length === 0) {
    console.error("No recommendation objects provided");
    container.innerHTML = `
      <div class="recommendation-card">
        <h2>No Recommendations Available</h2>
        <p>We couldn't generate recommendations based on your responses. Please contact us for personalized assistance.</p>
      </div>
    `;
    return;
  }

  recommendationObjects.forEach((program, index) => {
    if (!program) {
      console.warn(`Invalid program object at index ${index}`);
      return;
    }

    const card = document.createElement("div");
    card.className = "recommendation-card";

    const rank = ["🥇", "🥈", "🥉"][index];

    card.innerHTML = `
            <div class="recommendation-rank">${rank} Recommendation ${
      index + 1
    }</div>
            <h2>${program.name}</h2>
            <div class="recommendation-meta">
                <div class="meta-item">
                    <strong>Age Range:</strong> ${program.ageRange}
                </div>
                <div class="meta-item">
                    <strong>Focus:</strong> ${program.focus}
                </div>
            </div>
            <p class="recommendation-description">${program.description}</p>
            <a href="${
              program.link
            }" class="recommendation-link" target="_blank">
                Learn more about this program →
            </a>
        `;

    container.appendChild(card);
  });

  // Add restart button
  document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload();
  });

  // Contact button is now a direct phone link, no need for event listener
}

// Send form data via email
async function sendFormDataEmail(recommendations = []) {
  // Format all form data into a readable email body
  const emailBody = formatFormDataForEmail(recommendations);

  // Using EmailJS - you'll need to set up an account at https://www.emailjs.com/
  // and configure your service ID, template ID, and public key
  // For now, we'll use a simple fetch to a mailto link or you can integrate EmailJS

  // Option 1: Using EmailJS (recommended - requires setup)
  // Uncomment and configure after setting up EmailJS account
  /*
  if (typeof emailjs !== 'undefined') {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
      {
        to_email: 'marketing@oaklearningcenter.com',
        subject: 'New Program Recommendation Form Submission',
        message: emailBody,
        from_email: formData.email,
        from_name: 'Oaklearning Form'
      },
      'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
    );
  }
  */

  // Option 2: Using a backend endpoint (if you have one)
  // Uncomment and configure if you have a backend API
  /*
  await fetch('YOUR_BACKEND_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'marketing@oaklearningcenter.com',
      subject: 'New Program Recommendation Form Submission',
      body: emailBody,
      from: formData.email
    })
  });
  */

  // Option 3: Using Formspree or similar service
  // Uncomment and configure if using Formspree
  /*
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _to: 'marketing@oaklearningcenter.com',
      _subject: 'New Program Recommendation Form Submission',
      _replyto: formData.email,
      message: emailBody
    })
  });
  if (response.ok) {
    return; // Exit if Formspree is used successfully
  }
  */

  // Web3Forms - FREE & FAST Setup (Recommended)
  // 1. Go to https://web3forms.com/
  // 2. Enter your email: marketing@oaklearningcenter.com
  // 3. Get your access key (free, no credit card)
  // 4. Replace 'YOUR_ACCESS_KEY' below with your access key

  const WEB3FORMS_ACCESS_KEY = "f4b74137-17ef-4d9f-852f-0b34ece32337";

  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Program Recommendation Form Submission - Oaklearning",
          from_name: "Oaklearning Form",
          email: "marketing@oaklearningcenter.com", // Recipient
          replyto: formData.email || "noreply@oaklearningcenter.com", // Reply-to
          message: emailBody,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Email sent successfully!");
        return true; // Email sent successfully, no need for fallback
      } else {
        console.error("❌ Email failed:", result.message);
        // Fall through to mailto fallback
      }
    } catch (error) {
      console.error("❌ Error sending email:", error);
      // Fall through to mailto fallback
    }
  } else {
    console.warn(
      "⚠️ Web3Forms access key not configured. Using mailto fallback."
    );
  }

  // Fallback: mailto link (only used if Web3Forms fails or isn't configured)
  // Note: This opens email client, which may interrupt the user experience
  // For production, ensure Web3Forms is properly configured
  const mailtoLink = `mailto:marketing@oaklearningcenter.com?subject=New Program Recommendation Form Submission&body=${encodeURIComponent(
    emailBody
  )}`;

  // Only use mailto as last resort - it will open email client
  // For now, we'll skip it to avoid interrupting the recommendations display
  // Uncomment below if you want mailto fallback:
  /*
  try {
    window.location.href = mailtoLink;
  } catch (error) {
    console.error("Could not open email client:", error);
  }
  */

  return false; // Indicate email wasn't sent successfully
}

// Format form data into a readable email format
function formatFormDataForEmail(recommendations = []) {
  let emailContent = "New Program Recommendation Form Submission\n\n";
  emailContent += "Here you go - Form Submission Details:\n\n";
  emailContent += "=".repeat(50) + "\n\n";

  // Basic Information
  emailContent += "BASIC INFORMATION:\n";
  emailContent += "-".repeat(50) + "\n";
  emailContent += `Age: ${formData.age || "N/A"}\n`;
  emailContent += `Grade: ${formData.grade || "N/A"}\n`;
  emailContent += `Average Grade: ${formData["average-grade"] || "N/A"}\n`;
  emailContent += `Email: ${formData.email || "N/A"}\n`;
  emailContent += `Oakville Area: ${
    formData["oakville-area"] === "yes" ? "Yes" : "No"
  }\n\n`;

  // Learning Profile
  emailContent += "LEARNING PROFILE:\n";
  emailContent += "-".repeat(50) + "\n";
  emailContent += `Favourite Subject: ${
    formData["favourite-subject"] || "N/A"
  }\n`;
  emailContent += `Least Favourite Subject: ${
    formData["least-favourite-subject"] || "N/A"
  }\n\n`;

  // Challenges
  if (formData.challenges && formData.challenges.length > 0) {
    emailContent += "CHALLENGES:\n";
    emailContent += "-".repeat(50) + "\n";
    const challenges = Array.isArray(formData.challenges)
      ? formData.challenges
      : [formData.challenges];
    challenges.forEach((challenge) => {
      emailContent += `• ${challenge}\n`;
    });
    emailContent += "\n";
  }

  // Hobbies
  if (formData.hobbies && formData.hobbies.length > 0) {
    emailContent += "HOBBIES:\n";
    emailContent += "-".repeat(50) + "\n";
    const hobbies = Array.isArray(formData.hobbies)
      ? formData.hobbies
      : [formData.hobbies];
    hobbies.forEach((hobby) => {
      emailContent += `• ${hobby}\n`;
    });
    emailContent += "\n";
  }

  // Developmental Skills
  emailContent += "DEVELOPMENTAL SKILLS:\n";
  emailContent += "-".repeat(50) + "\n";
  const developmentalQuestions = [
    "potty-trained",
    "knows-alphabet",
    "knows-read",
    "knows-count",
    "knows-add-subtract",
    "knows-read-write",
    "knows-multiply-divide",
    "knows-essay",
    "knows-type",
    "knows-code",
  ];

  developmentalQuestions.forEach((q) => {
    if (formData[q]) {
      const questionLabel = q
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      emailContent += `${questionLabel}: ${formData[q]}\n`;
    }
  });
  emailContent += "\n";

  // Recommendations
  if (recommendations && recommendations.length > 0) {
    emailContent += "RECOMMENDED PROGRAMS:\n";
    emailContent += "-".repeat(50) + "\n";
    recommendations.forEach((program, index) => {
      emailContent += `${index + 1}. ${program.name}\n`;
      emailContent += `   Age Range: ${program.ageRange}\n`;
      emailContent += `   Focus: ${program.focus}\n`;
      emailContent += `   Description: ${program.description}\n\n`;
    });
  }

  emailContent += "=".repeat(50) + "\n";
  emailContent += "Submitted: " + new Date().toLocaleString() + "\n";
  emailContent += "=".repeat(50) + "\n";

  return emailContent;
}

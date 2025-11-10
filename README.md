# **Oaklearning Program Recommendation Form**

## 🚀 Deployment

This form can be easily deployed to Vercel:

### Quick Deploy to Vercel

1. **Push to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a static site
   - Click "Deploy"
   - Done! Your form will be live in seconds

### Manual Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

---

# **Parent Intake & Program Recommendation Framework**

This framework outlines how to gather and interpret information about a child’s age, academic level, learning preferences, and interests to automatically recommend the **top 3 most suitable programs**.
The goal is to ensure every child or adult learner is matched with a program aligned to their **skills, challenges, and passions**.

---

## 🧩 **Section 1 – Academic Background & Level Assessment**

### **Questions:**

1. How old is your child?
2. What grade is your child in?
3. What is your child’s average letter grade?

### **Logic:**

- If **age and grade** do not align (e.g., a 9-year-old in grade 2), trigger **tutoring class questions** to assess learning support needs.
- If the **average grade is below a B**, recommend **Academic Classes** for relevant subjects.
- If the **average grade is above a B**, recommend **Advanced Classes** for relevant subjects.

---

## 🎓 **Section 2 – Learning Profile & Interests**

### **Questions:**

1. What is your child’s **favourite subject**?
   _(English, Math, French, Science, Computer Science)_

2. What is your child’s **least favourite subject**?
   _(English, Math, French, Science, Computer Science)_

3. What is your child’s **biggest challenge**?
   _(Paying attention, Academics, Reading, Writing, Public speaking, Organization, Problem-solving, Robotics, Coding, Computer science, etc.)_

4. What **hobbies** does your child have?
   _(Building robotics, Academic contests, Reading, Writing, etc.)_

➡️ Each question can be **multiple-choice based on age**, ensuring relevance to the learner’s stage of development.

---

## 👶 **Section 3 – Age-Based Developmental Questions**

The questionnaire dynamically adjusts depending on the child’s age to understand their foundational skills and cognitive readiness.

### **If younger than 5 years old:**

- Is your child potty trained?
- Does your child know their alphabet?
- Does your child know how to read?
- Does your child know how to count?
- Does your child know how to add/subtract?

**Recommendation Path:**
🟢 _UARO Robotics Class (3y–5y)_ — focuses on hands-on learning, early logic building, and creativity.

---

### **If older than 5 years old:**

- Does your child know how to read/write?
- Does your child know how to add/subtract?
- Does your child know how to multiply/divide?

**Recommendation Path:**
🟢 _RoboKids Class (4y–8y)_ for those who enjoy building or robotics.
🟢 _Math/English/Science Academic Class (4y–18y)_ for foundational improvement.
🟢 _French Academic Class (4y–18y)_ if showing interest in language learning.

---

### **If older than 7 years old:**

- Does your child know how to multiply/divide?
- Does your child know how to write an essay?
- Does your child know how to type?
- Does your child know how to program/code?

**Recommendation Path:**
🟢 _Beginner Coding Class (8y+)_ if they show interest in technology.
🟢 _iPath Self-Development Class (8y–15y)_ if their challenges are non-academic (e.g., organization, focus, motivation, or confidence).
🟢 _RoboKIT Class (9y–13y)_ if they enjoy engineering, robotics, or building projects.

---

### **If older than 8 years old:**

- Does your child know how to write an essay?
- Does your child know how to type?
- Does your child know how to program/code?

**Recommendation Path:**
🟢 _Advanced Coding Class (8y+)_ if proficient with technology or enjoys problem-solving.
🟢 _Math/English/Science Advanced Class (4y–18y)_ for high-achieving students.
🟢 _iPath Self-Development Class (8y–15y)_ for personal growth and soft skills.

---

## 👩‍🏫 **Section 4 – Adult Learner Branch**

If the participant is **18 years or older**, present adult-specific learning paths:

- **Adult ESL Class** – for learners improving general English proficiency.
- **Adult IELTS Preparation Class** – for those preparing for international study or immigration.
- **Adult CELPIP Preparation Class** – for Canadian immigration readiness.
- **Adult FSL Class** – for adults learning French as a second language.

**Additional Option:**

- **DELF Preparation Class (9y+)** – for French learners pursuing an official certification.

---

## 💡 **Program Matching Logic Overview**

The system cross-references answers to recommend **up to 3 best-fit programs** based on the following criteria:

| Category                 | Input Factors                                    | Recommendation Type                         |
| ------------------------ | ------------------------------------------------ | ------------------------------------------- |
| **Academic Performance** | Grades below B                                   | Academic Class (subject-based)              |
| **High Achievers**       | Grades above B                                   | Advanced Class (subject-based)              |
| **Interests**            | Enjoys building, robotics, coding                | Robotics or Coding programs (age dependent) |
| **Learning Challenges**  | Non-academic struggles (e.g., confidence, focus) | iPath Self-Development                      |
| **Younger Learners**     | Under 5 years old                                | UARO Robotics Class                         |
| **Mid-Age Learners**     | 4–8 years old                                    | RoboKids or foundational Academic           |
| **Pre-Teens**            | 9–13 years old                                   | RoboKIT or Advanced Academics               |
| **Teen Learners**        | 13–18 years old                                  | Advanced Academics or Coding                |
| **Adults**               | 18+                                              | ESL, CELPIP, IELTS, or FSL                  |

---

## 🧠 **Summary of All Programs**

| Program                         | Age Range | Focus                                     |
| ------------------------------- | --------- | ----------------------------------------- |
| **Math Academic / Advanced**    | 4–18y     | Core math skills & enrichment             |
| **English Academic / Advanced** | 4–18y     | Reading, writing, grammar                 |
| **Science Academic / Advanced** | 4–18y     | Hands-on scientific learning              |
| **French Academic / Advanced**  | 4–18y     | Language development                      |
| **UARO Robotics**               | 3–5y      | Early robotics exploration                |
| **RoboKids**                    | 4–8y      | Intro to robotics & engineering           |
| **RoboKIT**                     | 9–13y     | Intermediate robotics & teamwork          |
| **Beginner Coding**             | 8y+       | Foundational programming                  |
| **Advanced Coding**             | 8y+       | Advanced logic & real projects            |
| **iPath Self-Development**      | 8–15y     | Confidence, communication, growth mindset |
| **DELF Preparation**            | 9y+       | French certification readiness            |
| **Adult ESL**                   | 18y+      | General English proficiency               |
| **Adult IELTS Prep**            | 18y+      | Academic English testing                  |
| **Adult CELPIP Prep**           | 18y+      | Canadian immigration English              |
| **Adult FSL**                   | 18y+      | French for adult learners                 |

---

## 🧭 **Outcome**

After completing the questionnaire:

- The system analyzes **age**, **academic level**, **favourite/least favourite subjects**, **challenges**, and **hobbies**.
- Based on this data, it automatically generates **the top 3 recommended programs** tailored to the student’s needs.
- These recommendations balance **academic enrichment**, **skill development**, and **personal growth**, ensuring every learner — from preschoolers to adults — is guided to the best possible learning path.

---

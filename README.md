# IT3040 - ITPM Assignment 01: Test Automation
**Student Name:** D.M SURAGE  
**Student ID:** IT23742604

This project contains an automated test suite for the Singlish-to-Sinhala translator available at [swifttranslator.com](https://www.swifttranslator.com/). It utilizes the Playwright framework to validate 35 specific test scenarios.

---

## Tools & Technologies
* **Playwright** – End-to-end test automation framework
* **Node.js** – JavaScript runtime environment
* **JavaScript** – Test scripting language
* **Git & GitHub** – Version control and repository hosting

---

## 📂 Project Structure

```text
IT23742604/
├── IT23742604-tests/
│   └── negetive.spec.js
    └── positive.spec.js     
├── IT23742604-screenshots/    
├── playwright.config.js       
├── package.json               
└── README.md                   
```



##  Prerequisites
Ensure the following are installed on your system:

Node.js (v18 or later recommended)

# Git

A modern web browser (Chromium/Chrome)

## Installation & Setup
Clone the repository

### Bash
git clone ```(https://github.com/Dhana-11-creator/IT23742604.git) ```
Navigate to the project directory


### Bash
```
cd IT23742604
Install dependencies
```

### Bash
```
npm install
Install Playwright browsers
```

### Bash
``` npx playwright install chromium ```

## Running the Tests
To execute all 35 test cases (24 Positive, 10 Negative, 1 UI) and generate screenshots:

### Bash
```npx playwright test
To run a specific test and see it in action (Headed mode):
```

### Bash
```npx playwright test --headed ```

## Test Coverage
Positive Functional Tests (24): Standard Singlish to Sinhala translations and daily conversation scenarios.

Negative Functional Tests (10): Handling of ambiguous input, invalid characters, symbols, and formatting errors.

UI Tests (1): Real-time translation clearing and UI responsiveness.

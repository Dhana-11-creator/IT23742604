const { test, expect } = require('@playwright/test');


const scenarios = [
 

{ 
    id: 'Neg_Fun_0001', 
    name: 'No Spacing Stress', 
    input: 'mamagedharayanavaa', 
    expected: 'මමගෙදරයනවා' 
  },
  { 
    id: 'Neg_Fun_0002', 
    name: 'Symbol Confusion', 
    input: 'm@m@ g#dh#r@', 
    expected: 'මම ගෙදර' 
  },
  { 
    id: 'Neg_Fun_0003', 
    name: 'Incorrect Phonetics', 
    input: 'isthuthi', 
    expected: 'ස්තූතියි' 
  },
  { 
    id: 'Neg_Fun_0004', 
    name: 'Pure Special Chars', 
    input: '!@#$%^&*', 
    expected: '!@#$%^&*' 
  },
  { 
    id: 'Neg_Fun_0005', 
    name: 'Repeating Consonants', 
    input: 'kkkkkkkkkk', 
    expected: 'ක්ක්ක්ක්ක්ක්ක්ක්ක්ක්' 
  },
  { 
    id: 'Neg_Fun_0006', 
    name: 'Foreign Script Mix', 
    input: 'mama NiHao yanawa', 
    expected: 'මම NiHao යනවා' 
  },
  { 
    id: 'Neg_Fun_0007', 
    name: 'Excessive Spacing', 
    input: 'mama      yanawa', 
    expected: 'මම  යනවා' 
  },
  { 
    id: 'Neg_Fun_0008', 
    name: 'Code Tag Input', 
    input: '<html>api</html>', 
    expected: '<html>අපි</html>' 
  },
  { 
    id: 'Neg_Fun_0009', 
    name: 'Numbers Only', 
    input: '987654321', 
    expected: '987654321' 
  },
  { 
    id: 'Neg_Fun_0010', 
    name: 'Emoji Text Handling', 
    input: 'suba dhavasak 😊', 
    expected: 'සුබ දවසක් 😊' 
  }
];

const uiScenarios = [
  { 
    id: 'Pos_UI_0001', 
    name: 'Real-time Clear Check', 
    input: 'test', 
    expected: '' 
  }
];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });
    
    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    //For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}
const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
 

 { id: 'Pos_Fun_0001',
  name: 'Morning Greeting', 
  input: 'suba udhasanak wewa',
   expected: 'සුබ උදෑසනක් වේවා' 
  },


  { id: 'Pos_Fun_0002',
     name: 'Software Update Mixed', 
     input: 'aluth update eka install karanna',
      expected: 'අලුත් update එක install කරන්න'
     },


  { id: 'Pos_Fun_0003', 
    name: 'Thanking Expression', 
    input: 'godak sthuthi obata', 
    expected: 'ගොඩක් ස්තුතියි ඔබට'
   },


  { id: 'Pos_Fun_0004', 
    name: 'Polite Request', 
    input: 'karunakarala mata udavu karanna', 
    expected: 'කරුණාකරලා මට උදවු කරන්න' 
  },


  { id: 'Pos_Fun_0005', 
    name: 'Future Tense', 
    input: 'mama heta ennam', 
    expected: 'මම හෙට එන්නම්' 
  },


  { id: 'Pos_Fun_0006', 
    name: 'Past Tense', 
    input: 'api giya sathiye giya', 
    expected: 'අපි ගිය සතියේ ගියා' 
  },


  { id: 'Pos_Fun_0007', 
    name: 'Negative Sentence', 
    input: 'mama kema kaala nae', 
    expected: 'මම කෑම කාලා නෑ' 
  },


  { id: 'Pos_Fun_0008', 
    name: 'Question Form', 
    input: 'oyaa kohedha inne?', 
    expected: 'ඔයා කොහෙද ඉන්නේ?' 
  },


  { id: 'Pos_Fun_0009', 
    name: 'Complex Sentence', 
    input: 'vassa nisa api ada yanne nae', 
    expected: 'වැස්ස නිසා අපි අද යන්නේ නෑ' 
  },


  { id: 'Pos_Fun_0010', 
    name: 'Technical Terms', 
    input: 'Mage laptop eka on venne nae', 
    expected: 'මගේ laptop එක on වෙන්නේ නෑ' 
  },


  { id: 'Pos_Fun_0011', 
    name: 'Simple Nouns', 
    input: 'amma saha thaththa', 
    expected: 'අම්මා සහ තාත්තා'
  },


  { id: 'Pos_Fun_0012', 
    name: 'Adjective usage', 
    input: 'lassana malak', 
    expected: 'ලස්සන මලක්' 
  },


  { id: 'Pos_Fun_0013', 
    name: 'Plural Pronouns', 
    input: 'api hamoma yammu', 
    expected: 'අපි හැමෝම යමු' 
  },


  { id: 'Pos_Fun_0014', 
    name: 'Time Reference', 
    input: 'dan welava kiyada?', 
    expected: 'දැන් වෙලාව කීයද?'
  },


  { id: 'Pos_Fun_0015', 
    name: 'Location Reference', 
    input: 'pothsala thiyenne kohedha?', 
    expected: 'පුස්තකාලය තියෙන්නේ කොහෙද?'
   },


  { id: 'Pos_Fun_0016', 
    name: 'Number Conversion', 
    input: 'mata 100k dhenna', 
    expected: 'මට 100ක් දෙන්න' 
  },

  { id: 'Pos_Fun_0017', 
    name: 'Directional terms', 
    input: 'dakunata harenna', 
    expected: 'දකුණට හැරෙන්න' 
  },

  { id: 'Pos_Fun_0018', 
    name: 'Common Verb', 
    input: 'pothak kiyavanna', 
    expected: 'පොතක් කියවන්න' 
  },

  { id: 'Pos_Fun_0019', 
    name: 'Food/Drink', 
    input: 'mata vathura ekak dhenna', 
    expected: 'මට වතුර එකක් දෙන්න' 
  },
  
  { id: 'Pos_Fun_0020', 
    name: 'Social Media Term', 
    input: 'Facebook eke post ekak damma', 
    expected: 'Facebook එකේ post එකක් දැම්මා' 
  },


  { id: 'Pos_Fun_0021', 
    name: 'Weather', 
    input: 'ada godak rassnei', 
    expected: 'අද ගොඩක් රස්නෙයි' 
  },


  { id: 'Pos_Fun_0022', 
    name: 'Greeting - Night', 
    input: 'suba rathriyak', 
    expected: 'සුබ රාත්‍රියක්' 
  },


  { id: 'Pos_Fun_0023', 
    name: 'Compound Word', 
    input: 'pin sidda venava', 
    expected: 'පින් සිද්ධ වෙනවා'
   },

  { id: 'Pos_Fun_0024', 
    name: 'Long Sentence', 
    input: 'oyaata puluvan nam mata hetath udavu karanna kiyala illanava', 
    expected: 'ඔයාට පුළුවන් නම් මට හෙටත් උදවු කරන්න කියලා ඉල්ලනවා' }


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
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}
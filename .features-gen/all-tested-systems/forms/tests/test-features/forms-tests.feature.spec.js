// Generated from: all-tested-systems\forms\tests\test-features\forms-tests.feature
import { test } from "../../../../../all-tested-systems/general-helpers/fixtures.ts";

test.describe('Filling Forms Test Scenarios', () => {

  test.beforeEach('Background: Common steps for all Scenarios', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('The user is on the forms page', null, { page }); 
  });
  
  test('[TC-FORMS-01] Fill All Fields In The Form With Valid Data And Submit It', { tag: ['@forms', '@regress', '@smoke'] }, async ({ When, Then, page }) => { 
    await When('The user submits form with all fields filled with valid data', null, { page }); 
    await Then('The form is submitted successfully', null, { page }); 
  });

  test('[TC-FORMS-02] Verify required field error messages appear on empty submit', { tag: ['@forms', '@regress', '@smoke'] }, async ({ When, Then, page }) => { 
    await When('The user submits empty form', null, { page }); 
    await Then('The appropriate error messages are displayed', null, { page }); 
  });

  test.describe('[TC-FORMS-03] Verify invalid field format shows validation error messages', () => {

    test('Example #1', { tag: ['@forms', '@regress'] }, async ({ When, Then, page }) => { 
      await When('The user fills the form with invalid "Email" format and submits it', null, { page }); 
      await Then('The appropriate validation error message is displayed for "Email"', null, { page }); 
    });

    test('Example #2', { tag: ['@forms', '@regress'] }, async ({ When, Then, page }) => { 
      await When('The user fills the form with invalid "Phone Number" format and submits it', null, { page }); 
      await Then('The appropriate validation error message is displayed for "Phone Number"', null, { page }); 
    });

    test('Example #3', { tag: ['@forms', '@regress'] }, async ({ When, Then, page }) => { 
      await When('The user fills the form with invalid "Password" format and submits it', null, { page }); 
      await Then('The appropriate validation error message is displayed for "Password"', null, { page }); 
    });

    test('Example #4', { tag: ['@forms', '@regress'] }, async ({ When, Then, page }) => { 
      await When('The user fills the form with invalid "Confirm Password" format and submits it', null, { page }); 
      await Then('The appropriate validation error message is displayed for "Confirm Password"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('all-tested-systems\\forms\\tests\\test-features\\forms-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@forms","@regress","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user submits form with all fields filled with valid data","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The form is submitted successfully","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@forms","@regress","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user submits empty form","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then The appropriate error messages are displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":22,"tags":["@forms","@regress"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user fills the form with invalid \"Email\" format and submits it","stepMatchArguments":[{"group":{"start":37,"value":"\"Email\"","children":[{"start":38,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The appropriate validation error message is displayed for \"Email\"","stepMatchArguments":[{"group":{"start":58,"value":"\"Email\"","children":[{"start":59,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":23,"tags":["@forms","@regress"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user fills the form with invalid \"Phone Number\" format and submits it","stepMatchArguments":[{"group":{"start":37,"value":"\"Phone Number\"","children":[{"start":38,"value":"Phone Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The appropriate validation error message is displayed for \"Phone Number\"","stepMatchArguments":[{"group":{"start":58,"value":"\"Phone Number\"","children":[{"start":59,"value":"Phone Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":24,"tags":["@forms","@regress"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user fills the form with invalid \"Password\" format and submits it","stepMatchArguments":[{"group":{"start":37,"value":"\"Password\"","children":[{"start":38,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The appropriate validation error message is displayed for \"Password\"","stepMatchArguments":[{"group":{"start":58,"value":"\"Password\"","children":[{"start":59,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":25,"tags":["@forms","@regress"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on the forms page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user fills the form with invalid \"Confirm Password\" format and submits it","stepMatchArguments":[{"group":{"start":37,"value":"\"Confirm Password\"","children":[{"start":38,"value":"Confirm Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The appropriate validation error message is displayed for \"Confirm Password\"","stepMatchArguments":[{"group":{"start":58,"value":"\"Confirm Password\"","children":[{"start":59,"value":"Confirm Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
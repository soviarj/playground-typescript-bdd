// Generated from: all-tested-systems\banking\tests\test-features\login-tests.feature
import { test } from "playwright-bdd";

test.describe('Login Page Test Scenarios', () => {

  test('[TC-LOGIN-01] Successful Login With Admin Credentials', { tag: ['@login', '@banking'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('The user is navigated to the bank homepage', null, { page }); 
    await When('"ADMIN_USER" fills Credentials', null, { page }); 
    await And('The user clicks "LOGIN" button', null, { page }); 
    await Then('The user is redirected to the bank dashboard', null, { page }); 
  });

  test('[TC-LOGIN-02] Failed Login Shows Error Alert For Invalid Credentials', { tag: ['@login', '@banking', '@regress'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('The user is navigated to the bank homepage', null, { page }); 
    await When('"WRONG_USER" fills Credentials', null, { page }); 
    await And('The user clicks "LOGIN" button', null, { page }); 
    await Then('The system generates an error alert', null, { page }); 
  });

  test('[TC-LOGIN-03] Toggle Password Visibility', { tag: ['@login', '@banking', '@regress'] }, async ({ Given, When, Then, page }) => { 
    await Given('The user is navigated to the bank homepage', null, { page }); 
    await When('"WRONG_USER" fills Credentials', null, { page }); 
    await Then('The password field type is "password"', null, { page }); 
    await When('The user clicks "TOGGLE" button', null, { page }); 
    await Then('The password field type is "text"', null, { page }); 
    await When('The user clicks "TOGGLE" button', null, { page }); 
    await Then('The password field type is "password"', null, { page }); 
  });

  test('[TC-LOGIN-04] Pressing Enter In The Password Field Submits The Login Form', { tag: ['@login', '@banking'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('The user is navigated to the bank homepage', null, { page }); 
    await When('"ADMIN_USER" fills Credentials', null, { page }); 
    await And('The user presses "Enter" key', null, { page }); 
    await Then('The user is redirected to the bank dashboard', null, { page }); 
  });

  test('[TC-LOGIN-05] Read-Only Viewer Login Grants Restricted Access', { tag: ['@login', '@banking', '@regress'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('The user is navigated to the bank homepage', null, { page }); 
    await When('"VIEWER_USER" fills Credentials', null, { page }); 
    await And('The user clicks "LOGIN" button', null, { page }); 
    await Then('The user is redirected to the bank dashboard', null, { page }); 
    await Then('The Read-Only user can see the viewer badge and correct role indicator', null, { page }); 
    await When('The user is navigated to the "Accounts" Page', null, { page }); 
    await Then('The Read-Only user cannot see Edit and Delete Accounts buttons', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('all-tested-systems\\banking\\tests\\test-features\\login-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login","@banking"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is navigated to the bank homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When \"ADMIN_USER\" fills Credentials","stepMatchArguments":[{"group":{"start":0,"value":"\"ADMIN_USER\"","children":[{"start":1,"value":"ADMIN_USER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And The user clicks \"LOGIN\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"LOGIN\"","children":[{"start":17,"value":"LOGIN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then The user is redirected to the bank dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@login","@banking","@regress"],"steps":[{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The user is navigated to the bank homepage","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When \"WRONG_USER\" fills Credentials","stepMatchArguments":[{"group":{"start":0,"value":"\"WRONG_USER\"","children":[{"start":1,"value":"WRONG_USER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And The user clicks \"LOGIN\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"LOGIN\"","children":[{"start":17,"value":"LOGIN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then The system generates an error alert","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@login","@banking","@regress"],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given The user is navigated to the bank homepage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When \"WRONG_USER\" fills Credentials","stepMatchArguments":[{"group":{"start":0,"value":"\"WRONG_USER\"","children":[{"start":1,"value":"WRONG_USER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then The password field type is \"password\"","stepMatchArguments":[{"group":{"start":27,"value":"\"password\"","children":[{"start":28,"value":"password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When The user clicks \"TOGGLE\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"TOGGLE\"","children":[{"start":17,"value":"TOGGLE","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then The password field type is \"text\"","stepMatchArguments":[{"group":{"start":27,"value":"\"text\"","children":[{"start":28,"value":"text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When The user clicks \"TOGGLE\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"TOGGLE\"","children":[{"start":17,"value":"TOGGLE","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then The password field type is \"password\"","stepMatchArguments":[{"group":{"start":27,"value":"\"password\"","children":[{"start":28,"value":"password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":27,"tags":["@login","@banking"],"steps":[{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given The user is navigated to the bank homepage","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When \"ADMIN_USER\" fills Credentials","stepMatchArguments":[{"group":{"start":0,"value":"\"ADMIN_USER\"","children":[{"start":1,"value":"ADMIN_USER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And The user presses \"Enter\" key","stepMatchArguments":[{"group":{"start":17,"value":"\"Enter\"","children":[{"start":18,"value":"Enter","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user is redirected to the bank dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":34,"tags":["@login","@banking","@regress"],"steps":[{"pwStepLine":38,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given The user is navigated to the bank homepage","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When \"VIEWER_USER\" fills Credentials","stepMatchArguments":[{"group":{"start":0,"value":"\"VIEWER_USER\"","children":[{"start":1,"value":"VIEWER_USER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And The user clicks \"LOGIN\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"LOGIN\"","children":[{"start":17,"value":"LOGIN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then The user is redirected to the bank dashboard","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then The Read-Only user can see the viewer badge and correct role indicator","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When The user is navigated to the \"Accounts\" Page","stepMatchArguments":[{"group":{"start":29,"value":"\"Accounts\"","children":[{"start":30,"value":"Accounts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then The Read-Only user cannot see Edit and Delete Accounts buttons","stepMatchArguments":[]}]},
]; // bdd-data-end
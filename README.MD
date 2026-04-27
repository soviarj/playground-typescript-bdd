# 🧪 Playwright BDD Demo Project

End-to-end test automation project built with Playwright and BDD approach using Gherkin scenarios.

---

## 📦 Setup

### 🔧 1. Install dependencies

```bash
npm install
```

> Includes:
> - @playwright/test
> - playwright-bdd
> - dotenv

---

### 🔑 2. Environment configuration

Create a `.env` file based on `.env.example` and fill in credentials:

```env
BANK_ADMIN_USER_NAME=
BANK_ADMIN_USER_PASSWORD=
BANK_READONLY_USER_NAME=
BANK_READONLY_USER_PASSWORD=
```

👉 For demo purposes, you can use:

```env
BANK_ADMIN_USER_NAME=admin
BANK_ADMIN_USER_PASSWORD=admin123
BANK_READONLY_USER_NAME=viewer
BANK_READONLY_USER_PASSWORD=viewer123
```

---

## 📁 Project Structure

Tests are located in the `all-tested-systems` directory, organized into subfolders based on the tested system (e.g. `all-tested-systems/banking/test`).

Each test module contains:
- `test-features` – Gherkin scenarios that define the test cases
- `test-steps` – step definitions implementing the logic executed by the Gherkin scenarios

## ▶️ Running Tests

### 🧪 Run all tests

```bash
npm test
```

👉 Runs all tests in **headless mode**

---

### 🎯 Run specific tests (by tags or test IDs)

This project uses **BDD (Behavior Driven Development)**.  
Test scenarios are defined in `.feature` files using Gherkin syntax.

---

### 🔹 Run by test ID

Example scenario:
```
[TC-LOGIN-01] Successful Login With Admin Credentials
```

```bash
npx playwright test --grep "TC-LOGIN-01"
```

👉 Headless mode

```bash
npx playwright test --grep "TC-LOGIN-01" --headed
```

👉 Headed mode (UI browser)

---

### 🔹 Run by tags

Example tags:
- `@smoke`
- `@regress`

```bash
npx playwright test --grep "@regress"
```

👉 Headless mode

```bash
npx playwright test --grep "@regress" --headed
```

👉 Headed mode

---

### 🔹 Combine tags

```bash
npx playwright test --grep "@smoke|@regress"
```

---

## 🧰 Debugging & Tools

### 🐞 Debug mode

```bash
npx playwright test --grep "TC-LOGIN-01" --debug
```

---

### 🖥️ Playwright UI runner

```bash
npx playwright test --ui
```

---

## 📝 Notes

### ⚠️ Gherkin cache (important)

If you modify `.feature` files, you need to clear generated files:

```bash
Remove-Item -Recurse -Force .features-gen
```

Then regenerate them:

```bash
npm test
```

> 💡 You can cancel the run once tests are loaded — no need to execute all tests.

---

## 💡 Best Practices

- Use meaningful tags:
  - `@smoke`
  - `@regress`
  - `@negative`
- Keep test data separated (e.g. `formData.ts`)
- Prefer stable locators (`data-testid`)
- Use Page Object Model for maintainability

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- BDD (Gherkin)
- playwright-bdd

---

## 📌 Project Purpose

This project demonstrates:
- scalable Playwright test architecture
- BDD integration
- clean Page Object Model design
- flexible test data handling
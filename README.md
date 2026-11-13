[![Playwright Tests in Docker](https://github.com/Tomasz-Kolasa/playwright/actions/workflows/tests.yaml/badge.svg)](https://github.com/Tomasz-Kolasa/playwright/actions/workflows/tests.yaml)
# Fotoblog E2E Tests (Playwright)

Automated End-to-End (E2E) tests for the **Fotoblog** application, built using the modern **Playwright** framework and TypeScript.

## 🚀 About the Project

This repository contains a dedicated suite of automated E2E tests for the [photos.besoftware.pro](https://photos.besoftware.pro) web application. The main goal of the project is to verify the core functionalities of the application and ensure high code quality through test automation.

The project is in an **active development phase** – new tests, scenarios, and test components are systematically added.

## 🛠️ Tech Stack & Tools

* [Playwright](https://playwright.dev/) – modern and reliable E2E testing framework
* [TypeScript](https://www.typescriptlang.org/) – strongly typed programming language
* [Page Object Model (POM)](https://playwright.dev/docs/pom) – design pattern structuring the test code
* [Docker](https://www.docker.com/) – containerization for test execution environment
* GitHub Actions – continuous integration (CI) automating test runs

## 🏗️ Architecture & Patterns (Page Object Model)

The project implements the **Page Object Model (POM)** architectural pattern, which provides:

* **Modularity and Readability** – separation of test logic from selector layers and DOM interactions.
* **Maintainability** – potential interface changes require modifications in a single place (the corresponding Page Object class).
* **Scalability** – seamless addition of new tests as the application evolves.

## 🐳 Running with Docker

Thanks to the provided `Dockerfile`, tests can be executed in an isolated container environment without requiring local browser dependency installations.

*Note on Authentication and Secrets:* Certain tests requiring authorization or specific environment variables rely on credentials handled via GitHub Secrets in the CI pipeline. If your local environment lacks access to these secrets, tests requiring authentication might fail unless the appropriate environment variables or `.env` configurations are supplied.

1. **Build the Docker image:**
   ```bash
   docker build -t playwright-tests .
   ```

2. **Run the tests in a container:**
   ```bash
   docker run --rm --ipc=host -e ENV=prod playwright-tests
   ```

## 🔄 Continuous Integration (CI)

The project features a configured CI pipeline (GitHub Actions) that automatically executes the E2E test suite on every code change (push / pull request), providing fast feedback on the application's health.

## ⚙️ Quick Start (Local Installation without Docker)

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version)
* Git

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tomasz-Kolasa/playwright.git
   cd playwright
   ```

2. **Install npm dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

### Running Tests Locally

* **Run tests in headless mode:**
  ```bash
  npx playwright test
  ```

* **Run tests with UI mode:**
  ```bash
  npx playwright test --ui
  ```

* **View detailed test report:**
  ```bash
  npx playwright show-report
  ```

## 📈 Project Status

The project is being developed for educational and portfolio purposes. Future iterations will include expanding test coverage and optimizing the CI/CD pipeline.

## 👤 Author

**Tomasz Kolasa**

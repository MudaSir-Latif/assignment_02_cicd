# Assignment 2: Matrix Testing & Conditional Build

This project demonstrates a Node.js CI/CD pipeline using GitHub Actions with matrix testing and conditional build logic.

## Features
- **Matrix Testing:** Runs tests on Node.js versions 16, 18, and 20.
- **Conditional Build:** Builds artifacts only if all matrix tests pass and the push is to `main` or a version tag (`v*.*.*`).
- **Artifacts:**
  - Test results are stored under `test-results/` for each matrix variant.
  - Build output is stored under `dist/`.
- **Test Summary:** Concatenates test results and checks if the total number of tests has decreased.
- **Manual Build Skip:** Supports skipping the build step via workflow dispatch input.
- **Scheduled Runs:** Nightly test runs using cron.
- **Concurrency:** Cancels superseded runs on the same branch.

## Workflow Overview
- **test (matrix):** Runs `npm test` on Node.js 16, 18, and 20. Uploads test results as artifacts.
- **build:**
  - Waits for all test jobs to pass.
  - Downloads all test artifacts.
  - Concatenates and summarizes test results.
  - Fails if the number of tests decreases.
  - Runs `npm run build` (if present).
  - Uploads the build artifact from `dist/`.

## Usage
1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run tests locally:
   ```sh
   npm test
   ```
4. Build locally (if applicable):
   ```sh
   npm run build
   ```

## GitHub Actions
- The workflow file is located at `.github/workflows/deploy.yml`.
- Triggers on push to `main`, version tags, pull requests, workflow dispatch, and nightly schedule.

## Customization
- Edit `deploy.yml` to adjust Node.js versions, build logic, or artifact handling as needed.

## License
MIT

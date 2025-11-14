# **_AngularRouteC64WithEngMuhamedHajajii_**

<details>

#### 0- update packages:

```bash
        npm update
        npm install @angular/core@latest @angular/cli@latest
        ng update
```

#### 1- install packages:

```bash
npm i
```

#### 2- install bootstrap:

```bash
npm run i:bs
```

#### 3- install fontawesome:

```bash
        npm run i:faw
```

#### 4- generate new app:

```bash
        ng g app "app-name"
```

#### 5- !IMPORTANT move inside the project folder;

```bash
        cd project-folder
        EX: cd projects/app01
```

#### 6- install tailwindcss 3.4.17:

```bash
        npm run i:tw3 #a script
    # or
        npm i -D tailwindcss@3 postcss autoprefixer
        npx tailwindcss@3 init
    #  you should find a file 'tailwindcss.config.js' inside the "src" folder.
```

#### 7- add this to tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'] /*use windsurf to autocomplete it*/,
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### 8- add this to your styles.css

```css
@tailwind base;
@tailwind component;
@tailwind utilities;
```

#### 8.1- PostCSS configuration (optional)

```json
// inside "src" create a file called '.postcssrc.json'
// then add to it:
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

#### 8.2- run:

```bash
ng s # in terminal to serve the app
```

#### 8.3- add this to app.html file to test it:

```html
<h1 class="text-3xl font-bold underline">Hello Tailwind!</h1>
```

#### 9- link your input and output files properly using this command

```bash
        npx tailwindcss -i ./src/styles.css -o ./src/app/app.css -w
```

#### 10- add this to your app component:

```ts
        encapsulation: ViewEncapsulation.None   # import from angular/core
```

</details>

---

## ***Setup Your New App with Tailwind:***

<details>

### 1- update and install "package.json"

```bash
# make sure everything in package.json is up-to-date
ng update
npm update

# install the packages.json
npm i
```

---

### 2- Create Angular app

```bash
# Generate a new app inside your project Folder

ng g app app-name    # this generate new app inside the same workspace you have

# Create new angular workspace with new app
ng new app-name      # this create a new workspace with new app

```

---

### 3- install tailwindcss:

```bash
# inside your root project [project/app-name]


# install tailwind v3
npm i -D tailwindcss@3 postcss autoprefixer

# initialize it by creating the tailwindcss.config.js
npx tailwindcss@3 init

```

---

### 4- Config Tailwindcss:

```js
// inside your tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'] /*use windsurf to autocomplete it*/,
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

```css
/* Inside your styles.css file [projects/app-name/src/styles.css] */
@tailwind base;
@tailwind component;
@tailwind utilities;
```

---

```json
// inside your app folder [projects/app-name]
// create a file with exactly '.postcssrc.json'
//  then add this inside it
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

### 5- Serve and test it:

```html
<!-- add this inside you app.html -->
<h1 class="text-3xl font-bold underline">Hello Tailwind!</h1>
```

---

```bash
# in your terminal
ng s -o
```

</details>

## ***Workspace default md:***

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.<details>

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

</details>

---

# ***The Correct Git Branch Workflow***

<details>
<summary><b><i>Details</i></b></summary>

### For a Single App (e.g., `week01_app`):

```
[Local Development Loop] → [Push to Remote] → [Final Merge when READY]
```

**During development:**

```bash
# 1. Make changes to your app
git add .
git commit -m "feat: add navbar component"
git commit -m "fix: resolve routing issue"
git commit -m "style: update button colors"

# 2. Push to remote branch (as many times as needed)
git push origin week01_app
```

**When the app is COMPLETE and ready for integration:**

```bash
# 3. Merge to main ONLY when finished
git checkout main
git merge week01_app
```

### Visual Workflow:

```
week01_app branch:    commit → commit → commit → push → push → FINAL MERGE
                      ↗                    ↗              ↗
main branch:         ————————————————————————————————————✅ merge point
```

## Complete Multi-App Workflow Example:

### Week 1 Development:

```bash
# Start Week 1
git checkout -b week01_app
# Develop for several days...
git add . && git commit -m "progress: week01 app structure"
git push origin week01_app

# More development...
git add . && git commit -m "feat: week01 completed functionality"
git push origin week01_app

# When Week 1 app is DONE:
git checkout main
git merge week01_app
git push origin main
```

### Week 2 Development:

```bash
# Start fresh from updated main
git checkout main
git pull origin main  # Get latest with week01 app
git checkout -b week02_app

# Develop week02 app...
git add . && git commit -m "feat: start week02 app"
git push origin week02_app

# Continue pushing commits until done...
```

## When SHOULD You Merge?

| Scenario                                             | Should You Merge? |
| ---------------------------------------------------- | ----------------- |
| After each small commit                              | ❌ NO             |
| After each push to your feature branch               | ❌ NO             |
| When the app is **feature complete** and tested      | ✅ YES            |
| When you're ready to integrate with main project     | ✅ YES            |
| At the end of the week (when the weekly app is done) | ✅ YES            |

## Best Practices:

1. **Push Frequently** to your feature branch (saves your work)
2. **Merge Only When Complete** (keeps main branch stable)
3. **Use Descriptive Commit Messages** so you know what each push contains
4. **Test Before Merging** to ensure you're not breaking the main project

## Your Current Situation:

Since you're on `week01_app` and have committed:

- Continue developing and pushing to `week01_app`
- Only merge to `main` when Week 1 app is **completely finished**
- Then create `week02_app` branch and repeat the process

</details>
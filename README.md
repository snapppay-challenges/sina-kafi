# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- [ ] Main functionalities: These items SHOULD work correctly
  - [ ] List view
    - [ ] Show list of contacts properly with image, name, and tel and be clickable (The tel has been ignored)
    - [ ] Handle server errors
  - [ ] Pagination
    - [ ] Infinite scroll/page number button
    - [ ] Handle loading and end of the list => It handles end of the list
  - [ ] Detail view
    - [ ] Handle routing properly
    - [ ] Handle server errors
    - [ ] Handle routing error on manually changing the detail id
  - [ ] Search
    - [ ] Using Debounce 
    - [ ] Handle multiple requests
    - [ ] Search by first name, last name, and telephone => Search by last name is overlooked
  - [ ] Most visited contacts
    - [ ] Handle incorrect items in the list (e.g., when you manually change the detail page address) => It shows a not found message
- [ ] Clean code:
  - [ ] Well-structured project
  - [ ] Separate concerns
  - [ ] Component-thinking
  - [ ] Simple to understand and less complexity
  - [ ] No over-engineering
  - [ ] Avoid bad-practice patterns (e.g., multi re-rendering components, useEffect chaining)
  - [ ] No acute performance issues
  - [ ] Using pure CSS in a good way / Using CSS frameworks like Tailwind without extra complexity
- [ ] Plus points and nice to have: DON’T judge just based on lack of these items; they should be better compared to other competitors:

  - [ ] Creativity or eye-catching design
  - [ ] Using absolute path
  - [ ] Using ESLint
  - [ ] Using TypeScript in a best practice way (otherwise is a negative point)
  - [ ] Using (unit/e2e) Test in an applicable way not just writing some samples

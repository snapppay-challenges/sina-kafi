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

- [x] Main functionalities: These items SHOULD work correctly
  - [x] List view
    - [x] Show list of contacts properly with image, name, and tel and be clickable (The tel has been ignored)
    - [x] Handle server errors
  - [x] Pagination
    - [x] Infinite scroll/page number button
    - [x] Handle loading and end of the list => It handles end of the list
  - [x] Detail view
    - [x] Handle routing properly
    - [x] Handle server errors
    - [x] Handle routing error on manually changing the detail id
  - [x] Search
    - [x] Using Debounce
    - [x] Handle multiple requests
    - [x] Search by first name, last name, and telephone => Search by last name is overlooked
  - [x] Most visited contacts
    - [x] Handle incorrect items in the list (e.g., when you manually change the detail page address) => It shows a not found message
- [ ] Clean code:
  - [x] Well-structured project
  - [x] Separate concerns
  - [x] Component-thinking
  - [x] Simple to understand and less complexity
  - [x] No over-engineering
  - [x] Avoid bad-practice patterns (e.g., multi re-rendering components, useEffect chaining)
  - [ ] No acute performance issues - (Ali BM: Missing virtualization)
  - [x] Using pure CSS in a good way / Using CSS frameworks like Tailwind without extra complexity
- [ ] Plus points and nice to have: DON’T judge just based on lack of these items; they should be better compared to other competitors:

  - [ ] Creativity or eye-catching design
  - [ ] Using absolute path
  - [ ] Using ESLint
  - [x] Using TypeScript in a best practice way (otherwise is a negative point)
  - [ ] Using (unit/e2e) Test in an applicable way not just writing some samples

# Code Review

- ## Ali BM

  - ### Pros

    - Good file and folder structure.
    - Familiar with testing.
    - Using typescript in a good way.
    - Written debounce by himself.
    - Good separation of concerns.
    - Implemented `LazyImage` component.

  - ### Cons

    - Lifted page up in the url and if you get more pages (ex: 10) then refresh the page you'll lose first 9 pages of contacts.
    - Missing request cancelation.
    - Requesting for contacts list on navigating to the contact details page (WHY?).
    - All implementations in the first commit. Commit messages are not well structured.
    - No virtualization.

  - ### Conclusion

    - I think code base is good enough to pass this step.

  - ## Mohammadreza

    agree with Ali's points

  - ### Pros

    - main functionalities are working properly
    - separation of concerns is good
  
  - ### Cons

    - pagination with URL is the main negative point
    - we can ignore virtualization for this step

  - ### Conclusion

    - He can be a good candidate for our mid-level position

  - ## Sina

    - no third party lib has been used for debouncing
    - namings could be a bit better
    - seperation of concerns
    - correct error handing

    in total : we can continue with him for the next step

# Test Application for Eiger

This is a simple React application created with `create-react-app`. It demonstrates basic functionality and features without reliance on heavy external libraries.

---

## Design Decisions

### 1. **Max-Height Styling**
- **Note**: I didn't set the `max-height` to match the exact design height because this approach ensures that the application looks correct on devices with varying heights. 
- This decision prioritizes better responsiveness and adaptability over strict adherence to the provided design dimensions.

---

### 2. **UI Library Choice**
- In real-world projects, I would prefer to use a robust UI library like **Material-UI** (MUI) to streamline the development of user interfaces. 
- However, for this project, I intentionally chose a simpler and more classic approach to focus on custom styling and maintain lightweight dependencies.

---

### 3. **Icons**
- Icons are implemented using the **React Icons** library in some cases. 
- This library provides a wide range of icons while keeping the project lightweight and easy to style.

---

## Technologies Used

- **React**: Core framework.
- **Tailwind CSS**: For styling.
- **React Icons**: For scalable and customizable icons.

---


## Installation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# App Component
This is a ReactJS component that serves as the main component for the application. The component includes the following functionalities:

## Dark/Light mode toggle
Routing using React Router DOM
## Import statements
This component imports the following modules and components:

./darkMode.css: CSS styles for the dark mode toggle.
Routes and Route from react-router-dom: used for routing the application.
useState and useEffect from react: used for handling the theme toggle logic.
Home, Works, Navbar, About, PlatonStudyCase, SolaneStudyCase, and SedalStudyCase from ./components: These are various components used in the application.
State and Toggle Logic
The component uses the useState hook to keep track of the theme, with the default value being set to "light". The toggleTheme function is used to switch between light and dark modes.

The useEffect hook is used to set the class name of the document.body element to the current theme.

## Routing
The component uses the Routes and Route components from react-router-dom to handle the routing of the application. The following routes are defined:

"/": Renders the Home component.
"/about": Renders the About component.
"/works": Renders the Works component, and includes the following sub-routes:
"/works/platon-study-case": Renders the PlatonStudyCase component.
"/works/sedal-study-case": Renders the SedalStudyCase component.
"/works/solane-study-case": Renders the SolaneStudyCase component.
The component finally exports the App component as the default export.

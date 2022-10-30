import Main from "./Main"

const PageTwo = () => {
    return (
        <div>
            <Main />
            <h1>Routing Implementation</h1>
            <p> we want import the import BrowserRouter,  Routes, Route  } from "react-router-dom"</p>
            <pre>
                BrowserRouter
                Routes
                Route Route
                Routes
                BrowserRouter
            </pre>
            <p>for use of link we want import Link from react-router-dom</p>
            <h1>How do you switch/navigate form one component to another in React?</h1>
            <p>this are used for Navigate from one page to another page in ReactJS , Way to navigate from one page to another page and they are</p>

            <li>Link</li>
            <li>NavLink</li>
            <li>Redirect Component</li>
            <li>history.push</li>
            <li>history.replace</li>
            <p><b>1. Link</b> Link is used to manage the navigation and it worked as an anchor tag. </p>
            <p><b>2. NavLink</b> NavLink behaves the same as Link but in addition, it comes with a new attribute called “activeClassName” which helps us to add the class to the anchor tag when page url will match.</p>
            <p><b>3. Redirect Component</b> Rendering a Redirect to="/path/to/redirect" /> component is used to manage the redirection. When you manage the redirection through the Redirect component then it will override the current location in the history stack.</p>
            <p><b>4. history.push</b> If you want programmatically navigation from one page to another then you should use history.push method. In other words, we can say if you want to manage the redirection on button click then you can use it. This function will push a new entry in the history stack.</p>
            <p><b>5. history.replace</b> history.replace function will replace the current location in the history stack and manage the redirection same as the history.push.</p>
        </div>
    )
}
export default PageTwo
import Main from "./Main"

const PageOne = () =>{
    return(
        <div>
            <Main/>
           <h1>What is the Difference between react and react native? Which one is library or framework?</h1>
           <p><b>React :</b> a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.</p>
           <p> <b>React Native:</b> is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.</p>
           <h1>What is the package name you are using for routing</h1>
           <p>the package used for the routing -->npm install react-router-dom</p>
           <p>and install the package and the version --->"react-router-dom": "^6.4.2"</p>
           <b>Routing Implementation in page two</b>
        </div>
    )
}
export default PageOne
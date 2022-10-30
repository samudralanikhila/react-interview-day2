import Main from "./Main"
import { LazyLoadImage } from "react-lazy-load-image-component"

const PageThree = () => {
    return (
        <div>
            <Main />
            <h1>What is lazy loading in react ?</h1>
            <ul>
                <li>Optimizing the assets you use on your websites – like lazy loading images – is one of the most effective ways to improve web performance.</li>
                <li>Doing this helps you make sure that your websites are fast, they have great SEO, and it helps enhance the user experience.</li>
                <li>the lazy loading is also used in image and iframes by the condition loading="lazy" in img and iframes</li>
            </ul>
            <h1>how to implement lazy loading in react</h1>
            <ul>
                <li>firt we want install the pacage --> npm i react-lazy-load-image-component</li>
                <li>and it will in dependencies "react-lazy-load-image-component": "^1.5.5"</li>
            </ul>
            <LazyLoadImage src={"https://images.unsplash.com/photo-1563278689-3519903a3e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFyZSUyMGJpcmR8ZW58MHx8MHx8&w=1000&q=80"}
                width={600} height={400}
                alt="Image Alt"
            />
            <h1>Difference b/w Stateful and stateless Component</h1>

            <p><b>Stateful:</b> If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.</p>
            <p><b>stateless:</b> If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.</p>

        </div>
    )
}
export default PageThree
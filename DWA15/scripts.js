// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// );

// ReactDOM.render(page, document.getElementById("root"));
// function Head() {
//     return (

//     );

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Why I am excited to learn React!</h1>
            <ol>
                <li>
                    It is going to make my life so much easier when I've learnt
                    to use it properly
                </li>
                <li>
                    It will save me a lot of time that I might spend debugging
                    my code
                </li>
            </ol>
            <footer>
                <small>© 2023 Peters development. All rights reserved.</small>
            </footer>
        </div>
    );
}

// function Foot() {
//     return ()
// }

ReactDOM.render(<Page />, document.getElementById("root"));

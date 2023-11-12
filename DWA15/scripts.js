function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    );
}

function Foot() {
   return (<footer>
        <small> © 2023 Peters development. All rights reserved.</small>
    </footer> ) 
}

function Content() {
    return (
        <div>
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
        </div>
    );
}
function Page() {
    return (
        <div>
            <Header />
            <Content/>
            <Foot />
        </div>
    );
}

// function Foot() {
//     return ()
// }

ReactDOM.render(<Page />, document.getElementById("root"));

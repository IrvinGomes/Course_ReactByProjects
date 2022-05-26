const e = React.createElement;

function Page() {
    return (
        <div className="page">
            <Navbar />
            <Content />
        </div>
    )
}

function Navbar() {
    return (
        <nav>
            <h1>Irvin Wep</h1>
            <List />
        </nav>
    )
}

function Content() {
    return (
        <div className="content">
        </div>
    )
}

function List() {
    return (
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //e('div', null, <Page />),
    <Page />
)
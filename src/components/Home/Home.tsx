import './Home.css'
const Home = () => {
    const history = process.env.REACT_APP_HIST!;
    const excellence = process.env.REACT_APP_25_YEAR!;
    return (
        <div>
        <h1>Home</h1>
        <div className="history">
        <p>{history}</p>
        </div>
        <div className="excellence">
        <p>{excellence}</p>
        </div>
        </div>
    );
}
export default Home;
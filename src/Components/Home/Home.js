import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <div>
            <h1>Szkoła Reacta</h1>
            <h3>Lekcja 7</h3>
            <p>Zadania 1-3</p>
            <Link to="/list" style={{textDecoration: 'none', color: "#f39c12"}}>
                <h2>Users list</h2>
            </Link>
            <Footer />
        </div>
    )
}

export default Home;
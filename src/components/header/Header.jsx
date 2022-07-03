import "./header.css";
import "./button.css";
// import Login from "./Login";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function Header() {
    return (
        <header>
            <div className="max-width">
                <h1>
                    <Link to="/">
                        <img src={Logo} alt="My Blog" />
                    </Link>
                </h1>
                <ul>
                    <Logout />
                </ul>
            </div>
        </header>
    )
}
import "./header.css";
import "./button.css";
import Login from "./Login";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

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
                    <Login />

                    {/* <!-- 로그아웃 --> */}
                    {/* <li>
                    <a href="#" className="button gray">
                        <img src="./assets/icon-login.svg" alt="" />
                        <span>Login</span>
                    </a>
                </li>
                <li className="only-pc">
                    <a href="#" className="button gray">
                        <img src="./assets/icon-register.svg" alt="" />
                        <span>Register</span>
                    </a>
                </li> */}
                    {/* <!--// 로그아웃 --> */}
                </ul>
            </div>
        </header>
    )
}
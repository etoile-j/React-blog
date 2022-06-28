import "./header.css";
import "./button.css";
import Login from "./Login";
import Logo from "../../assets/Logo.svg";

export default function Header() {
    return (
        <div className="max-width">
            <h1>
                <a href="./">
                    <img src={Logo} alt="My Blog" />
                </a>
            </h1>
            <ul>
                <Login />

                {/* <!-- 로그아웃 --> */}
                {/* <li>
                    <a href="#" class="button gray">
                        <img src="./assets/icon-login.svg" alt="" />
                        <span>Login</span>
                    </a>
                </li>
                <li class="only-pc">
                    <a href="#" class="button gray">
                        <img src="./assets/icon-register.svg" alt="" />
                        <span>Register</span>
                    </a>
                </li> */}
                {/* <!--// 로그아웃 --> */}
            </ul>
        </div>
    )
}
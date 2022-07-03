import loginIcon from "../../assets/icon-login.svg";
import registerIcon from "../../assets/icon-register.svg";
import logoutIcon from "../../assets/icon-logout.svg";
import modifyWhiteIcon from "../../assets/icon-modify-white.svg";
import { useState } from "react";

export default function Logout() {
    const [login, setLogin] = useState(true);

    const changeState = () => {
        setLogin(!login);
    }

    const loginState = (
            <>
                <li className="profile-img">
                    <a href="#">
                        <img src="./assets/profile.jpg" alt="My Page" />
                    </a>
                </li>
                <li>
                    <a href="#" className="button">
                        <img src={modifyWhiteIcon} alt="" />
                        <span>Write</span>
                    </a>
                </li>
                <li>
                    <button className="button white" onClick={changeState}>
                        <img src={logoutIcon} alt="" />
                        <span>Logout</span>
                    </button>
                </li>
            </>
        )

        const logoutState = (
            <>
            <li>
                <a href="#" className="button gray" onClick={changeState}>
                    <img src={loginIcon} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li className="only-pc">
                <a href="#" className="button gray">
                    <img src={registerIcon} alt="" />
                    <span>Register</span>
                </a>
            </li>
            </>
        )

    return (
        <>
        {login ? loginState : logoutState}
        </>
    );

}
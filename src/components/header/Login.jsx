import logoutIcon from "../../assets/icon-logout.svg";
import modifyWhiteIcon from "../../assets/icon-modify-white.svg";

export default function Login() {
    return (
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
                <button className="button white">
                    <img src={logoutIcon} alt="" />
                    <span>Logout</span>
                </button>
            </li>
        </>
    )
}
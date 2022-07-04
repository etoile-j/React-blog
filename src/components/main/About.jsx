import "./about.css";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Github from "../../assets/Github.svg";

export default function About({data}) {
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src={data.profileImg} alt="" className="user-profile" />
            <p className="user-name">{data.name}</p>
            <p className="user-description">{data.userInfo}</p>
            <h3>Categories</h3>
            <ul className="categories">
                {data.category.map((value, idx) => (
                    <li key={idx}><a href="#">{value}</a></li>
                ))}
            </ul>
            <h3>Follow</h3>
            <ul className="sns">
                <li>
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Github} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </aside>
    );
}
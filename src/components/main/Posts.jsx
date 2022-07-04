import Post from "./Post";
import "./posts.css"

export default function Posts({data}) {
    return (
        <ul className="posts">
            <Post data={data} />
        </ul>
    );
}
import "./author.css";

export default function Author({data}) {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author"><img src={data.profileImg} alt="" /> Chilli</dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">{data.created}</dd>
        </dl>
    );
}
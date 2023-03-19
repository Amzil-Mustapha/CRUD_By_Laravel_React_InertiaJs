import { Link } from "@inertiajs/react";
import React from "react";

function Article_detailes({ article }) {
    return (
        <>
            <h1>Article Detailes : {article.id}</h1>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <small>
                Published At : {article.created_at.slice(0, 10)} Updated At :
                {article.updated_at.slice(0, 10)}
            </small>
            <br />
            <br />
            <Link href="/article/index" as="button">
                Back
            </Link>
            ___
            <Link href={`/article/edit/${article.id}`} as="button">
                Edit
            </Link>
        </>
    );
}

export default Article_detailes;

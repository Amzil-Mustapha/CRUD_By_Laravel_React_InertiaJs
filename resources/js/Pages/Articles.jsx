import { Link, router, usePage } from "@inertiajs/react";
import React from "react";

function Articles({ articles }) {
    const { flash } = usePage().props;
    return (
        <>
            <h1>
                Username : {flash.username.toUpperCase()} --- ID : {flash.id}
            </h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((ele, index) => {
                        return (
                            <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.body}</td>
                                <td>
                                    <Link href={`/article/show/${ele.id}`}>
                                        Show Details
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Articles;

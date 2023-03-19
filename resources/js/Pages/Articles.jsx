import { usePage } from "@inertiajs/react";
import React from "react";

function Articles({ articles }) {
    const {flash} = usePage().props;
    return (
        <>
        <h1>Username : {flash.username.toUpperCase()}</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                    <th>USER ID</th>
                </tr>
                </thead>
                <tbody>
                {articles.map((ele, index) => {
                    return (
                        <tr key={index}>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.body}</td>
                            <td>{ele.user_id}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default Articles;

import { Link, usePage } from "@inertiajs/react";
import React from "react";

function Home() {
    const { flash } = usePage().props;
    return (
        <div>
            <h1>Home Page || {flash.username}</h1>
            <br />
            <ul>
                <li>
                    <Link href="/article/index">Articles</Link>
                </li>
            </ul>
            <br />
            <Link href="/logout" method="get" as="button" type="button">
                Logout
            </Link>
        </div>
    );
}

export default Home;

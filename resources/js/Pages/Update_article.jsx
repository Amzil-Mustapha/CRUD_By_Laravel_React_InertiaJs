import { router } from "@inertiajs/react";
import React ,{useState} from "react";

function Update_article(props) {
    const [Title, setTitle] = useState("");
    const [Body, setBody] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        router.get(`/article/update/${props.id}`, { Title, Body });
    };

    return (
        <>
            <h1>Update Article</h1>
            <form onSubmit={submitHandler}>
                Title :
                <input
                    type="text"
                    name="title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                Body :
                <input
                    type="text"
                    name="body"
                    value={Body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </>
    );
}

export default Update_article;

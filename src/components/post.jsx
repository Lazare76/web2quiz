import React, { useState, useEffect } from "react";
import axios from "axios";

const post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        setLoading(true);
        SetError(null);
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        }
        catch(error){
            setError("Something went wrong, tyr again later");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchPost();
    }, []);

    if (loading) return <p>loading...</p>;
    if (error) return <p>error...</p>;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Posts</h1>
            <button onClick={fetchPosts} style={{ marginBottom: "20px" }}>
                Refresh Posts
            </button>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
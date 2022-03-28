import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Our news</h1>
            {
                posts.map((post) => {
                    return <Link style={{ display: "block", fontSize: "20px", margin: "10px" }} key={post.id} to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                })
            }
        </div>
    )
}

export default Blog
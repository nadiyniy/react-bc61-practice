import React, { useEffect, useState } from 'react'
import { fetchPost } from '../services/api'
import { Link } from 'react-router-dom'

export const Posts = () => {
    const [data, setData] = useState(null)


    useEffect(() => {
        fetchPost().then(data => setData(data.posts))
    }, [])
    return (
        <div>
            <ul>
                {data?.map(post => <li key={post.id}>
                    <Link to={post.id.toString()}>{post.title}</Link>

                </li>

                )}
            </ul>
        </div>
    )
}

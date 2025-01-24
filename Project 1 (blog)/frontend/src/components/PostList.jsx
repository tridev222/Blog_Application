import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCards from './BlogCards';
import { Box } from '@mui/material';

const PostList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get('http://localhost:3000/api/user/create/post');
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    return (
        <Box 
            sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "20px",  
                justifyContent: "center", 
                padding: "10px",
                width: '100%',  
            }}
        >
            {blogs.map((blog) => (
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",  
                        width: "100%",
                        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)", 
                        borderRadius: "12px", 
                        height: "400px", 
                    }}
                    key={blog._id}
                >
                    <BlogCards blog={blog} />
                </Box>
            ))}
        </Box>
    );
};

export default PostList;

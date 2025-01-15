'use client';
import React from 'react'
import { useParams } from "next/navigation";
import Card from "@/components/Card";
import axios from 'axios';
function page() {
    const [blog, setBlogs] = React.useState([])
    const blogbycategory = useParams().blogbycategory;
    React.useEffect(() => {
        if (blogbycategory) {
            GetBlogByCategory()
        }
    }, [blogbycategory])

    const GetBlogByCategory = async () => {
        try {
            const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL
            const response = await axios.get(`${baseurl}/blogs/${blogbycategory}`, { withCredentials: true })
            if (response.data && response.data.status === 'success') {
                setBlogs(response.data.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <React.Fragment>
            {blog && blog?.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
                {blog.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        location={item.location}
                        type={item.type}
                        price={item.price}
                        email={item.email}
                    />
                ))}
            </div>}
            <div className="flex justify-center">
                {blog.length === 0 &&
                    <p className="text-red-500">No blog found for {blogbycategory}</p>
                }
            </div>
        </React.Fragment>
    )
}

export default page

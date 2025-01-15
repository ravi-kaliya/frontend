'use client';
import Card from "@/components/Card";
import React from 'react';
import axios from "axios";
const data = [
  {
    image: "/images/airbnb1.jpg",
    location: "Asia, Afghanistan",
    type: "Beachfront",
    price: "₹ 50",
    hostImage: "/images/host1.jpg",
    email: 'admin0@gmail.com'
  },
  {
    image: "/images/airbnb2.jpg",
    location: "Americas, United States",
    type: "Castles",
    price: "₹ 470",
    hostImage: "/images/host2.jpg",
    email: 'admin1@gmail.com'
  },
  {
    image: "/images/airbnb3.jpg",
    location: "Americas, Canada",
    type: "Cabin",
    price: "₹ 230",
    hostImage: "/images/host3.jpg",
    email: 'admin2@gmail.com'
  },
  {
    image: "/images/airbnb4.jpg",
    location: "Europe, Switzerland",
    type: "Rustic",
    price: "₹ 350",
    hostImage: "/images/host4.jpg",
    email: 'admin3@gmail.com'
  },
  {
    image: "/images/airbnb5.jpg",
    location: "Europe, Iceland",
    type: "Romantic",
    price: "₹ 650",
    hostImage: "/images/host5.jpg",
    email: 'admin4@gmail.com'
  },
  {
    image: "/images/airbnb1.jpg",
    location: "Asia, Afghanistan",
    type: "Beachfront",
    price: "₹ 50",
    hostImage: "/images/host1.jpg",
    email: 'admin5@gmail.com'
  },
  {
    image: "/images/airbnb2.jpg",
    location: "Americas, United States",
    type: "Castles",
    price: "₹ 470",
    hostImage: "/images/host2.jpg",
    email: 'admin6@gmail.com'
  },
  {
    image: "/images/airbnb3.jpg",
    location: "Americas, Canada",
    type: "Cabin",
    price: "₹ 230",
    hostImage: "/images/host3.jpg",
    email: 'admin7@gmail.com'
  },
  {
    image: "/images/airbnb4.jpg",
    location: "Europe, Switzerland",
    type: "Rustic",
    price: "₹ 350",
    hostImage: "/images/host4.jpg",
    email: 'admin8@gmail.com'
  },
  {
    image: "/images/airbnb5.jpg",
    location: "Europe, Iceland",
    type: "Romantic",
    price: "₹ 650",
    hostImage: "/images/host5.jpg",
    email: 'admin9@gmail.com'
  },
  {
    image: "/images/airbnb1.jpg",
    location: "Asia, Afghanistan",
    type: "Beachfront",
    price: "₹ 50",
    hostImage: "/images/host1.jpg",
    email: 'admin10@gmail.com'
  },
  {
    image: "/images/airbnb2.jpg",
    location: "Americas, United States",
    type: "Castles",
    price: "₹ 470",
    hostImage: "/images/host2.jpg",
    email: 'admin11@gmail.com'
  },
  {
    image: "/images/airbnb3.jpg",
    location: "Americas, Canada",
    type: "Cabin",
    price: "₹ 230",
    hostImage: "/images/host3.jpg",
    email: 'admin12@gmail.com'
  },
  {
    image: "/images/airbnb4.jpg",
    location: "Europe, Switzerland",
    type: "Rustic",
    price: "₹ 350",
    hostImage: "/images/host4.jpg",
    email: 'admin13@gmail.com'
  },
  {
    image: "/images/airbnb5.jpg",
    location: "Europe, Iceland",
    type: "Romantic",
    price: "₹ 650",
    hostImage: "/images/host5.jpg",
    email: 'admin14@gmail.com'
  },
];

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    GetBlogByCategory()
  }, [])

  const GetBlogByCategory = async () => {
    try {
      const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL
      const response = await axios.get(`${baseurl}/blogs/Rustic`, {withCredentials : true})
      if (response.data && response.data.status === 'success') {
        setBlogs(response?.data?.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {blogs.length > 0 && blogs.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            location={item.location}
            type={item.type}
            price={item.price}
            email={item.email}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {blogs.length === 0 &&
          <p className="text-danger">No blog found</p>
        }
      </div>
    </React.Fragment>
  );
};

export default Home;

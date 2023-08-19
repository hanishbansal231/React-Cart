import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
function Home() {
  const [loading, setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {
        loading ? (<Spinner/>) : 
        (posts.length > 0) ? (<div>
          {
            posts.map((post) => (
              <Product key={post.id} post={post} />
            ))
          }
        </div>) : <div>Data Not Found</div>
      }
    </div>
  )
}

export default Home
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';

import './Home.css';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    const fetchPosts = async () => {
        const {data} = await axios.get("/post" + search);
        console.log(data);
        setPosts(data);
    }

    useEffect(()=>{
        fetchPosts();
    },[])

    return(
        <>
            <Header/>
            <div className='Home'>
                <Posts posts={posts}/>
            </div>
        </>
    )
}
export default Home;
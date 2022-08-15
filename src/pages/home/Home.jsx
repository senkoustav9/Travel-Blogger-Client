import axios from 'axios';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SearchBar from '../../components/searchBar/SearchBar';

import './Home.css';

const Home = () => {
    const [value,setValue] = useState("");
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        let res;
        if(value === "")
            res = await axios.get("/post");
        else
        {
            res = await axios.get(`/post?search=${value}`);
            setTimeout(() => {
                toast.info(`${res.data.length} results matched`);
            },300);
        }
        setPosts(res.data);
    }
    useEffect(()=>{
        fetchPosts();
    },[value]);
    return(
        <>
            <Header/>
            <div className='Home'>
                <Posts posts={posts}/>
            </div>
            <SearchBar setValue={setValue}/>
        </>
    )
}
export default Home;
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import './Home.css';

const Home = () => {
    return(
        <>
            <Header/>
            <div className='Home'>
                <Posts/>
                <SideBar/>
            </div>
        </>
    )
}
export default Home;
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';
import './Single.css'

const Single = () => {
    return(
        <div className='Single'>
            <SinglePost/>
            <SideBar/>
        </div>
    )
}
export default Single;
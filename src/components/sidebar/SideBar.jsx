import './SideBar.css'
const SideBar = () => {
    return(
        
        <div className='SideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className='sideBarImg' src='https://images.pexels.com/photos/12285563/pexels-photo-12285563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quasi consectetur nesciunt omnis.
                </p>
            </div>

            <div className='sideBarItem'>
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className='sideBarList'>
                <li className="sideBarListItem">Life</li>
                <li className="sideBarListItem">Music</li>
                <li className="sideBarListItem">Style</li>
                <li className="sideBarListItem">Sport</li>
                <li className="sideBarListItem">Tech</li>
                <li className="sideBarListItem">Cinema</li>
            </ul>
            </div>
            
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className="sideIcon fa-brands fa-facebook-square"></i>
                    <i className="sideIcon fa-brands fa-twitter-square"></i>
                    <i className="sideIcon fa-brands fa-pinterest-square"></i>
                    <i className="sideIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        
        </div>
    )
}
export default SideBar;
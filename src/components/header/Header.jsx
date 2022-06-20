import './Header.css'
const Header = () => {
    return(
        <div className="Header">
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blogs</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
    )
}
export default Header;
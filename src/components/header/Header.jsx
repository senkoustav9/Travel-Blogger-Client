import './Header.css'
const Header = () => {
    return(
        <div className="Header">
            <div className="headerTitles">
                <span className='headerTitleSm'>Tech</span>
                <span className='headerTitleLg'>BLOGS</span>
            </div>
            <img className="headerImg" src="./background.jpg" alt=""/>
        </div>
    )
}
export default Header;
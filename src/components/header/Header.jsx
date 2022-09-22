import './Header.css'
const Header = () => {
    return(
        <div className="Header">
            <div className="headerTitles">
                <span className='headerTitleSm'>TRAVEL</span>
                <span className='headerTitleLg'>BLOGGER</span>
            </div>
            <img className="headerImg" src="./background.jpg" alt=""/>
        </div>
    )
}
export default Header;
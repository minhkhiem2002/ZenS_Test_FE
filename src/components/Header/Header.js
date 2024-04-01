import './Header.scss'
import Logo from '../../assets/Logo.jpg'
import Avatar from '../../assets/Avatar.jpg'
const Header = () => {
    return (
        <div className = "container">
            <img src = {Logo} alt = "Logo" className = "logoImage"/>
            <div className = "account">
                <div className = "account-left">
                    <p className = "Name1">Handicrafted by</p>
                    <p className = "Name2">Jim HLS</p>
                </div>
                <div className = "account-right">
                    <img src = {Avatar} alt = "Avatar" className = "logoAvatar"/>
                </div>
            </div>
        </div>
    )
}
export default Header
import './UserAvatar.css';
import UserImage from './images/user-avatar.jpg'

const UserAvatar = () => {
    return (
        <div className="user-avatar">
            <img src={UserImage} alt="user one" />
        </div>
    )
}

export default UserAvatar

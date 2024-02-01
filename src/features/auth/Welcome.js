import { Link } from 'react-router-dom'

const Welcome = () => {

    const content = (
        <section className="welcome">
            <div className="links-container"> {/* Links contener */}
                <h1>Welcome!</h1>
                <p><Link to="/dash/trails">Check packages</Link></p>
                <p><Link to="/dash/trails/new">Add New Package</Link></p>
                <p><Link to="/dash/users">View User Settings</Link></p>
                <p><Link to="/dash/users/new">Add New User</Link></p>
            </div>
            <div className="image-container">
                <img src="./img/1.png" alt="LetMeTakeCare Logo"/>
            </div>
        </section>
    )

    return content
}
export default Welcome
import { Link } from 'react-router-dom'

const Welcome = () => {

    const content = (
        <section className="welcome">

            <h1>Welcome!</h1>

            <p><Link to="/dash/trails">Check packages</Link></p>

            <p><Link to="/dash/users">View User Settings</Link></p>

            <div className="image-container">
                <img src="./img/1.png"/>
            </div>
            
        </section>
        
    )

    return content
}
export default Welcome
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">LetMeTakeCare application!</span></h1>
            </header>
            
            <footer>
                <Link to="/login">Let's Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
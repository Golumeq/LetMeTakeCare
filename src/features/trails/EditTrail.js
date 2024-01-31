import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTrailById } from './trailsApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditTrailForm from './EditTrailForm'

const EditTrail = () => {
    const { id } = useParams()

    const trail = useSelector(state => selectTrailById(state, id))
    const users = useSelector(selectAllUsers)

    const content = trail && users ? <EditTrailForm trail={trail} users={users} /> : <p>Loading...</p>

    return content
}
export default EditTrail
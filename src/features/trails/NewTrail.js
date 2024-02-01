import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewTrailForm from './NewTrailForm'

const NewTrail = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewTrailForm users={users} />

    return content
}
export default NewTrail
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectTrailById } from './trailsApiSlice'

const Trail = ({ trailId }) => {

    const trail = useSelector(state => selectTrailById(state, trailId))

    const navigate = useNavigate()

    if (trail) {
        const created = new Date(trail.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(trail.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/trails/${trailId}`)

        return (
            <tr className="table__row">
                <td className="table__cell trail__status">
                    {trail.completed
                        ? <span className="trail__status--completed">Completed</span>
                        : <span className="trail__status--open">Open</span>
                    }
                </td>
                <td className="table__cell trail__created">{created}</td>
                <td className="table__cell trail__updated">{updated}</td>
                <td className="table__cell trail__title">{trail.title}</td>
                <td className="table__cell trail__username">{trail.username}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Trail
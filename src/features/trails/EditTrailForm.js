import { useState, useEffect } from "react"
import { useUpdateTrailMutation, useDeleteTrailMutation } from "./trailsApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"

const EditTrailForm = ({ trail, users }) => {

    const [updateTrail, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateTrailMutation()

    const [deleteTrail, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteTrailMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState(trail.title)
    const [text, setPackage] = useState(trail.text)
    const [completed, setCompleted] = useState(trail.completed)
    const [userId, setUserId] = useState(trail.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setPackage('')
            setUserId('')
            navigate('/dash/trails')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setPackage(e.target.value)
    const onCompletedChanged = e => setCompleted(prev => !prev)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveTrailClicked = async (e) => {
        if (canSave) {
            await updateTrail({ id: trail.id, user: userId, title, text, completed })
        }
    }

    const onDeleteTrailClicked = async () => {
        await deleteTrail({ id: trail.id })
    }

    const created = new Date(trail.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(trail.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}

            > {user.username}</option >
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Trail #{trail.ticket}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button"
                            title="Save"
                            onClick={onSaveTrailClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="icon-button"
                            title="Delete"
                            onClick={onDeleteTrailClicked}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
                <label className="form__label" htmlFor="trail-title">
                    Title / Destination:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="trail-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label className="form__label" htmlFor="trail-text">
                    Package description:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="trail-text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />
                <div className="form__row">
                    <div className="form__divider">
                        <label className="form__label form__checkbox-container" htmlFor="trail-completed">
                            WORK COMPLETE:
                            <input
                                className="form__checkbox"
                                id="trail-completed"
                                name="completed"
                                type="checkbox"
                                checked={completed}
                                onChange={onCompletedChanged}
                            />
                        </label>

                        <label className="form__label form__checkbox-container" htmlFor="trail-username">
                            ASSIGNED TO:</label>
                        <select
                            id="trail-username"
                            name="username"
                            className="form__select"
                            value={userId}
                            onChange={onUserIdChanged}
                        >
                            {options}
                        </select>
                    </div>
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditTrailForm
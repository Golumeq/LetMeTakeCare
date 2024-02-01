import { useGetTrailsQuery } from "./trailsApiSlice"
import Trail from "./Trail"

const TrailsList = () => {
    const {
        data: trails,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTrailsQuery('trailsList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = trails

        const tableContent = ids?.length
            ? ids.map(trailId => <Trail key={trailId} trailId={trailId} />)
            : null

        content = (
            <table className="table table--trails">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th trail__status">Progress</th>
                        <th scope="col" className="table__th trail__created">Created at</th>
                        <th scope="col" className="table__th trail__updated">Updated at</th>
                        <th scope="col" className="table__th trail__title">Title / Destination</th>
                        <th scope="col" className="table__th trail__username">Driver</th>
                        <th scope="col" className="table__th trail__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default TrailsList
export const SortList = (props) => {
    return <div className="sortList">
        <button onClick={() => props.sortHandler('favourite', 'asc')}>Sort Favourite ASC</button>
        <button onClick={() => props.sortHandler('favourite', 'desc')}>Sort Favourite DESC</button>
        <button onClick={() => props.sortHandler('name', 'asc')}>Sort Name ASC</button>
        <button onClick={() => props.sortHandler('name', 'desc')}>Sort Name DESC</button>
    </div>
}
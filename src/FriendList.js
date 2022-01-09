const Friend = (props) => {
    const { friend } = props;
    return <li className="friend">
        <div>
           <span className="name"><b>{friend.name}</b></span>
           <small className="description">{friend.description}</small>
        </div>
        <div className="iconsList">
            <i className={`bi ${friend.isFavourite ? 'bi-star-fill' : 'bi-star'} favourite`} onClick={() => props.setFavoriteFriend(friend.id, !friend.isFavourite)}></i>
            <i className="bi bi-trash remove" onClick={() => props.removeFriend(friend.id)}></i>
        </div>
    </li>
}

export const FriendsList = (props) => {
    return <>
        <ul>
            {
                props.friends.map(friend => <Friend key={friend.id} friend={friend} removeFriend={props.removeFriend} setFavoriteFriend={props.setFavoriteFriend} />)
            }
        </ul>
    </>
}
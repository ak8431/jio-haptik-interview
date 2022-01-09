import { useState } from "react"

export const TextInput = (props) => {
    const [name, setFriendName] = useState('');

    const handleNameChange = (e) => {
        setFriendName(e.target.value);
    }

    const handleFriendSubmit = (e) => {
        e.preventDefault();
        props.addFriend(name);
        setFriendName('');
    }

    return <form onSubmit={handleFriendSubmit} className="flex">
        <input className="inputText" onChange={handleNameChange} value={name} placeholder="Enter your friend's name" />
    </form>
}
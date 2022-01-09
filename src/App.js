import { useState } from "react";
import { FriendsList } from "./FriendList";
import { Header } from "./Header";
import { TextInput } from "./TextInput";
import './App.css';
import { SortList } from "./SortList";

// Sample Friend
const friends = [
  {
    id : 1,
    name: 'Rahul Gupta',
    description: 'is your friend',
    isFavourite: true,
  },
  {
    id : 2,
    name: 'Shivangi Sharma',
    description: 'is your friend',
    isFavourite: false,
  },
  {
    id : 3,
    name: 'Akash Singh',
    description: 'is your friend',
    isFavourite: false,
  }
];

function App() {
  const [friendList, updateFriendsList] = useState(friends);

  const addFriend = (name) => {
    if (!name || name.trim() === '') {
      return false;
    }
    const updatedList = [...friendList];
    const lastFriendId = updatedList[updatedList.length - 1]?.id || 0;
    const newFriend = {
      id: lastFriendId + 1,
      name,
      description: 'is your friend',
      isFavourite: false,
    }
    updatedList.push(newFriend);
    updateFriendsList(updatedList);
  }

  const setFavoriteFriend = (id, isFavourite) => {
    const updatedFriendList = [...friendList];
    updatedFriendList.map(friend => {
      if (friend.id === id) {
        friend.isFavourite = isFavourite;
      }
      return friend
    })
    updateFriendsList(updatedFriendList);
  }

  const removeFriend = (id) => {
    const copyOfFriendList = [...friendList]
    const filteredList = copyOfFriendList.filter(friend => friend.id !== id);
    updateFriendsList(filteredList);
  }

  const sortByFavouriteDesc = () => {
    let updatedList = [...friendList];
    updatedList.sort((x,y) =>{
        if (y.isFavourite) {return -1;}
        if (x.isFavourite) {return 1;}
        return 0;
    });
    updateFriendsList(updatedList);
  };

  const sortByFavouriteAsc = () => {
      let updatedList = [...friendList];
      updatedList.sort((x,y) =>{
          if (x.isFavourite) {return -1;}
          if (y.isFavourite) {return 1;}
          return 0;
      });
      updateFriendsList(updatedList);
  };

  const sortAlphaAscending = () => {
    let updatedList = [...friendList];
    updatedList = updatedList.sort((x,y) =>{
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    });
    updateFriendsList(updatedList);
  };

  const sortAlphaDescending = () => {
      let updatedList = [...friendList];
      updatedList = updatedList.sort((x,y) =>{
          if (x.name > y.name) {return -1;}
          if (x.name < y.name) {return 1;}
          return 0;
      });
      updateFriendsList(updatedList);
  };

  const sortHandler = (type, order = 'asc') => {
    switch(type) {
      case 'favourite': order === 'desc' ? sortByFavouriteDesc() : sortByFavouriteAsc();
        break;
      case 'name': order === 'desc' ? sortAlphaDescending() : sortAlphaAscending();
        break
      default: console.log('wrong sort');
    }
  }

  return (
    <>
      <div className="friendsList">
        <Header name='Friends List' />
        <TextInput addFriend={addFriend} />
        <FriendsList friends={friendList} removeFriend={removeFriend} setFavoriteFriend={setFavoriteFriend} />
      </div>
      <SortList sortHandler={sortHandler} />
    </>
  );
}

export default App;

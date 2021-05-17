import React from "react";
import { useEffect, useState } from "react";
import { getFriends } from "../utils/getFriends";
import FriendCard from "./FriendCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UpdateForm from "./UpdateForm";

export default function FriendList() {
  const [friends, setFriends] = useState([]);
  const [addFriend, setAddFriend] = useState(false);
  const [friendToEdit, setFriendToEdit] = useState();

  const getFriends = () => {
    return axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("friends before", friends);
        setFriends(res.data);
        console.log("friends after", friends);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getFriends();
  }, []);
  return (
    <div>
      <h1>List Of Friends</h1>
      {addFriend && (
        <UpdateForm setAddFriend={setAddFriend} setFriends={setFriends} />
      )}
      {friendToEdit ? (
        <UpdateForm
          friendToEdit={friendToEdit}
          setFriendToEdit={setFriendToEdit}
          friends={friends}
          setFriends={setFriends}
        />
      ) : (
        <button onClick={() => setAddFriend(true)}> add friend </button>
      )}

      {friends.map((friend) => (
        <FriendCard
          friend={friend}
          key={friend.id}
          setFriendToEdit={setFriendToEdit}
        />
      ))}
    </div>
  );
}

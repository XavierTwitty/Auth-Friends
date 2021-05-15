import React from "react";
import { useEffect, useState } from "react";
import { getFriends } from "../utils/getFriends";
import FriendCard from "./FriendCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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

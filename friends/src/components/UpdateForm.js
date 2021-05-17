import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function UpdateForm(props) {
  const [form, setForm] = useState(
    props.friendToEdit || { name: "", age: "", email: "" }
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (props.friendToEdit) {
      axiosWithAuth()
        .put(`/api/friends/${props.friendToEdit.id}`, form)
        .then((res) => {
          console.log(res);
          props.setFriends(
            props.friends.map((friend) => {
              if (friend.id === Number(res.data.id)) {
                return res.data;
              } else {
                return friend;
              }
            })
          );
        })
        .catch((err) => console.log(err));
    } else {
      axiosWithAuth()
        .post("/api/friends", form)
        .then((res) => {
          console.log("save", res);
          props.setFriends(res.data);
          props.setAddFriend(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${props.friendToEdit.id}`)
      .then((res) => {
        console.log(res);
        props.setFriends(
          props.friends.filter((friend) => friend.id != Number(res.data))
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Name: </label>
        <input name="name" onChange={handleChange} value={form.name} />
        <label> Age: </label>
        <input name="age" onChange={handleChange} value={form.age} />
        <label> Email: </label>
        <input name="email" onChange={handleChange} value={form.email} />
        <button type="submit"> save </button>
        <button onClick={handleDelete}> delete </button>
      </form>
    </div>
  );
}

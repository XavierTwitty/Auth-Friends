const FriendCard = (props) => {
  const { name, age, email } = props.friend;

  return (
    <div onClick={() => props.setFriendToEdit(props.friend)}>
      <div>
        <h2> Name: {name} </h2>
      </div>
      <div>
        <h2>Age: {age}</h2>
      </div>
      <div>
        {" "}
        <h2> Email: {email}</h2>
      </div>
    </div>
  );
};
export default FriendCard;

function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </article>
  );
}

export default UserCard;

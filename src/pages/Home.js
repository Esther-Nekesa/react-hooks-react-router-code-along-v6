import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const userList = users.map((user) => <UserCard key={user.id} user={user} />);

  return (
    <main>
      <h1>Home!</h1>
      {userList}
    </main>
  );
}

export default Home;

import Image from "next/image";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());
  return (
    <div>
      <div className="font-bold">{new Date().toLocaleTimeString()}</div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

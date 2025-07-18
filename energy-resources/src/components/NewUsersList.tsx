import { useEffect, useState } from "react";

export default function NewUsersList() {
  const [users, setUsers] = useState<any>([]);

  const getUsersList = async () => {
    try {
      const res = await fetch(
        "/.netlify/functions/getFromBlob",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      if (res.status === 200) {
        setUsers(result);
      }
    } catch (error) {
      console.error("Error fetching users list:", error);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);
  
  return (
    <div>
      {users.map((user: any, index: number|string) => (
        <div
          key={user.key || index}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <strong>
            {user.data.firstName} {user.data.lastName}
          </strong>
          <div>Email: {user.data.email}</div>
          <div>Contact: {user.data.contact}</div>
          <div>Address: {user.data.address}</div>
          <div>City: {user.data.city}</div>
          <div>State: {user.data.state}</div>
          <div>Pin: {user.data.pin}</div>
          <div>Query: {user.data.query}</div>
        </div>
      ))}
    </div>
  );
}

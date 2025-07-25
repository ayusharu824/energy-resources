import { useEffect, useState } from "react";
import { GetUserDetails } from "../API/apiService";

export default function NewUsersList() {
  const [users, setUsers] = useState<any>([]);

  const getUsersList = async () => {
    try {
      var response = await GetUserDetails();
      if(response.isSuccess){
        setUsers(response.data);
      }
      console.log(response);
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
            {user.firstName} {user.lastName}
          </strong>
          <div>Email: {user.email}</div>
          <div>Company Name: {user.companyName}</div>
          <div>Contact: {user.contactNumber}</div>
          <div>Address: {user.address}</div>
          <div>City: {user.city}</div>
          <div>State: {user.state}</div>
          <div>Pin: {user.pinCode}</div>
          <div>Query: {user.userQuery}</div>
        </div>
      ))}
    </div>
  );
}

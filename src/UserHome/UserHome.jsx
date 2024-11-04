import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Hi,{user?.displayName ? user.displayName : "Back"}</h2>
    </div>
  );
};

export default UserHome;
//tc is test context

import { useContext } from "react";
import UserContext from "../../context/userContext";

function ProfileTC() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.username}</div>;
}

export default ProfileTC;

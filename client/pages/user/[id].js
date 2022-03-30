import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth.js";
const User = () => {
  //for now "user" only has _id, username, email, I'll add more information for this query
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;

  return (
    <h3>
      userID: {user._id}, username: {user.username}, email: {user.email}
    </h3>
  );
};
export default User;

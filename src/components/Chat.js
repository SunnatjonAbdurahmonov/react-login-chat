import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

function Chat() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return <div>hello chat</div>;
}

export default Chat;

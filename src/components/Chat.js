import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 10 }}
        justifyContent={"center"}>
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowX: "auto",
            background: "linear-gradient(-45deg, #39249a, #e14e42)"
          }}>
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                backgroundColor:
                  user.uid === message.uid 
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(228, 83, 167, 0.549)",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "40%",
                padding: 5,
                borderRadius: "10px",
              }}>
              <Grid container
                  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
              >
                <Avatar src={message.photoURL} />
                <div> {message.displayName} </div>
              </Grid>
              <div style={{marginTop: 7}}> {message.text} </div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}>
          <TextField
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={"Message"}
            fullWidth
            variant={"outlined"}
          />
          <Button
            onClick={sendMessage}
            variant={"outlined"}
            style={{ background: "green", marginTop: 5, color: "white" }}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;

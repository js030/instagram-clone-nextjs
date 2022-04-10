import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          username={post.data().username}
          img={post.data().image}
          caption={post.data().caption}
          userImg={post.data().profileImg}
        />
      ))}
    </div>
  );
}

export default Posts;

import { useState } from "react";
import axios from "axios";
import CommentSubmit from "./CommentSubmit";
import commentStyles from "../styles/comment.module.css";

const Comments = ({ name, comments, margin, topLevel }) => {
  const [replies, setReplies] = useState(Array(comments.length).fill(false));

  async function like(comment) {
    comment.likes += 1;
    await axios.post("http://aryabed.com/api/comment", {
      post: name,
      comments,
    });
    location.reload();
  }

  return (
    <div>
      {comments.map((comment, index) => (
        <div
          key={index}
          className={commentStyles.container}
          style={{
            marginLeft: margin,
            marginRight: margin,
            marginBottom: topLevel ? 50 : 20,
            backgroundColor: topLevel ? "rgba(125, 125, 125, 0.1)" : null,
          }}
        >
          <h4>
            {comment.author} 🕒 {comment.date}
          </h4>
          <p> {comment.content} </p>
          <div style={{ display: "flex", gap: 10 }}>
            <p
              className={commentStyles.interaction}
              onMouseDown={() => like(comment)}
            >
              {" "}
              ❤️ {comment.likes}{" "}
            </p>{" "}
            <p
              className={commentStyles.interaction}
              onMouseDown={() => {
                let copy = [...replies];
                copy[index] = !copy[index];
                setReplies(copy);
              }}
              style={{
                backgroundColor: replies[index]
                  ? "rgba(125, 125, 125, 0.4)"
                  : null,
              }}
            >
              ↩️ Reply
            </p>
          </div>
          {replies[index] && (
            <div
              className={commentStyles.container}
              style={{
                marginLeft: margin + 2,
                marginRight: margin + 2,
                marginBottom: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <CommentSubmit
                name={name}
                comments={comments}
                comment={comment}
              />
            </div>
          )}
          {comment.children && (
            <Comments
              name={name}
              comments={comment.children}
              margin={margin + 2}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;

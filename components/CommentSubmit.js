import { useState, useEffect } from "react";
import axios from "axios";
import commentStyles from "../styles/comment.module.css";

const CommentSubmit = ({ name, comments, comment, getComments }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAuthor = (e) => {
    e.persist();
    setAuthor(e.target.value);
  };

  const handleContent = (e) => {
    e.persist();
    setContent(e.target.value);
  };

  const submitComment = async () => {
    const obj = {
      author,
      content,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    };
    if (comment != null) {
      if (comment.children) {
        comment.children.push(obj);
      } else {
        comment.children = [obj];
      }
    } else {
      comments.unshift(obj);
    }
    await axios.put("/api/comment", {
      post: name,
      comments,
    });
    axios.post("https://formspree.io/f/xzbqnrod", {
      data: { message: `You hav a new comment on ${name}` },
    });
    getComments();
    setAuthor("");
    setContent("");
  };

  return (
    <div>
      <textarea
        className={commentStyles.name}
        placeholder="Name"
        required
        onChange={handleAuthor}
        value={author}
      />
      <textarea
        className={commentStyles.textarea}
        placeholder="Please write your comment here"
        required
        onChange={handleContent}
        value={content}
      />
      <button className={commentStyles.button} onMouseDown={submitComment}>
        Comment
      </button>
    </div>
  );
};

export default CommentSubmit;

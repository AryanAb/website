import { useState, useEffect } from "react";
import axios from "axios";
import commentStyles from "../styles/comment.module.css";

const CommentSubmit = ({ name, comments, comment }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(name);
  }, []);

  const handleAuthor = (e) => {
    e.persist();
    setAuthor(e.target.value);
  };

  const handleContent = (e) => {
    e.persist();
    setContent(e.target.value);
  };

  const submitComment = () => {
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
      console.log(comments);
    } else {
      comments.unshift(obj);
    }
    axios.post("http://aryabed.com/api/comment", {
      post: name,
      comments,
    });
    // location.reload();
  };

  return (
    <div>
      <textarea
        className={commentStyles.name}
        required
        onChange={handleAuthor}
        value={author}
      />
      <textarea
        className={commentStyles.textarea}
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

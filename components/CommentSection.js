import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentSubmit from "./CommentSubmit";
import axios from "axios";

const CommentSection = ({ name }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const res = await axios.get(`/api/comment?post=${name}`);
    if (res.data.comments == null) {
      await axios.post("/api/comment", {
        post: name,
      });
      setComments([]);
      return;
    }
    setComments(res.data.comments.comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div style={{ marginBottom: 10 }}>
      <h2 id="Comments">Comments</h2>

      <CommentSubmit
        name={name}
        comments={comments}
        comment={null}
        getComments={getComments}
      />
      <Comments
        name={name}
        comments={comments}
        margin={10}
        getComments={getComments}
        topLevel
      />
    </div>
  );
};

export default CommentSection;

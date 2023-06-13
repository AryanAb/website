import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentSubmit from "./CommentSubmit";
import axios from "axios";

const CommentSection = ({ name }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await axios.get(
        `http://aryabed.com/api/comment?post=${name}`
      );
      setComments(res.data.comments.comments);
    }
    async function purge() {
      const res = await axios.delete(
        `http://localhost:3000/api/comment?post=${name}`
      );
    }
    // purge();
    getComments();
  }, []);

  return (
    <div>
      <h2 id="Comments">Comments</h2>

      <CommentSubmit name={name} comments={comments} comment={null} />
      <Comments name={name} comments={comments} margin={10} topLevel />
    </div>
  );
};

export default CommentSection;

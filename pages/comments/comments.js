import React from "react";

const Comments = ({ comments }) => {
  console.log("🚀 ~ file: comments.js:4 ~ Comments ~ comments:", comments);
  return (
    <div>
      {comments.map((velue) => (
        <div className="mt-3 mx-5">
          {" "}
          <p>Comments: {velue.body}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};

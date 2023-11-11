import React from "react";
import style from "./Comments.module.css";
import CommItem from "./CommItem";

const Comments = ({ comList }) => {


  return (
    <div className={style.comments}>
      {comList ? (
        <div>
          <h3>Comments: {comList.length}</h3>
          {comList.map((i) => {
            return <CommItem key={i.id} i={i} />;
          })}
        </div>
      ) : (
        <h2>Comments: 0</h2>
      )}
    </div>
  );
};

export default Comments;


import { Button } from "@mui/material";
import React, { useState } from "react";
import style from "./Comments.module.css";
import SubComments from "./SubComments/SubComments";

const CommItem = ({ i }) => {
  const [isOpenSubComms, setIsOpenSubComms] = useState(false);
  return (
    <div className={style.commentItem}>
      <p className={style.commentTime}>{new Date(i.time).toDateString()}</p>
      <h4>{i.by}:</h4>
      <p className={style.commentText}>{i.text}</p>
      <div>
        {i.kids ? (
          <Button
            variant="contained"
            onClick={() => {
              setIsOpenSubComms(!isOpenSubComms);
            }}
          >
            {isOpenSubComms ? "Close subcomments" : "Check more comments"}
          </Button>
        ) : (
          ""
        )}
      </div>
      {isOpenSubComms && i.kids && <SubComments list={i.kids} />}
    </div>
  );
};

export default CommItem;

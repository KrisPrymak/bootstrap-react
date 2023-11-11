import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchComments } from "../../store/newsSlice";
import Comments from "../Comments/Comments";
import Navbar from "../Navbar/Navbar";
import style from "./NewsPage.module.css";

const NewsPage = () => {
  const params = useParams();

  const newsList = useSelector((state) => state.news.list);
  const itemNews = newsList.filter((i) => i.id === +params.id)[0];

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const updateComments = () => {
    dispatch(fetchComments(itemNews.kids))
  };
  const status = useSelector(state => state.news.status)
  
  useEffect(() => {
    dispatch(fetchComments(itemNews.kids))
  }, [])

    useEffect(() => {
        const timerId = setInterval(() => {
            dispatch(fetchComments(itemNews.kids))
        }, 60000)
        return () => clearInterval(timerId)
    }, [dispatch])

    const handleClick = () => {
      navigate(-1);
    }
    const commentsList = useSelector((state) => state.news.commentsList);
  return (
    <div>
      <Navbar
        text={"Back to news"}
        title="comments"
        handleClick={handleClick}
        status={status}
        updateComments={updateComments}
      />
      <div className={style.newsPage}>
        <h2>{itemNews.title}</h2>
        <a href={itemNews.url} target="_blank" rel="noreferrer">
          Go to news page
        </a>
        <div className={style.newsPage__info}>
        <p>Nick: <span className={style.bold}>{itemNews.by}</span></p>
          <p>Date: <span className={style.bold}>{new Date(itemNews.time).toDateString()}</span></p>
        </div>
        <Comments comList={commentsList} />
      </div>
    </div>
  );
};

export default NewsPage;

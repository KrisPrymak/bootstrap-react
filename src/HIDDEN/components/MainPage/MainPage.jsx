import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/newsSlice";
import Navbar from "../Navbar/Navbar";
import NewsItem from "../NewsItem/NewsItem";
import style from "./MainPage.module.css";

const MainPage = () => {
  const newsList = useSelector((state) => state.news.list);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.news);
  useEffect(() => {
    updateNews();
  }, [dispatch]);

  useEffect(() => {
    const timerId = setInterval(() => {
      updateNews();
    }, 60000);
    return () => clearInterval(timerId);
  }, [dispatch]);

  const updateNews = () => {
    dispatch(fetchNews());
  };

  return (
    <>
      <Navbar
        status={status}
        handleClick={updateNews}
        text="Search for more news"
        title="news"
      />
      <div className={style.mainPage}>
        {error && <h2>An error occured: {error}</h2>}
        <div className={style.newsList}>
          {newsList.map((item) => (
            <NewsItem key={item.id} newItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;

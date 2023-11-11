
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateCurrentNews } from '../../../store/newsSlice';
import style from './NewsItem.module.css';

const NewsItem = ({newItem}) => {

    return (
        <NavLink className={style.newItem} to={`/${newItem.id}`}>
           <div>
           {newItem.kids && <p>YESSS</p>}
           <h2>{newItem.title}</h2>
            <div>
            <div className={style.mainInfo}>
            <p>Nikname: {newItem.by}</p>
            <p>Score: {newItem.score}</p>
            </div>
            <p className={style.date}>Date: {new Date(newItem.time).toDateString()}</p>
            </div>
           </div>
        </NavLink>
    );
};

export default NewsItem;
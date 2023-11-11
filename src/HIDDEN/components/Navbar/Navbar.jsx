import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import DoneIcon from '@mui/icons-material/Done';


const Navbar = ({status, handleClick, text, title, updateComments}) => {

    return (
        <nav className={style.navbar}>
        <NavLink className={style.logo} to={`/`}>Hacker News</NavLink>
        <Button disabled={title === 'news' && status ==='pending'} variant='contained' onClick={handleClick}>{text}</Button>
        {title === 'comments' && <Button disabled={status ==='pending'} variant='contained' onClick={updateComments}>Update comments</Button>}
          {status ==='pending' ? 
          <p className={style.updateStatus}><CircularProgress/> <span className={style.statusText}>Looking for {title} for you...</span> </p>
          : <p className={style.updateStatus}><DoneIcon color='primary'/> <span className={style.statusText}>{title} are updated</span></p>}
      </nav>
    );
};

export default Navbar;
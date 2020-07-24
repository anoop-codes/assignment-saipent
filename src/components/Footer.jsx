import React, { } from 'react';
import { useDispatch } from 'react-redux';
import { previousPageData, nextPageData } from '../redux/statistics/news-actions-types';

const Footer = ({ page }) => {

    const dispatch = useDispatch();

    return (

        <div className="footer">
            <button onClick={() => dispatch(previousPageData())} disabled={page === 0}><i className="fa fa-angle-double-left" aria-hidden="true"></i> previous</button>
            <button onClick={() => dispatch(nextPageData())}>next <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
        </div>

    );
}

export default Footer;
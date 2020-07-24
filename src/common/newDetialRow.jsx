import React, { Fragment } from 'react';

import './news-details-rows.css';

const NewsDetailsRow = ({ author, created_at, url, title }) => {
    return (
        <Fragment>
            <h6 className="title">{title}</h6>
            <small>
                <span>
                    (<a href={url} target="blank">read more..</a>) by
                </span>
                <strong className="authorName">{author} </strong>
                <span>{new Date(created_at).getHours()} hours ago </span>
            </small>
        </Fragment>
    );
}

export default NewsDetailsRow;
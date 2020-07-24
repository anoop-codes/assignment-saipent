import React, { Fragment } from 'react';
import NewsDetailsRow from '../common/newDetialRow';
import { useDispatch } from 'react-redux';
import { hide, incrementVote } from '../redux/statistics/news-actions-types';
import LineChart from '../common/LineChart';

const InfoTable = ({ newData }) => {

    const dispatch = useDispatch();


    return (

        <Fragment>
            <div className="table-responsive">
                <table className="table">

                    <thead>
                        <tr>
                            <th>comments</th>
                            <th>Vote Count</th>
                            <th>UpVote</th>
                            <th>News Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {newData && newData.map(value => (
                            <tr key={value.objectID}>
                                <td>{value.num_comments}</td>
                                <td >{value.points}</td>
                                <td>
                                    <i className="fa fa-thumbs-o-up" onClick={() => dispatch(incrementVote(value))} />
                                </td>
                                <td>
                                    <NewsDetailsRow author={value.author} created_at={value.created_at} url={value.url} title={value.title} />
                                    <button className="btn btn-primary btn-sm" onClick={() => dispatch(hide(value))} style={{ padding: '0px 10px' }}>hide</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div >
            <div className="table-responsive p-3">
                <LineChart data={newData} />
            </div>
        </Fragment >
    );
}

export default InfoTable;
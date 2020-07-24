import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getNewsData } from '../redux/statistics/news-actions-types';
import InfoTable from './InfoTable';
import Footer from './Footer';


class HomoComponent extends Component {
    state = {
        newsDataList: this.props.dataList
    }

    componentDidMount() {
        const { data, page } = this.props.dataList
        if (data.length === 0) {
            this.props.getData(page);
        }
    }


    componentDidUpdate(preProps, preState) {
        const { page } = preState.newsDataList;
        if (page !== this.state.newsDataList.page) {
            this.props.getData(this.props.dataList.page);
        }
    }


    componentWillReceiveProps(nextProps) {
        if (this.state.newsDataList.page !== nextProps.dataList.page) {
            this.setState({
                newsDataList: nextProps.dataList
            })
        }
    }

    getStyle() {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    render() {
        const { data, loading, page } = this.props.dataList;

        return (
            <>

                {loading &&
                    <div style={this.getStyle()}>
                        <div className="spinner-border " role="status" style={{ width: '8rem', height: '8rem' }}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                {
                    !loading &&
                    <Fragment>
                        <InfoTable newData={data} />
                        <Footer page={page} />
                    </Fragment>
                }
            </>
        );

    }
}


function mapStateToProps(state) {
    return {
        dataList: state.newsData
    };
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: (page) => dispatch(getNewsData(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomoComponent);
import React, { Component } from 'react';
import NewsItem from './NewsItem';
// 45ca4c2666484662975cb2386ce3dafc
export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>Today Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="My Title" description="My Description " />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                </div>
            </div>
        )
    }
}

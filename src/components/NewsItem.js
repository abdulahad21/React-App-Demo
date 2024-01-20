import React, { Component } from 'react';
import Image from '../image/default.png';
export class NewsItem extends Component {
    render() {
        const { title, description, ImageUrl } = this.props;
        const imageUrl = ImageUrl ?? Image;
        return (
            <div className="my-3">
                <div class="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ width: "90%", height: "90%" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
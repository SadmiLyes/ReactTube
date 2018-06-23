import React from 'react';
import { BarLoader } from 'react-spinners';
const moment = require('moment');

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div className='sweet-loading col-md-8' style={{ marginTop: 20+"rem" }}>
                Loading
                <BarLoader
                    color={'#123abc'}
                />
            </div>
        );
    }

    const {videoId} =  video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const channelUrl = `https://www.youtube.com/channel/${video.snippet.channelId}`;
    const date = moment(video.snippet.publishedAt).format('DD MMM, YYYY');

    return (
        <div className='video-detail col-md-9'>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"
                        allowFullScreen="allowFullScreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                ></iframe>
            </div>
            <div className="details">
                <h1 className="details__title">{video.snippet.title}</h1>
                <a className='details__Link' href={channelUrl}>{video.snippet.channelTitle}</a>
                <p className='details__date'>
                    - Posted on : {date}
                </p>
                <p className="details__description">
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
};

export default VideoDetail;
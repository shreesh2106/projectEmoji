import React from 'react';


const videoListItem = ({videoIcon, onVideoSelect}) => {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    return (
        <li className="list-group-item card text-white bg-success mb-3">
            <div onClick={() => onVideoSelect(videoIcon)} className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoIcon.snippet.thumbnails.default.url} height={"150px"}
                         width={"200px"}/>
                </div>

                <div className="media-body">
                    <div className="media-heading"><h5 color={"black"}>{videoIcon.snippet.title}</h5></div>
                </div>

            </div>
        </li>
    );
}

export default videoListItem;
import React from 'react';

import videoListItem from './video_list_item'


const videoList=(props)=>{

    const videoItems=props.video.map((x)=>{

        return(
            <videoListItem onVideoSelect={props.onVideoSelect} keys={x.etag}
                           videoIcon={x}/>
        );
    });

    return(
        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        </div>
    )
}
export default videoList;
import React from 'react';

const videoDetail=(props)=>{
    if(!props.Video){
        return(
            <div>
                no such song
            </div>
        )
    }
    const url = 'https://www.youtube.com/embed/${props.video.id.videoId}';

    return(

        <div>
            <div>
            <iframe src={url} allowFullScreen/>
            </div>
            <div>
                <h2>{props.Video.snippet.title}</h2>
            </div>
        </div>
    )




}
export default videoDetail;
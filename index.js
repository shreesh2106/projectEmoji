import React,{Component}from 'react'
import ReactDOM from 'react-dom'


import YTSearch from 'youtube-api-search'
import emojiBar from  './components/emoji_bar'
import videoDetail from './components/video_detail'
import videoList from './components/video_list'

const API_KEY = "AIzaSyAsRBcZd1ec1ie0lutskCjb5ue_0ZB48cc";

class APP extends Component{

    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: ""
        };

        this.videoSearch("songs")
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(video)=>{
            this.setState({
                videos:video,
                selectedVideo:video[0]
            })
        });
    }


    render(){

        return(
          <div>
          <emojiBar onSearchTermChange={(term)=>this.VideoSearch(term)}/>
          <videoDetail Video= {this.state.selectedVideo}/>
          <videoList onVideoSelect={(selectedVideo)=>
           this.setState({selectedVideo})}  video={this.state.videos}/>
          </div>
              );
    }

}
ReactDOM.render(<APP/>,document.querySelector('.container-fluid'));
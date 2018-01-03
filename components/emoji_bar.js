import React, {Componenet} from 'react'

//import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAsRBcZd1ec1ie0lutskCjb5ue_0ZB48cc';

class emojiBar extends component {

    constructor(props) {

        super(props);
        // this.state={
        //     term:"songs"
        //   // }
        // YTSearch({key:API_KEY,term:"songs"},(video)=>{
        //       this.setState(videos:video,selectedVideo:video[0])
        // });
    };
    url(r'^$', views.home, name='home'),
    render() {

        return (
            <div>
                <ul>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("pop songs")}>pop</button>
                    </li>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("classical songs")}>classical</button>
                    </li>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("solo songs")}>solo</button>
                    </li>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("rock songs")}>rock</button>
                    </li>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("hollywood songs")}>hollywood</button>
                    </li>
                    <li>
                        <button  onClick={this.props.onSearchTermChange("romantic songs")}>romantic</button>
                    </li>
                </ul>
            </div>

        );

    }


}

export default emojiBar;
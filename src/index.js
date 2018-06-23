import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import Navbar from "./components/navbar";
const API_KEY = "AIzaSyAgXG2LLjqif4NC4AUIe_DT_XeHJID0p6Q";


class App extends Component {

    constructor(props) {
        super(props);
        this.videoSearch('motivation');
        console.log(Navbar);
    }
    videoSearch(term) {
        YTSearch({
                key: API_KEY,
                term
            },
            (videos) => {
                this.setState({
                    videos,
                    selectedVideo: videos[0]
                });
            }
        );

        this.state = {
            videos: [],
            selectedVideo : null
        };
    }
    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        },300);

        return (
            <div>
                <Navbar videoSearch={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({
                        selectedVideo
                    })}
                    videos={this.state.videos} />
            </div>
        )
    }
}


ReactDOM.render(
    <App/>
    , document.querySelector('#app'));

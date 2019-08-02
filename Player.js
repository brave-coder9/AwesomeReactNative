import React, { Component } from 'react';
import Video from 'react-native-video';

const trackUrl = "https://mysoundwise.com/tracks/1524194710646e.m4a?idtoken=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2YjgzOTdjOGU0NmE3M2ZiMDExMDk2YjUyMDE1YTZlNjZkMDMyZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc291bmR3aXNlLWE4ZTZmIiwiYXVkIjoic291bmR3aXNlLWE4ZTZmIiwiYXV0aF90aW1lIjoxNTYzNjk4Mzc0LCJ1c2VyX2lkIjoidWlHM3VWVUlkZlpyRHE0RkxZczlZTzQwQTBEMiIsInN1YiI6InVpRzN1VlVJZGZackRxNEZMWXM5WU80MEEwRDIiLCJpYXQiOjE1NjM3MDcxNzMsImV4cCI6MTU2MzcxMDc3MywiZW1haWwiOiJuYXRhc2hhQG5hdGFzaGFjaGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmF0YXNoYUBuYXRhc2hhY2hlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.f73spNQ6wzpcLfzwzhMW5E8uDPpzF2FHrOkV4TzCU-1FRe2x0pJ3gvuDRg3dpaVzDUqfMFKhcQYNXWHDV5TCgdaGtCMKxaevXjMoW6yzFaRJkjBe2r86w18KTZo6cydaTlMnxBgdzRMLxMEMnOMxGhaJi5w8KqbX7o5heRBsMqWLYSBZgZLBkGn5sO-eAC-cYNln7CqPUx4MR2raZovw2Bt4NWaeJPP4zSoBOmnn7u5ATWrRb-h1XIgO86Nu4rm_8Cw5F4w_ycuHlatMVJwJCY5CFo8xzChbVuicS_KS9SOAq6A3ZOOiSYb_OQxEHExAgRP0L6cyc0_OuSEUUeqY7g";

class Player extends Component {

    _onEnd = () => {
        console.log('_onEnd');
    }

    _onLoad = ({ duration, currentTime }) => {
        console.log(`[Player] at ${(new Date()).getSeconds()}s _onLoad: duration=${duration} currentTime=${currentTime}`);
    }

    _onBuffer = ({ isBuffering }) => {
        console.log(`[Player] at ${(new Date()).getSeconds()}s isBuffering=`, isBuffering);
    }

    _onLoadStart = () => {
        console.log(`[Player] at ${(new Date()).getSeconds()}s _onLoadStart trackUrl=`, trackUrl);
    }

    _onProgress = ({ currentTime }) => {
        console.log('_onProgress: currentTime=', currentTime);
    }
    
    render() {
        return (
            <Video
                style={{ position: 'absolute', opacity: 0 }}
                source={{ uri: trackUrl }}
                audioOnly={true}
                ref={ref => this.player = ref}
                volume={1.0}
                muted={false}
                rate={1}
                onEnd={this._onEnd}
                onLoad={this._onLoad}
                playInBackground={true}
                playWhenInactive={true}
                onBuffer={this._onBuffer}
                ignoreSilentSwitch={'ignore'}
                onProgress={this._onProgress}
                onLoadStart={this._onLoadStart}
            />
        )
    }
}

export default Player;
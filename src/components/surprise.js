import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingImage: false
        }
    }

    // if showImage is false, render the page showing the button, otherwise render the page showing the image
render() {
    if (!this.state.showingImage) {
        return <SurpriseButton handleClick={() => this.setState({showingImage: true})} />;
        };

    return <SurpriseImage />;
};
}

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { // 1st & 2nd call
        lat: null, 
        errorMessage: ''
    }
    
    componentDidMount() { // place "data loading content" here (instead of constructor)
        window.navigator.geolocation.getCurrentPosition( // 3rd = geoloc is called
            (position) => { // 5th = called this cb()
                this.setState({ // 6th = setState is called()
                    lat: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    // helper method 
    renderContent() { // pulled these conditionals OUT of 'render' so that we could wrap ALL 3 in red border
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>

        } else if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} /> // can pass state to a child
            )
        } else {
            return <Spinner message='Please accept location request' />
        }
    }

    // 4th = called render()! ====== 7th = re-rendered()!!!
    render() { // never initialize work in render() b/c it's called ALL THE TIME
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)
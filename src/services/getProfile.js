import React, {Component} from 'react';
import $ from 'jquery';
// import fetchJsonp from 'fetch-jsonp';
class GetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      response: [],
    };
  }

  componentDidMount() {
    // GGG example refitted for stash tabs
    $.ajax({
      url: 'http://api.pathofexile.com/public-stash-tabs',
      dataType: 'jsonp',
    }).done(league => {
      console.log('Got', league.id, 'league');
    });

    // fetch api way with headers
    fetch(`http://api.pathofexile.com/public-stash-tabs`, {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'content-type': 'application/jsonp',
      },
    })
    // For some reason .json() doesnt play well with whatever response it is.
    //   .then(r => r.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            response: result,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            response: error,
            error,
          });
          console.log(error);
        }
      );
  }

  render() {
    const {error, isLoaded, response} = this.state;
    if (error) {
      return (
        <div>
          <span
            style={{marginTop: '20px', backgroundColor: 'rgb(255, 128, 128)'}}
          >
            {' '}⚠️Error: {error.message}⚠️{' '}
          </span>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <span style={{marginTop: '20px', backgroundColor: 'grey'}}>
            Loading...{' '}
          </span>
        </div>
      );
    } else {
      return (
        <div>{this.response.render()}</div>
      )
    }
  }
}

export default GetProfile;

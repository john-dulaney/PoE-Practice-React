import React, {Component} from 'react';
// import $ from 'jquery';
// import fetchJsonp from 'fetch-jsonp';
class GetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reponse: [],
    };
  }

  componentDidMount() {
    fetch('https://api.pathofexile.com/public-stash-tabs', {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'content-type': 'application/jsonp'
      }
    })
      .then(res => res.json())
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
            error,
          });
        }
      );
  }

  render() {
    const {error, isLoaded, response} = this.state;
    if (error) {
      return (
        <div>
          <span
            style={{marginTop: '20px', backgroundColor: 'rgb(255, 128, 128)'}}>
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
        <ul>
          {response.map(item =>
            <li key={item.checklistItemId}>
              {item.checklistAction} {item.tripTypeId} {item.tripType}
            </li>
          )}
        </ul>
      );
    }
  }
}

export default GetProfile;

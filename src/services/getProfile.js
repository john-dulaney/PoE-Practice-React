import React, {Component} from 'react';
import $ from 'jquery';
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
    $.ajax({
      url: 'https://www.pathofexile.com/character-window/get-account-name',
      dataType: 'json',
      contentType: "application/json",
    }).done(accountName => {
      console.log('Got', accountName);
    });
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
        <div>
          {response}
        </div>

        // <ul>
        //   {response.map(item =>
        //     <li key={item.Id}>
        //       {item}
        //     </li>
        //   )}
        // </ul>
      );
    }
  }
}

export default GetProfile;

// fetchJsonp(`http://api.pathofexile.com/public-stash-tabs`, {
//   mode: 'no-cors',
//   method: 'GET'
// })
//   //   .then(r => r.json())
//   .then(
//     result => {
//       console.log(result);
//       this.setState({
//         isLoaded: true,
//         response: result,
//       });
//     },
//     error => {
//       this.setState({
//         isLoaded: true,
//         response: error,
//         error,
//       });
//       console.log(error);
//     }
//   );

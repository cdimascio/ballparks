import React from 'react';
import {render} from 'react-dom';
import Card from './components/card/card';
import ParkCardFront from './components/park.card/front';

//const Front = () => {
//  return (
//    <div>At& t</div>
//  );
//};
//
//const Back = () => {
//  return (
//    <div>Back At and t</div>
//  );
//};

class App extends React.Component {
  render () {
    return (
      <div>
        <Card
          front={<ParkCardFront
            title="AT&T Park"
            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}
          back={<ParkCardFront
            title="AT&T Park"
            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}>
        </Card>
        <Card
          front={<ParkCardFront
            title="Citizen Bank Park"
            imageSrc="http://commons.wikimedia.org/wiki/Special:FilePath/Fieldatthepark.jpg?width=300"/>}
          back={<ParkCardFront
            title="AT&T Park"
            imageSrc="http://en.wikipedia.org/wiki/Special:FilePath/AT&T_Park_Logo.png?width=300"/>}>
          >
        </Card>
        <p> Hello Carmine!</p>
      </div>);
  }
}

render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

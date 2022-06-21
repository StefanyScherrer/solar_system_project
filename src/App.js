import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />

      </>
    );
  }
}

export default App;

// COMO É ORIGINALMENTE:
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (<p>Sistema Solar</p>);
//   }
// }

// export default App;

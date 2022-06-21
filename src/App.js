import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        <PlanetCard />
        <Missions />
        <MissionCard />

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

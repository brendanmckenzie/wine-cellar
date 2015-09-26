import React from 'react-native';
import Home from '../components/Home';
import database from '../db';

database.ensureStructure();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Home />;
    }
}

export default App;

import React, { View } from 'react-native';
import styles from '../styles';
import Header from './Header';
import Listing from './Listing';
import { connect } from 'react-redux/native';
import { refreshData } from '../actions/ListActions';

@connect(state => ({
    list: state.list
}))
class Home extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;

        dispatch(refreshData());
    }

    render() {
        const { list } = this.props;

        return (
            <View style={styles.container}>
                <Header />
                <Listing list={list.items}  />
            </View>
        );
    }
}

export default Home;

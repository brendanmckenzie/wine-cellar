import React, { ScrollView } from 'react-native';
import ListingItem from './ListingItem';
import AddItem from './AddItem';
import styles from '../styles';
import { connect } from 'react-redux/native';

@connect(state => ({
    list: state.list
}))
class Listing extends React.Component {
    render() {
        const { list } = this.props;;

        return (
            <ScrollView style={styles.listingContainer}>
                {list.items.map(function (ent, index) {
                    return (<ListingItem key={index} item={ent} />);
                })}

                <AddItem />
            </ScrollView>
        );
    }
}

export default Listing;

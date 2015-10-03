import React, { ScrollView } from 'react-native';
import ListingItem from './ListingItem';
import ItemEditor from './ItemEditor';
import styles from '../styles';
import { connect } from 'react-redux/native';
import { addItem, updateItem, itemSelected } from '../actions/ListActions';

@connect(state => ({
    list: state.list
}))
class Listing extends React.Component {
    onItemPress(item) {
        this.props.dispatch(itemSelected(item));
    }

    onItemUpdate(item) {
        // console.log(item);
        this.props.dispatch(updateItem(item));
    }

    onItemAdd(item) {
        // console.log(item);
        this.props.dispatch(addItem(item));
    }

    render() {
        const { list } = this.props;

        const edit = (list.selectedItem ? <ItemEditor value={list.selectedItem} onUpdate={this.onItemUpdate.bind(this)} /> : null);
        const add = <ItemEditor onUpdate={this.onItemAdd.bind(this)} buttonText='Add' />;

        return (
            <ScrollView style={styles.listingContainer}>
                {list.items.map((ent, index) => <ListingItem key={index} item={ent} onPress={this.onItemPress.bind(this)} />)}

                {add}
                {edit}
            </ScrollView>
        );
    }
}

export default Listing;

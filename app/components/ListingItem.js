var React = require('react-native');
var {
  Text,
  View,
  TouchableHighlight
} = React;
var styles = require('../styles');

module.exports = React.createClass({
    _handleTap: function () {
        conosle.log('tapped');
    },

    render: function() {
        var titleClasses = [styles.listingItemTitle];
        if (this.props.item.bought <= this.props.item.consumed) {
            titleClasses.push(styles.listingItemTitleNotAvailable);
        }

        return (
            <TouchableHighlight style={styles.listingItem} underlayColor="#eee" onPress={this.props.onPress.bind(this, this.props.item)}>
                <View>
                    <Text style={titleClasses}>{this.props.item.winery} - {this.props.item.name}</Text>
                    <Text style={styles.listingItemDetail}>
                        {this.props.item.year}{' '}
                        {this.props.item.variety}{' '}
                        ({this.props.item.consumed}/{this.props.item.bought})
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
});

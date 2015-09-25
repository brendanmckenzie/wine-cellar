var React = require('react-native');
var {
  Text,
  View,
} = React;
var styles = require('../styles');

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Wine Cellar</Text>
            </View>
        );
    }
});


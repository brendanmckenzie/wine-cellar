var React = require('react-native');
var {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;
var styles = require('../styles');
var Header = require('./Header');

var items = [
    {
        winery: 'Wirra Wirra',
        name: 'Church Block',
        variety: 'Shiraz',
        year: '2010',

        bought: 12,
        consumed: 4
    },
    {
        winery: 'Grant Burge',
        name: 'Filsell',
        variety: 'Shiraz',
        year: '2010',

        bought: 2,
        consumed: 0
    }
];

var ListingItem = React.createClass({
    _handleTap: function () {
        conosle.log('tapped');
    },

    render: function() {
        var titleClasses = [styles.listingItemTitle];
        if (this.props.item.bought <= this.props.item.consumed) {
            titleClasses.push(styles.listingItemTitleNotAvailable);
        }

        return (
            <TouchableHighlight style={styles.listingItem} underlayColor="#eee">
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
})

var Listing = React.createClass({
    render: function() {
        return (
            <ScrollView style={styles.listingContainer}>
                {items.map(function (ent, index) {
                    return (<ListingItem key={index} item={ent} />);
                })}
            </ScrollView>
        );
    }
});

module.exports = React.createClass({
    render: function() {

        return (
            <View style={styles.container}>
                <Header />
                <Listing />
            </View>
        );
    }
})

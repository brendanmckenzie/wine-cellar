/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { AppRegistry } = React;

var Home = require('./components/Home');

var WineCellar = React.createClass({
  render: function() {
    return (<Home />);
  }
});


AppRegistry.registerComponent('WineCellar', () => WineCellar);

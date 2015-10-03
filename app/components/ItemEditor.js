import React, { Text, TouchableHighlight, View } from 'react-native';
import styles from '../styles';
import t from 'tcomb-form-native';
import formStyles from '../formStyles';

t.form.Form.stylesheet = formStyles;

const Entry = t.struct({
    winery: t.maybe(t.Str),
    variety: t.maybe(t.Str),
    name: t.maybe(t.Str),
    year: t.maybe(t.Str),
    drinkBy: t.maybe(t.Str),
    bought: t.maybe(t.Str),
    consumed: t.maybe(t.Str),
    notes: t.maybe(t.Str)
});

const Form = t.form.Form;

const options = {
    order: ['winery', 'name', 'variety', 'year', 'drinkBy', 'bought', 'consumed', 'notes'],
    fields: {
        winery: {
            label: 'Winery',
            placeholder: 'Grant Burge'
        },
        variety: {
            label: 'Variety',
            placeholder: 'Grenache Shiraz Mourvedre'
        },
        name: {
            label: 'Name',
            placeholder: 'Filsell'
        },
        year: {
            label: 'Year',
            placeholder: '2012'
        },
        drinkBy: {
            label: 'Drink by',
            placeholder: '2016'
        },
        bought: {
            label: '# bought',
            placeholder: '12'
        },
        consumed: {
            label: '# consumed',
            placeholder: '4'
        },
        notes: {
            label: 'Notes',
            placeholder: 'Delicious, cherry on the nose, smokey on the palate',
            multiline: true,
            height: 50
        }
    }
};

class ItemEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: props.value };
    }

    handlePress() {
        this.props.onUpdate(this.state.value);
    }

    handleChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <View style={styles.addItemContainer}>
                <Form ref="form" type={Entry} options={options} value={this.state.value} onChange={this.handleChange.bind(this)} />
                <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)} underlayColor="#BDD358">
                    <Text style={styles.buttonText}>{this.props.buttonText || 'Update'}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default ItemEditor;

import React, {Component} from 'react'
import { Text, StyleSheet} from 'react-native'

class ProfileScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Text style={styles.welcome}>
                This is ProfileScreen
            </Text>
        );
    }
}
export default ProfileScreen

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { MySettingComponent } from '../../components/index'
import { fetchMyProfile } from '../../actions/myAction'


class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchMyProfile()
    }
    render() {
        const { profile, navigation } = this.props
        return <View>
            <MySettingComponent profile={profile} navigation={navigation}/>
        </View>
    }
}

export default connect(
    ({ my }) => ({
        profile: my.profile
    }),
    { fetchMyProfile }
)(Profile)
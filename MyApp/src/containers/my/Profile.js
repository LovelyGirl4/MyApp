import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { MyProfileComponent } from '../../components/index'
import { fetchMyProfile } from '../../actions/myAction'


class Profile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchMyProfile()
    }
    render() {
        const { profile, navigation } = this.props
        return <View>
            <MyProfileComponent profile={profile} navigation={navigation}/>
        </View>
    }
}

export default connect(
    ({ my }) => ({
        profile: my.data.profile
    }),
    { fetchMyProfile }
)(Profile)
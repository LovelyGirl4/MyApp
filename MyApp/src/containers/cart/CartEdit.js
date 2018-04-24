import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { updateCartEdit } from '../../actions/cartAction'

class CartEdit extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchCartProducts()
    }
    _updateCartEdit = () => {
        this.props.updateCartEdit(!this.props.cartEdit)
    }
    render() {
        const { cartEdit } = this.props
        return <View>
            <Text onPress={this._updateCartEdit} style={{marginRight: 15}}>
                {cartEdit ? '完成' : '编辑'}
            </Text>
        </View>
    }
}

export default connect(
    ({ cart }) => ({
        cartEdit: cart.data.cartEdit,
    }),
    {
        updateCartEdit
    }
)(CartEdit)
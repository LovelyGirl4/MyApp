import React, { PureComponent } from 'react'
import { Stepper } from 'antd-mobile'

export default class ProductNumber extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
    }
    _onChange = (val) => {
        this.props.changeCartProductNumber(val)
        this.setState({
            count: val
        })
    }
    render() {
        const {count} = this.state
        return (
            <Stepper
                style={{ width: 100 }}
                max={10}
                min={1}
                value={count}
                onChange={this._onChange}
            />
        )
    }
}
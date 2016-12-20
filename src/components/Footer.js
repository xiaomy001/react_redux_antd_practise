/**
 * Created by liangyujie on 2016/12/20.
 */

import React, { PropTypes } from 'react'
import { Button } from 'antd'
import { ShowFilters } from '../actions'

const { SHOW_ALL, SHOW_DISABLED, SHOW_ENABLED } = ShowFilters;

export default class Footer extends React.Component {
    renderButton(text, filter) {
        return <Button
            type={this.props.filter === filter ? 'primary' : 'ghost'}
            onClick={() => this.props.onSetFilter(filter)}>
            {text}
            </Button>
    }

    render() {
        return (
            <div>
                {this.renderButton('Show All', SHOW_ALL)}
                {this.renderButton('Show Enable', SHOW_ENABLED)}
                {this.renderButton('Show Disable', SHOW_DISABLED)}
            </div>
        )
    }
}

Footer.propTypes = {
    filter: PropTypes.oneOf([
        SHOW_ALL,
        SHOW_DISABLED,
        SHOW_ENABLED
    ]).isRequired,
    onSetFilter: PropTypes.func.isRequired
}

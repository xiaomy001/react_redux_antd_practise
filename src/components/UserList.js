/**
 * Created by liangyujie on 2016/12/20.
 */

import React, { PropTypes } from 'react'
import { Table, Button } from 'antd'

export default class UserList extends React.Component {
    renderRowToggleButton(iconType, text, index) {
        return <Button icon={iconType} onClick={() => this.props.onRowToggleClick(index)}>{text}</Button>
    }

    renderGroupToggleButton(text, selects, status) {
        return <Button onClick={() => this.props.onUsersToggleClick(selects, status)}>{text}</Button>
    }

    render() {
        const columns = [
            {title: 'Username', key: 'username', dataIndex: 'username'},
            {title: 'E-mail', key: 'email', dataIndex: 'email'},
            {title: 'Actions', key: 'actions', dataIndex: 'stop', render: (text, record, index) => {
                return (
                    <div>
                        <Button icon={'delete'} onClick={() => this.props.onRowDeleteClick(index)}>Delete</Button>
                        {
                            text ? this.renderRowToggleButton('check-square-o', 'Enable', index) : this.renderRowToggleButton('close-square-o', 'Disable', index)
                        }
                    </div>
                )
            }}
        ];
        const ButtonGroup = Button.Group;
        const { selects } = this.props;

        return (
            <div>
            <ButtonGroup>
                {this.renderGroupToggleButton('Enable', selects, false)}
                {this.renderGroupToggleButton('Disable', selects, true)}
            </ButtonGroup>
            <Table
                rowSelection={{
                    selectedRowKeys: selects,
                    onChange: selectedRowKeys => this.props.onSelectChange(selectedRowKeys)
                }}
                columns={columns}
                dataSource={this.props.users} />
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        stop: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    selects: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onRowDeleteClick: PropTypes.func.isRequired,
    onRowToggleClick: PropTypes.func.isRequired,
    onUsersToggleClick: PropTypes.func.isRequired
};

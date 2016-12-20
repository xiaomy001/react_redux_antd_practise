/**
 * Created by liangyujie on 2016/12/20.
 */

import React, { PropTypes } from 'react'
import { Form, Icon, Input, Button } from 'antd'

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                const username = values.username.trim();
                const email = values.email.trim();
                const password = values.password.trim();
                this.props.onAddClick(username, email, password);
                this.props.form.resetFields()
            }
        })
    }

    render() {
        const FormItem = Form.Item;
        const getFieldDecorator = this.props.form.getFieldDecorator;
        return (
            <Form inline={true} onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [
                            {required: true, message: 'Please input username!'},
                            {min: 6, max: 25, message: 'Please input username with 6 - 25 characters!'}
                        ]
                    })(<Input addonBefore={<Icon type={'user'} />} placeholder={'Username'} />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [
                            {type: 'email', message: 'It is not a valid email!'},
                            {required: true, message: 'Please input email!'}
                        ]
                    })(<Input addonBefore={<Icon type={'mail'} />} placeholder={'E-mail'} />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {required: true, message: 'Please input password!'},
                            {min: 8, max: 25, message: 'Please input password with 8 - 25 characters!'}
                        ]
                    })(<Input type={'password'} addonBefore={<Icon type={'lock'} />} placeholder={'Password'} />)}
                </FormItem>
                <FormItem>
                    <Button type={'primary'} htmlType={'submit'}>Add User</Button>
                </FormItem>
            </Form>
        )
    }
}

AddUser.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default Form.create()(AddUser)

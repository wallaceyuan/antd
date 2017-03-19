/**
 * Created by Yuan on 2017/3/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Button,Dropdown,Menu ,Icon } from 'antd';
import 'antd/dist/antd.css';



class ExampleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            size: 'large'
        };
    }
    handleChange(date) {
        message.info('Selected Date: ' + date.toString());
        this.setState({ date });
    }
    render() {
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        const size = this.state.size;
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary">Primary</Button>
                <DatePicker onChange={value => this.handleChange(value)} />
                <Button type="primary" size={size}>Normal</Button>
                <Dropdown overlay={menu}>
                    <Button>
                        more <Icon type="down" />
                    </Button>
                </Dropdown>
                <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
            </div>
        );
    }
}
module.exports = ExampleTable;

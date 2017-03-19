/**
 * Created by Yuan on 2017/3/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Button,Dropdown,Menu ,Icon,Layout,  } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Footer, Sider, Content } = Layout;

import 'antd/dist/antd.css';



class ExampleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            size: 'large',
            current: 'mail',
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
            <div style={{ width: 800, margin: '100px auto' }}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Icon type="mail" />Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore" />Navigation Two
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary">Primary</Button>
                <DatePicker onChange={value => this.handleChange(value)} />
                <Button type="primary" size={size}>Normal</Button>
                <Dropdown overlay={menu}>
                    <Button>
                        more <Icon type="down" />
                    </Button>
                </Dropdown>
                <Icon type="step-backward" />
                <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
            </div>
        );
    }
}
module.exports = ExampleTable;

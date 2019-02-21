import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
class HeaderMain  extends React.Component{

    render(){
        return(
            <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">MY courses</Menu.Item>
              <Menu.Item key="2">Assigment</Menu.Item>
              <Menu.Item key="3">All courses </Menu.Item>
              <Menu.Item key="4">Blog</Menu.Item>
            </Menu>
          </Header>
        );
    }
}
export default HeaderMain
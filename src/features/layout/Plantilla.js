import {
  TeamOutlined,
  StockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { Layout, Menu } from 'antd';
import React from 'react';
import ProductoList from '../producto/ProductoList';
import SubMenu from 'antd/lib/menu/SubMenu';
import ModificarDrawer from '../ModificarDrawer';

const { Header, Content, Footer, Sider } = Layout;

const Plantilla = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu defaultSelectedKeys={['Home']}
            mode = 'inline'
            >
              
              <Menu.Item key='Home'>
                Home
              </Menu.Item>
              <SubMenu
                title ={
                  <span>
                    <UserOutlined />
                    <span>Dueño</span>
                  </span>
                }
                >
                  
                <Menu.Item key='dueño'>El Pepe</Menu.Item></SubMenu>
              <SubMenu
                title ={
                  <span>
                    <TeamOutlined />
                    <span>Cajeros</span>
                  </span>
                }
                >
                  <Menu.ItemGroup key='cajero' title='Cajeros'>
                  <Menu.Item key='cajero1'>Cajero 1</Menu.Item>
                  <Menu.Item key='cajero2'>Cajero 2</Menu.Item>
                  </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title ={
                  <span>
                    <StockOutlined />
                    <span>Stock</span>
                  </span>
                }
                >
                  <Menu.ItemGroup key='producto' title='Productos'>
                  <Menu.Item key='producto1'>Producto 1</Menu.Item>
                  <Menu.Item key='producto2'>Producto 2</Menu.Item>
                  </Menu.ItemGroup>
              </SubMenu>
            </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
      
        className="site-layout-background"
        style={{
          padding: 10,
        }}
      ><Title style={{color:"white",float:"left"}} level={3}>SmartVent</Title>
      </Header>
      <Content className="gutter-box"
        style={{
          margin: '1px 10px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{textAlign: 'center'}}
        >
          <ProductoList />
        </div>
      </Content>
      <Footer className="gutter-box"
        style={{
          textAlign: 'center',
        }}
      >
        Buscanos en www.SmartVent.cl o en nuestras redes sociales @SmartVent 
      </Footer>
    </Layout>
  </Layout>
);

export default Plantilla;
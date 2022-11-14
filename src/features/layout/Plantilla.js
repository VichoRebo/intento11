import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { Layout, Menu } from 'antd';
import React from 'react';
import ProductoList from '../producto/ProductoList';
import ModificarDrawer from '../ModificarDrawer';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

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
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center',
          }}
        >
          <ProductoList />
        </div>
      </Content>
      <Footer
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
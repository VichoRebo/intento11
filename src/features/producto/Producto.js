import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import ModificarDrawer from '../ModificarDrawer';
const { Meta } = Card;

const Producto = (props) => {
  return (
    <Card
      style={{
        width: 408.75,
      }}
      cover={<img
        alt="example"
        src={props.valor.imagen}
      />}
      actions={[
        <SettingOutlined/>,
        <ModificarDrawer
          valor={props.valor}
          avatar={<Avatar src={props.valor.imagen} />}
          detalle={<img
            alt="example"
            src={props.valor.avatar}
          />} />,
        
      ]}
    >
      <Meta
        avatar={<Avatar src={props.valor.imagen} />}
        title={props.valor.nombre}
        description={props.valor.precio}
      />
    </Card>
  )
}

export default Producto;
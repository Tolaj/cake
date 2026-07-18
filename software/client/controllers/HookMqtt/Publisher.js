import React, { useContext } from 'react';
import { Card, Form, Input, Row, Col, Button, Select } from 'antd';
import { QosOption } from './index'
import { useEffect } from 'react';
const Publisher = ({ publish ,isChecked}) => {
  const [form] = Form.useForm();
  const qosOptions = useContext(QosOption);

  const record = {
    topic: 'esp8266/led',
    qos: 0,
    payload: isChecked?'on':'off'
  };

  const onFinish = (values) => {
    console.log(values)
    
  };
  useEffect(()=>{
   let values = {
      payload : isChecked?"on":"off",
      qos: 0,
      topic: "esp8266/led"
    }
    publish(values) 
  },[isChecked])


  // return (
  //   // <Card
  //   //   title="Publisher"
  //   // >
  //   //   <Form
  //   //   layout="vertical"
  //   //   name="basic"
  //   //   form={form}
  //   //   initialValues={record}
  //   //   onFinish={onFinish}
  //   // >
  //   //   <Row gutter={20}>
  //   //     <Col span={12}>
  //   //       <Form.Item
  //   //         label="Topic"
  //   //         name="topic"
  //   //       >
  //   //         <Input />
  //   //       </Form.Item>
  //   //     </Col>
  //   //     <Col span={12}>
  //   //       <Form.Item
  //   //         label="QoS"
  //   //         name="qos"
  //   //       >
  //   //         <Select options={qosOptions} />
  //   //       </Form.Item>
  //   //     </Col>
  //   //     <Col span={24}>
  //   //       <Form.Item
  //   //         label="Payload"
  //   //         name="payload"
  //   //       >
  //   //         <Input.TextArea />
  //   //       </Form.Item>
  //   //     </Col>
  //   //     <Col span={8} offset={16} style={{ textAlign: 'right' }}>
  //   //       <Form.Item>
  //   //         <Button type="primary" htmlType="submit">
  //   //           Publish
  //   //         </Button>
  //   //       </Form.Item>
  //   //     </Col>
  //   //   </Row>
  //   // </Form>
  //   // </Card>
  // );
}

export default Publisher;

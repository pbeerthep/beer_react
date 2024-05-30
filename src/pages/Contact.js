import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <>
      <h1>My Contact Page</h1>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 24 }} // Make the label span the full width
        wrapperCol={{ span: 24 }} // Make the wrapper span the full width
        style={{ maxWidth: '600px', margin: '0 auto' }} // Center the form
      >
        <Form.Item
          label="What can we help you with?"
          rules={[{ required: true, message: 'Please select an option!' }]}
        >
          <Select placeholder="Select an option">
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" size="large"/>
        </Form.Item>
        
        <Form.Item
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>
        
        <Form.Item
          label="Message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Contact;

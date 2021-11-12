import React, { useEffect, useState } from 'react'
import ProductData from '../../data/data.json'
// import moment from 'moment';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    TimePicker,
    Modal
} from 'antd';
console.log('bello',ProductData)

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};
const Booking = () => {
    
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [rentalFees, setRentalFees] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
        // setActiveTrainer(trainer)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const {product, rangePicker} = fieldsValue
        const productData = ProductData.filter(item=>item.code == product)[0]
        const datePicker = [rangePicker[0].format('YYYY-MM-DD'), rangePicker[1].format('YYYY-MM-DD')]
        const days = rangePicker[1].diff(rangePicker[0], 'days')
        const fees = days * productData.price
        setRentalFees(fees)
        setIsModalVisible(true)
        console.log('final', fees)
      };
    const { RangePicker } = DatePicker;

    return (
        // </div>
        <div>
            <Modal
                title="Trainer Approval "
                visible={isModalVisible}
                onOk={handleOk}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}>
                <p>Your total price is {rentalFees}</p>
                <p>Are you sure you want to proceed?</p>
            </Modal>
            <Form
                // {...formItemLayout}
                style={{maxWidth:320}}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item label="Product" name='product'>
                    <Select>
                        <Select.Option value="select">Select</Select.Option>
                        {
                            ProductData.map(product => <Select.Option value={product.code}>{product.name}</Select.Option>)
                        }
                        {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                </Form.Item>
                <Form.Item name="rangePicker" label="Range" {...rangeConfig}>
                    <RangePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item style={{ marginTop: '40px' }}>
                    <Button type="primary" htmlType="submit">
                        submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Booking
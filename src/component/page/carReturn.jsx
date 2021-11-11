import React, { useEffect, useState } from 'react'
import ProductData from '../../data/data.json'
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
    TimePicker
} from 'antd';


const CarReturn = () => {

    return (
        // </div>
        <div>
            <Form>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="select">Select</Select.Option>
                        {
                            ProductData.map(product => <Select.Option value={product.code}>{product.name}</Select.Option>)
                        }
                        {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="mileage"
                    label="mileage"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default CarReturn
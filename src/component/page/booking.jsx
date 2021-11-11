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

const config = {
    rules: [{ type: 'object' , required: true, message: 'Please select time!' }],
};
const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};
const Booking = () => {
    const { RangePicker } = DatePicker;
    const onFinish = (fieldsValue: any) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
            ...fieldsValue,
            // 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            // 'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            // 'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            // 'range-time-picker': [
            //     rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            //     rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            // ],
            // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
    };

    return (
        // </div>
        <div>
            <Form>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="range-time-picker" label="RangePicker[showTime]" {...rangeConfig}>
                    <RangePicker showTime format="YYYY-MM-DD" />
                </Form.Item>
            </Form>
        </div>
    )
}

export default Booking
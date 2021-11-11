import React from 'react'
import ProductData from '../../data/data.json'
import { Table, Input, Button, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const Product = () => {
    const columns = [
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
            width: '10%',
            //   ...this.getColumnSearchProps('age'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '15%',
            //   ...this.getColumnSearchProps('name'),
        },
        {
            title: 'Availability',
            dataIndex: 'availability',
            key: 'availability',
            width: '10%',
            render: availability => (
                <>
                    {availability.toString()}
                </>
            ),
            //   ...this.getColumnSearchProps('name'),
        },
        {
            title: 'Durability',
            dataIndex: 'durability',
            key: 'durability',
            width: '15%',
            //   ...this.getColumnSearchProps('name'),
        },
        {
            title: 'Mileage',
            dataIndex: 'mileage',
            key: 'mileage',
            width: '15%',
            render: mileage => (
                <>
                    {mileage ? mileage : 'null'}
                </>
            )
            //   ...this.getColumnSearchProps('name'),
        }
        // {
        //   title: 'Address',
        //   dataIndex: 'address',
        //   key: 'address',
        //   ...this.getColumnSearchProps('address'),
        //   sorter: (a, b) => a.address.length - b.address.length,
        //   sortDirections: ['descend', 'ascend'],
        // },
    ];
    return (
        // <div>
        //     {
        //         ProductData.map(product => <h1 key={product.code}> {product.name} </h1>)
        //     }
        // </div>
        <div>
            <Table columns={columns} dataSource={ProductData} />
        </div>
    )
}

export default Product
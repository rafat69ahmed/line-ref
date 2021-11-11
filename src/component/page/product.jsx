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
          width: '20%',
        //   ...this.getColumnSearchProps('age'),
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '30%',
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
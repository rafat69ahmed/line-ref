import React, { useEffect, useState } from 'react'
import ProductData from '../../data/data.json'
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'

const Product = () => {
    const [searchText, setSearchText] = useState([])
    const [searchedColumn, setSearchedColumn] = useState([])
    const inputRef = React.useRef(null)

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }
    const getColumnSearchProps = (dataIndex) => ({
        // eslint-disable-next-line react/display-name
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={inputRef}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}>
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false })
                            setSearchText(selectedKeys[0])
                            setSearchedColumn(dataIndex)
                        }}>
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => inputRef.current.select(), 300)
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            )
    })
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
            ...getColumnSearchProps('name')
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
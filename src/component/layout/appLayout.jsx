import React, { useState } from 'react'
import { Layout, Menu, Typography, Dropdown, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import { getUserName } from '../../utility/cookie'
import { DownOutlined } from '@ant-design/icons'
const { Header, Content, Sider } = Layout
const { Title } = Typography
// import { Link } from 'react-router-dom'
// const { SubMenu } = Menu
// import useHttp from '../../utility/useHttp'
// import { removeAuthCookie, removeAuthUser } from '../../utility/cookie'
// import { useHistory } from 'react-router-dom'

const headerStyle = {
    color: 'white',
    margin: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
}

const AppLayout = ({ children }) => {
    // const { http } = useHttp()
    // const history = useHistory()
    // console.log('test', getUserName())
    // const [user] = useState(() => getUserName())
    const handleLogout = async () => {
        console.log('test logout')
        // const baseUrl = process.env.REACT_APP_BASE_URL
        // const apiUrl = `${baseUrl}/logout`
        // await http
        //     .post(apiUrl, {})
        //     .then(function (response) {
        //         // removeAuthCookie()
        //         // removeAuthUser()
        //         history.go(0)
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        console.log('hello log out')
    }
    const goToLogIn = async () => {
        // history.push('/login')
        console.log('test login')
    }
    const menu = (
        <Menu>
            <>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    register
                </Menu.Item>
                <Menu.Item onClick={goToLogIn} key="2" icon={<UserOutlined />}>
                    login
                </Menu.Item>
            </>
        </Menu>
    )
    return (
        <Layout>
            <Header
                className="header"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Title level={3} style={headerStyle}>
                    line reflection
                </Title>
                <Dropdown overlay={menu}>
                    <Button>
                        'Admin' <DownOutlined />
                    </Button>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                        <Menu.Item key="6">
                            <Link to="/products">products</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/booking">Booking</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/car-return">Return</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default AppLayout

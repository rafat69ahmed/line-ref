import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
const HomePage = () => {
    // const [data, setData] = React.useState()
    // const history = useHistory()
    // const { http } = useHttp()
    // const baseUrl = process.env.BASE_URL
    const handleLoginSubmit = async (values) => {
        // const baseUrl = process.env.REACT_APP_BASE_URL
        // const apiUrl = `${baseUrl}/login`
        // await http
        //     .post(apiUrl, {
        //         email: values.email,
        //         password: values.password,
        //     })
        //     .then(function (response) {
        //         setAuthCookie(response?.data?.token_data?.token)
        //         setUserName(response?.data?.user?.name)
        //         history.push('/products')
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        await console.log('hello')
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={handleLoginSubmit}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'Please enter correct email address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link to="/register" style={{ marginLeft: '1rem' }}>
                        register here
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default HomePage
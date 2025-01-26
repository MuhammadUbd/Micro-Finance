import React from 'react'
import { services } from '../utils'
import { Card, Button, Space, Typography } from 'antd';
import { NavLink } from 'react-router';
const { Title, Text } = Typography;

const BusinessService = () => {
    return (
        <div>
            {services?.business.map((item, index) => {
                return (
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src=''
                                style={{ height: 200, objectFit: 'cover' }}
                            />
                        }
                    >
                        <Title level={4}>{item.title}</Title>
                        <br />
                        <div style={{ marginTop: 16 }}>
                            <Space>
                                <Button >
                                    <NavLink to='/user-dashboard/blogs/add'>
                                        {item.view}
                                    </NavLink>
                                </Button>
                            </Space>
                        </div>
                    </Card>
                )
            })
            }
        </div>
    )
}

export default BusinessService
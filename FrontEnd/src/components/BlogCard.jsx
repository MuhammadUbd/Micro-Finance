import { Card, Button, Space, Typography } from 'antd';
import land from "/assets/images/land.jpg"
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const { Title, Text } = Typography;

const BlogCard = () => {
    const selector = useSelector((state) => state?.blog?.blogs)
    console.log(selector)
    const { id } = useParams()
    const clickedObj = selector.find((item) => item._id == id)
    console.log(clickedObj)
    const { blog_Title, blog_Description, blog_Author, blog_Category, blog_Image } = clickedObj
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={blog_Image}
                    style={{ height: 200, objectFit: 'cover' }}
                />
            }
        >
            <Title level={4}>{blog_Title}</Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
                {blog_Description}
            </Text>
            <Text type="secondary">Author: {blog_Author}</Text>
            <br />
            <Text type="secondary">Category: {blog_Category}</Text>
            <div style={{ marginTop: 16 }}>
                <Space>
                    <Button type="primary" onClick={() => alert('Edit Blog')}>
                        Edit
                    </Button>
                    <Button danger onClick={() => alert('Delete Blog')}>
                        Delete
                    </Button>
                </Space>
            </div>
        </Card>
    );
};

export default BlogCard;


import React from 'react'
import { Card, Col, Row, Carousel, Button } from 'antd';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
function Home() {
    return <Row gutter={16}>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                <Button type="primary">Go to my world</Button>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" style={{ width: '100%', height: '100%' }}>
                <Carousel autoplay>
                    <div>
                        <img src={img1}></img>
                    </div>
                    <div>
                        <img src={img2}></img>

                    </div>
                    <div>
                        <img src={img3}></img>

                    </div>
                </Carousel>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                Card content
                    </Card>
        </Col>
    </Row>
}

export default Home
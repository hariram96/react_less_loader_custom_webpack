import React, { useState,useEffect }  from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import card_data  from './card_data.json';
import { Row, Col, Card, Avatar, Divider, Icon,Menu, Dropdown } from 'antd';
const menu = (
<Menu>
    <Menu.Item key="0">
    <a href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
    <a href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
</Menu>
);
const App = () =>{
    // const [data, setData] = useState([]);

    // useEffect(() =>{
    //     fetch(card_data).then(res => res.json()).then(res => {setData(res)}).catch(e=>{console.log(e)});
    // });
    return(
        // card_data
            <>
                {
                    card_data.map((item,index) =>(
                        <Col xs={{ span: 36 }} sm={{ span: 36 }} md={{ span: 12 }} lg={{ span: 8 }}  xl={{ span: 6 }} xxl={{span: 6}}>
                            <Card className="card">
                                <Row>
                                    <Avatar className="avatar" size={62} style={{backgroundColor:item.color}}>{item.avatar}</Avatar>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <Icon className="more" type="more" /> 
                                    </Dropdown>
                                </Row>
                                <Row className="header">
                                    <p>{item.title}</p>
                                </Row>
                                <Row className="text">
                                    <p>{item.detail}</p>
                                </Row>
                                <Row>
                                    <Divider/>
                                </Row>
                                <Row className="date_div">
                                    <Icon className="calendar" type="calendar" />{item.date}
                                </Row>
                            </Card>
                        </Col>
                    ))
                }
            </>
        )
}
export default App;
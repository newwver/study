import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Layout, Button } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import Logo from './assets/temp/logo.svg';
import menuList from './assets/temp/menu.json';

export default function App() {

    return (
        <BrowserRouter>
            <Layout>
                <DribbbleHeader>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <a href="/#"><img width={92} height={30} src={Logo} /></a></Col>
                                <Col>
                                    <ul className="menuList">
                                        {menuList.map((menu) => {
                                            return <Menu>
                                                <a className='menu' href="#">{menu.menuNm}</a></Menu>
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ marginLeft: `auto` }}>
                            <ul>
                                <Action right={10}>
                                    <a href="#">
                                        <SearchOutlined style={{fontSize: 18, color: '#6e6d7a'}} />
                                    </a>
                                </Action>
                                <Action left={10} right={10}>
                                    <a className="signIn" href="#">Sign in</a>
                                </Action>
                                <Action left={10}>
                                    <a className="btnAction" href="#">Share my work</a>
                                </Action>
                            </ul>
                        </Col>
                    </Row>
                </DribbbleHeader>
                <Content>컨텐츠</Content>
                <Footer>푸터</Footer>
            </Layout>
        </BrowserRouter>
    );
  
}

const { Header, Footer, Content } = Layout;
const DribbbleHeader = styled(Header)`
    background:#fff;
    height: 80px;
    line-height: 80px;
    box-shadow: inset 0px -1px 0px #f3f3f4;
    padding: 0 15px;

    .menuList {
        padding-left:0;
    }

    .signIn{
        font-size: 16px;
        color:#6e6d7a;
    }

    .btnAction {
        padding: 10px 16px;
        border-radius : 8px;
        background: #ea4c89;
        color: #fff;
        font-weight: 500;
    }

`;

const Menu = styled.li`
    display: inline;
    padding: 30px 16px;
    .menu {
        font-size: 14px;
        color: #6e6d7a;
        font-weight: 500;
    }
`;

const Action = styled.li`
    display: inline;
    margin-left: ${(props) => props.left || 0}px;
    margin-right:${(props) => props.right || 0}px;
`;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Spin, Layout, Button } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

// import Main from "./components/pages/main";
// import Login from "./components/pages/login";
// import TableTest from "./components/pages/table";
// import Hooks from "./components/pages/hooks";
// import Antd from "./components/pages/antd";
// import Board from "./components/pages/board";
// import BoardDetail from "./components/pages/board/Detail";
// import BoardUpdate from "./components/pages/board/Update";
// import BoardInsert from "./components/pages/board/Insert";

// import Header from "./components/templates/Header";
// import Footer from "./components/templates/Footer";
import Logo from "./assets/temp/logo.svg";
import menuList from "./assets/temp/menu.json";

export default function App() {
  const { isLoading } = useSelector((state) => state.common);

  return (
    <BrowserRouter>
      <Layout>
        <DribbbleHeader>
          <Row>
            <Col>
              <Row>
                <Col>
                  <img src={Logo} />
                </Col>
                <Col>
                  <ul>
                    {menuList &&
                      menuList.map((menu, i) => {
                        return <Menu key={i}>{menu.menuNm}</Menu>;
                      })}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col style={{ marginLeft: `auto` }}>
              <ul>
                <NaviAction>
                  <a href="/#" className="search">
                    <SearchOutlined style={{ fontSize: "17px" }} />
                  </a>
                </NaviAction>
                <NaviAction>
                  <a href="/#" className="signIn">
                    SignIn
                  </a>
                </NaviAction>
                <NaviAction>
                  <a className="btnShare">Share my work</a>
                </NaviAction>
              </ul>
            </Col>
          </Row>
          {/* <div>
            <nav>
              <div>로고</div>
              <ul>
                <li>메뉴</li>
              </ul>
            </nav>
            <ul>
              <li>SignIn</li>
            </ul>
          </div> */}
        </DribbbleHeader>
        <DribbbleContent>
          <Row className="top" justify="space-between">
            <Col>텍스트 영역</Col>
            <Col>이미지 영역</Col>
          </Row>
        </DribbbleContent>
        <Footer>Footer</Footer>
      </Layout>
      {/* <Spin spinning={isLoading}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Header />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Routes>
                  <Route path="/main" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/table" element={<TableTest />} />
                  <Route path="/hooks" element={<Hooks />} />
                  <Route path="/antd" element={<Antd />} />
                  <Route path="/board" element={<Board />} />
                  <Route path="/board/detail/:id" element={<BoardDetail />} />
                  <Route path="/board/update/:id" element={<BoardUpdate />} />
                  <Route path="/board/insert" element={<BoardInsert />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Footer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin> */}
    </BrowserRouter>
  );
}

const Menu = styled.li`
  display: inline;
  padding: 30px 16px;
`;

const NaviAction = styled.li`
  display: inline;
  padding: 0 10px;
`;

const { Header, Footer, Content } = Layout;

const DribbbleHeader = styled(Header)`
  background: #fff;
  color: #000000d9;
  padding: 0 24px;
  height: 80px;
  line-height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
  .search {
    color: #6e6d7a;
  }
  .signIn {
    font-size: 16px;
    color: #6e6d7a;
  }
  .btnShare {
    font-size: 14px;
    padding: 10px 16px;
    background: #ea4c89;
    color: #fff;
    border-radius: 8px;
    font-weight: 500;
  }
`;

const DribbbleContent = styled(Content)`
  .top {
    max-width: 1680px;
    margin: 0 auto;
  }
`;

# Hooks

## 1.1. app.js

```
ant design의 Row, Col 컴포넌트를 활용하여 레이아웃을 만들어줍니다.


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col } from "antd";
import Main from "./components/pages/main";
import Login from "./components/pages/login";
import TableTest from "./components/pages/table";
import Hooks from "./components/pages/hooks";
import Antd from "./components/pages/antd";

import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";

export default function App() {
  return (
    <BrowserRouter>
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
                {/* 이 부분은 본인의 페이지를 라우트 하면 됩니다. */}
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/table" element={<TableTest />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/antd" element={<Antd />} />
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
    </BrowserRouter>
  );
}


```

# Header

## 1.1. src/components/templates/Header/index.js

```
yarn add axios를 하여 axios를 설치해주세요. 통신 모듈입니다.


import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [menuList, setMenuList] = useState(() => []);

  useEffect(() => {
    // 통신 후 데이터 가져올 것 입니다.
    axios({
      method: "post",
      url: "https://api.reacting.kr/api/admin/menu/selectMenuList",
      data: {
        menuNo: 1,
      },
    }).then(function (response) {
      setMenuList(response?.data?.resultList || []);
    });
  }, []); // 한번만

  return (
    <Menu mode="horizontal">
      {menuList.map((menu, i) => {
        return (
          <Link key={i} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}

```

# Footer

## 1.1. src/components/templates/Footer/index.js

```
import React from "react";

export default function Footer() {
  return <p style={{ textAlign: "center" }}>Made with ❤ by XTech</p>;
}
```

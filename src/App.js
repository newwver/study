import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Row,
  Col,
  Layout,
  Button,
  Form,
  Drawer,
  Avatar,
  Typography,
  Tooltip,
} from "antd";
import styled from "styled-components";
import {
  SearchOutlined,
  FilterOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";

import Logo from "./assets/temp/logo.svg";
import Dropdown from "./components/atmos/Dropdown";
import Carousel from "./components/atmos/Carousel";
import Search from "./components/atmos/Search";
import ColorInput from "./components/atmos/ColorInput";
// import Card from "./components/atmos/Card";
import Card from "./components/molecules/Card";
import SiteItem from "./components/molecules/SiteItem";

import menuList from "./assets/temp/menu.json";
import categories from "./assets/temp/categories.json";
import cardList from "./assets/temp/card.json";
import siteMapList from "./assets/temp/siteMap.json";

export default function App() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [leftValue, setLeftValue] = useState("marketplace");
  const [centerValue, setCenterValue] = useState(); // 자식값을 전달받은것.. 왜? 쿼리.. 데이터 조회
  const [isFilter, setIsFilter] = useState(false);

  const handleFinish = (value) => {
    setLeftValue(value);
  };

  const handleCarouselFinish = (value) => {
    setCenterValue(value);
  };

  const handleFilterClick = () => {
    setIsFilter(!isFilter);
  };

  return (
    <BrowserRouter>
      <DribbleLayout>
        <DribbbleHeader>
          <Row>
            <Col>
              <Row>
                <Col>
                  <a href="/#">
                    <img width={76} src={Logo} alt="logo" />
                  </a>
                </Col>
                <Col>
                  <ul className="menuList">
                    {menuList.map((menu) => {
                      return (
                        <Menu>
                          <a href="/#" className="menu">
                            {menu.menuNm}
                          </a>
                        </Menu>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col style={{ marginLeft: `auto` }}>
              <ul>
                <Action right={10}>
                  <a href="/#">
                    <SearchOutlined
                      style={{ fontSize: 18, color: "#6e6d7a" }}
                    />
                  </a>
                </Action>
                <Action left={10} right={10}>
                  <a className="signIn" href="/#">
                    Sign in
                  </a>
                </Action>
                <Action left={10}>
                  <a className="btnAction" href="/#">
                    Share my work
                  </a>
                </Action>
              </ul>
            </Col>
          </Row>
        </DribbbleHeader>
        <DribbbleContent>
          <Row className="top" justify="space-between" gutter={[16, 16]}>
            <Col className="text-contents">
              <h1>Explore the world’s leading design portfolios</h1>
              <h2>
                Millions of designers and agencies around the world showcase
                their portfolio work on Dribbble - the home to the world’s best
                design and creative professionals.
              </h2>
              <a className="btnAction" href="/#">
                Sign up
              </a>
            </Col>
            <Col className="shot-contents">
              {/* <img
                alt="topImage"
                width={335}
                height={300}
                src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png"
              /> */}
              <picture className="container-picture">
                <img
                  width={335}
                  height={300}
                  alt="Dribbble is the leading destination to find &amp; showcase creative work and home to the world's best design professionals."
                  className="signed-out-masthead-image "
                  src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png"
                />
              </picture>
              <span className="user-credit">
                Art by <a href="/#">Romain Briaux</a>
              </span>
            </Col>
          </Row>
          <Row className="middle">
            <Col span={24}>
              <Row className="filter-content">
                <Col flex="200px" style={{ paddingTop: 20 }}>
                  <Dropdown
                    options={tempList}
                    onFinish={handleFinish}
                    defaultValue={leftValue}
                  />
                </Col>
                <Col flex="auto">
                  <CarouselWrap>
                    <Carousel
                      data={categories}
                      keyOption={{
                        label: "categoryName",
                        value: "categoryCode",
                      }}
                      onFinish={handleCarouselFinish}
                    />
                  </CarouselWrap>
                </Col>
                <Col
                  flex="200px"
                  style={{ paddingTop: 10, textAlign: "right" }}
                >
                  <Button
                    icon={<FilterOutlined />}
                    size={"large"}
                    style={{ borderRadius: "8px" }}
                    onClick={handleFilterClick}
                  >
                    Filters
                  </Button>
                </Col>
              </Row>
              <Form form={form} layout="vertical">
                <Row
                  className={`filter-keywords ${isFilter ? "active-1" : ""}`}
                  gutter={[16, 16]}
                >
                  <Col span={6}>
                    <Form.Item name="tags" label="Tags">
                      <Search size="large" prefix={<SearchOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name="color" label="Color">
                      <ColorInput
                        size="large"
                        defaultValue="#000000"
                        onFinish={(color) => {
                          console.log(color);
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <div class="ant-col ant-form-item-label">
                      <label for="timeframe" className="" title="timeframe">
                        Timeframe
                      </label>
                    </div>
                    <Dropdown options={tempList1} width="100%" />
                  </Col>
                  <Col span={6}>
                    <div class="ant-col ant-form-item-label">
                      <label for="Downloads" className="" title="Downloads">
                        Downloads
                      </label>
                    </div>
                    <Dropdown options={tempList2} width="100%" />
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col span={24} className="wrap-inner">
              <Row gutter={[32, 32]}>
                {cardList?.map((item) => {
                  return (
                    <Col span={6}>
                      <Card
                        key={item?.key}
                        alt={item?.name}
                        thumbnail={item?.thumbnail}
                        badgeText={item?.badgeText}
                        title={item?.title}
                        onLink={(key) => {
                          setVisible(true);
                          // console.log(key);
                        }}
                        onSave={(key) => {
                          alert("save");
                        }}
                        onLike={(key) => {
                          alert("like");
                        }}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col span={24} className="site-map">
              <Row>
                <Col flex={`256px`}>왼쪽</Col>
                <Col flex={`auto`}>
                  <Row>
                    {siteMapList.map((site) => {
                      return (
                        <Col flex="20%">
                          {site.siteMapArea.map((item) => {
                            return (
                              <SiteItem
                                data={item}
                                title="areaName"
                                childrenName="name"
                                childrenLink="link"
                              />
                            );
                          })}
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
                <Col flex={`256px`}>오른쪽</Col>
              </Row>
            </Col>
          </Row>
        </DribbbleContent>
        <Footer>푸터</Footer>
        <Drawer
          placement={"bottom"}
          closable={true}
          onClose={() => {
            setVisible(false);
          }}
          visible={visible}
          key={"bottom"}
          height="calc(100% - 50px)"
        >
          <DetailWrap>
            <div className="content-container">
              <div className="content-head-wrap">
                <div className="content-head">
                  <Row>
                    <Col flex={`auto`}>
                      <Row>
                        <Col flex={"42px"}>
                          <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            size={42}
                          />
                        </Col>
                        <Col flex={"auto"}>
                          <div className="content-head-title-wrap">
                            <Title level={5}>
                              Brotrip - Explore Bromo Landing Page
                            </Title>
                            <div className="content-head-title">
                              <span>Wildan 👋 for 10am Studio</span>
                              <span className="content-head-dot">•</span>
                              <span>
                                <Tooltip
                                  placement="top"
                                  title={`Follow Wildan 👋`}
                                >
                                  <a>Follow</a>
                                </Tooltip>
                              </span>
                              <span className="content-head-dot">•</span>
                              <span className="content-head-last">
                                <Tooltip
                                  placement="top"
                                  title={`Send a message about a work opportunity`}
                                >
                                  <a>Hire Us</a>
                                </Tooltip>
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col flex={`200px`}>2</Col>
                  </Row>
                </div>
              </div>
              <div className="content-body">body</div>
            </div>
          </DetailWrap>
        </Drawer>
      </DribbleLayout>
    </BrowserRouter>
  );
}

const { Title } = Typography;

const DetailWrap = styled.div`
  padding: 64px 120px;
  transition: padding 0.25s linear;
  transition-delay: 0.15s;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1172px;
    margin: auto;

    .content-head-wrap {
      width: 70%;
      .content-head {
        margin: auto;
        height: 52px;

        .content-head-title-wrap {
          padding-left: 10px;

          .content-head-title {
            span {
              display: inline-block;
              a {
                color: #3d3d4e;
              }
            }
            .content-head-dot {
              margin: 0 10px;
            }
            .content-head-last {
              a {
                color: #ea4c89;
              }
            }
          }
        }
      }
    }
  }
`;

const tempList = [
  {
    label: "Popular",
    value: "popular",
    group: "A",
  },
  {
    label: "New & Noteworthy",
    value: "NewAndNoteworthy",
    group: "A",
  },
  {
    label: "Marketplace",
    value: "marketplace",
    group: "B",
  },
];

const tempList1 = [
  {
    label: "Now",
    value: "Now",
  },
  {
    label: "This Past Week",
    value: "This Past Week",
  },
  {
    label: "This Past Month",
    value: "This Past Month",
  },
  {
    label: "This Past Year",
    value: "This Past Year",
  },
  {
    label: "All Time",
    value: "All Time",
  },
];

const tempList2 = [
  {
    label: "All Shots",
    value: "All Shots",
  },
  {
    label: "Adobe Illustrator",
    value: "Adobe Illustrator",
  },
  {
    label: "Adobe Photoshop",
    value: "Adobe Photoshop",
  },
  {
    label: "Adobe XD",
    value: "Adobe XD",
  },
  {
    label: "Figma",
    value: "Figma",
  },
  {
    label: "Invision Studio",
    value: "Invision Studio",
  },
  {
    label: "Sketch",
    value: "Sketchv",
  },
];

const { Header, Footer, Content } = Layout;

const DribbleLayout = styled(Layout)`
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
`;

const DribbbleHeader = styled(Header)`
  background: #fff;
  height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
  line-height: 80px;
  padding: 0 15px;

  .menuList {
    padding-left: 0;
  }

  .signIn {
    font-size: 16px;
    color: #6e6d7a;
  }

  .btnAction {
    padding: 10px 16px;
    border-radius: 8px;
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
  margin-right: ${(props) => props.right || 0}px;
`;

const DribbbleContent = styled(Content)`
  background: #f9f8fd;
  // margin: 0 auto;
  .top {
    min-width: 768px;
    // max-width: 1300px;
    padding-right: 80px;
    padding-left: 80px;
    height: 480px;
    .text-contents {
      max-width: 624px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0;
      text-align: left;
      h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 56px;
      }
    }
    .shot-contents {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      width: auto;
      .container-picture {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;

        .signed-out-masthead-image {
          @media (min-width: 768px) {
            width: 400px;
            height: 266px;
          }

          @media (min-width: 1200px) {
            width: 510px;
            height: 360px;
          }
        }
      }
      .user-credit {
        margin-top: 50px;
        color: #9e9ea7;
        a {
          color: #9e9ea7;
          text-decoration: underline;
        }
      }
    }
  }

  .middle {
    background: #fff;
    @media (min-width: 768px) {
      padding: 0 32px;
    }
    @media (min-width: 1200px) {
      padding: 0 72px;
    }

    .filter-content {
      min-height: 72px;
    }

    .filter-keywords {
      visibility: hidden;
      height: 0px;
      transition: all ease 0.3s;
      opacity: 0;
    }

    .active-1 {
      visibility: visible;
      height: 86px;
      opacity: 1;
    }

    .wrap-inner {
      padding: 32px 0 40px 0;
    }
  }

  .btnAction {
    padding: 10px 16px;
    border-radius: 8px;
    background: #ea4c89;
    color: #fff;
    font-weight: 500;
  }
`;

const CarouselWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
`;

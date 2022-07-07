import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";

import { defaultQuery } from "../../../config/utils/network";

/**
 * 게시판 상세
 * @returns
 */
const BoardDetail = () => {
  /**
   * 1. match : params 를 조회 (라우트를 통해 전달된 값들)
   */
  const {
    params: { id },
  } = useMatch("/board/detail/:id");

  /**
   * 2.state 전달받은 값을 세팅
   */
  const [params] = useState({
    siteId: "SITE_000000000000001", // 사이트 고유번호
    bbsId: "BBSMSTR_000000000091", // 게시판 고유번호
    nttId: id,
  });

  /** 상세정보 */
  const [detail, setDetail] = useState();

  /** 4. 게시판 상세정보 api 실행 */
  const BoardDetail = async () => {
    const { data } = await defaultQuery("/api/article/find", params);
    if (data) {
      const { result } = data;
      setDetail(result);
    }
  };

  /**
   * 3.마운트가 되었을 때 api handler 호출
   */
  useEffect(() => {
    BoardDetail();
  }, []); // 페이지가 마운트 되었을 때 1회만 실행

  return (
    <div>
      <Row>
        <Col span={24}>
          <Row>
            <Col flex={1}>{detail?.nttSj || ""}</Col>
            <Col flex={"100px"}>{detail?.frstRegisterId || ""}</Col>
            <Col flex={"100px"}>{detail?.frstRegisterPnttm || ""}</Col>
          </Row>
        </Col>
        <Col
          span={24}
          dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}
        ></Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link to={`/board/update/${id}`}>
            <Button type="primary">수정</Button>
          </Link>
          <Link to="/board">
            <Button>목록</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BoardDetail;

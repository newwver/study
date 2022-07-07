import React, { useState, useEffect } from "react";
import { Row, Col, Table, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

import Search from "../../molecules/Search";
import { defaultQuery } from "../../../config/utils/network";
import { Button } from "antd";

/**
 * 게시판 목록
 * @returns
 */
const Board = () => {
  let navigate = useNavigate();

  /** 파라미터 */
  const [params, setParams] = useState({
    pageIndex: 1,
    pageSize: 10,
    bbsId: "BBSMSTR_000000000091",
    siteId: "SITE_000000000000001",
  });

  /**
   * 결과값
   */
  const [dataSource, setDataSource] = useState(() => []);
  /** 페이지 정보 */
  const [paging, setPaging] = useState();

  /**
   * 검색
   * @param {*} values
   */
  const handleSearch = async (values) => {
    const { searchCondition, searchKeyword } = values;

    const payload = {
      ...params,
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
    };

    boardList(payload);
  };

  /**
   * 게시물 목록 api
   */
  const boardList = async (values) => {
    const payload = {
      ...values,
    };
    const response = await defaultQuery("/api/article/findAll", payload);
    const { data } = response;

    if (data) {
      const { paginationInfo, resultList } = data;
      setDataSource(resultList);
      setPaging(paginationInfo);
      // setLoaded(false);
    }

    setParams(values);
  };

  useEffect(() => {
    boardList(params);
  }, []); // 마운트가 되었을 때 한번만 실행

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: "전체", value: "" },
              { label: "제목", value: "0" },
              { label: "본문", value: "1" },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            rowKey="nttId"
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  navigate(`/board/detail/${record.nttId}`);
                },
              };
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Pagination
            defaultCurrent={1}
            current={paging?.currentPageNo}
            total={paging?.totalRecordCount}
            onChange={(pageIndex) => {
              const payload = {
                ...params,
                pageIndex,
              };

              boardList(payload);
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button
            onClick={() => {
              navigate(`/board/insert`);
            }}
          >
            글쓰기
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const columns = [
  {
    title: "No.",
    dataIndex: "rnum",
    key: "rnum",
    width: 80,
  },
  {
    title: "제목",
    dataIndex: "nttSj",
    key: "nttSj",
  },
  {
    title: "작성자",
    dataIndex: "frstRegisterId",
    key: "frstRegisterId",
    width: 150,
  },
  {
    title: "작성일",
    dataIndex: "frstRegisterPnttm",
    key: "frstRegisterPnttm",
    width: 150,
  },
  {
    title: "첨부파일",
    dataIndex: "atchFileId",
    key: "atchFileId",
    width: 150,
  },
];

export default Board;

import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import FroalaEditor from "react-froala-wysiwyg";

import { defaultQuery } from "../../../config/utils/network";

/**
 * 게시판 등록
 * @returns
 */
const BoardInsert = () => {
  const [form] = Form.useForm();

  let navigate = useNavigate();

  /**
   * 2.state 전달받은 값을 세팅
   */
  const [params] = useState({
    siteId: "SITE_000000000000001", // 사이트 고유번호
    bbsId: "BBSMSTR_000000000091", // 게시판 고유번호
  });

  const [model, setModel] = useState();

  /**
   * 게시판 수정 api 실행
   * @param {*} payload
   */
  const boardUpdate = async (payload) => {
    try {
      const { data } = await defaultQuery("/api/article/save", payload);
      if (data) {
        const { result } = data;
        if (result === 1) {
          // 성공
          Modal.success({
            content: "등록하였습니다.",
            okText: "확인",
            onOk: () => {
              navigate(`/board`);
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    confirm({
      title: "",
      content: "페이지를 벗어나시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk() {
        navigate(`/board`);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  /**
   * 에디터 변경 이벤트
   * @param {*} value
   */
  const handleModelChange = (value) => {
    setModel(value);
  };

  /**
   * 저장
   */
  const handleSubmit = () => {
    form.submit();
  };

  /**
   * form submit
   * @param {*} values
   */
  const handleFinish = (values) => {
    const { nttSj } = values;

    boardUpdate({
      ...params,
      nttSj,
      nttCn: model,
    });
  };

  return (
    <div>
      <Form form={form} onFinish={handleFinish}>
        <Row>
          <Col span={24}>
            <Row>
              {/* <Col flex={1}>{detail?.nttSj || ""}</Col> */}
              <Col span={24}>
                <Form.Item name="nttSj">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            // dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}
          >
            <Form.Item name="nttCn">
              <FroalaEditor
                tag="textarea"
                model={model}
                onModelChange={handleModelChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={handleSubmit}>
              저장
            </Button>
            <Button onClick={handleCancel}>취소</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const { confirm } = Modal;

export default BoardInsert;

import React from "react";
import { Row, Col, Input, Select, Form } from "antd";

/**
 * 검색 컴포넌트
 * 규칙 : label, value
 * [{ label: "전체", value: "" },{ label: "제목", value: "title" }]
 * 이런 형태의 json 데이터를 받아서 만든다.
 * @returns
 */
export default function Search({ options = [], onSearch }) {
  const [form] = Form.useForm();

  /**
   * 검색
   */
  const handleSearch = () => {
    form.submit();
  };

  /**
   * form submit
   */
  const handleFinish = (values) => {
    onSearch && onSearch(values);
  };

  return (
    <Row>
      <Col span={24}>
        <Form layout="inline" form={form} onFinish={handleFinish}>
          <Form.Item name="searchCondition">
            <Select style={{ width: 150 }}>
              {options.map((option) => {
                return (
                  <Option value={option?.value}>{option?.label || ""}</Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="searchKeyword">
            <Input.Search
              style={{ width: 300 }}
              placeholder="검색어를 입력하세요."
              onSearch={handleSearch}
              enterButton
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const { Option } = Select;

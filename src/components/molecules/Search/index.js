import React from "react";
import { Row, Col, Select, Input, Form } from "antd";

/**
 * 공통 검색
 * options = [{label : "전체", value : ""}, {label : "제목", value : "1"}]
 * options = [{label : "전체", value : ""}, {label : "제목", value : "1"}, {label : "작성자", value : "2"}]
 * @param {*} param0
 * @returns
 */
export default function Search({ options = [], onSearch = () => {} }) {
  const [form] = Form.useForm();

  /**
   * submit
   */
  const handleSearch = () => {
    form.submit();
  };

  /**
   * 검색
   * @param {*} values
   */
  const handleFinish = (values) => {
    onSearch && onSearch(values);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "right" }}>
        <Form layout="inline" form={form} onFinish={handleFinish}>
          <Form.Item name="searchCondition">
            <Select style={{ width: 150 }}>
              {options.map((option, i) => {
                return (
                  <Option key={i} value={option?.value}>
                    {option?.label || ""}
                  </Option>
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

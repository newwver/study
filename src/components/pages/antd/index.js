import React from "react";
import { Button, message } from "antd";
import { Link } from "react-router-dom";

const AntdTest = () => {
  const handleClick = () => {
    message.info("클릭하였습니다.", 60);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Default Button
      </Button>
      <Link to="/main">
        <Button type="primary">main 바로가기</Button>
      </Link>
      <Link to="/login">
        <Button type="primary">로그인 바로가기</Button>
      </Link>
      <Link to="/table">
        <Button type="primary">table 바로가기</Button>
      </Link>
      <Link to="/hooks">
        <Button type="primary">hooks 바로가기</Button>
      </Link>

      <Link to="/antd">
        <Button type="primary">antd 바로가기</Button>
      </Link>
    </div>
  );
};

export default AntdTest;

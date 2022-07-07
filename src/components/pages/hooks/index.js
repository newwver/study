import React, { useState, useMemo, useCallback } from "react";
import { Button, message } from "antd";
import { Link } from "react-router-dom";

const Hooks = () => {
  /** 사용자 정보 */
  const [users, setUsers] = useState(data);
  const [testCount, setTestCount] = useState(1);

  const handleCount = (arr) => {
    console.log("카운트를 실행하네");
    return arr.length;
  };

  const count = useMemo(() => {
    return handleCount(users);
  }, [users]); // users state의 변경이 일어나면 rendering 다시해라

  /**
   * 유저 추가
   */
  const handleClick = useCallback(() => {
    const userList = [
      ...users,
      {
        id: users.length + 1,
        username: "add",
        email: "add@naver.com",
        active: true,
      },
    ];

    setUsers(userList);
  }, [users]);

  /**
   * 유저 삭제
   */
  const handleRemove = useCallback(() => {
    let userList = Array.from(users); // 깊은 복사
    userList.splice(0, 1);
    setUsers(userList);
  }, [users]);

  /**
   * 테스트 이벤트
   */
  const handleTestClick = () => {
    setTestCount((preTestCount) => {
      return preTestCount + 1;
    });
  };

  const handleButtonClick = () => {
    message.info("메세지를 출력하였습니다.", 10);
  };

  return (
    <div>
      <div>
        <p>테스트 카운트 : {testCount}</p>
        <p>카운드 : {count}</p>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleRemove}>감소</button>
        <button onClick={handleTestClick}>test</button>
      </div>
      <div>
        <Button type="primary" onClick={handleButtonClick}>
          Main
        </Button>
        <Link to="/main">
          <Button type="primary">main</Button>
        </Link>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    username: "velopert",
    email: "public.velopert@gmail.com",
    active: true,
  },
  {
    id: 2,
    username: "tester",
    email: "tester@example.com",
    active: false,
  },
  {
    id: 3,
    username: "liz",
    email: "liz@example.com",
    active: false,
  },
];

export default Hooks;

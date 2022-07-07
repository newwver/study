# Hooks

## 1.1. useState

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트는 {count} 입니다</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}

```

## 1.2. useEffect

Effect는 화면 렌더링 시 재 실행된다.

```
import React, { useState, useEffect } from "react";

export default function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `클릭 ${count}`;
  });

  return (
    <div>
      <p>클릭 {count}</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

```

mount가 되었을 때만 effect 실행하기

```
import React, { useState, useEffect } from "react";

export default function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `클릭 ${count}`;
  },[]);

  return (
    <div>
      <p>클릭 {count}</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
```

state의 변경이 있을 때 effect 실행하기

```
import React, { useState, useEffect } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("짝수");

  useEffect(() => {
    const editName = count % 2 === 0 ? "짝수" : "홀수";
    setName(editName);
  }, [count]);

  return (
    <div>
      <p>클릭 {count}</p>
      <p>이름 : {name}</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

```

effect의 clean up 실행하기

```
- main.js

import React, { useState, useEffect } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("짝수");

  useEffect(() => {
    const editName = count % 2 === 0 ? "짝수" : "홀수";
    setName(editName);
  }, [count]);

  return (
    <div>
      <p>클릭 {count}</p>
      <p>이름 : {name}</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

- button.js

import React, { useEffect } from "react";

export default function Button(props) {
  const { buttonName, onClick } = props;

  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    };
  }, []);

  return <button onClick={onClick}>{buttonName && buttonName}</button>;
}

```

## 1.3. useMemo

```
import React, { useState, useMemo } from "react";

function Hooks() {
  const [users, setUsers] = useState(data);
  const [testCount, setTestCount] = useState(1);

  const handleCount = (arr) => {
    console.log("카운트가 실행하네");
    return arr.length;
  };

  const count = handleCount(users);
  //   const count = useMemo(() => handleCount(users), [users]);

  const handleClick = () => {
    const userList = [
      ...users,
      {
        id: 4,
        username: "add",
        email: "add@naver.com",
        active: true,
      },
    ];

    setUsers(userList);
  };

  const handleTestClick = () => {
    setTestCount((preCount) => {
      return preCount + 1;
    });
  };

  return (
    <div>
      <p>테스트 카운트 : {testCount}</p>
      <p>카운트 : {count}</p>
      <div>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleTestClick}>test</button>
      </div>
    </div>
  );
}

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

```

## 1.4. useCallback

```
import React, { useState, useCallback } from "react";

function Hooks() {
  const [users, setUsers] = useState(data);

  const handleCount = (arr) => {
    console.log("카운트가 실행하네");
    return arr.length;
  };

  const count = handleCount(users);

  //   const handleClick = () => {
  //     const userList = [
  //       ...users,
  //       {
  //         id: 4,
  //         username: "add",
  //         email: "add@naver.com",
  //         active: true,
  //       },
  //     ];

  //     setUsers(userList);
  //   };

  const handleClick = useCallback(() => {
    const userList = [
      ...users,
      {
        id: 4,
        username: "add",
        email: "add@naver.com",
        active: true,
      },
    ];

    setUsers(userList);
  }, [users]);

  /**
   * 삭제
   */
  const handleRemove = () => {
    let userList = Array.from(users);
    userList.splice(0, 1);
    setUsers(userList);
  };

  return (
    <div>
      <p>카운트 : {count}</p>
      <div>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleRemove}>감소</button>
      </div>
    </div>
  );
}

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

```

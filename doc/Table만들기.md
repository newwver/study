# 테이블 만들기

## 1.1. 테이블 컴포넌트 만들기

```
src/components/molecules/Table/index.js 생성

import React, { useState } from "react";

export default function Table({
  columns: cols,
  height,
  data = [],
  rowHeight,
  onClick,
}) {
  const [row, setRow] = useState();
  const [columns, setColumns] = useState(cols);
  const [edit, setEdit] = useState();

  const handleDbClick = (rowNum, key) => {
    setEdit({
      rowNum,
      key,
    });
  };

  return (
    <div style={{ height, overflow: "auto", border: "1px solid #ccc" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <th key={col.key} style={{ width: col.width }}>
                  {col.colName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            // 행을 5개
            return (
              <tr
                key={`key_${i}`}
                style={{
                  height: rowHeight,
                  background: `${row === i + 1 ? "yellow" : ""}`,
                }}
                onClick={() => {
                  const no = i + 1;
                  setRow(no);
                  onClick && onClick(no, item); // 행 번호, 행이 가지고 정보
                }}
              >
                {columns.map((col) => {
                  // 열을 4개
                  return (
                    <td
                      key={col.key}
                      onDoubleClick={() => {
                        handleDbClick(i + 1, col.key);
                      }}
                    >
                      {edit &&
                      edit.rowNum === i + 1 &&
                      edit.key === col.key &&
                      col.isEdit ? (
                        <input value={item[col.key]} />
                      ) : (
                        item[col.key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


```

## 1.2. 테이블 컴포넌트 사용하기

```
import React from "react";

// 컴포넌트 호출
import React, { useState } from "react";
import Table from "../../molecules/Table";

const TableTest = () => {
  const columns = [
    { colName: "no", key: "no", textAlign: "center", width: 50, isEdit: false }, // 컬렴명 : colName, textAlign : center - 센터정렬 , width : 50px
    { colName: "제목", key: "title", textAlign: "center", isEdit: true },
    {
      colName: "등록자",
      key: "regNm",
      textAlign: "center",
      width: 100,
      isEdit: false,
    },
    {
      colName: "등록일",
      key: "regDt",
      textAlign: "center",
      width: 100,
      isEdit: false,
    },
  ];

  const handleClick = (rowNum, record) => {
    // setRow(rowNum);
  };

  return (
    <div style={{ padding: 30 }}>
      <Table
        columns={columns}
        height={800}
        data={data}
        rowHeight={50}
        onClick={handleClick}
      />
    </div>
  );
};

const data = [
  {
    no: 1,
    title: "테이블 만들기 1",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 2,
    title: "테이블 만들기 2",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 3,
    title: "테이블 만들기 3",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 4,
    title: "테이블 만들기 4",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 5,
    title: "테이블 만들기 5",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 1,
    title: "테이블 만들기 1",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 2,
    title: "테이블 만들기 2",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 3,
    title: "테이블 만들기 3",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 4,
    title: "테이블 만들기 4",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 5,
    title: "테이블 만들기 5",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 1,
    title: "테이블 만들기 1",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 2,
    title: "테이블 만들기 2",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 3,
    title: "테이블 만들기 3",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 4,
    title: "테이블 만들기 4",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
  {
    no: 5,
    title: "테이블 만들기 5",
    regNm: "홍길동",
    regDt: "2022-06-15",
  },
];

export default TableTest;


```

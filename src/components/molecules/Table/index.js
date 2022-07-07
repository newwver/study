import React, { useState } from "react";

export default function Table({
  columns = [],
  height,
  data = [],
  rowHight = 30,
  onRowClick, // 부모가 전달해준 값
}) {
  /** 행 번호  */
  const [rowNum, setRowNum] = useState();

  const [edit, setEdit] = useState();

  /**
   * 행 클릭 시 row number를 받아 state에 저장
   * @param {*} num
   */
  const handleClick = (num, record) => {
    if (onRowClick) {
      onRowClick(record);
    } else {
      if (num === rowNum) {
        setRowNum();
      } else {
        setRowNum(num);
      }
    }
  };

  /**
   * 더블 클릭 시 행과 열 정보를 담음
   * @param {*} num
   * @param {*} key
   */
  const handleDoubleClik = (num, key) => {
    setEdit({
      num,
      key,
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", height, overflow: "auto" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <td
                  key={col.key}
                  style={{ textAlign: col.textAlign, width: col.width }}
                >
                  {col.colName}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                key={`key_${i}`}
                style={{
                  height: rowHight,
                  background: `${rowNum === i + 1 ? "yellow" : ""}`,
                }}
                onClick={() => {
                  handleClick(i + 1, item);
                }}
              >
                {columns.map((col) => {
                  return (
                    <td
                      key={col.key}
                      onDoubleClick={() => {
                        handleDoubleClik(i + 1, col.key);
                      }}
                    >
                      {edit && edit.num === i + 1 && edit.key === col.key ? (
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

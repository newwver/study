import React, { useState } from "react";
import styled from "styled-components";
import { CaretDownOutlined } from "@ant-design/icons";

export default function Dropdown({ options }) {
  const [labelInfo, setLabelInfo] = useState(options[0]);
  const [isRotate, setIsRotate] = useState(false);

  const handleClick = () => {
    setIsRotate(!isRotate);
  };

  const handleRowClick = (item) => {
    setLabelInfo(item);
  };

  return (
    <>
      <DropdownWrap
        borderColor={`${isRotate ? "#ea4c891a" : "#e7e7e9"}`}
        border={`${isRotate ? "3px" : "1px"}`}
        display={`${isRotate ? "" : "none"}`}
        // onBlur={() => {
        //   console.log("handleClick ===> ", handleClick);
        //   // handleClick();
        // }}
      >
        <a className="dropdown-label" onClick={handleClick}>
          {labelInfo.label}
        </a>
        <CaretDownOutlined
          className={`${isRotate ? "rotate-180" : "rotate-0"}`}
        />
        <div className="dropdown-list">
          <ul>
            {options.map((item) => {
              return (
                <li
                  onClick={() => {
                    handleRowClick(item);
                  }}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </DropdownWrap>
    </>
  );
}

const DropdownWrap = styled.span`
  position: relative;
  min-width: 117px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  box-shadow: 0px 0px 0px ${(props) => props.border}
    ${(props) => props.borderColor} inset;
  padding: 15px 5px;

  &:hover {
    box-shadow: 0px 0px 0px 3px #ea4c891a inset;
  }
  .dropdown-label {
    color: #6e6d7a;
    padding: 10px 15px 10px 10px;
  }
  .rotate-180 {
    transform: rotate(180deg);
    transition: all ease 0.3s;
  }
  .rotate-0 {
    transform: rotate(0deg);
    transition: all ease 0.3s;
  }
  .dropdown-list {
    position: absolute;
    top: 50px;
    min-width: 180px;
    display: ${(props) => props.display};
  }
`;

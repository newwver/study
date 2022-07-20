import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import { CompactPicker } from "react-color";
import { BgColorsOutlined } from "@ant-design/icons";

export default function ColorPicker({ ...rest }) {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState();

  const handleFocus = () => {
    setVisible(!visible);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    handleFocus();
  };

  return (
    <PickerWrap display={visible ? "" : "none"}>
      <DribbbleInput
        {...rest}
        onFocus={handleFocus}
        value={color}
        prefix={<BgColorsOutlined style={{ color }} />}
      />
      <div className="dropdown-picker">
        <CompactPicker onChangeComplete={handleChangeComplete} />
      </div>
    </PickerWrap>
  );
}

// 1.인풋박스 선택하면 picker가 보여져야함
// 2.picker 선택이 되면 color 값이 인풋박스에 보여져야함
// 3.picker 사라져야 함
// 4.default 값이 존재하면 인풋 박스에 기본값이 설정되어야 함
const PickerWrap = styled.div`
  position: relative;

  .dropdown-picker {
    z-index: 100;
    position: absolute;
    top: 50px;
    left: 5px;
    min-width: 180px;
    background: #fff;
    display: ${(props) => props.display};
    cursor: pointer;
    -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
    box-shadow: 0px 3px 5pxrgba (0, 0, 0, 0.04);
  }
`;

const DribbbleInput = styled(Input)`
  color: #0d0c22;
  outline: none;
  border-radius: 8px;
`;

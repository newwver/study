import React, { useState } from "react";

export default function Login() {
  /** submit 제출용 데이터 */
  const [payload, setPayload] = useState();

  /**
   * 데이터 set
   * @param {*} type
   * @param {*} value
   */
  const handleSetValues = (type, value) => {
    setPayload({
      ...payload, // payload를 복사
      [type]: value, // type은 handle를 실행하는 이벤트에서 넘겨준 값 (id or password)
    });
  };

  /**
   * submit : 제출
   * form안의 button의 type이 submit일 경우, 이 버튼을 클릭 시 form이 실행됨
   */
  const handleSubmit = (e) => {
    // submit을 하면 페이지가 이동되어서 데이터를 가져올 수 없음
    // e.preventDefault()를 작성하여 제출하는 이벤트를 막음
    e.preventDefault();
    // payload값을 서버로 던져줘야 함
    console.log("payload  ===> ", payload);
    // 1.validation
    // 2.암호화
    // 3.api call
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/** id */}
          <input
            name="id"
            onChange={(e) => {
              // e.target.name은 이 input 의 name인 id를 넘겨줌
              // e.target.value는 이 input에 작성된 value를 넘겨줌
              handleSetValues(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          {/** password */}
          <input
            name="password"
            type="password"
            onChange={(e) => {
              // e.target.name은 이 input 의 name인 password를 넘겨줌
              // e.target.value는 이 input에 작성된 value를 넘겨줌
              handleSetValues(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

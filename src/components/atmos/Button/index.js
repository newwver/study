import React, { useEffect } from "react";

export default function Button(props) {
  const { buttonName, onClick } = props;

  useEffect(() => {
    console.log("한번만 실행해 ");
    return () => {
      console.log("마운트를 끊을꺼야");
    };
  }, []);

  return <button onClick={onClick}>{buttonName && buttonName}</button>;
}

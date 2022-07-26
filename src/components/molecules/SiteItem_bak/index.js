import React from "react";
import styled from "styled-components";

export default function SiteItem({ data, title, childrenName, childrenLink }) {
  return (
    <SiteMapWrap>
      <ul>
        <li className="title">
          <a>{data[title]}</a>
        </li>
        {data.children.map((item) => {
          return (
            <li>
              <a href={item[childrenLink]} target={`_blank`}>
                {item[childrenName]}
              </a>
            </li>
          );
        })}
      </ul>
    </SiteMapWrap>
  );
}

const SiteMapWrap = styled.div`
  ul {
    .title {
      font-weight: 900;
    }
    li {
      list-style-type: none;
      a {
        display: block;
        color: #0d0c22;
        margin-top: 20px;
      }
    }
  }
`;

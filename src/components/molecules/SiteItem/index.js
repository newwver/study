import React from "react";
import styled from "styled-components";

export default function SiteItem({ data, title, childrenName, childrenLink }) {
  return (
    <SiteItemWrap>
      <ul>
        <li className="title">
          <a>{data[title]}</a>
        </li>
        {data?.children.map((item) => {
          return (
            <li>
              <a href={item[childrenLink]} target="_blank">
                {item[childrenName]}
              </a>
            </li>
          );
        })}
      </ul>
    </SiteItemWrap>
  );
}

const SiteItemWrap = styled.div`
  ul {
    li {
      list-style-type: none;

      a {
        display: inline-block;
        margin-top: 20px;
        color: #3d3d4e;
      }
    }

    .title {
      font-weight: 900;
      a {
        color: #000;
      }
    }
  }
`;

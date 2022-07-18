import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../../../store/common/reducer";
import { setMenuList } from "../../../store/menu/reducer";

import { Link } from "react-router-dom";
import { defaultQuery } from "../../../config/utils/network";

export default function Header() {
  const dispatch = useDispatch();

  const { menuList } = useSelector((state) => state.menu);

  const [menus, setMenus] = useState([]);

  /**
   * 메뉴 목록 조회
   */
  const findAllMenu = async () => {
    try {
      const { data } = await defaultQuery(`/api/admin/menu/selectMenuList`, {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 100,
        searchCondition: "",
        searchKeyword: "",
      });

      if (data) {
        const { resultList } = data;
        // resultList : 38개 메뉴 목록
        dispatch(setMenuList(resultList));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    // store 의 메모리 값 중 menuList 값이 있으면 통신을 하지 않음
    if (menuList.length <= 0) {
      dispatch(setIsLoading(true));
      findAllMenu();
    }
  }, []);

  useEffect(() => {
    if (menuList.length > 0) {
      setMenus(menuList);
    }
  }, [menuList]);

  return (
    <Menu mode="horizontal">
      {/* <Menu.Item onClick={handleClick}>게시판</Menu.Item> */}
      {menus.map((menu, i) => {
        return (
          <Link key={menu.menuNo} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}

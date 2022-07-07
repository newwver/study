import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuList } from "../../../store/menu/reducer";
import { setIsLoading } from "../../../store/common/reducer";
import { defaultQuery } from "../../../config/utils/network";

export default function Header() {
  const dispatch = useDispatch();
  // const common = useSelector((state) => state.common);
  const menu = useSelector((state) => state.menu);
  // console.log("menu ======> ", menu);
  const [menuList, setMenus] = useState([]);

  /**
   * 메뉴 목록 조회,
   */
  const findMenuList = async () => {
    try {
      const { data } = await defaultQuery("/api/admin/menu/selectMenuList", {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 100,
        searchCondition: "",
        searchKeyword: "",
      });

      if (data) {
        const { resultList } = data;
        dispatch(setMenuList(resultList)); // store에 메뉴 목록 저장
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 3000);
    }
  };

  useEffect(() => {
    if (menu.menuList.length <= 0) {
      dispatch(setIsLoading(true));
      findMenuList();
    }
  }, []);

  useEffect(() => {
    if (menu.menuList.length > 0) {
      setMenus(menu.menuList);
    }
  }, [menu.menuList]);

  return (
    <Menu mode="horizontal">
      {menuList.map((menu, i) => {
        return (
          // <Link key={i} to={menu.menuUrl}>
          <Menu.Item
            onClick={() => {
              // dispatch(setIsLoading(false));
            }}
          >
            {menu.menuNm}
          </Menu.Item>
          // </Link>
        );
      })}
    </Menu>
  );
}

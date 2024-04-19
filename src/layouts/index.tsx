import defaultAvatar from '@/assets/avatar.jpg';
import titleIcon from '@/assets/title-icon.svg';
import {
  BarChartOutlined,
  LogoutOutlined,
  PieChartOutlined,
  SmileOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { Link, Outlet, useSelector } from 'umi';
import './index.less';

const unsignItems = [
  {
    key: '1',
    label: (
      <Link to="/login" className="top-links-link">
        <UserSwitchOutlined /> 用户登录
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/register" className="top-links-link">
        <UserAddOutlined /> 用户注册
      </Link>
    ),
  },
];
const signedItmes = [
  {
    key: '3',
    label: (
      <Link to="/login" className="top-links-link">
        <BarChartOutlined /> 我的图表
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <>
        <span>
          <LogoutOutlined /> 用户注销
        </span>
      </>
    ),
  },
];
export default function Layout() {
  const [userInfo, setUserInfo] = useState(null);
  const [items, setItems] = useState(unsignItems);

  const storedUserInfo = useSelector((state: any) => {
    return state.userStore;
  });
  useEffect(() => {
    console.log(storedUserInfo, 'storedUserInfo');
    setUserInfo(storedUserInfo.userInfo);
    setItems(signedItmes);
  }, [storedUserInfo]);

  return (
    <>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: '#fff',
          border: '1px solid #eee',
        }}
      >
        <div className="left-content">
          <div className="top-title">
            <img className="top-title-icon" src={titleIcon} alt="icon" />
            <Link to="/" className="top-title-name">
              花椒BI
            </Link>
          </div>
          <nav className="top-links">
            <Link to="/" className="top-links-link">
              <SmileOutlined /> 欢迎
            </Link>
            <Link to="/analyze" className="top-links-link">
              <PieChartOutlined /> 智能分析
            </Link>
          </nav>
        </div>

        <Dropdown menu={{ items }} placement="bottomLeft">
          <div className="user">
            <img
              className="user-avatar"
              src={
                userInfo && userInfo.userAvatar
                  ? storedUserInfo.userAvatr
                  : defaultAvatar
              }
              alt="头像"
            />
            {userInfo ? userInfo.userName : '游客'}
          </div>
        </Dropdown>
      </Header>
      <Outlet />
    </>
  );
}

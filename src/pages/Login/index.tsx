import { Button, Checkbox, Form, Input, message } from 'antd';

import titleIcon from '@/assets/title-icon.svg';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, history, useDispatch } from 'umi';

import { getUserInfo, userLogin } from '@/api/requests';
import styles from './index.module.less';

export default () => {
  const dispatch = useDispatch();
  const handleLogin = async (values: FormData) => {
    try {
      const res: any = await userLogin(values);
      localStorage.setItem('token', res?.access_token);
      if (res.code === 0) {
        message.success('登录成功');
        const res = await getUserInfo();
        dispatch({ type: 'userStore/setUserInfo', userInfo: res.data });
        history.push('/');
      }
    } catch (e: any) {
      message.error(e);
    }
  };

  return (
    <>
      <div className={styles.loginForm}>
        <div className={styles.loginTitle}>
          <img className={styles.loginIcon} src={titleIcon} alt="icon" />
          花椒BI
          <p>花椒BI, 将数据变成有意义的见解</p>
        </div>
        <Form
          onFinish={handleLogin}
          style={{
            width: 400,
            height: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
          }}
        >
          <Form.Item
            name="userAccount"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              style={{ width: 320, height: 40, borderRadius: 10 }}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="userPwd"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              style={{ width: 320, height: 40, borderRadius: 10 }}
              placeholder="请输入密码"
            />
          </Form.Item>
          <div
            style={{
              marginBottom: 24,
              width: 320,
            }}
          >
            <Checkbox name="autoLogin">自动登录</Checkbox>
            <Link
              to="/register"
              style={{
                float: 'right',
              }}
            >
              还没账号？
            </Link>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: 320,
                height: 40,
                borderRadius: 10,
                fontSize: 18,
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

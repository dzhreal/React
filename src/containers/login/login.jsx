import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSaveUserInfoAction } from "../../redux/actions/login_action";
import { reqLogin } from "../../api";
import "./css/login.less";
import logo from "./images/logo.png";
function Login(props) {
  let navigate = useNavigate();
  const onFinish = async (values) => {
    const { username, password } = values;
    let result = await reqLogin(username, password);
    let { status, msg, data } = result;
    if (status === 0) {
      console.log(data);
      props.saveUserInfo(data);
      navigate("/admin");
    } else {
      message.warning(msg, 1);
    }
  };

  let { Item } = Form;
  const { isLogin } = props;
   useEffect(() => {
    if (isLogin) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo" />
        <h1>商品管理系统</h1>
      </header>
      <section>
        <h1>用户登录</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Item
            name="username"
            rules={[
              { required: true, message: "用户名必须输入!" },
              { max: 12, message: "用户名必须小于12位!" },
              { min: 4, message: "用户名必须大于4位!" },
              {
                pattern: /^\w+$/,
                message: "用户名必须是数字，字母，下划线!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined
                  className="site-form-item-icon"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="Username"
            />
          </Item>
          <Item
            name="password"
            rules={[
              {
                validator: (rule, value) => {
                  if (!value) {
                    return Promise.reject("密码必须输入!");
                  } else if (value.length < 4) {
                    return Promise.reject("密码必须必须大于4位!");
                  } else if (value.length > 12) {
                    return Promise.reject("密码必须必须小于12位!");
                  } else if (!/^\w+$/.test(value)) {
                    return Promise.reject("用户名必须是数字，字母，下划线!");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
          >
            <Input
              prefix={
                <LockOutlined
                  className="site-form-item-icon"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              type="password"
              placeholder="Password"
            />
          </Item>
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Item>
        </Form>
      </section>
    </div>
  );
}

export default connect(
  (state) => ({
    isLogin: state.userInfo.islogin,
  }),
  {
    saveUserInfo: createSaveUserInfoAction,
  }
)(Login);

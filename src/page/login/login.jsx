import React, { Component } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./css/login.less";
import logo from "./images/logo.png";
export default class Login extends Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  render() {
    let { Item } = Form;
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
            onFinish={this.onFinish}
          >
            <Item
              name="username"
              rules={[
                { required: true, message: "用户名必须输入!" },
                { max: 12, message: "用户名必须小于12位!" },
                { min: 4, message: "用户名必须大于4位!" },
                { pattern: /^\w+$/, message: "用户名必须是数字，字母，下划线!" },
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
                  validator:(rule,value) => {
                    if(!value){
                        return Promise.reject('密码必须输入!')
                    }else if(value.length<4){
                       return Promise.reject('密码必须必须大于4位!')
                    }else if(value.length>12){
                        return Promise.reject('密码必须必须小于12位!')
                    }else if(!(/^\w+$/).test(value)){
                        return Promise.reject('用户名必须是数字，字母，下划线!')
                    }else{
                        return Promise.resolve()
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
}

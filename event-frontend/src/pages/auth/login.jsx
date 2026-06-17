import React, { useState } from "react";
import { Layout, Card, Typography, Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authApi";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import "../../styles/login.css";

const { Title, Text } = Typography;

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await loginUser(values);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      message.success("Login successful!");

      if (user.role === "superadmin") navigate("/superadmin/dashboard");
      else if (user.role === "eventManager") {
        if (user.status === "pending") navigate("/request-processing");
        else if (user.status === "rejected") navigate("/request-rejected");
        else if (user.subscriptionStatus === "inactive")
          navigate("/eventManager/subscription");
        else navigate("/eventManager/dashboard");
      } else navigate("/client/dashboard");
    } catch (error) {
      message.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="login-page">
      <Navbar />
      <div className="login-content">
        <Card className="login-card">
          <Title level={2} className="login-title">
            Welcome Back
          </Title>
          <Text className="login-subtitle">
            Please enter your details to sign in
          </Text>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input
                prefix={<MailOutlined />}
                size="large"
                className="custom-input"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                size="large"
                className="custom-input"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loading}
              className="custom-button"
            >
              Login
            </Button>
          </Form>

          <div className="form-footer">
            <Text className="text-muted">Don't have an account? </Text>
            <Link to="/register">Register</Link>
          </div>
        </Card>
      </div>
      <Footer />
    </Layout>
  );
}

export default Login;

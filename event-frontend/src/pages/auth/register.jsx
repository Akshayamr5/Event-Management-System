import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Form,
  Input,
  Button,
  message,
} from "antd";

import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { registerUser, loginUser } from "../../services/authApi";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import "../../styles/register.css";

const { Title, Text } = Typography;

function Register() {
  const [isManager, setIsManager] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        role: isManager ? "eventManager" : "client",
        companyName: isManager ? values.companyName : "",
      };

      const response = await registerUser(payload);

      message.success(response.data.message);

      if (isManager) {
        navigate("/request-processing");
      } else {
        const loginResponse = await loginUser({
          email: values.email,
          password: values.password,
        });

        localStorage.setItem("token", loginResponse.data.token);
        localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

        message.success("Registration successful. Logged in as client.");
        navigate("/client/dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Registration Failed";
      if (/already exists/i.test(errorMessage) || /exist/i.test(errorMessage)) {
        message.error("Email already exists. Please login.");
        navigate("/login");
      } else {
        message.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <Layout className="register-page">
        <Row justify="center" align="middle" className="register-container">
          <Col xs={22} sm={18} md={14} lg={10} xl={8}>
            <Card className="register-card">
              <Title level={2}>Create Account</Title>

              <Text className="register-subtitle">
                Join EventSphere and start planning amazing events
              </Text>

              <Form
                layout="vertical"
                onFinish={onFinish}
                className="register-form"
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Enter your full name"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Enter your email"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Enter your phone number"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Enter your password"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Passwords do not match"),
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Confirm your password"
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Checkbox
                    checked={isManager}
                    onChange={(e) => setIsManager(e.target.checked)}
                  >
                    I want to register as an Event Manager
                  </Checkbox>

                  <Text
                    type="secondary"
                    style={{
                      display: "block",
                      marginTop: 8,
                      fontSize: "12px",
                    }}
                  >
                    Event Managers require Super Admin approval before using the
                    platform.
                  </Text>
                </Form.Item>
                {isManager && (
                  <>
                    <Form.Item
                      label="Company Name"
                      name="companyName"
                      rules={[
                        {
                          required: true,

                          message: "Please enter company name",
                        },
                      ]}
                    >
                      <Input
                        prefix={<BankOutlined />}
                        placeholder="Enter your company name"
                        size="large"
                      />
                    </Form.Item>
                  </>
                )}

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    loading={loading}
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>

              <div className="register-footer">
                <Text>Already have an account? </Text>

                <Link to="/login">Login</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Layout>

      <Footer />
    </>
  );
}

export default Register;

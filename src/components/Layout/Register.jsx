import React from "react";
import { Button, Form, Input } from "antd";
import { registerUserAPI } from "../../service/api.service";
import { notification } from "antd";
const Register = () => {
    const [form] = Form.useForm();

    const onFinishFailed = () => {
        notification.error({
            message: "Error",
            description: "An error occurred while registering",
        });
    };
    const onFinish = async (values) => {
        const res = await registerUserAPI(values);
        if (res.data) {
            notification.success({
                message: "Success",
                description: "Đăng ký thành công!",
            });
        }
    };

    return (
        <div>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                name="form-create-users"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 12,
                }}
                layout="vertical"
                style={{ maxWidth: "600px" }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="FullName"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your fullname!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 1,
                        span: 4,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;

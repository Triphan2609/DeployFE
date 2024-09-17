import { Button, Form, Input } from "antd";
import { createUserAPI } from "../../service/api.service";
import { notification } from "antd";
import { useContext } from "react";
import { AuthContext } from "../auth.context";
const UsersForm = () => {
    const data = useContext(AuthContext);
    console.log(data);

    const handleClickBtn = async (values) => {
        // console.log(values);
        const res = await createUserAPI(values);
        if (res.data) {
            notification.success({
                message: "Success",
                description: "Tạo mới thành công!",
            });
        } else
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message.join(", ")),
            });
    };

    return (
        <Form
            name="form-create-users"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 12,
            }}
            style={{ maxWidth: "600px" }}
            initialValues={{
                remember: true,
            }}
            onClick={handleClickBtn}
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
                        message: "Please input your phone!",
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
                    Create User
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UsersForm;

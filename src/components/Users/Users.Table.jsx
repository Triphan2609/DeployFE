import { Table } from "antd";
import { fetchAllUsersAPI } from "../../service/api.service";
import { useEffect, useState } from "react";

const UsersTable = () => {
    const [dataUsers, setDataUsers] = useState();

    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "FullName",
            dataIndex: "fullName",
            key: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
    ];

    const loadUsers = async () => {
        const response = await fetchAllUsersAPI();
        setDataUsers(response.data);
    };

    useEffect(() => loadUsers, []);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
                style={{ marginBottom: "50px" }}
            />
        </div>
    );
};

export default UsersTable;

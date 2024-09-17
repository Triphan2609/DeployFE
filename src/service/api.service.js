import axios from "./axios.customize";

const createUserAPI = async (values) => {
    return await axios.post("/api/v1/user", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        phone: values.phone,
    });
};

const registerUserAPI = async (values) => {
    return await axios.post("/api/v1/user/register", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        phone: values.phone,
    });
};

// const updateUserAPI = async () => {};

const fetchAllUsersAPI = async () => {
    return await axios.get("/api/v1/user");
};

export { createUserAPI, registerUserAPI, fetchAllUsersAPI };

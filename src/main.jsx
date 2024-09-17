import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/Users.jsx";
import Todo from "./components/Todo/Todo.jsx";
import ErrorPage from "./components/Layout/ErrorPage.jsx";
import BooksPage from "./pages/Books.jsx";
import Register from "./components/Layout/Register.jsx";
import { AuthWrapper } from "./components/auth.context.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Todo />,
            },
            {
                path: "/users",
                element: <UsersPage />,
            },
            {
                path: "/books",
                element: <BooksPage />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthWrapper>
            <RouterProvider router={router} />
        </AuthWrapper>
    </React.StrictMode>
);

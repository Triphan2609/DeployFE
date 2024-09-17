import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Result
            status="403"
            title="403"
            subTitle={error.statusText || error.message}
            extra={
                <Link to={"/"}>
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    );
};

export default ErrorPage;

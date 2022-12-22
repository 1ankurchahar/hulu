import Head from "next/head";
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <div>
            <Head>
                <title>HULU</title>
                <meta name='description' content='Hulu' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Login />
        </div>
    );
};

export default LoginPage;

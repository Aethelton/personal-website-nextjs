import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, minimum-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;

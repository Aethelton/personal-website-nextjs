import "../styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("/components/ProgressBar"), { ssr: false });

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            </Head>
            <Component {...pageProps} />
            <ProgressBar />
        </>
    );
};

export default MyApp;

import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const About: NextPage = () => {
    const router = useRouter();
    const query = router.query;

    return (
        <div>
            <Head>
                <title>About {query.id}</title>
            </Head>
            <p className="text-lg font-bold">Hello about 😎 {query.id}</p>
        </div>
    );
}

export default About;
import { FC } from 'react';
import Head from 'next/head';

const Home: FC = () => {
    return (
        <div>
            <Head>
                <title>Homepage Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <p>Here you have the header!</p>
            </header>

            <main>
                <p>Here you have the main content!</p>
            </main>

            <footer>
                <p>Here you have the footer!</p>
            </footer>
        </div>
    );
};

export default Home;

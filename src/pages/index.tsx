import { FC } from 'react';
import Head from 'next/head';
import ExperienceBar from '../components/molecules/ExperienceBar';
import PageContainer from '../components/atoms/PageContainer';

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Homepage Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageContainer>
                <header>
                    <ExperienceBar max={500} value={20} />
                </header>
            </PageContainer>
        </>
    );
};

export default Home;

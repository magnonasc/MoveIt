import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ExperienceBar from '../components/molecules/ExperienceBar';
import PageContainer from '../components/atoms/PageContainer';

const Header = styled.header`
    margin: 1rem 0;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Move It</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageContainer>
                <Header>
                    <ExperienceBar max={500} value={20} />
                </Header>
                <Main>
                    <div>teste 1</div>
                    <div>teste 2</div>
                    <div>teste 3</div>
                </Main>
            </PageContainer>
        </>
    );
};

export default Home;

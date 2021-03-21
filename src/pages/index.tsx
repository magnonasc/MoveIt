import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ExperienceBar from '../components/molecules/ExperienceBar';
import PageContainer from '../components/atoms/PageContainer';
import Profile from '../components/molecules/Profile';
import CompletedChallenges from '../components/molecules/CompletedChallenges';
import Countdown from '../components/molecules/Countdown';
import Button from '../components/atoms/Button';

const Header = styled.header`
    margin: 1rem 0;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;
    justify-content: space-evenly;

    min-width: 30rem;
    max-height: 768px;
`;

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Move It - Profile</title>
            </Head>

            <PageContainer>
                <Header>
                    <ExperienceBar max={500} value={20} />
                </Header>
                <Main>
                    <Section>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </Section>
                    <Section />
                </Main>
            </PageContainer>
        </>
    );
};

export default Home;

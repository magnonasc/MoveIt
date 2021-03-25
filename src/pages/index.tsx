import { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ExperienceBar from '../components/molecules/ExperienceBar';
import PageContainer from '../components/atoms/PageContainer';
import Profile from '../components/molecules/Profile';
import CompletedChallenges from '../components/molecules/CompletedChallenges';
import Countdown from '../components/molecules/Countdown';
import ChallengeBox from '../components/molecules/ChallengeBox';

const Header = styled.header`
    margin: 1rem 0;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 48rem;
    justify-content: space-evenly;
    align-items: space-between;

    min-width: 30rem;
    max-height: 48rem;
`;

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Move It - Profile</title>
            </Head>

            <PageContainer>
                <Header>
                    <ExperienceBar />
                </Header>
                <Main>
                    <Section>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </Section>
                    <Section>
                        <ChallengeBox />
                    </Section>
                </Main>
            </PageContainer>
        </>
    );
};

export default Home;

import { FC, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import Box from '../atoms/Box';
import Button from '../atoms/Button';

const ChallengeBoxContainer = styled(Box)`
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    max-height: 40rem;
    text-align: center;
    padding: 1rem;
`;

const ChallengeIncentive = styled.strong`
    display: flex;
    font-size: 2rem;
    flex: 2;
    align-items: center;
    width: 75%;
`;

const ChallengeDescription = styled.p`
    display: flex;
    font-size: 1.5rem;
    flex: 1;
    align-items: flex-start;
    margin-top: 2rem;
`;

const ChallengeIcon = styled.img`
    display: flex;
    flex: 1;
`;

const ActiveChallengeHeader = styled.header`
    display: flex;
    height: 4rem;
    width: 80%;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px ${({ theme }) => theme.colors.grayLine};
`;

const ActiveChallengeExperienceGain = styled.strong`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.darkBlue};
`;

const ActiveChallengeBody = styled.section`
    display: flex;
    flex: 1;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ActiveChallengeTitle = styled.strong`
    font-size: 2rem;
    margin: 1rem 0;
`;

const ActiveChallengeIcon = styled.img`
    margin: 2rem 0;
`;

const ActiveChallengeDescription = styled.p`
    line-height: 2rem;
    margin: 1rem 0;
`;

const ActiveChallengeFooter = styled.footer`
    display: flex;
    max-width: 100%;
    height: 8rem;
    align-items: center;
    justify-content: center;
`;

const ProgressButton = styled(Button)`
    margin: 0 1rem;
    width: 15rem;
    height: 5rem;
`;

const ChallengeBox: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { activeChallenge, finishChallenge, cancelChallenge } = useContext(ChallengesContext);

    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <>
                    <ActiveChallengeHeader>
                        <ActiveChallengeExperienceGain>
                            Ganhe {activeChallenge.experienceGain} xp
                        </ActiveChallengeExperienceGain>
                    </ActiveChallengeHeader>
                    <ActiveChallengeBody>
                        <ActiveChallengeIcon
                            src={`/assets/icons/${activeChallenge.icon}.svg`}
                            alt="hand lifting a gym weight"
                        />
                        <ActiveChallengeTitle>Exercite-se</ActiveChallengeTitle>
                        <ActiveChallengeDescription>{activeChallenge.description}</ActiveChallengeDescription>
                    </ActiveChallengeBody>
                    <ActiveChallengeFooter>
                        <ProgressButton
                            backgroundColor="lightRed"
                            hoverBackgroundColor="darkRed"
                            onClick={cancelChallenge}
                        >
                            Falhei
                        </ProgressButton>
                        <ProgressButton
                            backgroundColor="lightGreen"
                            hoverBackgroundColor="darkGreen"
                            onClick={finishChallenge}
                        >
                            Completei
                        </ProgressButton>
                    </ActiveChallengeFooter>
                </>
            ) : (
                <>
                    <ChallengeIncentive>Finalize um ciclo para receber um desafio</ChallengeIncentive>
                    <ChallengeIcon src="/assets/icons/up-level-arrow.svg" alt="up level arrow" />
                    <ChallengeDescription>Avance de nível completando os desafios.</ChallengeDescription>
                </>
            )}
        </ChallengeBoxContainer>
    );
};

export default ChallengeBox;

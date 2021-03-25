import { FC, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengeContext';

const CompletedChallengesContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2.5rem;

    border-bottom: solid 2px ${({ theme }) => theme.colors.grayLine};
`;

const CompletedChallengesText = styled.strong`
    font-size: 1.5rem;
`;

const CompletedChallengesAmount = styled.strong`
    font-size: 1.5rem;
`;

const CompletedChallenges: FC<HTMLAttributes<HTMLElement>> = () => {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengesContainer>
            <CompletedChallengesText>Completed Challenges</CompletedChallengesText>
            <CompletedChallengesAmount>{challengesCompleted}</CompletedChallengesAmount>
        </CompletedChallengesContainer>
    );
};

export default CompletedChallenges;

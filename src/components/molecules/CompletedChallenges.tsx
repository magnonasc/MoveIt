import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

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
    return (
        <CompletedChallengesContainer>
            <CompletedChallengesText>Completed Challenges</CompletedChallengesText>
            <CompletedChallengesAmount>00</CompletedChallengesAmount>
        </CompletedChallengesContainer>
    );
};

export default CompletedChallenges;

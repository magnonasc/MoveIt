import { FC, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengeContext';

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
    max: number;
    value: number;
};

const Container = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
`;

const LabelContainer = styled.span`
    display: flex;
    justify-content: center;
`;

const ProgressBarContainer = styled.div`
    display: flex;
    flex: 1;
    height: 4px;
    position: relative;
    margin: 0 1.5rem;

    background-color: ${({ theme }) => theme.colors.grayLine};
    border-radius: 2px;
`;

const ProgressBarValue = styled.div<ProgressBarProps>`
    position: absolute;
    left: 0;
    height: 100%;
    width: ${({ max, value }) => (value * 100) / max}%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 2px;
`;

const CurrentProgress = styled.span`
    position: absolute;
    top: 12px;
    right: 0;
    transform: translateX(50%);
    white-space: pre;
`;

const ExperienceBar: FC<HTMLAttributes<HTMLDivElement>> = () => {
    const { currentExperience, currentLevelMaxExperience } = useContext(ChallengesContext);

    return (
        <Container>
            <LabelContainer>{currentExperience} xp</LabelContainer>
            <ProgressBarContainer>
                <ProgressBarValue max={currentLevelMaxExperience} value={currentExperience}>
                    <CurrentProgress>{currentExperience} xp</CurrentProgress>
                </ProgressBarValue>
            </ProgressBarContainer>
            <LabelContainer>{currentLevelMaxExperience} xp</LabelContainer>
        </Container>
    );
};

export default ExperienceBar;

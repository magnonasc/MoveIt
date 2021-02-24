import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type ExperienceBarProps = HTMLAttributes<HTMLDivElement> & {
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

const ProgressBarValue = styled.div<ExperienceBarProps>`
    position: absolute;
    left: 0;
    height: 100%;
    width: ${({ max, value }) => (value * 100) / max}%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 2px;
`;

const CurrentProgress = styled.span`
    position: absolute;
    top: 12px;
    right: 0;
    transform: translateX(50%);
    white-space: pre;
`;

const ExperienceBar: FC<ExperienceBarProps> = ({ max, value }: ExperienceBarProps) => (
    <Container>
        <LabelContainer>0 xp</LabelContainer>
        <ProgressBarContainer>
            <ProgressBarValue max={max} value={value}>
                {value > 0 && value < max ? <CurrentProgress>{value} xp</CurrentProgress> : null}
            </ProgressBarValue>
        </ProgressBarContainer>
        <LabelContainer>{max} xp</LabelContainer>
    </Container>
);

export default ExperienceBar;

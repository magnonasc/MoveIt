import { FC } from 'react';
import styled from 'styled-components';
import ProgressBar, { ProgressBarProps } from '../atoms/ProgressBar';

const LabelContainer = styled.span`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
`;

const ExperienceBar: FC<ProgressBarProps> = ({ max, value }: ProgressBarProps) => (
    <Container>
        <LabelContainer>0 xp</LabelContainer>
        <ProgressBar max={max} value={value} />
        <LabelContainer>{max} xp</LabelContainer>
    </Container>
);

export default ExperienceBar;

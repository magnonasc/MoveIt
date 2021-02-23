import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
    max: number;
    value: number;
};

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
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 2px;
`;

const ProgressBar: FC<ProgressBarProps> = ({ max, value }: ProgressBarProps) => (
    <ProgressBarContainer>
        <ProgressBarValue max={max} value={value} />
    </ProgressBarContainer>
);

export default ProgressBar;

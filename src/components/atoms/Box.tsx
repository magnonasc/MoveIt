import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const BoxContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

const ChallengeBox: FC<HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    return <BoxContainer {...props}>{children}</BoxContainer>;
};

export default ChallengeBox;

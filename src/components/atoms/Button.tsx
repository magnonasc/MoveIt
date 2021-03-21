import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonWithIconProps = HTMLAttributes<HTMLButtonElement> & {
    icon?: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
};

const ButtonContainer = styled.button<ButtonWithIconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    border: none;
    background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor]};
    color: ${({ backgroundColor, theme }) => (backgroundColor === 'white' ? theme.colors.text : theme.colors.white)};
    font-size: 1.5rem;

    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: ${({ hoverBackgroundColor, theme }) => theme.colors[hoverBackgroundColor]};
        color: ${({ hoverBackgroundColor, theme }) =>
            hoverBackgroundColor === 'white' ? theme.colors.text : theme.colors.white};
    }
`;

// const ButtonIcon = styled.img`
//     width: 1rem;
//     height: 1rem;
//     margin: 0 1rem;
// `;

const Button: FC<ButtonWithIconProps> = ({ children, icon, ...props }) => {
    return (
        <ButtonContainer type="button" {...props}>
            {children}
            {/* {icon ? <ButtonIcon src={`/assets/icons/${icon}.svg`} alt={icon} /> : null} */}
        </ButtonContainer>
    );
};

export default Button;

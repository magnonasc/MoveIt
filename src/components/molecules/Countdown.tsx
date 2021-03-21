import { FC, HTMLAttributes, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const CountdownContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20rem;
`;

const CountdownDisplay = styled.section`
    display: flex;

    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
    font-size: 8rem;
`;

const CountSegmentContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 12rem;

    font-family: 'Major Mono Display';

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`;

const CountSegmentDelimiter = styled.span`
    display: flex;
    align-items: center;
    font-size: 8rem;
    margin: 0 1rem;
`;

const FirstUnitContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    border-right: solid 1px ${({ theme }) => theme.colors.grayLine};
`;

const LastUnitContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    border-left: solid 1px ${({ theme }) => theme.colors.grayLine};
`;

const FinishedCicleButton = styled(Button)`
    border-bottom: solid 4px ${({ theme }) => theme.colors.green};
`;

const Countdown: FC<HTMLAttributes<HTMLElement>> = () => {
    const currentLevelInitialTime = 3;

    const interval = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(currentLevelInitialTime);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [firstMinuteUnit, lastMinuteUnit] = String(minutes).padStart(2, '0').split('');
    const [firstSecondUnit, lastSecondUnit] = String(seconds).padStart(2, '0').split('');

    const handleCountdown = () => {
        setIsActive((previousIsActive) => {
            if (previousIsActive) {
                setTime(currentLevelInitialTime);
            }

            return !previousIsActive;
        });
    };

    useEffect(() => {
        if (isActive) {
            interval.current = setInterval(() => {
                setTime((previousTime) => {
                    if (previousTime > 0) {
                        return previousTime - 1;
                    }

                    setIsActive(false);
                    setHasFinished(true);
                    return previousTime;
                });
            }, 1000);
        } else {
            clearInterval(interval.current);
        }
    }, [isActive]);

    useEffect(() => {
        if (hasFinished) {
            console.log('ACABAMO!');
            // TODO mostrar mensagem de sucesso!
        }
    }, [hasFinished]);

    return (
        <CountdownContainer>
            <CountdownDisplay>
                <CountSegmentContainer>
                    <FirstUnitContainer>{firstMinuteUnit}</FirstUnitContainer>
                    <LastUnitContainer>{lastMinuteUnit}</LastUnitContainer>
                </CountSegmentContainer>
                <CountSegmentDelimiter>:</CountSegmentDelimiter>
                <CountSegmentContainer>
                    <FirstUnitContainer>{firstSecondUnit}</FirstUnitContainer>
                    <LastUnitContainer>{lastSecondUnit}</LastUnitContainer>
                </CountSegmentContainer>
            </CountdownDisplay>
            {hasFinished ? (
                <FinishedCicleButton backgroundColor="white" disabled>
                    Ciclo Encerrado
                </FinishedCicleButton>
            ) : (
                <Button
                    onClick={handleCountdown}
                    // icon={active ? 'stop-arrow' : 'play-arrow'}
                    backgroundColor={isActive ? 'white' : 'lightBlue'}
                    hoverBackgroundColor={isActive ? 'red' : 'darkBlue'}
                >
                    {isActive ? 'Abandonar o ciclo' : 'Iniciar um ciclo'}
                </Button>
            )}
        </CountdownContainer>
    );
};

export default Countdown;

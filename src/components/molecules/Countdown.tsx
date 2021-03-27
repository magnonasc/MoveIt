import { FC, HTMLAttributes, useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import Button from '../atoms/Button';

const DEFAULT_INITIAL_TIME = 60 * 25;

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
    border-bottom: solid 4px ${({ theme }) => theme.colors.lightGreen};
`;

const Countdown: FC<HTMLAttributes<HTMLElement>> = () => {
    const { startNewChallenge, hasFinishedCountdown, finishCountdown } = useContext(ChallengesContext);

    const interval = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(DEFAULT_INITIAL_TIME);

    const [firstMinuteUnit, setFirstMinuteUnit] = useState('0');
    const [lastMinuteUnit, setLastMinuteUnit] = useState('0');

    const [firstSecondUnit, setFirstSecondUnit] = useState('0');
    const [lastSecondUnit, setLastSecondUnit] = useState('0');

    useEffect(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const minuteUnits = String(minutes).padStart(2, '0').split('');
        const secondUnits = String(seconds).padStart(2, '0').split('');

        setFirstMinuteUnit(minuteUnits[0]);
        setLastMinuteUnit(minuteUnits[1]);

        setFirstSecondUnit(secondUnits[0]);
        setLastSecondUnit(secondUnits[1]);
    }, [time]);

    const handleCountdown = () => {
        setIsActive((previousIsActive) => !previousIsActive);
    };

    useEffect(() => {
        if (isActive) {
            interval.current = setInterval(() => {
                setTime((previousTime) => {
                    if (previousTime > 0) {
                        return previousTime - 1;
                    }

                    return previousTime;
                });
            }, 1000);
        } else {
            clearInterval(interval.current);
            setTime(DEFAULT_INITIAL_TIME);
        }
    }, [isActive]);

    useEffect(() => {
        if (time === 0) {
            setIsActive(false);
            finishCountdown();
        }
    }, [time]);

    useEffect(() => {
        if (!hasFinishedCountdown) {
            setTime(DEFAULT_INITIAL_TIME);
        } else {
            startNewChallenge();
        }
    }, [hasFinishedCountdown]);

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
            {hasFinishedCountdown ? (
                <FinishedCicleButton backgroundColor="white" disabled>
                    Ciclo Encerrado
                </FinishedCicleButton>
            ) : (
                <Button
                    onClick={handleCountdown}
                    // icon={active ? 'stop-arrow' : 'play-arrow'}
                    backgroundColor={isActive ? 'white' : 'lightBlue'}
                    hoverBackgroundColor={isActive ? 'lightRed' : 'darkBlue'}
                >
                    {isActive ? 'Abandonar o ciclo' : 'Iniciar um ciclo'}
                </Button>
            )}
        </CountdownContainer>
    );
};

export default Countdown;

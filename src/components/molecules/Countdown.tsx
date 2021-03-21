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

const Countdown: FC<HTMLAttributes<HTMLElement>> = () => {
    const currentLevelInitialTime = 25 * 60;

    const interval = useRef(null);

    const [active, setActive] = useState(false);
    const [time, setTime] = useState(currentLevelInitialTime);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [firstMinuteUnit, lastMinuteUnit] = String(minutes).padStart(2, '0').split('');
    const [firstSecondUnit, lastSecondUnit] = String(seconds).padStart(2, '0').split('');

    const handleCountdown = () => {
        setActive((previousIsActive) => {
            if (previousIsActive === true) {
                setTime(currentLevelInitialTime);
            }

            return !previousIsActive;
        });
    };

    useEffect(() => {
        if (active) {
            interval.current = setInterval(() => {
                setTime((previousTime) => {
                    if (previousTime > 0) {
                        return previousTime - 1;
                    }

                    setActive(false);
                    return previousTime;
                });
            }, 1000);
        } else {
            clearInterval(interval.current);
        }
    }, [active]);

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
            <Button
                onClick={handleCountdown}
                // icon={active ? 'stop-arrow' : 'play-arrow'}
                backgroundColor={active ? 'white' : 'lightBlue'}
                hoverBackgroundColor={active ? 'red' : 'darkBlue'}
            >
                {active ? 'Abandone o ciclo' : 'Inicie o ciclo'}
            </Button>
        </CountdownContainer>
    );
};

export default Countdown;

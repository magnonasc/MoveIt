import { createContext, FC, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    icon: string;
    description: string;
    experienceGain: number;
}

interface ChallengesContextData {
    currentLevel: number;
    currentLevelMaxExperience: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    startNewChallenge: () => void;
    finishChallenge: () => void;
    cancelChallenge: () => void;
    hasFinishedCountdown: boolean;
    finishCountdown: () => void;
    restartCountdown: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesContextProvider: FC<ReactNode> = ({ children }) => {
    const [currentLevelMaxExperience, setCurrentLevelMaxExperience] = useState(100);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);
    const [hasFinishedCountdown, setHasFinishedCountdown] = useState(false);

    const levelUp = () => {
        setCurrentLevel((previousLevel) => previousLevel + 1);
    };

    const finishCountdown = () => {
        setHasFinishedCountdown(true);
    };

    const restartCountdown = () => {
        setHasFinishedCountdown(false);
    };

    const startNewChallenge = () => {
        const selectedChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[selectedChallengeIndex];
        setActiveChallenge(challenge);
    };

    const finishChallenge = () => {
        if (currentExperience + activeChallenge.experienceGain >= currentLevelMaxExperience) {
            setCurrentLevel((previousLevel) => previousLevel + 1);
            setCurrentExperience(currentExperience + activeChallenge.experienceGain - currentLevelMaxExperience);
            setCurrentLevelMaxExperience((previousCurrentLevelMaxExperience) => previousCurrentLevelMaxExperience * 2);
        } else {
            setCurrentExperience((previousExperience) => previousExperience + activeChallenge.experienceGain);
        }

        setActiveChallenge(null);
        setChallengesCompleted((previousChallengesCompleted) => previousChallengesCompleted + 1);
        restartCountdown();
    };

    const cancelChallenge = () => {
        setActiveChallenge(null);
        restartCountdown();
    };

    return (
        <ChallengesContext.Provider
            value={{
                currentLevel,
                currentLevelMaxExperience,
                levelUp,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                startNewChallenge,
                finishChallenge,
                cancelChallenge,
                hasFinishedCountdown,
                finishCountdown,
                restartCountdown
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
};

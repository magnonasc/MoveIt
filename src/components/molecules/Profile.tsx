import { FC, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengeContext';

const ProfileContainer = styled.section`
    display: flex;
`;

const ProfileImage = styled.img`
    width: 8rem;
    height: 8rem;

    border-radius: 4rem;

    margin-right: 2rem;
`;

const ProfileInformation = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const UserName = styled.h1`
    font-size: 2rem;
`;

const CurrentLevelContainer = styled.div`
    display: flex;

    width: 100%;
`;

const ProgressLevelIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    margin-right: 1rem;
`;

const CurrentLevelText = styled.p`
    font-size: 1.5rem;
`;

const Profile: FC<HTMLAttributes<HTMLElement>> = () => {
    const { currentLevel } = useContext(ChallengesContext);

    return (
        <ProfileContainer>
            <ProfileImage
                src="https://avatars.githubusercontent.com/u/26474587?s=460&u=8af8867711e2aad4a0da169174e40ea72437319d&v=4"
                alt="Magno Nascimento"
            />
            <ProfileInformation>
                <UserName>Magno Nascimento</UserName>
                <CurrentLevelContainer>
                    <ProgressLevelIcon src="/assets/icons/up.svg" alt="green arrow up" />
                    <CurrentLevelText>Level {currentLevel}</CurrentLevelText>
                </CurrentLevelContainer>
            </ProfileInformation>
        </ProfileContainer>
    );
};

export default Profile;

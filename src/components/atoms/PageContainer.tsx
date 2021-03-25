import styled from 'styled-components';

const PageContainer = styled.div`
    max-width: 1366px;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        height: 100vh;
    }
`;

export default PageContainer;

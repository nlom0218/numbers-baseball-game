import { useState } from 'react';
import styled from 'styled-components';
import SetupTeamCount from './SetupTeamCount';
import SetupTeamName from './SetupTeamName';

const Container = styled.div`
  font-family: 'Song Myung';
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetupTeam = () => {
  const [teamCount, setTeamCount] = useState<string | null>(null);

  return (
    <Container>
      {!teamCount ? (
        <SetupTeamCount setTeamCount={setTeamCount} />
      ) : (
        <SetupTeamName teamCount={teamCount} />
      )}
    </Container>
  );
};

export default SetupTeam;

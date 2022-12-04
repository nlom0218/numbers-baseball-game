import BasicContainer from '../Components/BasicContainer';
import SetupTeam from '../Components/Team/SetupTeam';
import TeamState from '../Components/Team/TeamState';
import Team from '../libs/Team';
import { useEffect } from 'react';
import { useState } from 'react';

const Setup = () => {
  const [isExistTeam, setIsExistTeam] = useState(false);

  useEffect(() => {
    setIsExistTeam(Team.isExist());
  }, []);
  return (
    <BasicContainer>
      {isExistTeam ? (
        <TeamState setIsExistTeam={setIsExistTeam} />
      ) : (
        <SetupTeam setIsExistTeam={setIsExistTeam} />
      )}
    </BasicContainer>
  );
};

export default Setup;

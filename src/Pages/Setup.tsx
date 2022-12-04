import { useEffect } from 'react';
import { useState } from 'react';
import BasicContainer from '../Components/BasicContainer';
import SetupTeam from '../Components/Team/SetupTeam';
import Team from '../libs/Team';

const Setup = () => {
  const [isExistTeam, setIsExistTeam] = useState(false);

  useEffect(() => {
    setIsExistTeam(Team.isExist());
  }, []);
  return (
    <BasicContainer>
      {isExistTeam ? <div>팀 없음</div> : <SetupTeam />}
    </BasicContainer>
  );
};

export default Setup;

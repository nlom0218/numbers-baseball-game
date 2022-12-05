import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Team from '../../libs/Team';
import TeamItem from './TeamItem';

const Container = styled.div`
  font-family: 'Song Myung';
  font-size: 2em;
  font-size: 2rem;
  position: absolute;
  right: 1%;
  background: #ececec;
  padding: 20px;
  padding: 1.25rem;
  border-radius: 10px;
  border-radius: 0.625rem;
  display: grid;
  row-gap: 10px;
  row-gap: 0.625rem;
`;

interface ITeams {
  teamName: string;
  score: number;
}

interface IProps {
  order: number;
}

const TeamOrder = ({ order }: IProps) => {
  const [teams, setTeams] = useState<Array<ITeams>>(Team.get());

  useEffect(() => {
    const randomTeam = Team.mixRandom(teams);
    setTeams(randomTeam);
  }, []);

  return (
    <Container>
      {teams.map(({ teamName }, idx) => {
        return <TeamItem key={idx} teamName={teamName} turn={order === idx} />;
      })}
    </Container>
  );
};

export default TeamOrder;

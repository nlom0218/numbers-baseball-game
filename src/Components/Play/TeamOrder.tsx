import { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Team from '../../libs/Team';
import { ITeams } from '../../Pages/Play';
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

interface IProps {
  order: number;
  teams: Array<ITeams>;
  setTeams: Dispatch<SetStateAction<ITeams[]>>;
}

const TeamOrder = ({ order, teams, setTeams }: IProps) => {
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

import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Team from '../../libs/Team';

const Container = styled.div`
  padding: 40px;
  padding: 2.5rem;
  font-family: 'Song Myung';
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  gap: 1.25rem;
  align-items: center;
`;

const Title = styled.div`
  grid-column: 1 / -1;
  justify-self: flex-end;
  font-size: 2em;
  font-size: 2rem;
`;

const STeam = styled.div`
  min-height: 120px;
  min-height: 7rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  padding: 1.25rem;
  background: #ececec;
  text-align: center;
  border: 1px solid #525252;
  border-radius: 10px;
  border-radius: 0.625rem;
  display: grid;
  row-gap: 20px;
  row-gap: 1.25rem;
`;

const Name = styled.div`
  font-size: 3em;
  font-size: 3rem;
`;

const Score = styled.div`
  font-size: 2.5em;
  font-size: 2.5rem;
  color: #ff8282;
`;

const Reset = styled.div`
  grid-column: 1 / -1;
  justify-self: flex-end;
  font-size: 1.5em;
  font-size: 1.5rem;
  background-color: #1c5b8e;
  color: #e8e8e8;
  padding: 10px 40px;
  border-radius: 0.3125em;
  border-radius: 0.3125rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

interface ITeam {
  teamName: string;
  score: number;
}

interface IProps {
  setIsExistTeam: Dispatch<SetStateAction<boolean>>;
}

const TeamState = ({ setIsExistTeam }: IProps) => {
  const teams = Team.get();

  const onClickReset = () => {
    Team.reset();
    setIsExistTeam(false);
  };

  return (
    <Container>
      <Title>팀 목록</Title>
      {teams.map(({ teamName, score }: ITeam, idx: number) => {
        return (
          <STeam key={idx}>
            <Name>{teamName}</Name>
            <Score>{score}점</Score>
          </STeam>
        );
      })}
      <Reset onClick={onClickReset}>초기화</Reset>
    </Container>
  );
};

export default TeamState;

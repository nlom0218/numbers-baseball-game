import styled from 'styled-components';

interface ITeamName {
  turn: boolean;
}

const TeamName = styled.div<ITeamName>`
  padding: 10px;
  padding: 0.625rem;
  background-color: ${(props) => props.turn && '#ff8383cf'};
  border-radius: 10px;
  border-radius: 0.625rem;
`;

interface IProps {
  teamName: string;
  turn: boolean;
}

const TeamItem = ({ teamName, turn }: IProps) => {
  return <TeamName turn={turn}>{teamName}</TeamName>;
};

export default TeamItem;

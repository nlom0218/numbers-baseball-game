import styled from 'styled-components';

const TeamName = styled.div`
  padding: 10px;
  padding: 0.625rem;
`;

interface IProps {
  teamName: string;
}

const TeamItem = ({ teamName }: IProps) => {
  return <TeamName>{teamName}</TeamName>;
};

export default TeamItem;

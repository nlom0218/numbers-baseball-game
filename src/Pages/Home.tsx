import styled from 'styled-components';
import ComputerNumbers from '../libs/ComputerNumbers';
import BasicContainer from '../Components/BasicContainer';
import { useNavigate } from 'react-router-dom';
import { FcRules, FcSettings } from 'react-icons/fc';

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 2fr 1fr;
`;

const TopContents = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Name = styled.span`
  font-family: 'East Sea Dokdo', sans-serif;
  font-size: 2em;
  font-size: 2rem;
`;

const TopBtn = styled.div`
  display: flex;
  font-size: 2em;
  font-size: 2rem;
  div {
    cursor: pointer;
  }
`;

const GameRule = styled.div`
  margin-right: 0.5em;
  margin-right: 0.5rem;
`;

const Setup = styled.div``;

const Title = styled.span`
  align-self: center;
  justify-self: center;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 4em;
  font-size: 4rem;
`;

const ButtonContainer = styled.div`
  align-items: flex-start;
  justify-self: center;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1.25em;
  column-gap: 1.25rem;
  font-size: 1.25em;
  font-size: 1.25rem;
  div {
    background-color: #1c5b8e;
    color: #e8e8e8;
    padding: 10px 40px;
    border-radius: 0.3125em;
    border-radius: 0.3125rem;
    cursor: pointer;
    box-shadow: 0px 16px 6px -10px rgba(0, 0, 0, 0.6);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const onClickGameRule = () => navigate('/rules');

  const onClickSetup = () => navigate('/setup');

  const onClickPlaySole = () => {
    ComputerNumbers.save();
    navigate('/play/sole');
  };

  const onClickPlayTeam = () => navigate('/play/team');

  return (
    <BasicContainer>
      <Layout>
        <TopContents>
          <Name>초코 에듀테크 연구회</Name>
          <TopBtn>
            <GameRule onClick={onClickGameRule}>
              <FcRules />
            </GameRule>
            <Setup onClick={onClickSetup}>
              <FcSettings />
            </Setup>
          </TopBtn>
        </TopContents>
        <Title>오늘 아침 활동 뭐하지? - 숫자 야구 ⚾️</Title>
        <ButtonContainer>
          <div onClick={onClickPlaySole}>혼자서 하기</div>
          <div onClick={onClickPlayTeam}>팀전으로 하기</div>
        </ButtonContainer>
      </Layout>
    </BasicContainer>
  );
};

export default Home;

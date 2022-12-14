import styled from 'styled-components';
import ComputerNumbers from '../libs/ComputerNumbers';
import BasicContainer from '../Components/BasicContainer';
import { useNavigate } from 'react-router-dom';
import { FcRules, FcSettings } from 'react-icons/fc';
import Team from '../libs/Team';
import { useState } from 'react';

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 2fr 1fr;
`;

const TopBtn = styled.div`
  justify-self: flex-end;
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
  grid-template-columns: auto auto auto;
  column-gap: 1.25em;
  column-gap: 1.25rem;
  font-size: 2em;
  font-size: 2rem;
  font-family: 'Black And White Picture', sans-serif;
  div {
    background-color: #1c5b8e;
    color: #e8e8e8;
    padding: 10px 40px;
    border-radius: 0.3125em;
    border-radius: 0.3125rem;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const ErrMsg = styled.div`
  font-family: 'Song Myung';
  position: absolute;
  font-size: 3em;
  font-size: 3rem;
  color: #f83030;
  bottom: 40px;
  bottom: 2.5rem;
  left: 0;
  right: 0;
  text-align: center;
`;

const Home = () => {
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const navigate = useNavigate();

  const onClickGameRule = () => navigate('/rules');

  const onClickSetup = () => navigate('/setup');

  const onClickPlaySole = () => {
    ComputerNumbers.save();
    navigate('/play/sole');
  };

  const onClickPlayTeam = () => {
    if (!Team.isExist()) return setErrMsg('팀 설정 후 입장 가능합니다.');

    ComputerNumbers.save();
    navigate('/play/team');
  };

  return (
    <BasicContainer>
      <Layout>
        <TopBtn></TopBtn>
        <Title>아침 활동 뭐하지? - 숫자 야구 ⚾️</Title>
        <ButtonContainer>
          <div onClick={onClickPlaySole}>혼자서 하기</div>
          <div onClick={onClickPlayTeam}>팀전으로 하기</div>
          <div onClick={onClickSetup}>팀 설정하기</div>
        </ButtonContainer>
        {errMsg && <ErrMsg>{errMsg}</ErrMsg>}
      </Layout>
    </BasicContainer>
  );
};

export default Home;

import styled from 'styled-components';
import { FcHome } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Home = styled.div`
  position: absolute;
  font-size: 3em;
  font-size: 3rem;
  right: 0;
  top: 0;
  padding: 20px;
  padding: 1.25rem;
  cursor: pointer;
`;

const MoveHome = () => {
  const navigate = useNavigate();

  const onClickHomeBtn = () => navigate('/');

  return (
    <Home onClick={onClickHomeBtn}>
      <FcHome />
    </Home>
  );
};

export default MoveHome;

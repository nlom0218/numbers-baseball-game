import styled from 'styled-components';
import BasicContainer from '../Components/BasicContainer';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ComputerNumbers from '../libs/ComputerNumbers';
import ValidationNumbers from '../libs/ValidationNumbers';
import Compare from '../libs/Compare';
import MoveHome from '../Components/MoveHoem';

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-items: center;
  align-items: center;
`;

const GameEnd = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  column-gap: 1.25rem;
  align-items: center;
  .gameEndBtn {
    background-color: #1c5b8e;
    color: #e8e8e8;
    padding: 10px 40px;
    border-radius: 0.3125em;
    border-radius: 0.3125rem;
    cursor: pointer;
    font-size: 2em;
    font-size: 2rem;
    font-family: 'Black And White Picture', sans-serif;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  column-gap: 1.25rem;
`;

const Input = styled.input`
  width: 160px;
  height: 160px;
  font-size: 5em;
  font-size: 5rem;
  padding: 20px;
  padding: 1.25rem;
  border-radius: 10px;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #ececec;
  text-align: center;
  border: 2px solid #525252;
  font-family: 'Song Myung';
`;

const ResultContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  font-family: 'Song Myung';
`;

const ErrorMessage = styled.div`
  font-size: 4em;
  font-size: 4rem;
  color: #f83030;
`;

const Numbers = styled.div`
  font-size: 8em;
  font-size: 8rem;
  letter-spacing: 20px;
  letter-spacing: 1.25rem;
`;

const Result = styled.div`
  font-size: 8em;
  font-size: 8rem;
`;

interface FormValues {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}

const Play = () => {
  const [computerNumbers, setComputerNumbers] = useState<string | null>(
    ComputerNumbers.get()
  );
  const [playerNumbers, setPlayerNumbers] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>('0볼 0스크라이크');
  const [isEnd, setIsEnd] = useState(false);

  const navigate = useNavigate();
  const { mode } = useParams();

  const { register, setFocus, handleSubmit, setValue, getValues } =
    useForm<FormValues>({
      mode: 'onChange',
    });

  const onSubmit = () => {
    setTimeout(() => {
      createPlayerNumbers();
      printResult();
      initializeValues();
    }, 500);
  };

  const createPlayerNumbers = () => {
    const numbers =
      getValues('number1') +
      getValues('number2') +
      getValues('number3') +
      getValues('number4');

    const { errMsg } = ValidationNumbers(numbers);
    if (errMsg) return setErrMsg(errMsg);

    setErrMsg(null);
    setPlayerNumbers(numbers);
  };

  const printResult = () => {
    if (!computerNumbers || !playerNumbers) return;

    const result = Compare.result(computerNumbers, playerNumbers);
    setResult(result);
    setIsEnd(computerNumbers === playerNumbers);
  };

  const initializeValues = () => {
    setValue('number1', '');
    setValue('number2', '');
    setValue('number3', '');
    setValue('number4', '');
    setFocus('number1');
  };

  const onClickHomeBtn = () => navigate('/');

  const onClickReset = () => {
    setIsEnd(false);
    ComputerNumbers.save();
    setPlayerNumbers(null);
    setComputerNumbers(ComputerNumbers.get());
  };

  useEffect(() => {
    setFocus('number1');
  }, [computerNumbers]);

  useEffect(() => {
    printResult();
  }, [playerNumbers]);

  return (
    <BasicContainer>
      <MoveHome />
      <Layout>
        {isEnd ? (
          <GameEnd>
            <div className="gameEndBtn" onClick={onClickHomeBtn}>
              홈으로 이동하기
            </div>
            <div className="gameEndBtn" onClick={onClickReset}>
              게임 재시작하기
            </div>
          </GameEnd>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('number1', {
                onChange: () => setFocus('number2'),
              })}
              type="text"
              maxLength={1}
              autoComplete="off"
            />
            <Input
              {...register('number2', {
                onChange: () => setFocus('number3'),
              })}
              type="text"
              maxLength={1}
              autoComplete="off"
            />
            <Input
              {...register('number3', {
                onChange: () => setFocus('number4'),
              })}
              type="text"
              maxLength={1}
              autoComplete="off"
            />
            <Input
              {...register('number4', {
                onChange: () => onSubmit(),
              })}
              type="text"
              maxLength={1}
              autoComplete="off"
            />
          </Form>
        )}
        <ResultContainer>
          {errMsg ? (
            <ErrorMessage>{errMsg}</ErrorMessage>
          ) : (
            <Numbers>{playerNumbers}</Numbers>
          )}
          <Result>{result}</Result>
        </ResultContainer>
      </Layout>
    </BasicContainer>
  );
};

export default Play;

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BasicContainer from '../Components/BasicContainer';

const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-items: center;
  align-items: center;
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
  background: #f0f0f0;
  text-align: center;
  border: 2px solid #444444;
`;

const ResultContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Numbers = styled.div`
  font-size: 6em;
  font-size: 6rem;
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
  const { mode } = useParams();

  const { register, setFocus, handleSubmit, setValue } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log('제출!');
    setTimeout(() => {
      setValue('number1', '');
      setValue('number2', '');
      setValue('number3', '');
      setValue('number4', '');
    }, 500);
  };

  useEffect(() => {
    setFocus('number1');
  }, []);

  return (
    <BasicContainer>
      <Layout>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('number1', {
              onChange: () => setFocus('number2'),
            })}
            type="text"
            maxLength={1}
          />
          <Input
            {...register('number2', {
              onChange: () => setFocus('number3'),
            })}
            type="text"
            maxLength={1}
          />
          <Input
            {...register('number3', {
              onChange: () => setFocus('number4'),
            })}
            type="text"
            maxLength={1}
          />
          <Input
            {...register('number4', {
              onChange: () => onSubmit(),
            })}
            type="text"
            maxLength={1}
          />
        </Form>
        <ResultContainer>
          <Numbers>1234</Numbers>
          <Result>2볼 2스트라이크</Result>
        </ResultContainer>
      </Layout>
    </BasicContainer>
  );
};

export default Play;

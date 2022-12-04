import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Team from '../../libs/Team';

const Form = styled.form`
  font-size: 4em;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 40px;
  margin-top: 2.5rem;
  width: 220px;
  height: 100px;
  font-size: 4em;
  font-size: 4rem;
  padding: 20px;
  padding: 1.25rem;
  border-radius: 10px;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #ececec;
  text-align: center;
  border: 1px solid #525252;
`;

const Submit = styled.input`
  margin-top: 40px;
  margin-top: 2.5rem;
  font-size: 2em;
  font-size: 2rem;
  background-color: #1c5b8e;
  color: #e8e8e8;
  padding: 10px 40px;
  border-radius: 0.3125em;
  border-radius: 0.3125rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ErrorMsg = styled.div`
  margin-top: 40px;
  margin-top: 2.5rem;
  font-size: 3em;
  font-size: 3rem;
  color: #f83030;
`;

interface IForm {
  teamCount: string;
}

interface IProps {
  setTeamCount: Dispatch<SetStateAction<string | null>>;
}

const SetupTeamCount = ({ setTeamCount }: IProps) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { register, handleSubmit, setValue } = useForm<IForm>({
    mode: 'onChange',
  });

  const onSubmit = ({ teamCount }: IForm) => {
    const { errMsg } = Team.validationCount(teamCount);

    if (errMsg) {
      setValue('teamCount', '');
      setErrorMsg(errMsg);

      return;
    }

    setTeamCount(teamCount);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>몇 팀을 생성하시나요?</div>
      <Input type="text" {...register('teamCount')} autoComplete="off" />
      <Submit type="submit" value="생성하기" />
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Form>
  );
};

export default SetupTeamCount;

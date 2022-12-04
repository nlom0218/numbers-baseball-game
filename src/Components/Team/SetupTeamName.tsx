import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Team from '../../libs/Team';

const Form = styled.form`
  display: grid;
  row-gap: 40px;
  row-gap: 2.5rem;
  justify-items: center;
  font-size: 4em;
  font-size: 4rem;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  gap: 2.5rem;
`;

const Input = styled.input`
  font-size: 2em;
  font-size: 2rem;
  padding: 20px;
  padding: 1.25rem;
  border-radius: 10px;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #ececec;
  border: 1px solid #525252;
`;

const Submit = styled.input`
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

interface IProps {
  teamCount: string;
}

const SetupTeamName = ({ teamCount }: IProps) => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    Team.save(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>팀 이름을 작성해 주세요.</div>
      <InputContainer>
        {new Array(Number(teamCount)).fill(1).map((_, idx) => {
          return (
            <Input
              {...register(`teamName${idx + 1}`)}
              key={idx}
              placeholder={`${idx + 1}팀 이름을 작성해 주세요.`}
              maxLength={10}
              required
            />
          );
        })}
      </InputContainer>
      <Submit type="submit" value="생성하기" />
    </Form>
  );
};

export default SetupTeamName;

import * as styled from './styles';

export default function Loading() {
  return (
    <styled.LoadingContainer>
      <styled.LoadingText>Loading...</styled.LoadingText>
      <styled.MusicImage src="https://cdn.dribbble.com/users/806947/screenshots/3184456/comp_1.gif" alt="Loading" />
    </styled.LoadingContainer>
  );
}
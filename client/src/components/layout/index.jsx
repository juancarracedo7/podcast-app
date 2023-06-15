import * as styled from "./styles";



const Layout = ({ children }) => {
  return (
    <styled.Container>
      <styled.Header>
        <styled.CustomLink to="/">
        <styled.Title>Podcaster</styled.Title>
        </styled.CustomLink>
      </styled.Header>
      <styled.Content>{children}</styled.Content>
    </styled.Container>
  );
};

export default Layout;

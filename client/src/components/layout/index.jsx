import { useState, useEffect } from "react";
import * as styled from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <styled.Container>
        <styled.Header>
          <styled.CustomLink to="/">
            <styled.Title>Podcaster</styled.Title>
          </styled.CustomLink>
          {location.pathname === "/" && isLoading && <styled.LoadingIndicator />}
        </styled.Header>
        <styled.Content>{children}</styled.Content>
      </styled.Container>
      {location.pathname !== "/" && (
        <styled.BackButton onClick={goBack}>Go Back</styled.BackButton>
      )}
    </>
  );
};

export default Layout;

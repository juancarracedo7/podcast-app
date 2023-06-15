import styled from "styled-components";
import { Link } from "react-router-dom";

const commonFontFamily = "Arial, sans-serif";

export const LineSeparator = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cocntain;
  border-radius: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  word-wrap: break-word;
  font-family: ${commonFontFamily};
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #eee;
`;

export const ArtistName = styled.p`
  margin-bottom: 10px;
  word-wrap: break-word;
  font-family: ${commonFontFamily};
`;

export const Description = styled.p`
  color: black;
  word-wrap: break-word;
  font-family: ${commonFontFamily};
  font-weight: bold;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;

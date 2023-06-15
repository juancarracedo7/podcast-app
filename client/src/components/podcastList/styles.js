import styled from "styled-components";
import { Link } from 'react-router-dom';


export const PodcastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 20px;
`;

export const PodcastCardWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
  margin: 50px 0 50px 0;
`;

export const PodcastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-top: -50px;
`;

export const PodcastInfo = styled.div`
  margin-top: 10px;
`;

export const PodcastName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  `;

  export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;
export const PodcastTitle = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

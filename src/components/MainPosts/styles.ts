import styled from "styled-components";

export const MainPostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

interface PostContainerProps {
  postImg: any;
}

export const PostContainer = styled.div<PostContainerProps>`
  position: relative;
  background: white;
  padding: 2rem 2rem 3rem;
  box-shadow: 0px 0px 6px -5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  &:not(:first-child) {
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }

  &:first-child {
    grid-column: 1;
    grid-row: 1/3;

    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;

      @media screen and (max-width: 768px) {
        font-size: 2.4rem;
      }
    }
  }

  &:nth-child(2) {
    grid-column: 2;
  }

  &:nth-child(3) {
    grid-column: 2;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${(props) => props.postImg});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.35s ease;
  }

  &:hover {
    &::before {
      transform: scale(1.1);
    }
  }

  &::after {
    box-shadow: inset 0px 4px 50px -3px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 769px) {
      min-height: 20rem;
    }

    header {
      margin-bottom: auto;
    }

    time {
      margin-bottom: auto;
      font-size: 1.8rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      color: white;
    }

    h2 {
      font-size: 2.6rem;
      margin-top: 2rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      color: white !important;

      @media screen and (max-width: 768px) {
        font-size: 3.4rem;
      }
    }

    p {
      font-size: 1.4rem;
      margin-top: 0.8rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      color: white;

      @media screen and (max-width: 768px) {
        font-size: 2.2rem;
        margin-top: 2rem;
      }
    }
  }
`;

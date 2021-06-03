import styled, { css } from "styled-components";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRetweet, FaRegComment } from "react-icons/fa";

export const Container = styled.div`
  padding: 12px 8px 8px 8px;
  border-bottom: 1px solid var(--outline);
  line-height: 20px;

  > article {
    display: flex;
  }

  &:hover {
    background-color: var(--secondary);
  }
`;

export const AvatarThumb = styled.div`
  > img {
    background-color: var(--gray);
    height: 48px;
    width: 48px;
    object-fit: cover;
    object-position: 0 100%;
    border: 0;
    border-radius: 50%;

    margin-right: 12px;
  }
`;

export const TweetMeta = styled.div`
  height: 18px;
  > ul {
    display: flex;
    list-style: none;

    font-size: 15px;
    li:first-child {
      font-weight: bold;
      color: var(--white);
      margin-right: 5px;
    }

    > li {
      color: var(--gray);
    }

    li:last-child {
      &::before {
        color: var(--gray);
        padding: 0 5px 0 5px;
        content: "▪";
        align-self: center;
      }
    }
  }
`;

export const TweetContent = styled.div`
  font-size: 15px;
  padding-top: 5px;
`;
export const TweetNumbers = styled.div`
  margin-top: 11px;
  color: var(--gray);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  font-size: 13px;
  padding-right: 6vw;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;

    &:hover {
      > div:first-child {
        background-color: var(--twitter-dark-hover);
        > svg {
          fill: var(--retweet);
        }
      }
      color: var(--retweet);
    }
  }

  > div:first-child {
    &:hover {
      > div:first-child {
        > svg {
          fill: var(--twitter);
        }
      }
      color: var(--twitter);
    }
  }

  > div:last-child {
    &:hover {
      > div:first-child {
        > svg {
          fill: var(--like);
        }
      }
      color: var(--like);
    }
  }
`;

export const TweetIcon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
`;

export const TweetNumber = styled.div`
  font-weight: 600;
  padding: 0 5px;
`;

const iconCss = css`
  width: 18px;
  height: 18px;
`;

export const LikedIcon = styled(AiFillHeart)`
  ${iconCss}
  fill: var(--like);
`;
export const LikeIcon = styled(AiOutlineHeart)`
  ${iconCss}
  fill: var(--gray);
`;
export const RetweetIcon = styled(AiOutlineRetweet)`
  ${iconCss}
  fill: var(--gray);
`;
export const RetweetedIcon = styled(FaRetweet)`
  ${iconCss}
  fill: var(--retweet);
`;
export const CommentIcon = styled(FaRegComment)`
  ${iconCss}
  fill: var(--gray);
`;

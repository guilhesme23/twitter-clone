import TweetMedia from "components/TweetMedia";
import React, { useEffect, useState } from "react";
import formatDate from "utils/formatDate";
import { Tweet as TweetInterface, User } from "../../@types";
import {
  AvatarThumb,
  CommentIcon,
  Container,
  LikedIcon,
  LikeIcon,
  RetweetIcon,
  TweetContent,
  TweetIcon,
  TweetMeta,
  TweetNumber,
  TweetNumbers,
} from "./styles";

interface Props {
  tweet: TweetInterface;
}

const Tweet: React.FC<Props> = (props) => {
  const [author, setAuthor] = useState<User>();

  useEffect(() => {
    setAuthor({
      id: 1,
      name: "Dana Olivello",
      screen_name: "dolivello0",
      description: "User-centric human-resource adapter",
      protected: false,
      verified: false,
      followers_count: 512,
      friends_count: 8,
      statuses_count: 4856,
      profile_banner_url: "http://dummyimage.com/1500x500.png/dddddd/000000",
      profile_image_url_https:
        "https://robohash.org/utvoluptateaut.png?size=400x400&set=set1",
      email: "dolivello0@walmart.com",
      password: "1vTnnbL",
      birthdate: "9/8/1982",
      location: "Asia/Karachi",
    });
  }, []);

  return (
    <Container>
      <article>
        <AvatarThumb>
          <img src={`${author?.profile_image_url_https}`} alt="" />
        </AvatarThumb>
        <div>
          <TweetMeta>
            <ul>
              <li className="author-name">{author?.name || "Unknown"}</li>
              <li>{`@${author?.screen_name}` || ""}</li>
              <li>{formatDate(props.tweet.created_at || new Date())}</li>
            </ul>
          </TweetMeta>
          <TweetContent>
            {props.tweet.text}
            {props.tweet.attachments?.length ? <TweetMedia attachments={props.tweet.attachments}/> : ''}  
          </TweetContent>
          <TweetNumbers>
            <div>
              <TweetIcon>
                <CommentIcon />
              </TweetIcon>
              <TweetNumber>{props.tweet.replies || ""}</TweetNumber>
            </div>
            <div>
              <TweetIcon>
                <RetweetIcon />
              </TweetIcon>
              <TweetNumber>{props.tweet.retweets || ""}</TweetNumber>
            </div>
            <div>
              <TweetIcon>
                <LikeIcon />
              </TweetIcon>
              <TweetNumber>{props.tweet.likes || ""}</TweetNumber>
            </div>
          </TweetNumbers>
        </div>
      </article>
    </Container>
  );
};

export default Tweet;

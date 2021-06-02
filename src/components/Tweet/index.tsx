import React, { useEffect, useState } from 'react';
import {Tweet as TweetInterface, User} from '../../@types'
import { Container } from './styles';

interface Props {
    tweet: TweetInterface
}

const Tweet: React.FC<Props> = (props) => {
    const [author, setAuthor] = useState<User>()

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
          profile_banner_url:
            "http://dummyimage.com/1500x500.png/dddddd/000000",
          profile_image_url_https:
            "https://robohash.org/utvoluptateaut.png?size=400x400&set=set1",
          email: "dolivello0@walmart.com",
          password: "1vTnnbL",
          birthdate: "9/8/1982",
          location: "Asia/Karachi",
        });

    }, [])
  return (
      <Container>
          <p>{props.tweet.text}</p>
      </Container>
  );
}

export default Tweet;
import { Tweet as TweetInterface } from "@types";
import Tweet from "components/Tweet";
import React from "react";

import { Container } from "./styles";

interface Props {
  filter: string;
  userId: number;
}

const HistoryFeed: React.FC<Props> = (props) => {
  const tweets = [
    {
      id: 22,
      text: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      created_at: "09/09/2016",
      author_id: 1,
      attachments: [
        {
          media: "http://dummyimage.com/916x481.png/cc0000/ffffff",
        },
        {
          media: "http://dummyimage.com/677x658.png/dddddd/000000",
        },
      ],
      likes: 488,
      retweets: 226,
      replies: 67,
    },
    {
      id: 30,
      text: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      created_at: "05/05/2020",
      author_id: 1,
      attachments: [],
      likes: 657,
      retweets: 313,
      replies: 37,
    },
    {
      id: 37,
      text: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      created_at: "07/02/2017",
      author_id: 1,
      attachments: [
        {
          media: "http://dummyimage.com/555x311.png/dddddd/000000",
        },
        {
          media: "http://dummyimage.com/1052x540.png/cc0000/ffffff",
        },
        {
          media: "http://dummyimage.com/1033x635.png/5fa2dd/ffffff",
        },
        {
          media: "http://dummyimage.com/1034x501.png/ff4444/ffffff",
        },
      ],
      likes: 840,
      retweets: 32,
      replies: 125,
    },
  ];

  const filterTweets = (tts: TweetInterface[], filter: string) => {
    switch (filter) {
      case 'media':
        return tts.filter(tt => tt.attachments?.length)
    
      default:
        return tts
    }
  }

  const filteredTweets = filterTweets(tweets, props.filter)


  return (
    <Container>
      {filteredTweets.map(tweet => {
          return <Tweet tweet={tweet} key={tweet.id}/>
      })}
    </Container>
  );
};

export default HistoryFeed;

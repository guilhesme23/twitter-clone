import React from 'react';
import { Container, Thumb } from './styles';

interface AttachmentMedia {
    /** Media url */
    media: string
}

interface Props {
    attachments: Array<AttachmentMedia>
}

const TweetMedia: React.FC<Props> = ({ attachments }) => {
  return (
    <Container>
        {attachments.map((item, idx) => {
            return <Thumb key={idx} >
                <img key={idx} src={item.media} alt="" />
            </Thumb>
        })}
    </Container>
  );
}

export default TweetMedia;
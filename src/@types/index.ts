export interface User {
  id: number;
  name: string;
  screen_name: string;
  description: string;
  protected: boolean;
  verified: boolean;
  followers_count: number;
  friends_count: number;
  statuses_count: number;
  profile_banner_url: string;
  profile_image_url_https: string;
  email: string;
  password: string;
  birthdate: Date | string;
  location: string;
}

export interface Tweet {
  id: number;
  text: string;
  created_at: Date | string;
  author_id: number;
  attachments?: Array<TweetMedia>;
}

interface TweetMedia {
    media: string
}
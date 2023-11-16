import { User } from "./user";

export class Tweet {
  constructor(
    public user: User,
    public tweetText: string,
    public createdAt: Date,
    public tags: string[] = []
  ) {}
}

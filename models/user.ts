import { Tweet } from "./tweets";

export class User {
  constructor(
    public username: string,
    public tweets: Tweet[] = [],
    public following: User[] = []
  ) {}
}

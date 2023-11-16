import { Tweet } from "./tweets";
import { User } from "./user";

export class Tags {
  constructor(public tags: string[], public user: User, public tweet: Tweet) {}
}

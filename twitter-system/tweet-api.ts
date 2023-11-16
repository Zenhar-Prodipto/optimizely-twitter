import { User } from "../models/user";
import { TweetSystem } from "./tweet-system";

export class TweetApi {
  tweetSystem: TweetSystem;
  constructor() {
    this.tweetSystem = new TweetSystem();
  }

  createUser(username: string) {
    if (!username) {
      throw new Error("Username is required");
    }
    try {
      const user = this.tweetSystem.addUser(username);
      return user;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  postTweet(user: User, tweetText: string, tags: string[] = []) {
    if (!user || !tweetText) {
      throw new Error("user, tweetText are required");
    }
    try {
      const tweet = this.tweetSystem.addtweet(user, tweetText, tags);
      return tweet;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  getTweets(user: User) {
    if (!user) {
      throw new Error("user is required");
    }
    try {
      const tweets = this.tweetSystem.fetchtweetsByUser(user);
      return tweets;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  followUser(user: User, userToFollow: User) {
    if (!user || !userToFollow) {
      throw new Error("Both users are required");
    }

    if (user === userToFollow) {
      throw new Error("Sorry mate !!! Cannot follow yourself");
    }

    try {
      const followUser = this.tweetSystem.followUser(user, userToFollow);
      return followUser;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  unfollowUser(user: User, userToUnfollow: User) {
    if (!user || !userToUnfollow) {
      throw new Error("Both users are required");
    }

    try {
      const unfollowUser = this.tweetSystem.unfollowUser(user, userToUnfollow);
      return unfollowUser;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  getTweetsFromFollowing(user: User) {
    //to do: add validation
    try {
      const tweets = this.tweetSystem.fetchTweetsFromFollowing(user);
      return tweets;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  getTweetsByTags(user: User, tag: string) {
    // todo: add validarion

    try {
      const tweetsByTag = this.tweetSystem.getTweetsByTags(user, tag);
      return tweetsByTag;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

import { Tweet } from "../models/tweets";
import { User } from "../models/user";

export class TweetSystem {
  constructor(public users: User[] = [], public tweets: Tweet[] = []) {}

  addUser(username: string) {
    if (!username) {
      throw new Error("Username is required");
    }
    const user = new User(username);

    if (!user) {
      throw new Error("unable to create user");
    }

    this.users.push(user);
    return user;
  }

  addtweet(user: User, tweetText: string, tags: string[] = []) {
    if (!user || !tweetText) {
      throw new Error("user, tweetText are required");
    }
    const tweet = new Tweet(user, tweetText, new Date(), tags);

    if (!tweet) {
      throw new Error("unable to create tweet");
    }

    user.tweets.push(tweet);
    return tweet;
  }

  fetchtweetsByUser(user: User) {
    if (!user) {
      throw new Error("User is required");
    }

    return user.tweets.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  followUser(user: User, userToFollow: User) {
    if (!user || !userToFollow) {
      throw new Error("Both users are required");
    }

    if (user === userToFollow) {
      throw new Error("Sorry mate !!! Cannot follow yourself");
    }

    if (!user.following.includes(userToFollow)) {
      user.following.push(userToFollow);
    }

    return "successfully followed a new user!!!";
  }

  unfollowUser(user: User, userToUnfollow: User) {
    if (!user || !userToUnfollow) {
      throw new Error("Both users are required");
    }

    user.following = user.following.filter(
      (followedUser) => followedUser !== userToUnfollow
    );
  }

  fetchTweetsFromFollowing(user: User) {
    //to do: add validation
    const tweets = [];
    for (const u of user.following) {
      tweets.push(...u.tweets);
    }

    const sortedTweets = tweets.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );

    return sortedTweets;
  }

  getTweetsByTags(user: User, tag: string) {
    // todo: add validarion

    const ownTweets = user.tweets.filter((tweet) => tweet.tags.includes(tag));
    const alltweetsFromFollowing = [];

    for (const u of user.following) {
      alltweetsFromFollowing.push(...u.tweets);
    }

    const followerTweets = alltweetsFromFollowing.filter((tweet) =>
      tweet.tags.includes(tag)
    );

    const resp = { ownTweets, followerTweets };
    return resp;
  }
}

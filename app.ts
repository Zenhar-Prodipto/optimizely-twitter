import { TweetApi } from "./twitter-system/tweet-api";

console.log("hello world");
const api = new TweetApi();
//Add user
const user1 = api.createUser("Jon");
const user2 = api.createUser("Alice");
const user3 = api.createUser("Doe");

console.log(user1, user2, user3);

//Add Tweets

const tweet1 = api.postTweet(user1, "Hello World", ["Programming"]);
const tweet2 = api.postTweet(user2, "Need a coffee break !!", [
  "coffee",
  "break",
]);
const tweet3 = api.postTweet(user3, "it's raining today !!", ["rainy day"]);
const tweet4 = api.postTweet(
  user1,
  "The Sun Is Shining, But Its Raining In My heart",
  ["fleetwood mac"]
);

console.log(tweet1, tweet2, tweet3, tweet4);

//Get All tweets
const alltweets = api.getTweets(user1);
console.log("alltweets", alltweets);

//follow user

const followUser = api.followUser(user1, user2);
const followUser2 = api.followUser(user1, user3);
console.log("followUser", followUser);

//unfollow user

const unfollowUser = api.unfollowUser(user1, user2);

console.log("unfollowUser", unfollowUser);

//get tweets from followers

const follwingtweets = api.getTweetsFromFollowing(user1);
console.log("follwingtweets", follwingtweets);

const tweetsByTag = api.getTweetsByTags(user1, "Programming");
console.log("tweetsByTag", tweetsByTag);

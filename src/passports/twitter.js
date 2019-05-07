import { Strategy } from 'passport-twitter';
import config from '../config';
import { User } from '../data/models';

const Twitter = function() {
  return new Strategy(
    {
      consumerKey: config.auth.twitter.key,
      consumerSecret: config.auth.twitter.secret,
      callbackURL: '/auth/twitter/callback',
    },
    (token, tokenSecret, profile, cb) => {
      User.findOrCreate({ twitterId: profile.id }, (err, user) =>
        cb(err, user),
      );
    },
  );
};

export default Twitter;

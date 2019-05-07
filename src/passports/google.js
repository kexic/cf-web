import { Strategy } from 'passport-facebook';
import config from '../config';
import { User } from '../data/models';

const Google = function() {
  return new Strategy(
    {
      clientID: config.auth.google.id,
      clientSecret: config.auth.google.secret,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) =>
        done(err, user),
      );
    },
  );
};

export default Google;

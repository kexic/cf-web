/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import Google from './passports/google';
import Facebook from './passports/facebook';
import Twitter from './passports/twitter';

passport.use(Google(), Facebook(), Twitter());

export default passport;

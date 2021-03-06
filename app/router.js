import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: '/user/:user_id'});
  this.route('comment');
  this.route('animal');
  this.route('password', {path: '/password/:user_id'});
  this.route('animal', {path: '/animal/:animal_id'});
});

export default Router;

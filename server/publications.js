/**
 * Created by bw on 16. 1. 29.
 */

Meteor.publish('posts', function() {
    return Posts.find();
});
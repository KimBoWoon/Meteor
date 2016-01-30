/**
 * Created by bw on 16. 1. 29.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
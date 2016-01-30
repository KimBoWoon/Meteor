/**
 * Created by bw on 16. 1. 29.
 */

Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
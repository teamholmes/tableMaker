/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/

module.exports = {
  doNothing: function(html) {
    var greeting = 'Hello ' + html;
    return greeting;
  }
};
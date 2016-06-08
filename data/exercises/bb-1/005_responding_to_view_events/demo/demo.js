$(function () {

  var SharkTankView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html("<input /><button>Ouch, my legs!</button>");
    },
    events: {
      "click button": "sayHello"
    },
    sayHello: function() {
      var val = this.$('input').val();
      alert(val);
    }
  });

  var view = new SharkTankView({
    el: $('#tank')
  });
  var view = new SharkTankView({
    el: $('#tank2')
  });
});





// Longhand in JQuery in the initializer
// Shorthand in events
// Events are scoped to the $el
// button click
// button click outside the $el
// {"event" : "callback"}
// {"event selector" : "callback"}

// preventDefault

// $(function () {

//   var SharkTankView = Backbone.View.extend({
//     initialize: function () {
//       this.render();
//     },
//     render: function () {
//       this.$el.html("Ouch, my legs!");
//     }
//   });

//   var view = new SharkTankView({
//     el: $('#tank')
//   });
// });

if (Meteor.isClient) {
  Meteor.setInterval(function () {
    Session.set('__timediffNow', Date.now());
  }, 100);

  function getDiff(ts) {
    var now = Session.get('__timediffNow')
    var _from = new Date(ts).getTime();
    return _from - now;
  }

  function pretty(momentDuration) {
    var h = momentDuration.hours();
    var m = ('0' + momentDuration.minutes()%60).slice(-2);
    var s = ('0' + momentDuration.seconds()%60).slice(-2);
    return [h, m, s].join(':');
  }

  Template.registerHelper('diffNow', function (from) {
    var _diff = getDiff(from);
    var _adiff = Math.abs(_diff);
    var diff = moment.duration(_adiff);
    var _sign = _diff >= 0 ? '+' : '-';
    return _sign + pretty(diff);
  });

  Template.registerHelper('diffNowNoSign', function (from) {
    var _diff = getDiff(from);
    var _adiff = Math.abs(_diff);
    var diff = moment.duration(_adiff);
    return pretty(diff);
  });

  Template.registerHelper('diffNowHumanize', function (from) {
    var _diff = getDiff(from);
    var diff = moment.duration(_diff);
    return diff.humanize(true);
  });

  Template.registerHelper('diffNowMs', function (from) {
    var _diff = getDiff(from);
    return _diff;
  });

}
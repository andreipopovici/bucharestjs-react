if(Meteor.isClient){
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
}

Timer = new Mongo.Collection("timer");
TIMER_VALUE = 30 * 1000;

Clicks = new Mongo.Collection("clicks");

if(Meteor.isServer){
  Meteor.startup(function(){
    if(!Timer.findOne()){
      Timer.insert({value: TIMER_VALUE});
    }

    Meteor.setInterval(function(){
      var timer = Timer.findOne();
      timer.value -= 1000;
      timer.value = timer.value < 0 ? TIMER_VALUE : timer.value;
      Timer.update(timer._id, {value: timer.value});
    }, 1000);
  });
}

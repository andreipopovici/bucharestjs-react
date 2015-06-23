var thebutton = ReactMeteor.createClass({
	templateName: "thebutton",

	TIMER_VALUE: 30 * 1000,

	getMeteorState: function () {
		return {
			loggedIn: Meteor.user() !== null,
			didClick: !!Clicks.findOne({userId: Meteor.userId()}),
			pushedAt: this.getPushedAtTime()
		}
	},

	getPushedAtTime: function(){
		if(!!Clicks.findOne({userId: Meteor.userId()})){
	        return Clicks.findOne({userId: Meteor.userId()}).time;
		} else return "PUSH";
	},

	pushButton: function(){
		Clicks.insert({
			userId: Meteor.userId(),
			username: Meteor.user().username,
			time: Timer.findOne().value/1000
		});
		Timer.update(Timer.findOne()._id, {
			$set: {value: this.TIMER_VALUE}
		})
	},

	render: function(){
		if(this.state.loggedIn){
			return (
				<div className="thebutton">
					<button onClick={this.pushButton} disabled={this.state.didClick}>{this.state.pushedAt}</button>
				</div>
			);
		} else {
			return (
				<span>Please login to push the button</span>
			);
		}
	}
});
var timer = ReactMeteor.createClass({
	templateName: 'timer',
	TIMER_VALUE: 30 * 1000,

	getMeteorState: function () {
		return {
			serverTime: this.getServerTime()
		}
	},

	getServerTime: function(){
		if(Timer.findOne()){
			return Timer.findOne().value
		} else return TIMER_VALUE;
	},

	render: function(){
		return (
			<div className="timer">
			  	<span className="s">{ this.state.serverTime / 1000 }</span>
			</div>
		);
	}
});
var leaders = ReactMeteor.createClass({
	templateName: "leaders",

	getMeteorState: function(){
		return {
			clickers: Clicks.find({}, {sort: {time: 1}}).fetch(),

		}
	},

	render: function(){
		var leaderEntries = this.state.clickers.map(function(entry){
			return (
				<LeaderEntry entry={entry} />
			);
		});

		return (
			<div className="leaders">
				<ol>
					{ leaderEntries }
				</ol>
			</div>
		)
	}
});

var LeaderEntry = React.createClass({
	render: function() {
		return (
			<li>
					<span className="username">{ this.props.entry.username }</span>
					<span className="time">{ this.props.entry.time }</span>
			</li>
		);
	}
});
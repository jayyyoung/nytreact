var React = require("react");

var Search = React.reateClass({
	
	getInitialState: function(){
		return {
			search: "",
			startYear: "",
			stopYear: "",
		}
	},

	handleChange: function(event){
		var changedState = {};
		changedState[event.target.id] = event.target.value
		this.setState(changedState);
	},

	handleClick: function(){
		this.props.searchArticle(this.state.search, this.state.startYear, this.state.stopYear);
	},

	render: function(){
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title">Search</h2>
				</div>
				<div className="panel-body text-center">
					<form>
						<div className="form-group">
							<h4 className="">Your Topic</h4>
							<input type="text" className="form-control" id="topic" onChange= {this.handleChange} required/>
							<br />

							<h4 className="">Article Year - Start</h4>
							<input type="text" className="form-control" id="startYear" onChange= {this.handleChange} required/>
							<br />

							<h4 className="">Article Year - Stop</h4>
							<input type="text" className="form-control" id="endYear" onChange= {this.handleChange} required/>
							<br />
							
							<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

});

module.exports = Search;
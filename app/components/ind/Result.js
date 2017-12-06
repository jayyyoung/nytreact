var React = require("react");

var Result = React.createClass({

	getInitialState: function(){
		return {
			title: "",
			date: "",
			url: "",
			results:[]
		}
	}, 

	render: function(){
		return(

			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}

});
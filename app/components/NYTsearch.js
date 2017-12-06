var axios = require('axios');
var React = require('react');

var Search = require('./ind/Search');
var Result = require('./ind/Result');
var Saved = require('./ind/Saved');

var NYTsearch = React.createClass({

	getInitialState: function(){
		return {
			search: "",
			startYear: "",
			stopYear: "",
			results: [],
			savedArticles: []
		}
	},

	searchArticle: function(search, start, stop){
		this.setState({
			search: search,
			startYear: start,
			stopYear: stop
		})
	},

	saveArticle: function(title, date, url){
		helpers.postArticle(title, date, url);
		this.getArticle();
	},

	getArticle: function(){
		axios.get('/api/saved')
			.then(function(res){
				this.setState({
					savedArticles: res.data
				});
			}.bind(this));
	},

	removeArticle: function(article){
		axios.delete('/api/saved/' + article._id)
			.then(function(res){
				this.setState({
					savedArticles: res.data
				});
				return res;
			}.bind(this));

		this.getArticle();
	},

	componentDidUpdate: function(prop, state){

		if(state.search != this.state.search){

			helpers.runQuery(this.state.search, this.state.startYear, this.state.startYear)
				.then(function(data){
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})
					}
				}.bind(this))
		}
	},

	componentDidMount: function(){
		axios.get('/api/saved')
			.then(function(res){
				this.setState({
					savedArticles: res.data
				});
			}.bind(this));
	},

	render: function(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center" style={{'color': 'block',  'fontSize': '60px'}}>New York Times Article Search</h2>
						<p className="text-center" style={{'color': 'black', 'fontSize': '20px'}}>Search for and save articles of interest!</p>
					</div>
				</div>
				<div className="row">

					<Form searchArticle={this.searchArticle}/>

				</div>

				<div className="row">
			
					<Result results={this.state.results} savedArticle={this.savedArticle}/>

				</div>

				<div className="row">
				
					<Saved savedArticles={this.state.savedArticles} removeArticle={this.removeArticle} />

				</div>
			</div>
		)
	}

});

module.exports = NYTsearch;
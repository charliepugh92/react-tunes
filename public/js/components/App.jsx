var App = React.createClass({
	getInitialState: function() {
		return {
			searchValue: ''
		};
	},
	onSearchValueChange: function (searchValue) {
		this.setState({
			searchValue: searchValue
		});
	},
	render: function() {
		return (
			<div>
				<div id="container">
					<div id="contentWrap">
						<h1>React Tunes</h1>
						<Search value={this.state.searchValue}
										onChange={this.onSearchValueChange} />
						<Spotify searchValue={this.state.searchValue} />
					</div>
				</div>
			</div>
		);
	}
});

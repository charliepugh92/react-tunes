var ResultArtist = React.createClass({
	render: function () {
		return (
			<div>
				{this.props.artist !== undefined &&
					<div className="artist">
						{this.props.artist.images[0] !== undefined &&
							<img height='300' src={this.props.artist.images[0].url}/>
						}
						<a href={this.props.artist.external_urls.spotify} target='_blank'>
							<h3>{this.props.artist.name}</h3>
						</a>
						<strong>Popularity: </strong>{this.props.artist.popularity}
					</div>
				}
			</div>
		);
	}
})

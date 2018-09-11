var gammon = L.map('gammon').setView([0, 0], 5);

var GammonLayer = L.TileLayer.extend({
	getTileUrl: function(coords) {
		var index = Math.ceil(Math.random() * 9);
		return 'images/gammon' + index + '.jpg';
	},
	getAttribution: function() {
		return '<a href="https://github.com/markhobson/wall-of-gammon">GitHub</a>'
	}
});

new GammonLayer().addTo(gammon);

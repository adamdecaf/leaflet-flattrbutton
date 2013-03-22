L.FlattrButton = L.Control.extend({

	options: {
		position: "topright",
		buttonType: 'static', // available: 'static', 'widget'
		flattrType: 'thing',
		flattrId: null,
		flattrUser: null,
	},

	initialize: function(options) {
		L.Util.setOptions(this, options);
		this._container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control-layers-expanded');
		L.DomEvent.disableClickPropagation(this._container);
		this._container.innerHTML = this._createFlattrButton();
	},

	onAdd: function(map) {
		this._map = map;
		return this._container;
	},

	onRemove: function(map) {
		this._container.style.display = 'none';
		if (typeof this._script != 'undefined' && this._script != null) {
			if (this._script.parentNode) {
				this._script.parentNode.removeChild(this._script);
			}
			this._script = null;
		}
		this._map = null;
	},

	_createFlattrButton: function() {
		var txt = '';
		switch (this.options.buttonType) {
			case 'static':
				txt = this._createFlattrButtonStatic();
				break;
			case 'widget':
				txt = this._createFlattrButtonWidget();
				break;
			default:
				txt = 'Error: unsupported buttonType';
				break;
		}
		return txt;
	},

	_createFlattrButtonStatic: function() {
		if (this.options.flattrId == null || this.options.flattrType == null) {
			return 'Error in flattrType or flattrId';
		}
		var template = '<a href="http://flattr.com/{flattrtype}/{flattrid}" target="_blank"> '
							+ '<img src="http://api.flattr.com/button/flattr-badge-large.png" '
							+ 'alt="Flattr this" title="Flattr this" border="0" /></a>';
		var txt = template.replace('{flattrtype}', this.options.flattrType)
						.replace('{flattrid}', this.options.flattrId);
		return txt;
	},

	_createFlattrButtonWidget: function() {
		if (this.options.flattrId == null || this.options.flattrType == null) {
			return 'Error in flattrType or flattrId';
		}
		var template = '<iframe src="http://tools.flattr.net/widgets/thing.html?{flattrtype}={flattrid}" '
							+ 'width="292" height="420"></iframe>';
		var txt = template.replace('{flattrtype}', this.options.flattrType)
						.replace('{flattrid}', this.options.flattrId);
		return txt;
	}
});
L.flattrButton = function(options) { return new L.FlattrButton(options); };

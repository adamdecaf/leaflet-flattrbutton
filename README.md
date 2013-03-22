leaflet-flattrbutton
====================

Adds a Flattr-Button to Leaflet based maps.
Feel free to flattr me if you like it: [![alttext](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1198724/)

## License

This code is licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/ "Creative Commons Zero - Public Domain").

## Usage

Add this leaflet control to your map:
```js
map.addControl(L.flattrButton({ flattrId: '1198724' }));
```

## Options

Some *options* are available to configure this control ( **default value** is bold):

* *flattrId*: **null** Mandatory! Use the id of your Flattr object.
* *flattrType*: **thing** Override this when your Flattr object isn't a "thing".
* *buttonType*: **'static'** or 'widget'. Show a small static button or a huge widget.
* *position*: **'topright'**, 'topleft', 'bottomright' or 'bottomleft'. Default position values for Leaflet controls.

## Example

Here are the most important lines for a simple static button. I'm using the Flattr for this project as an example:

https://flattr.com/thing/1198724/bucheleaflet-flattrbutton-on-GitHub
* flattrType is 'thing' (=default)
* flattrId is '1198724' (I have to set this value when creating the control object)

```html
<head>
	<script type="text/javascript" src="leaflet-flattrbutton.js"></script>
</head>
```

```js
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18, attribution: '[insert correct attribution here!]' });
var map = L.map('map', { center: new L.LatLng(51.5, 10), zoom: 10, layers: [osm] });
var baseMaps = { "OSM Standard": osm };
var layerControl = L.control.layers(baseMaps).addTo(map);
// now create and add the Flattr-button
map.addControl(L.flattrButton({ flattrId: '1198724' }));
```


leaflet-flattrbutton
====================

Adds a Flattr-button to Leaflet based maps.
Feel free to flattr me if you like it: [![alttext](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1198724/)

## License

This code is licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/ "Creative Commons Zero - Public Domain").

## Usage

Adding a Flattr button to a map (using my flattr attributes) is just as simple as:
```js
map.addControl(L.flattrButton({ flattrId: '1198724' }));
```
or
```js
map.addControl(L.flattrButton({ buttonType: 'countercompact', flattrUrl: 'https://github.com/buche/leaflet-flattrbutton' }));
```


## Options

Some *options* are available to configure this control ( **default value** is bold):

* *buttonType*: **'static'**, 'widget', 'countercompact' or 'counterlarge'. Tell us what kind of button you like to have. Depending on the buttonType other options need to be set.
* *flattrUid*: **null** The userid of your Flattr thing. Mandatory for buttonType='static'|'widget'.
* *flattrUrl*: **null** The URL used when creating your Flattr thing. Mandatory for buttonType='countercompact'|'counterlarge'.
* *popout*: **1** or 0, show popout when hovering mouse over counter button (1) or hide it (0).
* *counterDelay*: **500** Only used for buttonType='countercompact'|'counterlarge'. Time in milliseconds we'll wait before initializing the button with some javascript functions after adding it to the map. The map needs some time to add the control and we cannot initialize the functions before that.
* *position*: **'topright'**, 'topleft', 'bottomright' or 'bottomleft'. Default position values for Leaflet controls.

## Example: Simple static button

Here are the most important lines for a simple static button. I'm using this Flattr project as an example:

Flattr project is: https://flattr.com/thing/1198724/bucheleaflet-flattrbutton-on-GitHub

Set these options:
* buttonType is 'static' (but you can ignore this option because it is the default value)
* flattrId is '1198724' (this is important)

```html
<head>
	<script src="leaflet.js"></script>
	<script src="leaflet-flattrbutton.js"></script>
</head>
```

```js
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18, attribution: '[insert correct attribution here!]' });
var map = L.map('map', { center: new L.LatLng(51.5, 10), zoom: 10, layers: [osm] });
// now create and add the Flattr-button
map.addControl(L.flattrButton({ flattrId: '1198724' }));
```

## Example: Compact button with counter

Here are the most important lines for a compact button with counter. I'm using this Flattr project as an example:

Flattr project is: https://flattr.com/thing/1198724/bucheleaflet-flattrbutton-on-GitHub
Registered website for this Flattr project is: https://github.com/buche/leaflet-flattrbutton (This is called "The web page where you want to place the button" when creating the Flattr project)

Set these options:
* buttonType is 'countercompact'
* flattrUrl is 'https://github.com/buche/leaflet-flattrbutton'

```html
<head>
	<script src="leaflet.js"></script>
	<script src="leaflet-flattrbutton.js"></script>
</head>
```

```js
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18, attribution: '[insert correct attribution here!]' });
var map = L.map('map', { center: new L.LatLng(51.5, 10), zoom: 10, layers: [osm] });
// now create and add the Flattr-button
map.addControl(L.flattrButton({ buttonType: 'countercompact', flattrUrl: 'https://github.com/buche/leaflet-flattrbutton' }));
```


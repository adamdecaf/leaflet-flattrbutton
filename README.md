leaflet-flattrbutton
====================

Adds a Flattr-button to Leaflet based maps. It supports already existing Flattr things and not yet existing Flattr things which will be created on the first Flattr to the thing.

Feel free to flattr me if you like it: [![Flattr me](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1198724/)

## License

This code is licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/ "Creative Commons Zero - Public Domain").

## Usage

Adding a Flattr button to a map is just as simple as:
```js
map.addControl(L.flattrButton({ flattrId: '1198724' }));
```
or
```js
map.addControl(L.flattrButton({
  buttonType: 'countercompact',
  flattrUrl: 'https://github.com/buche/leaflet-flattrbutton'
}));
```
or
```js
map.addControl(L.flattrButton({
  autosubmit: true,
  flattrUid: 'kranich',
  flattrUrl: 'https://github.com/buche/leaflet-flattrbutton'
}));
```

Note: I've used the [Flattr thing for this code](http://flattr.com/thing/1198724/) for the examples.

## Options

Some *options* are available to configure this control ( **default value** is bold):

* *autosubmit*: **false** or true. Use *false* if the Flattr thing already exists and *true* if the Flattr thing should be created on the first Flattr. Be careful, changing the default value affects what options are mandatory!
* *buttonType*: **'static'**, 'widget', 'countercompact' or 'counterlarge'. Tell us what kind of button you like to have. Depending on the buttonType other options need to be set.
* *buttonContent*: **'badge'**, 'icon' or some HTML content. Only used for buttonType='static'. Badge is 93*20 pixels, icon is 16*16px, or set this option value to your own HTML content.
* *flattrUid*: **null** Your username on Flattr.
* *flattrId*: **null** The id of your (already existing) Flattr thing.
* *flattrUrl*: **null** The URL of your Flattr thing.
* *flattrTitle*: **null** The title of your Flattr thing.
* *flattrDesc*: **null** The description of your Flattr thing.
* *flattrLang*: **null** The language of your Flattr thing, see [Flattr/languages.txt](https://api.flattr.com/rest/v2/languages.txt) for available languages.
* *flattrTags*: **null** The tags of your Flattr thing, multiple tags are separated with `,` (comma).
* *flattrCategory*: **null** The category of your Flattr thing, see [Flattr/categories.txt](https://api.flattr.com/rest/v2/categories.txt) for valid categories.
* *flattrHidden*: **false** or true. If you want to hide your Flattr thing from public listings on flattr.com set this to *true*.
* *popout*: **true** or false, show popout when hovering mouse over counter button (true) or hide it (false).
* *counterDelay*: **500** Only used for buttonType='countercompact'|'counterlarge'. Time in milliseconds we'll wait before initializing the button with some javascript functions after adding it to the map. The map needs some time to add the control and we cannot initialize the functions before that.
* *position*: **'topright'**, 'topleft', 'bottomright' or 'bottomleft'. Default position values for Leaflet controls.

## What options do I have to set?

Some options are only used for some kind of buttons. It's a big difference if you're using standard or autosubmit features. Here's a short description which options to use.

### If you already created a Flattr thing

**Static button:**

* *flattrId*: The id of your already existing Flattr thing
* *buttonContent*: (optional) 'badge', 'icon' or some HTML code

**Button with counter (compact or large):**

* *buttonType*: 'countercompact' or 'counterlarge'
* *flattrUrl*: The URL of your already existing Flattr thing
* *popout*: (optional) *false* if you don't want to show a popout when hovering the mouse over the counter button

**Widget:**

* *buttonType*: 'widget'
* *flattrId*: The id of your already existing Flattr thing

### If your Flattr thing isn't created yet

The Flattr thing will be created when the first person flattrs it (this will not work for buttonType *widget*). These options are used for all buttons:

* *autosubmit*: 'true'
* *flattrUid*: Your username on Flattr
* *flattrUrl*: The URL of your Flattr thing

and optionally:

* *flattrTitle*: The title of the Flattr thing
* *flattrDesc*: The description of the Flattr thing
* *flattrLang*: The language of the Flattr thing, see [Flattr/languages.txt](https://api.flattr.com/rest/v2/languages.txt) for available languages
* *flattrTags*: The tags of the Flattr thing, multiple tags are separated with `,` (comma)
* *flattrCategory*: The category of the Flattr thing, see [Flattr/categories.txt](https://api.flattr.com/rest/v2/categories.txt) for valid categories
* *flattrHidden*: If you want to hide the Flattr thing from public listings on flattr.com set this to *true*

**Static button:**

* *buttonContent*: (optional) 'badge', 'icon' or some HTML code

**Button with counter (compact or large):**

NOT YET IMPLEMENTED

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
map.addControl(L.flattrButton({
  buttonType: 'countercompact',
  flattrUrl: 'https://github.com/buche/leaflet-flattrbutton'
}));
```


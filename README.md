# Firefox extension for [Spillo](//bananafishsoftware.com/products/spillo/)

This extension sends the current active browser tab to spillo for saving with [Pinboard](https://pinboard.in). The URL and Title of the Page are sent to Spillo, so all you have to do is add your Description and you're good to go 🎉.

This extension is inspired by [spillo-firefox-extension](https://github.com/albohlabs/spillo-firefox-extension) and tries to redo its efforts in a way compatible with the current browser extension APIs. My version of this addon is solely distributed through the [Firefox Addons Website](https://addons.mozilla.org).

## Install

Download the Extension from [the Firefox Extension Directory](https://addons.mozilla.org/en-US/firefox/addon/send-to-spillo/)

## Fiddle with it

1.  Clone the _spillo-extension_ repository
2.  Make any changes
3.  Go to `about:debugging` in Firefox and load the Contents of the repo as temporary Extension

## Build it

1.  Install `web-ext` by running `npm i -g web-ext`
2.  Run `web-ext build` in your checkout of the tool to create the .zip necessary for installation and redistribution (see [the documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution) for how to distribute properly).

## Contributors

- [Ed Mechem](https://github.com/edmechem) found a better way to handle the new Tab that made its way into V1.2
- [Ed Mechem](https://github.com/edmechem) also kept Compatibility for FF75+

## License

spillo-extension is free and open source software, released under the terms of the [GNU General Public License version 3](http://www.gnu.org/licenses/gpl.html)

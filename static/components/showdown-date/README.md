Showdown Date Extension
=======================

Date extension for Showdown. Provides date and time usage in markdown.

- ```@year``` generates: ```2014``` via js ```new Date().getFullYear()```.  
- ```@date``` generates: ```4/21/2014``` via js ```new Date().getLocaleDateString()```.  
- ```@dateTime``` generates: ```4/21/2014 2:01:57 PM``` via js ```new Date().getLocaleString()```.  
- ```@time``` generates: ```2:01:57 PM``` via js ```new Date().getLocaleTimeString()```.  

## Install
```bower install showdown-date```

## Usage
```html
<script src="showdown.js" />
<script src="showdown-icon/showdown-date.js" />
```

```js
var converter = new Showdown.converter({ extensions: ['date'] });
alert(converter.makeHtml('@date'));
alert(converter.makeHtml('@year'));
```
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Element = require('../../dom/native');
var DOM = require('./dom');

module.exports = Class(Element, Container, {

	initialize: function SVGSurface(width, height){
		var element = this.element = DOM.createElement('svg');
		element.setAttribute('xmlns', DOM.NS);
		element.setAttribute('version', 1.1);
		var defs = this.defs = DOM.createElement('defs');
		element.appendChild(defs);
		if (width != null && height != null) this.resize(width, height);
	},

	resize: function(width, height){
		var element = this.element;
		element.setAttribute('width', width);
		element.setAttribute('height', height);
		this.width = width;
		this.height = height;
		return this;
	}

});

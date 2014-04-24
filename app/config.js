"use strict";

/**
 * Egem web app config module
 * $config provider to serve configuration variables
 * @author Ismail Demirbilek
 */
angular.module("egem.config", []).
	factory("$config", [
	  function() {
	  	var staticUrl = 'http://' + window.location.host + '/static';
	  	var uploadsUrl = staticUrl + '/uploads';
	  	return {
	  		staticUrl: staticUrl,
	  		// edit here to configure sections (pages), there should be a section-name.html file
		  	sections: ['about','services','contact'],
		  	// edit here to configure section source directory e.g. /content/about.html
		  	contentSrc: '/content/',

		  	// home, motto, etc.
		  	home: {
		  		slideInterval: 3000,
		  		// English content slider
		  		en: {
			  		slides: [
			  			{
			  				title: 'Your Big Data Partner',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide1.png'
			  			},
			  			{
			  				title: 'System Integration Expertize',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide2.png'
			  			}
			  		],
			  		blocks: [
			  			{
			  				title: 'Your Big Data Partner',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block1.png'
			  			},
			  			{
			  				title: 'System Integration Expertize',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block2.png'
			  			},
			  			{
			  				title: 'Software Testing',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block2.png'
			  			}
			  		]
			  	},
		  		// Turkish content slider
			  	tr: {
			  		slides: [
			  			{
			  				title: 'Your Big Data Partner',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide1.png'
			  			},
			  			{
			  				title: 'System Integration Expertize',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide2.png'
			  			}
			  		],
			  		blocks: [
			  			{
			  				title: 'Your Big Data Partner',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block1.png'
			  			},
			  			{
			  				title: 'System Integration Expertize',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block2.png'
			  			},
			  			{
			  				title: 'Software Testing',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block2.png'
			  			}
			  		]
			  	}
		  	}
		  };
	  }]);

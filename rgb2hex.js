javascript:void(function($){'use strict';
 const w=$;
 var m=w.prompt('Enter your RGB color:');
 if(m.length && (m=m.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/))){
	const d=w.document,b=d.body,e=d.createDocumentFragment().appendChild(d.createElement('textarea'));
	m=16777216+(m[1]<<16)+(m[2]<<8)+(m[3]<<0);
	m=m.toString(16);
	e.innerHTML='#'+m.slice(1);
	b.appendChild(e).select();
	d.execCommand('copy');
	b.removeChild(e);
 }else{
	alert('No RGB!');
 };
}(window));


//javascript:void(function($){'use strict';const%20w=$;var%20m=w.prompt('Enter-your-RGB-color:');if(m.length&&(m=m.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/))){const%20d=w.document,b=d.body,e=d.createDocumentFragment().appendChild(d.createElement('textarea'));m=16777216+(m[1]<<16)+(m[2]<<8)+(m[3]<<0);m=m.toString(16);e.innerHTML='#'+m.slice(1);b.appendChild(e).select();d.execCommand('copy');b.removeChild(e);}else{alert('No-RGB!');};}(window));

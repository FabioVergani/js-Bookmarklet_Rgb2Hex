javascript:void(function(w){'use strict';
 var m=w.prompt('Enter your RGB color:');
 alert((m.length && (m=m.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/)))?(m=16777216+(m[1]<<16)+(m[2]<<8)+(m[3]<<0),m=m.toString(16),'#'+m.slice(1)):''); 
}(window));

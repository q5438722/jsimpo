var Utils=require("../../renderer/webgl/Utils");var StrokePathWebGL=function(r,a,e,t,l){var o=r.strokeTint;var v=Utils.getTintAppendFloatAlpha(a.strokeColor,a.strokeAlpha*e);o.TL=v;o.TR=v;o.BL=v;o.BR=v;var i=a.pathData;var h=i.length-1;var s=a.lineWidth;var n=s/2;var p=i[0]-t;var k=i[1]-l;if(!a.closePath){h-=2}for(var L=2;L<h;L+=2){var b=i[L]-t;var c=i[L+1]-l;r.batchLine(p,k,b,c,n,n,s,L-2,a.closePath?L===h-1:false);p=b;k=c}};module.exports=StrokePathWebGL;
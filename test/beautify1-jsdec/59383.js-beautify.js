class Outer{constructor(o){this.x=o}}class ArrayHolder{constructor(o){this.array=[];this.array[1]=o}}const root={};root.first=new Outer(new ArrayHolder(root));JSON.stringify(root);
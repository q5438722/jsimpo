import Sort from"../Sort";export default class BubbleSort extends Sort{sort(t){let r=false;const e=[...t];for(let l=1;l<e.length;l+=1){r=false;this.callbacks.visitingCallback(e[l]);for(let t=0;t<e.length-l;t+=1){this.callbacks.visitingCallback(e[t]);if(this.comparator.lessThan(e[t+1],e[t])){[e[t],e[t+1]]=[e[t+1],e[t]];r=true}}if(!r){return e}}return e}}
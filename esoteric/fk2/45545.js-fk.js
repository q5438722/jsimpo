/*global document */
(function() {
    var source = document.getElementsByClassName('prettyprint source linenums');
    var i = +[];
    var lineNumber = +[];
    var lineId;
    var lines;
    var totalLines;
    var anchorHash;

    if (source && source[+[]]) {
        anchorHash = document.location.hash.substring(1);
        lines = source[+[]].getElementsByTagName('li');
        totalLines = lines.length;

        for (; i < totalLines; i++) {
            lineNumber++;
            lineId = 'line' + lineNumber;
            lines[i].id = lineId;
            if (lineId === anchorHash) {
                lines[i].className += ' selected';
            }
        }
    }
})();

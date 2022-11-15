## ReadMe

Usage:
`python bash_process.py` : recovering the programs obfuscated by `jsjiami`, `javascript-obfuscator`, `BeautifyJS`, `esoteric`, `fkJS` and `UglyJS` in Origin-JS (needs manually changing the path to recover programs in Complex-JS)

Script:
`python baseline.py` and `python baseline_testing.py` represents the experiment script used in RQ1 and RQ2, respectively.

Results of RQ1:
directory `jsdata` contains the experiments results of Origin-JS
directory `jsdata2` contains the experiments results of Complex-JS

In each directory:
`rand_{a}`: obfuscated by obfuscator `a`
`rand_{a}_{b}`: obfuscated by obfuscator `a` and deobfuscated by deobfuscator `b`
`rand_{a}_{b}_nice`: obfuscated by obfuscator `a`, deobfuscated by deobfuscator `b`, and recovered by JSNice

`res_kernel_{a}.xlsx` contains the tree kernel metric results of programs obfuscated by obfuscator `a`
`res_token_{a}_cmp.xlsx` contains the #Token Metric results of programs obfuscated by obfuscator `a`

Results of RQ2:
dicrectory `ugly` contains the experiments results over `UglifyJS`
dicrectory `test` contains the experiments results over `BeautifyJS`
dicrectory `esoteric` contains the experiments results over `esoteric` and `fkJS`


var global=1;global=2;function f(){var o={a:1};global="a";for(var i=global;i<2;i++){delete o[i]}}f();
description("This tests that a constant folding on a node that has obviously mispredicted type doesn't send the compiler into an infinite loop.");function foo(o){var t=1;var i=4e3;var e=t/i+o;var n=0;for(var a=0;a<1e3;++a)n++;return e+n}for(var i=0;i<5;++i)shouldBe("foo(0.5)","1000.50025");
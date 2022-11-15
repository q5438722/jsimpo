  QUnit.module("traversing", {
    afterEach : moduleTeardown
  });
  QUnit.test("find(String)", function (raccoon) {
    raccoon.expect(1);
    raccoon.equal(jQuery("#foo").find(".blogTest").text(), "Yahoo", "Basic selector");
  });
  QUnit.test("find(String) under non-elements", function (hamster) {
    var chinchilla; // t
    
      hamster.expect(2);
    chinchilla = jQuery("#nonnodes").contents();
    hamster.equal(chinchilla.find("div").length, 0, "Check node,textnode,comment to find zero divs");
    hamster.equal(chinchilla.find("div").addBack().length, 3, "Check node,textnode,comment to find zero divs, but preserves pushStack");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("find(leading combinator)", function (ibex) {
    ibex.expect(4);
    ibex.deepEqual(jQuery("#qunit-fixture").find("> div").get(), q("foo", "nothiddendiv", "moretests", "tabindex-tests", 
    "liveHandlerOrder", 
    "siblingTest", 
    "fx-test-group"), 
    "find child elements");
    ibex.deepEqual(jQuery("#qunit-fixture").find("> #foo, > #moretests").get(), 
    q("foo", "moretests"), 
    "find child elements");
    ibex.deepEqual(jQuery("#qunit-fixture").find("> #foo > p").get(), q("sndp", "en", "sap"), 
    "find child elements");
    ibex.deepEqual(jQuery("#siblingTest, #siblingfirst").find("+ *").get(), 
    q("siblingnext", "fx-test-group"), 
    "ensure document order");
  });
  QUnit.test("find(node|jQuery object)", function (boar) {
    var llama; // t
    var capybara; // n
    var mink; // i
    var prairie_dog; // o
    var mantis; // r
    var dogfish; // l
    
      boar.expect(13);
    {
      llama = jQuery("#foo");
      capybara = jQuery(".blogTest");
      mink = jQuery("#first");
      prairie_dog = capybara.add(mink);
      mantis = jQuery("#ap").add(capybara);
      dogfish = llama.add(capybara);
    }
    boar.equal(llama.find(capybara).text(), "Yahoo", "Find with blog jQuery object");
    boar.equal(llama.find(capybara[0]).text(), "Yahoo", "Find with blog node");
    boar.equal(llama.find(mink).length, 0, "#first is not in #foo");
    boar.equal(llama.find(mink[0]).length, 0, "#first not in #foo (node)");
    boar.deepEqual(llama.find(prairie_dog).get(), capybara.get(), "Find returns only nodes within #foo");
    boar.deepEqual(llama.find(mantis).get(), capybara.get(), "...regardless of order");
    boar.ok(dogfish.find(capybara).is(".blogTest"), "Blog is part of the collection, but also within foo");
    boar.ok(dogfish.find(capybara[0]).is(".blogTest"), "Blog is part of the collection, but also within foo(node)");
    boar.equal(prairie_dog.find(llama).length, 0, "Foo is not in two elements");
    boar.equal(prairie_dog.find(llama[0]).length, 0, "Foo is not in two elements(node)");
    boar.equal(prairie_dog.find(mink).length, 0, "first is in the collection and not within two");
    boar.equal(prairie_dog.find(mink).length, 0, "first is in the collection and not within two(node)");
    boar.equal(prairie_dog.find(llama[0]).addBack().length, 2, "find preserves the pushStack, see #12009");
  });
  QUnit.test("is(falsy|invalid)", function (snail) {
    snail.expect(5);
    snail.ok(! jQuery("#foo").is(0), "Expected false for an invalid expression - 0");
    snail.ok(! jQuery("#foo").is(null), "Expected false for an invalid expression - null");
    snail.ok(! jQuery("#foo").is(""), 'Expected false for an invalid expression - ""');
    snail.ok(! jQuery("#foo").is(undefined), "Expected false for an invalid expression - undefined");
    snail.ok(! jQuery("#foo").is({
      plain : "object"
    }), 
    "Check passing invalid object");
  });
  QUnit.test("is(String)", function (dunlin) {
    var termite; // t
    var squid; // n
    var rook; // i
    var woodcock; // o
    
      dunlin.expect(33);
    {
      termite = document.getElementById("simon1");
      squid = document.getElementById("text1");
      rook = document.getElementById("option1a");
      woodcock = document.createElement("div");
    }
    dunlin.ok(jQuery("#form").is("form"), "Check for element: A form must be a form");
    dunlin.ok(! jQuery("#form").is("div"), "Check for element: A form is not a div");
    dunlin.ok(jQuery("#mark").is(".blog"), "Check for class: Expected class 'blog'");
    dunlin.ok(! jQuery("#mark").is(".link"), "Check for class: Did not expect class 'link'");
    dunlin.ok(jQuery("#simon").is(".blog.link"), "Check for multiple classes: Expected classes 'blog' and 'link'");
    dunlin.ok(! jQuery("#simon").is(".blogTest"), "Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'");
    dunlin.ok(jQuery("#en").is('[lang="en"]'), "Check for attribute: Expected attribute lang to be 'en'");
    dunlin.ok(! jQuery("#en").is('[lang="de"]'), "Check for attribute: Expected attribute lang to be 'en', not 'de'");
    dunlin.ok(jQuery("#text1").is('[type="text"]'), "Check for attribute: Expected attribute type to be 'text'");
    dunlin.ok(! jQuery("#text1").is('[type="radio"]'), "Check for attribute: Expected attribute type to be 'text', not 'radio'");
    dunlin.ok(jQuery("#text2").is(":disabled"), "Check for pseudoclass: Expected to be disabled");
    dunlin.ok(! jQuery("#text1").is(":disabled"), "Check for pseudoclass: Expected not disabled");
    dunlin.ok(jQuery("#radio2").is(":checked"), "Check for pseudoclass: Expected to be checked");
    dunlin.ok(! jQuery("#radio1").is(":checked"), "Check for pseudoclass: Expected not checked");
    dunlin.ok(jQuery("#en").is('[lang="en"],[lang="de"]'), "Comma-separated; Check for lang attribute: Expect en or de");
    dunlin.ok(jQuery("#en").is('[lang="de"],[lang="en"]'), "Comma-separated; Check for lang attribute: Expect en or de");
    dunlin.ok(jQuery("#en").is('[lang="en"] , [lang="de"]'), "Comma-separated; Check for lang attribute: Expect en or de");
    dunlin.ok(jQuery("#en").is('[lang="de"] , [lang="en"]'), "Comma-separated; Check for lang attribute: Expect en or de");
    termite.title = "Don't click me";
    dunlin.ok(jQuery(termite).is("[rel='bookmark']"), "attribute-equals string (delimited via apostrophes)");
    dunlin.ok(jQuery(termite).is("[rel=bookmark]"), "attribute-equals identifier");
    dunlin.ok(jQuery(termite).is("[\nrel = bookmark\t]"), "attribute-equals identifier (whitespace ignored)");
    dunlin.ok(jQuery(termite).is('a[title="Don\'t click me"]'), "attribute-equals string containing single quote");
    squid.setAttribute("data-pos", ":first");
    dunlin.ok(jQuery(squid).is("input[data-pos=\\:first]"), "attribute-equals POS in identifier");
    dunlin.ok(jQuery(squid).is("input[data-pos=':first']"), "attribute-equals POS in string");
    if (QUnit.jQuerySelectors)
    {
      dunlin.ok(jQuery(squid).is(":input[data-pos=':first']"), "attribute-equals POS in string after pseudo");
    }
    else
    {
      dunlin.ok("skip", ":input not supported in selector-native");
    }
    rook.setAttribute("test", "");
    dunlin.ok(jQuery(rook).is("[id=option1a]"), "id attribute-equals identifier");
    if (QUnit.jQuerySelectors)
    {
      dunlin.ok(jQuery(rook).is("[id*=option1][type!=checkbox]"), "attribute-not-equals identifier");
    }
    else
    {
      dunlin.ok("skip", "attribute-not-equals not supported in selector-native");
    }
    dunlin.ok(jQuery(rook).is("[id*=option1]"), "attribute-contains identifier");
    dunlin.ok(! jQuery(rook).is("[test^='']"), "attribute-starts-with empty string (negative)");
    rook.className = "=]";
    dunlin.ok(jQuery(rook).is(".\\=\\]"), "class selector with attribute-equals confusable");
    dunlin.ok(jQuery(woodcock).is("div"), "disconnected element");
    dunlin.ok(jQuery(termite).is("* > *"), "child combinator matches in document");
    dunlin.ok(! jQuery(woodcock).is("* > *"), "child combinator fails in fragment");
  });
  QUnit.test("is() against non-elements (#10178)", function (antelope) {
    var goose; // t
    var baboon; // n
    var bat; // i
    var bison; // o
    var tarsier; // r
    var cat; // l
    
      antelope.expect(14);
    {
      bison = jQuery(document);
      tarsier = ["a", "*", ];
      cat = {
        text : document.createTextNode(""),
        comment : document.createComment(""),
        document : document,
        window : window,
        array : [],
        "plain object" : {
          
        },
        function : function () {
          
        }
      };
    }
    for (goose in cat)
    {
      bison[0] = cat[goose];
      for (baboon = 0; baboon < tarsier.length; baboon++)
      {
        bat = tarsier[baboon];
        antelope.ok(! bison.is(bat), goose + ' does not match "' + bat + '"');
      }
    }
  });
  QUnit.test("is(jQuery)", function (weasel) {
    weasel.expect(19);
    weasel.ok(jQuery("#form").is(jQuery("form")), "Check for element: A form is a form");
    weasel.ok(! jQuery("#form").is(jQuery("div")), "Check for element: A form is not a div");
    weasel.ok(jQuery("#mark").is(jQuery(".blog")), "Check for class: Expected class 'blog'");
    weasel.ok(! jQuery("#mark").is(jQuery(".link")), "Check for class: Did not expect class 'link'");
    weasel.ok(jQuery("#simon").is(jQuery(".blog.link")), "Check for multiple classes: Expected classes 'blog' and 'link'");
    weasel.ok(! jQuery("#simon").is(jQuery(".blogTest")), "Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'");
    weasel.ok(jQuery("#en").is(jQuery('[lang="en"]')), "Check for attribute: Expected attribute lang to be 'en'");
    weasel.ok(! jQuery("#en").is(jQuery('[lang="de"]')), "Check for attribute: Expected attribute lang to be 'en', not 'de'");
    weasel.ok(jQuery("#text1").is(jQuery('[type="text"]')), "Check for attribute: Expected attribute type to be 'text'");
    weasel.ok(! jQuery("#text1").is(jQuery('[type="radio"]')), "Check for attribute: Expected attribute type to be 'text', not 'radio'");
    weasel.ok(! jQuery("#text1").is(jQuery("input:disabled")), "Check for pseudoclass: Expected not disabled");
    weasel.ok(jQuery("#radio2").is(jQuery("input:checked")), "Check for pseudoclass: Expected to be checked");
    weasel.ok(! jQuery("#radio1").is(jQuery("input:checked")), "Check for pseudoclass: Expected not checked");
    weasel.ok(jQuery("#form").is(jQuery("#qunit-fixture form")[0]), 
    "Check for element: A form is a form");
    weasel.ok(! jQuery("#form").is(jQuery("div")[0]), "Check for element: A form is not a div");
    weasel.ok(jQuery("#mark").is(jQuery(".blog")[0]), "Check for class: Expected class 'blog'");
    weasel.ok(! jQuery("#mark").is(jQuery(".link")[0]), "Check for class: Did not expect class 'link'");
    weasel.ok(jQuery("#simon").is(jQuery(".blog.link")[0]), "Check for multiple classes: Expected classes 'blog' and 'link'");
    weasel.ok(! jQuery("#simon").is(jQuery(".blogTest")[0]), "Check for multiple classes: Expected classes 'blog' and 'link', but not 'blogTest'");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("is() with :has() selectors", function (beaver) {
    beaver.expect(6);
    beaver.ok(jQuery("#foo").is(":has(p)"), "Check for child: Expected a child 'p' element");
    beaver.ok(! jQuery("#foo").is(":has(ul)"), "Check for child: Did not expect 'ul' element");
    beaver.ok(jQuery("#foo").is(":has(p):has(a):has(code)"), "Check for childs: Expected 'p', 'a' and 'code' child elements");
    beaver.ok(! jQuery("#foo").is(":has(p):has(a):has(code):has(ol)"), 
    "Check for childs: Expected 'p', 'a' and 'code' child elements, but no 'ol'");
    beaver.ok(jQuery("#foo").is(jQuery("div:has(p)")), "Check for child: Expected a child 'p' element");
    beaver.ok(! jQuery("#foo").is(jQuery("div:has(ul)")), "Check for child: Did not expect 'ul' element");
  });
  QUnit[QUnit.jQuerySelectorsPos ? "test" : "skip"]("is() with positional selectors", function (komodo_dragon) {
    var armadillo; // e
    var woodpecker; // t
    
      komodo_dragon.expect(27);
    {
      armadillo = jQuery('<p id=\'posp\'><a class=\'firsta\' href=\'#\'><em>first</em></a><a class=\'seconda\' href=\'#\'><b>test</b></a><em></em></p>').appendTo("#qunit-fixture");
      woodpecker = function (quelea, butterfly, oyster) {
        komodo_dragon.equal(jQuery(quelea).is(butterfly), oyster, "jQuery('" + quelea + "').is('" + butterfly + "')");
      };
    }
    woodpecker("#posp", "p:last", true);
    woodpecker("#posp", "#posp:first", true);
    woodpecker("#posp", "#posp:eq(2)", false);
    woodpecker("#posp", "#posp a:first", false);
    woodpecker("#posp .firsta", "#posp a:first", true);
    woodpecker("#posp .firsta", "#posp a:last", false);
    woodpecker("#posp .firsta", "#posp a:even", true);
    woodpecker("#posp .firsta", "#posp a:odd", false);
    woodpecker("#posp .firsta", "#posp a:eq(0)", true);
    woodpecker("#posp .firsta", "#posp a:eq(9)", false);
    woodpecker("#posp .firsta", "#posp em:eq(0)", false);
    woodpecker("#posp .firsta", "#posp em:first", false);
    woodpecker("#posp .firsta", "#posp:first", false);
    woodpecker("#posp .seconda", "#posp a:first", false);
    woodpecker("#posp .seconda", "#posp a:last", true);
    woodpecker("#posp .seconda", "#posp a:gt(0)", true);
    woodpecker("#posp .seconda", "#posp a:lt(5)", true);
    woodpecker("#posp .seconda", "#posp a:lt(1)", false);
    woodpecker("#posp em", "#posp a:eq(0) em", true);
    woodpecker("#posp em", "#posp a:lt(1) em", true);
    woodpecker("#posp em", "#posp a:gt(1) em", false);
    woodpecker("#posp em", "#posp a:first em", true);
    woodpecker("#posp em", "#posp a em:last", true);
    woodpecker("#posp em", "#posp a em:eq(2)", false);
    komodo_dragon.ok(jQuery("#option1b").is("#select1 option:not(:first)"), 
    "POS inside of :not() (#10970)");
    komodo_dragon.ok(jQuery(armadillo[0]).is("p:last"), "context constructed from a single node (#13797)");
    komodo_dragon.ok(! jQuery(armadillo[0]).find("#firsta").is("a:first"), 
    "context derived from a single node (#13797)");
  });
  QUnit.test("index()", function (stingray) {
    stingray.expect(2);
    stingray.equal(jQuery("#text2").index(), 2, "Returns the index of a child amongst its siblings");
    stingray.equal(jQuery("<div></div>").index(), -1, "Node without parent returns -1");
  });
  QUnit.test("index(Object|String|undefined)", function (dragonfly) {
    var finch; // t
    var meerkat; // n
    
      dragonfly.expect(16);
    {
      finch = jQuery([window, document, ]);
      meerkat = jQuery("#radio1,#radio2,#check1,#check2");
    }
    dragonfly.equal(finch.index(window), 0, "Check for index of elements");
    dragonfly.equal(finch.index(document), 1, "Check for index of elements");
    dragonfly.equal(meerkat.index(document.getElementById("radio1")), 0, 
    "Check for index of elements");
    dragonfly.equal(meerkat.index(document.getElementById("radio2")), 1, 
    "Check for index of elements");
    dragonfly.equal(meerkat.index(document.getElementById("check1")), 2, 
    "Check for index of elements");
    dragonfly.equal(meerkat.index(document.getElementById("check2")), 3, 
    "Check for index of elements");
    dragonfly.equal(meerkat.index(window), -1, "Check for not found index");
    dragonfly.equal(meerkat.index(document), -1, "Check for not found index");
    dragonfly.equal(finch.index(finch), 0, "Pass in a jQuery object");
    dragonfly.equal(finch.index(finch.eq(1)), 1, "Pass in a jQuery object");
    dragonfly.equal(jQuery("#form input[type='radio']").index(jQuery("#radio2")), 
    1, 
    "Pass in a jQuery object");
    dragonfly.equal(jQuery("#text2").index(), 2, "Check for index amongst siblings");
    dragonfly.equal(jQuery("#form").children().eq(4).index(), 4, "Check for index amongst siblings");
    dragonfly.equal(jQuery("#radio2").index("#form input[type='radio']"), 
    1, 
    "Check for index within a selector");
    dragonfly.equal(jQuery("#form input[type='radio']").index(jQuery("#radio2")), 
    1, 
    "Check for index within a selector");
    dragonfly.equal(jQuery("#radio2").index("#form input[type='text']"), 
    -1, 
    "Check for index not found within a selector");
  });
  QUnit.test("filter(Selector|undefined)", function (alligator) {
    var kookabura; // t
    
      alligator.expect(9);
    alligator.deepEqual(jQuery("#form input").filter(":checked").get(), q("radio2", "check1"), 
    "filter(String)");
    alligator.deepEqual(jQuery("p").filter("#ap, #sndp").get(), q("ap", "sndp"), 
    "filter('String, String')");
    alligator.deepEqual(jQuery("p").filter("#ap,#sndp").get(), q("ap", "sndp"), 
    "filter('String,String')");
    alligator.deepEqual(jQuery("p").filter(null).get(), [], "filter(null) should return an empty jQuery object");
    alligator.deepEqual(jQuery("p").filter(undefined).get(), [], "filter(undefined) should return an empty jQuery object");
    alligator.deepEqual(jQuery("p").filter(0).get(), [], "filter(0) should return an empty jQuery object");
    alligator.deepEqual(jQuery("p").filter("").get(), [], "filter('') should return an empty jQuery object");
    kookabura = jQuery("#nonnodes").contents();
    alligator.equal(kookabura.filter("span").length, 1, "Check node,textnode,comment to filter the one span");
    alligator.equal(kookabura.filter("[name]").length, 0, "Check node,textnode,comment to filter the one span");
  });
  QUnit.test("filter(Function)", function (human) {
    human.expect(2);
    human.deepEqual(jQuery("#qunit-fixture p").filter(function () {
      return ! jQuery("a", this).length;
    }).get(), 
    q("sndp", "first"), 
    "filter(Function)");
    human.deepEqual(jQuery("#qunit-fixture p").filter(function (reindeer, elk) {
      return ! jQuery("a", elk).length;
    }).get(), 
    q("sndp", "first"), 
    "filter(Function) using arg");
  });
  QUnit.test("filter(Element)", function (ape) {
    var dinosaur; // t
    
      ape.expect(1);
    dinosaur = document.getElementById("text1");
    ape.deepEqual(jQuery("#form input").filter(dinosaur).get(), q("text1"), 
    "filter(Element)");
  });
  QUnit.test("filter(Array)", function (kouprey) {
    var echidna; // t
    
      kouprey.expect(1);
    echidna = [document.getElementById("text1"), ];
    kouprey.deepEqual(jQuery("#form input").filter(echidna).get(), q("text1"), 
    "filter(Element)");
  });
  QUnit.test("filter(jQuery)", function (owl) {
    var gaur; // t
    
      owl.expect(1);
    gaur = jQuery("#text1");
    owl.deepEqual(jQuery("#form input").filter(gaur).get(), q("text1"), 
    "filter(Element)");
  });
  QUnit[QUnit.jQuerySelectorsPos ? "test" : "skip"]("filter() with positional selectors", function (locust) {
    var magpie; // e
    
      locust.expect(19);
    magpie = function (snake, hummingbird, sheep) {
      locust.equal(jQuery(snake).filter(hummingbird).length, sheep, "jQuery( " + snake + " ).filter( " + hummingbird + " )");
    };
    jQuery('<p id=\'posp\'><a class=\'firsta\' href=\'#\'><em>first</em></a><a class=\'seconda\' href=\'#\'><b>test</b></a><em></em></p>').appendTo("#qunit-fixture");
    magpie("#posp", "#posp:first", 1);
    magpie("#posp", "#posp:eq(2)", 0);
    magpie("#posp", "#posp a:first", 0);
    magpie("#posp .firsta", "#posp a:first", 1);
    magpie("#posp .firsta", "#posp a:last", 1);
    magpie("#posp .firsta", "#posp a:last-child", 0);
    magpie("#posp .firsta", "#posp a:even", 1);
    magpie("#posp .firsta", "#posp a:odd", 0);
    magpie("#posp .firsta", "#posp a:eq(0)", 1);
    magpie("#posp .firsta", "#posp a:eq(9)", 0);
    magpie("#posp .firsta", "#posp em:eq(0)", 0);
    magpie("#posp .firsta", "#posp em:first", 0);
    magpie("#posp .firsta", "#posp:first", 0);
    magpie("#posp .seconda", "#posp a:first", 1);
    magpie("#posp .seconda", "#posp em:first", 0);
    magpie("#posp .seconda", "#posp a:last", 1);
    magpie("#posp .seconda", "#posp a:gt(0)", 0);
    magpie("#posp .seconda", "#posp a:lt(5)", 1);
    magpie("#posp .seconda", "#posp a:lt(1)", 1);
  });
  QUnit.test("closest()", function (goldfinch) {
    var swan; // t
    
      goldfinch.expect(14);
    goldfinch.deepEqual(jQuery("body").closest("body").get(), q("body"), "closest(body)");
    goldfinch.deepEqual(jQuery("body").closest("html").get(), q("html"), "closest(html)");
    goldfinch.deepEqual(jQuery("body").closest("div").get(), [], "closest(div)");
    goldfinch.deepEqual(jQuery("#qunit-fixture").closest("span,#html").get(), 
    q("html"), 
    "closest(span,#html)");
    swan = jQuery("#nothiddendivchild");
    goldfinch.deepEqual(swan.closest("html", document.body).get(), [], "Context limited.");
    goldfinch.deepEqual(swan.closest("body", document.body).get(), [], "Context limited.");
    goldfinch.deepEqual(swan.closest("#nothiddendiv", document.body).get(), q("nothiddendiv"), 
    "Context not reached.");
    goldfinch.equal(jQuery("#qunit-fixture p").closest("#qunit-fixture").length, 
    1, 
    "Closest should return a unique set");
    goldfinch.equal(jQuery("<div><p></p></div>").find("p").closest("table").length, 
    0, 
    "Make sure disconnected closest work.");
    goldfinch.deepEqual(jQuery("#firstp").closest(q("qunit-fixture")).get(), 
    q("qunit-fixture"), 
    "Non-string match target");
    goldfinch.equal(jQuery("<div foo='bar'></div>").closest("[foo]").length, 
    1, 
    "Disconnected nodes with attribute selector");
    goldfinch.equal(jQuery("<div>text</div>").closest("[lang]").length, 0, 
    "Disconnected nodes with text and non-existent attribute selector");
    goldfinch.ok(! jQuery(document).closest("#foo").length, "Calling closest on a document fails silently");
    swan = jQuery("<div>text</div>");
    goldfinch.deepEqual(swan.contents().closest("*").get(), swan.get(), "Text node input (#13332)");
  });
  QUnit[QUnit.jQuerySelectorsPos ? "test" : "skip"]("closest() with positional selectors", function (oryx) {
    oryx.expect(3);
    oryx.deepEqual(jQuery("#qunit-fixture").closest("div:first").get(), 
    [], 
    "closest(div:first)");
    oryx.deepEqual(jQuery("#qunit-fixture div").closest("body:first div:last").get(), 
    [], 
    "closest(body:first div:last)");
    oryx.deepEqual(jQuery("#qunit-fixture div").closest("body:first div:last", document).get(), 
    [], 
    "closest(body:first div:last, document)");
  });
  QUnit.test("closest(jQuery)", function (turtle) {
    var cormorant; // t
    var cattle; // n
    var tiger; // i
    var lion; // o
    
      turtle.expect(8);
    {
      cormorant = jQuery("#nothiddendivchild");
      cattle = jQuery("#nothiddendiv");
      tiger = jQuery("#foo");
      lion = jQuery("body");
    }
    turtle.ok(cormorant.closest(cattle).is("#nothiddendiv"), "closest( jQuery('#nothiddendiv') )");
    turtle.ok(cormorant.closest(cattle[0]).is("#nothiddendiv"), "closest( jQuery('#nothiddendiv') ) :: node");
    turtle.ok(cormorant.closest(cormorant).is("#nothiddendivchild"), 
    "child is included");
    turtle.ok(cormorant.closest(cormorant[0]).is("#nothiddendivchild"), 
    "child is included  :: node");
    turtle.equal(cormorant.closest(document.createElement("div")).length, 
    0, 
    "created element is not related");
    turtle.equal(cormorant.closest(tiger).length, 0, "Sibling not a parent of child");
    turtle.equal(cormorant.closest(tiger[0]).length, 0, "Sibling not a parent of child :: node");
    turtle.ok(cormorant.closest(lion.add(cattle)).is("#nothiddendiv"), 
    "Closest ancestor retrieved.");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("not(Selector)", function (frog) {
    frog.expect(7);
    frog.equal(jQuery("#qunit-fixture > p#ap > a").not("#google").length, 
    2, 
    "not('selector')");
    frog.deepEqual(jQuery("#qunit-fixture p").not(".result").get(), q("firstp", "ap", "sndp", "en", "sap", "first"), 
    "not('.class')");
    frog.deepEqual(jQuery("#qunit-fixture p").not("#ap, #sndp, .result").get(), 
    q("firstp", "en", "sap", "first"), 
    "not('selector, selector')");
    frog.deepEqual(jQuery("#ap *").not("code").get(), q("google", "groups", "anchor1", "mark"), 
    "not('tag selector')");
    frog.deepEqual(jQuery("#ap *").not("code, #mark").get(), q("google", "groups", "anchor1"), 
    "not('tag, ID selector')");
    frog.deepEqual(jQuery("#ap *").not("#mark, code").get(), q("google", "groups", "anchor1"), 
    "not('ID, tag selector')");
    frog.deepEqual(jQuery("#form option").not("option.emptyopt:contains('Nothing'),optgroup *,[value='1']").get(), 
    q("option1c", "option1d", "option2c", "option2d", "option3c", 
    "option3d", 
    "option3e", 
    "option4d", 
    "option4e", 
    "option5a", 
    "option5b"), 
    "not('complex selector')");
  });
  QUnit.test("not(undefined)", function (skunk) {
    var lemur; // t
    
      skunk.expect(4);
    lemur = jQuery("p").get();
    skunk.deepEqual(jQuery("p").not(null).get(), lemur, "not(null) should have no effect");
    skunk.deepEqual(jQuery("p").not(undefined).get(), lemur, "not(undefined) should have no effect");
    skunk.deepEqual(jQuery("p").not(0).get(), lemur, "not(0) should have no effect");
    skunk.deepEqual(jQuery("p").not("").get(), lemur, "not('') should have no effect");
  });
  QUnit.test("not(Element)", function (goat) {
    var wolf; // t
    
      goat.expect(1);
    wolf = jQuery("#form select");
    goat.deepEqual(wolf.not(wolf[1]).get(), q("select1", "select3", "select4", "select5"), 
    "filter out DOM element");
  });
  QUnit.test("not(Function)", function (gnat) {
    gnat.expect(1);
    gnat.deepEqual(jQuery("#qunit-fixture p").not(function () {
      return jQuery("a", this).length;
    }).get(), 
    q("sndp", "first"), 
    "not(Function)");
  });
  QUnit.test("not(Array)", function (quail) {
    quail.expect(2);
    quail.equal(jQuery("#qunit-fixture > p#ap > a").not(document.getElementById("google")).length, 
    2, 
    "not(DOMElement)");
    quail.equal(jQuery("p").not(document.getElementsByTagName("p")).length, 
    0, 
    "not(Array-like DOM collection)");
  });
  QUnit.test("not(jQuery)", function (porpoise) {
    porpoise.expect(1);
    porpoise.deepEqual(jQuery("#qunit-fixture p").not(jQuery("#ap, #sndp, .result")).get(), 
    q("firstp", "en", "sap", "first"), 
    "not(jQuery)");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("not(Selector) excludes non-element nodes (gh-2808)", 
  function (chamois) {
    var otter; // t
    var sand_dollar; // n
    
      chamois.expect(3);
    {
      otter = jQuery("#nonnodes").contents();
      sand_dollar = q("nonnodesElement");
    }
    chamois.deepEqual(otter.not("*").get(), [], "not *");
    chamois.deepEqual(otter.not("[id=a],[id=b]").get(), sand_dollar, "not [id=a],[id=b]");
    chamois.deepEqual(otter.not("[id=a],*,[id=b]").get(), [], "not [id=a],*,[id=b]");
  });
  QUnit.test("not(arraylike) passes non-element nodes (gh-3226)", 
  function (jaguar) {
    var dugong; // t
    var water_buffalo; // n
    var sea_urchin; // i
    
      jaguar.expect(5);
    {
      dugong = jQuery("<span id='nonnodesElement'>hi</span> there <!-- mon ami -->");
      water_buffalo = dugong.length;
      sea_urchin = dugong.first();
    }
    jaguar.deepEqual(dugong.not(dugong).get(), [], "not everything");
    jaguar.deepEqual(dugong.not(sea_urchin).length, water_buffalo - 1, "not firstElement");
    jaguar.deepEqual(dugong.not([sea_urchin[0].nextSibling, ]).length, water_buffalo - 1, 
    "not textnode array");
    jaguar.deepEqual(dugong.not(sea_urchin[0].nextSibling).length, water_buffalo - 1, 
    "not textnode");
    jaguar.deepEqual(dugong.not(document.body).get(), dugong.get(), "not with unmatched element");
  });
  QUnit.test("has(Element)", function (grouse) {
    var sandpiper; // t
    var mule; // n
    var goldfish; // i
    
      grouse.expect(3);
    sandpiper = jQuery("#qunit-fixture").has(jQuery("#sndp")[0]);
    grouse.deepEqual(sandpiper.get(), q("qunit-fixture"), "Keeps elements that have the element as a descendant");
    mule = jQuery("<a><b><i></i></b></a>");
    grouse.deepEqual(mule.has(mule.find("i")[0]).get(), mule.get(), "...Even when detached");
    goldfish = jQuery("#qunit-fixture, #header").has(jQuery("#sndp")[0]);
    grouse.deepEqual(goldfish.get(), q("qunit-fixture"), "Does not include elements that do not have the element as a descendant");
  });
  QUnit.test("has(Selector)", function (caribou) {
    var raven; // t
    var ram; // n
    var salmon; // i
    var cheetah; // o
    
      caribou.expect(5);
    raven = jQuery("#qunit-fixture").has("#sndp");
    caribou.deepEqual(raven.get(), q("qunit-fixture"), "Keeps elements that have any element matching the selector as a descendant");
    ram = jQuery("<a><b><i></i></b></a>");
    caribou.deepEqual(ram.has("i").get(), ram.get(), "...Even when detached");
    salmon = jQuery("#qunit-fixture, #header").has("#sndp");
    caribou.deepEqual(salmon.get(), q("qunit-fixture"), "Does not include elements that do not have the element as a descendant");
    salmon = jQuery("#select1, #select2, #select3").has("#option1a, #option3a");
    caribou.deepEqual(salmon.get(), q("select1", "select3"), "Multiple contexts are checks correctly");
    cheetah = jQuery("#qunit-fixture").has("#sndp, #first");
    caribou.deepEqual(cheetah.get(), q("qunit-fixture"), "Only adds elements once");
  });
  QUnit.test("has(Arrayish)", function (viper) {
    var pheasant; // t
    var pony; // n
    var hawk; // i
    var spoonbill; // o
    
      viper.expect(4);
    pheasant = jQuery("#qunit-fixture").has(jQuery("#sndp"));
    viper.deepEqual(pheasant.get(), q("qunit-fixture"), "Keeps elements that have any element in the jQuery list as a descendant");
    pony = jQuery("<a><b><i></i></b></a>");
    viper.deepEqual(pony.has(pony.find("i")).get(), pony.get(), "...Even when detached");
    hawk = jQuery("#qunit-fixture, #header").has(jQuery("#sndp"));
    viper.deepEqual(hawk.get(), q("qunit-fixture"), "Does not include elements that do not have an element in the jQuery list as a descendant");
    spoonbill = jQuery("#qunit-fixture").has(jQuery("#sndp, #first"));
    viper.deepEqual(spoonbill.get(), q("qunit-fixture"), "Only adds elements once");
  });
  QUnit.test("addBack()", function (swallow) {
    swallow.expect(5);
    swallow.deepEqual(jQuery("#en").siblings().addBack().get(), q("sndp", "en", "sap"), 
    "Check for siblings and self");
    swallow.deepEqual(jQuery("#foo").children().addBack().get(), q("foo", "sndp", "en", "sap"), 
    "Check for children and self");
    swallow.deepEqual(jQuery("#sndp, #en").parent().addBack().get(), q("foo", "sndp", "en"), 
    "Check for parent and self");
    swallow.deepEqual(jQuery("#groups").parents("p, div").addBack().get(), 
    q("qunit-fixture", "ap", "groups"), 
    "Check for parents and self");
    swallow.deepEqual(jQuery("#select1 > option").filter(":first-child").addBack(":last-child").get(), 
    q("option1a", "option1d"), 
    "Should contain the last elems plus the *filtered* prior set elements");
  });
  QUnit.test("siblings([String])", function (octopus) {
    var newt; // t
    
      octopus.expect(6);
    octopus.deepEqual(jQuery("#en").siblings().get(), q("sndp", "sap"), "Check for siblings");
    octopus.deepEqual(jQuery("#nonnodes").contents().eq(1).siblings().get(), 
    q("nonnodesElement"), 
    "Check for text node siblings");
    octopus.deepEqual(jQuery("#foo").siblings("form, b").get(), q("form", "floatTest", "lengthtest", "name-tests", "testForm", 
    "disabled-tests"), 
    "Check for multiple filters");
    newt = q("sndp", "en", "sap");
    octopus.deepEqual(jQuery("#en, #sndp").siblings().get(), newt, "Check for unique results from siblings");
    octopus.deepEqual(jQuery("#option5a").siblings("option[data-attr]").get(), 
    q("option5c"), 
    "Has attribute selector in siblings (#9261)");
    octopus.equal(jQuery("<a></a>").siblings().length, 0, "Detached elements have no siblings (#11370)");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("siblings([String])", function (caterpillar) {
    caterpillar.expect(2);
    caterpillar.deepEqual(jQuery("#sndp").siblings(":has(code)").get(), q("sap"), 
    "Check for filtered siblings (has code child element)");
    caterpillar.deepEqual(jQuery("#sndp").siblings(":has(a)").get(), q("en", "sap"), 
    "Check for filtered siblings (has anchor child element)");
  });
  QUnit.test("children([String])", function (kingfisher) {
    kingfisher.expect(2);
    kingfisher.deepEqual(jQuery("#foo").children().get(), q("sndp", "en", "sap"), 
    "Check for children");
    kingfisher.deepEqual(jQuery("#foo").children("#en, #sap").get(), q("en", "sap"), 
    "Check for multiple filters");
  });
  QUnit[QUnit.jQuerySelectors ? "test" : "skip"]("children([String])", function (nightingale) {
    nightingale.expect(1);
    nightingale.deepEqual(jQuery("#foo").children(":has(code)").get(), q("sndp", "sap"), 
    "Check for filtered children");
  });
  QUnit.test("parent([String])", function (wombat) {
    var crane; // t
    
      wombat.expect(6);
    wombat.equal(jQuery("#groups").parent()[0].id, "ap", "Simple parent check");
    wombat.equal(jQuery("#groups").parent("p")[0].id, "ap", "Filtered parent check");
    wombat.equal(jQuery("#groups").parent("div").length, 0, "Filtered parent check, no match");
    wombat.equal(jQuery("#groups").parent("div, p")[0].id, "ap", "Check for multiple filters");
    wombat.deepEqual(jQuery("#en, #sndp").parent().get(), q("foo"), "Check for unique results from parent");
    crane = jQuery("<div>text</div>");
    wombat.deepEqual(crane.contents().parent().get(), crane.get(), "Check for parent of text node (#13265)");
  });
  QUnit.test("parents([String])", function (chough) {
    chough.expect(6);
    chough.equal(jQuery("#groups").parents()[0].id, "ap", "Simple parents check");
    chough.deepEqual(jQuery("#nonnodes").contents().eq(1).parents().eq(0).get(), 
    q("nonnodes"), 
    "Text node parents check");
    chough.equal(jQuery("#groups").parents("p")[0].id, "ap", "Filtered parents check");
    chough.equal(jQuery("#groups").parents("div")[0].id, "qunit-fixture", 
    "Filtered parents check2");
    chough.deepEqual(jQuery("#groups").parents("p, div").get(), q("ap", "qunit-fixture"), 
    "Check for multiple filters");
    chough.deepEqual(jQuery("#en, #sndp").parents().get(), q("foo", "qunit-fixture", "body", "html"), 
    "Check for unique results from parents");
  });
  QUnit.test("parentsUntil([String])", function (goshawk) {
    var monkey; // t
    
      goshawk.expect(10);
    monkey = jQuery("#groups").parents();
    goshawk.deepEqual(jQuery("#groups").parentsUntil().get(), monkey.get(), 
    "parentsUntil with no selector (nextAll)");
    goshawk.deepEqual(jQuery("#groups").parentsUntil(".foo").get(), monkey.get(), 
    "parentsUntil with invalid selector (nextAll)");
    goshawk.deepEqual(jQuery("#groups").parentsUntil("#html").get(), monkey.slice(0, -1).get(), 
    "Simple parentsUntil check");
    goshawk.equal(jQuery("#groups").parentsUntil("#ap").length, 0, "Simple parentsUntil check");
    goshawk.deepEqual(jQuery("#nonnodes").contents().eq(1).parentsUntil("#html").eq(0).get(), 
    q("nonnodes"), 
    "Text node parentsUntil check");
    goshawk.deepEqual(jQuery("#groups").parentsUntil("#html, #body").get(), 
    monkey.slice(0, 2).get(), 
    "Less simple parentsUntil check");
    goshawk.deepEqual(jQuery("#groups").parentsUntil("#html", "div").get(), 
    jQuery("#qunit-fixture").get(), 
    "Filtered parentsUntil check");
    goshawk.deepEqual(jQuery("#groups").parentsUntil("#html", "p,div").get(), 
    monkey.slice(0, 2).get(), 
    "Multiple-filtered parentsUntil check");
    goshawk.equal(jQuery("#groups").parentsUntil("#html", "span").length, 
    0, 
    "Filtered parentsUntil check, no match");
    goshawk.deepEqual(jQuery("#groups, #ap").parentsUntil("#html", "p,div").get(), 
    monkey.slice(0, 2).get(), 
    "Multi-source, multiple-filtered parentsUntil check");
  });
  QUnit.test("next([String])", function (horse) {
    horse.expect(6);
    horse.equal(jQuery("#ap").next()[0].id, "foo", "Simple next check");
    horse.equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).next().attr("id"), 
    "element", 
    "Text node next check");
    horse.equal(jQuery("#ap").next("div")[0].id, "foo", "Filtered next check");
    horse.equal(jQuery("#ap").next("p").length, 0, "Filtered next check, no match");
    horse.equal(jQuery("#ap").next("div, p")[0].id, "foo", "Multiple filters");
    horse.equal(jQuery("body").next().length, 0, "Simple next check, no match");
  });
  QUnit.test("prev([String])", function (okapi) {
    okapi.expect(5);
    okapi.equal(jQuery("#foo").prev()[0].id, "ap", "Simple prev check");
    okapi.deepEqual(jQuery("#nonnodes").contents().eq(1).prev().get(), q("nonnodesElement"), 
    "Text node prev check");
    okapi.equal(jQuery("#foo").prev("p")[0].id, "ap", "Filtered prev check");
    okapi.equal(jQuery("#foo").prev("div").length, 0, "Filtered prev check, no match");
    okapi.equal(jQuery("#foo").prev("p, div")[0].id, "ap", "Multiple filters");
  });
  QUnit.test("nextAll([String])", function (worm) {
    var hornet; // t
    
      worm.expect(5);
    hornet = jQuery("#form").children();
    worm.deepEqual(jQuery("#label-for").nextAll().get(), hornet.slice(1).get(), 
    "Simple nextAll check");
    worm.equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).nextAll().attr("id"), 
    "element", 
    "Text node nextAll check");
    worm.deepEqual(jQuery("#label-for").nextAll("input").get(), hornet.slice(1).filter("input").get(), 
    "Filtered nextAll check");
    worm.deepEqual(jQuery("#label-for").nextAll("input,select").get(), hornet.slice(1).filter("input,select").get(), 
    "Multiple-filtered nextAll check");
    worm.deepEqual(jQuery("#label-for, #hidden1").nextAll("input,select").get(), 
    hornet.slice(1).filter("input,select").get(), 
    "Multi-source, multiple-filtered nextAll check");
  });
  QUnit.test("prevAll([String])", function (quetzal) {
    var seahorse; // t
    
      quetzal.expect(5);
    seahorse = jQuery(jQuery("#form").children().slice(0, 12).get().reverse());
    quetzal.deepEqual(jQuery("#area1").prevAll().get(), seahorse.get(), "Simple prevAll check");
    quetzal.deepEqual(jQuery("#nonnodes").contents().eq(1).prevAll().get(), 
    q("nonnodesElement"), 
    "Text node prevAll check");
    quetzal.deepEqual(jQuery("#area1").prevAll("input").get(), seahorse.filter("input").get(), 
    "Filtered prevAll check");
    quetzal.deepEqual(jQuery("#area1").prevAll("input,select").get(), seahorse.filter("input,select").get(), 
    "Multiple-filtered prevAll check");
    quetzal.deepEqual(jQuery("#area1, #hidden1").prevAll("input,select").get(), 
    seahorse.filter("input,select").get(), 
    "Multi-source, multiple-filtered prevAll check");
  });
  QUnit.test("nextUntil([String])", function (chicken) {
    var mallard; // t
    
      chicken.expect(12);
    mallard = jQuery("#form").children().slice(2, 12);
    chicken.deepEqual(jQuery("#text1").nextUntil().get(), jQuery("#text1").nextAll().get(), 
    "nextUntil with no selector (nextAll)");
    chicken.equal(jQuery("<div>text<a id='element'></a></div>").contents().eq(0).nextUntil().attr("id"), 
    "element", 
    "Text node nextUntil with no selector (nextAll)");
    chicken.deepEqual(jQuery("#text1").nextUntil(".foo").get(), jQuery("#text1").nextAll().get(), 
    "nextUntil with invalid selector (nextAll)");
    chicken.deepEqual(jQuery("#text1").nextUntil("#area1").get(), mallard.get(), 
    "Simple nextUntil check");
    chicken.equal(jQuery("#text1").nextUntil("#text2").length, 0, "Simple nextUntil check");
    chicken.deepEqual(jQuery("#text1").nextUntil("#area1, #radio1").get(), 
    jQuery("#text1").next().get(), 
    "Less simple nextUntil check");
    chicken.deepEqual(jQuery("#text1").nextUntil("#area1", "input").get(), 
    mallard.not("button").get(), 
    "Filtered nextUntil check");
    chicken.deepEqual(jQuery("#text1").nextUntil("#area1", "button").get(), 
    mallard.not("input").get(), 
    "Filtered nextUntil check");
    chicken.deepEqual(jQuery("#text1").nextUntil("#area1", "button,input").get(), 
    mallard.get(), 
    "Multiple-filtered nextUntil check");
    chicken.equal(jQuery("#text1").nextUntil("#area1", "div").length, 0, 
    "Filtered nextUntil check, no match");
    chicken.deepEqual(jQuery("#text1, #hidden1").nextUntil("#area1", "button,input").get(), 
    mallard.get(), 
    "Multi-source, multiple-filtered nextUntil check");
    chicken.deepEqual(jQuery("#text1").nextUntil("[class=foo]").get(), jQuery("#text1").nextAll().get(), 
    "Non-element nodes must be skipped, since they have no attributes");
  });
  QUnit.test("prevUntil([String])", function (aardvark) {
    var albatross; // t
    
      aardvark.expect(11);
    albatross = jQuery("#area1").prevAll();
    aardvark.deepEqual(jQuery("#area1").prevUntil().get(), albatross.get(), 
    "prevUntil with no selector (prevAll)");
    aardvark.deepEqual(jQuery("#nonnodes").contents().eq(1).prevUntil().get(), 
    q("nonnodesElement"), 
    "Text node prevUntil with no selector (prevAll)");
    aardvark.deepEqual(jQuery("#area1").prevUntil(".foo").get(), albatross.get(), 
    "prevUntil with invalid selector (prevAll)");
    aardvark.deepEqual(jQuery("#area1").prevUntil("label").get(), albatross.slice(0, -1).get(), 
    "Simple prevUntil check");
    aardvark.equal(jQuery("#area1").prevUntil("#button").length, 0, "Simple prevUntil check");
    aardvark.deepEqual(jQuery("#area1").prevUntil("label, #search").get(), jQuery("#area1").prev().get(), 
    "Less simple prevUntil check");
    aardvark.deepEqual(jQuery("#area1").prevUntil("label", "input").get(), albatross.slice(0, -1).not("button").get(), 
    "Filtered prevUntil check");
    aardvark.deepEqual(jQuery("#area1").prevUntil("label", "button").get(), 
    albatross.slice(0, -1).not("input").get(), 
    "Filtered prevUntil check");
    aardvark.deepEqual(jQuery("#area1").prevUntil("label", "button,input").get(), 
    albatross.slice(0, -1).get(), 
    "Multiple-filtered prevUntil check");
    aardvark.equal(jQuery("#area1").prevUntil("label", "div").length, 0, 
    "Filtered prevUntil check, no match");
    aardvark.deepEqual(jQuery("#area1, #hidden1").prevUntil("label", "button,input").get(), 
    albatross.slice(0, -1).get(), 
    "Multi-source, multiple-filtered prevUntil check");
  });
  QUnit.test("contents()", function (cobra) {
    var walrus; // t
    var pelican; // n
    
      cobra.expect(12);
    cobra.equal(jQuery("#ap").contents().length, 9, "Check element contents");
    cobra.ok(jQuery("#iframe").contents()[0], "Check existence of IFrame document");
    walrus = jQuery("#loadediframe").contents()[0].body;
    cobra.ok(walrus, "Check existence of IFrame body");
    cobra.equal(jQuery("span", walrus).text(), "span text", "Find span in IFrame and check its text");
    jQuery(walrus).append("<div>init text</div>");
    cobra.equal(jQuery("div", walrus).length, 2, "Check the original div and the new div are in IFrame");
    cobra.equal(jQuery("div", walrus).last().text(), "init text", "Add text to div in IFrame");
    jQuery("div", walrus).last().text("div text");
    cobra.equal(jQuery("div", walrus).last().text(), "div text", "Add text to div in IFrame");
    jQuery("div", walrus).last().remove();
    cobra.equal(jQuery("div", walrus).length, 1, "Delete the div and check only one div left in IFrame");
    cobra.equal(jQuery("div", walrus).text(), "span text", "Make sure the correct div is still left after deletion in IFrame");
    jQuery("<table></table>", walrus).append("<tr><td>cell</td></tr>").appendTo(walrus);
    jQuery("table", walrus).remove();
    cobra.equal(jQuery("div", walrus).length, 1, "Check for JS error on add and delete of a table in IFrame");
    pelican = jQuery("#nonnodes").contents().contents();
    cobra.equal(pelican.length, 1, "Check node,textnode,comment contents is just one");
    cobra.equal(pelican[0].nodeValue, "hi", "Check node,textnode,comment contents is just the one from span");
  });
  QUnit.test("contents() for <template />", function (mosquito) {
    var trout; // t
    
      mosquito.expect(4);
    jQuery("#qunit-fixture").append('<template id=\'template\'>    <div id=\'template-div0\'>        <span>Hello, Web Component!</span>    </div>    <div id=\'template-div1\'></div>    <div id=\'template-div2\'></div></template>');
    trout = jQuery("#template").contents();
    mosquito.equal(trout.length, 6, "Check template element contents");
    mosquito.equal(trout.find("span").text(), "Hello, Web Component!", "Find span in template and check its text");
    jQuery("<div id='templateTest'></div>").append(jQuery(jQuery.map(trout, function (whale) {
      return document.importNode(whale, true);
    }))).appendTo("#qunit-fixture");
    trout = jQuery("#templateTest").contents();
    mosquito.equal(trout.length, 6, "Check cloned nodes of template element contents");
    mosquito.equal(trout.filter("div").length, 3, "Count cloned elements from template");
  });
  QUnit.testUnlessIE("contents() for <template /> remains inert", function (cassowary) {
    var guinea_fowl; // t
    
      cassowary.expect(2);
    Globals.register("testScript");
    Globals.register("testImgOnload");
    jQuery("#qunit-fixture").append('<template id=\'template\'>    <script>testScript = 1;<\/script>    <img src=\'' + baseURL + "1x1.jpg' onload='testImgOnload = 1' >" + "</template>");
    guinea_fowl = jQuery("#template").contents();
    cassowary.strictEqual(window.testScript, true, "script in template isn't executed");
    cassowary.strictEqual(window.testImgOnload, true, "onload of image in template isn't executed");
  });
  QUnit.test("contents() for <object />", function (mouse) {
    var wolverine; // e
    var koala; // n
    
      mouse.expect(2);
    wolverine = jQuery("<object id='svg-object' data='" + baseURL + "1x1.svg'></object>");
    koala = mouse.async();
    wolverine.on("load", function () {
      var giant_panda; // e
      
          giant_panda = jQuery("#svg-object").contents();
      mouse.equal(giant_panda.length, 1, "Check object contents");
      mouse.equal(giant_panda.find("svg").length, 1, "Find svg within object");
      koala();
    });
    jQuery("#qunit-fixture").append(wolverine);
  });
  QUnit.test("contents() for <object /> with children", function (mongoose) {
    var mandrill; // n
    
      mongoose.expect(1);
    mandrill = jQuery('<object type=\'application/x-shockwave-flash\' width=\'200\' height=\'300\' id=\'penguin\'><param name=\'movie\' value=\'flash/penguin.swf\'><param name=\'quality\' value=\'high\'><img src=\'images/penguin.jpg\' width=\'200\' height=\'300\' alt=\'Penguin\'></object>').contents();
    mongoose.equal(mandrill.length, 3, "Check object contents children are correct");
  });
  QUnit.test("contents() for <frame />", function (moose) {
    var sea_lion; // e
    var leopard; // i
    
      moose.expect(2);
    sea_lion = jQuery("<iframe id='frame-contents' src='" + baseURL + "frame.html'></iframe>");
    leopard = moose.async();
    sea_lion.on("load", function () {
      var gerbil; // e
      var dog; // t
      
          gerbil = jQuery("#frame-contents").contents();
      dog = gerbil.find("#test-frame").contents();
      moose.equal(dog.length, 1, "Check frame contents");
      moose.equal(dog.find("body").length, 1, "Find body within frame");
      leopard();
    });
    jQuery("#qunit-fixture").append(sea_lion);
  });
  QUnit.test("sort direction", function (vicuña) {
    var kangaroo; // r
    var shark; // e
    
      vicuña.expect(12);
    {
      kangaroo = jQuery("#ap, #select1 > *, #moretests > form");
      shark = {
        parent : false,
        parents : true,
        parentsUntil : true,
        next : false,
        prev : false,
        nextAll : false,
        prevAll : true,
        nextUntil : false,
        prevUntil : true,
        siblings : false,
        children : false,
        contents : false
      };
    }
    jQuery.each(shark, function (wallaby, crow) {
      var eagle; // n
      var rail; // i
      
          {
        eagle = kangaroo[wallaby]().get();
        rail = jQuery.uniqueSort([].concat(eagle));
      }
      vicuña.deepEqual(eagle, crow ? rail.reverse() : rail, "Correct sort direction for " + wallaby);
    });
  });
  QUnit.test("add(String selector)", function (marten) {
    var jay; // t
    
      marten.expect(2);
    marten.deepEqual(jQuery("#sndp").add("#en").add("#sap").toArray(), q("sndp", "en", "sap"), 
    "Check elements from document");
    jay = jQuery("<div></div>").add("#sndp");
    marten.ok(jay[0].parentNode, "Sort with the disconnected node last (started with disconnected first).");
  });
  QUnit.test("add(String selector, String context)", function (eland) {
    eland.expect(1);
    eland.deepEqual(jQuery([]).add("div", "#nothiddendiv").toArray(), q("nothiddendivchild"), 
    "Check elements from document");
  });
  QUnit.test("add(String html)", function (panther) {
    var opossum; // t
    var shrew; // n
    
      panther.expect(3);
    shrew = jQuery("#sndp").add("<div></div>");
    panther.ok(! shrew[1].parentNode, "Sort with the disconnected node last.");
    opossum = jQuery([]).add("<p id='x1'>xxx</p>").add("<p id='x2'>xxx</p>");
    panther.equal(opossum[0].id, "x1", "Check detached element1");
    panther.equal(opossum[1].id, "x2", "Check detached element2");
  });
  QUnit.test("add(jQuery)", function (duck) {
    var cod; // t
    var crab; // n
    
      duck.expect(4);
    crab = jQuery("<div></div>");
    cod = jQuery([]).add(jQuery("<p id='x1'>xxx</p>").appendTo(crab)).add(jQuery("<p id='x2'>xxx</p>").appendTo(crab));
    duck.equal(cod[0].id, "x1", "Check element1 in detached parent");
    duck.equal(cod[1].id, "x2", "Check element2 in detached parent");
    cod = jQuery([]).add(jQuery("<p id='x1'>xxx</p>")).add(jQuery("<p id='x2'>xxx</p>"));
    duck.equal(cod[0].id, "x1", "Check detached element1");
    duck.equal(cod[1].id, "x2", "Check detached element2");
  });
  QUnit.test("add(Element)", function (bee) {
    var wasp; // t
    var stork; // n
    
      bee.expect(2);
    stork = jQuery("<div></div>");
    wasp = jQuery([]).add(jQuery("<p id='x1'>xxx</p>").appendTo(stork)[0]).add(jQuery("<p id='x2'>xxx</p>").appendTo(stork)[0]);
    bee.equal(wasp[0].id, "x1", "Check on-the-fly element1");
    bee.equal(wasp[1].id, "x2", "Check on-the-fly element2");
  });
  QUnit.test("add(Array elements)", function (eel) {
    eel.expect(1);
    eel.deepEqual(jQuery("#sndp").add(jQuery("#en")[0]).add(jQuery("#sap")).toArray(), 
    q("sndp", "en", "sap"), 
    "Check elements from document");
  });
  QUnit.test("add(Window)", function (lapwing) {
    var guinea_pig; // t
    var ibis; // n
    
      lapwing.expect(1);
    {
      guinea_pig = document.createElement("iframe");
      ibis = document.createElement("iframe");
    }
    document.body.appendChild(guinea_pig);
    document.body.appendChild(ibis);
    lapwing.equal(jQuery([]).add(window).length, 1, "Add a window");
    document.body.removeChild(guinea_pig);
    document.body.removeChild(ibis);
  });
  QUnit.test("add(NodeList|undefined|HTMLFormElement|HTMLSelectElement)", 
  function (camel) {
    var lyrebird; // t
    var donkey; // n
    
      camel.expect(4);
    lyrebird = document.getElementsByTagName("p");
    camel.equal(jQuery([]).add(lyrebird).length, lyrebird.length, "Add a NodeList");
    camel.equal(jQuery([]).add(donkey).length, 0, "Adding undefined adds nothing");
    camel.equal(jQuery([]).add(document.getElementById("form")).length, 
    1, 
    "Add a form");
    camel.equal(jQuery([]).add(document.getElementById("select1")).length, 
    1, 
    "Add a select");
  });
  QUnit.test("add(String, Context)", function (clam) {
    var grasshopper; // t
    
      clam.expect(6);
    clam.deepEqual(jQuery("#firstp").add("#ap").get(), q("firstp", "ap"), 
    "Add selector to selector ");
    clam.deepEqual(jQuery(document.getElementById("firstp")).add("#ap").get(), 
    q("firstp", "ap"), 
    "Add gEBId to selector");
    clam.deepEqual(jQuery(document.getElementById("firstp")).add(document.getElementById("ap")).get(), 
    q("firstp", "ap"), 
    "Add gEBId to gEBId");
    grasshopper = document.getElementById("firstp");
    clam.deepEqual(jQuery("#firstp").add("#ap", grasshopper).get(), q("firstp"), 
    "Add selector to selector ");
    clam.deepEqual(jQuery(document.getElementById("firstp")).add("#ap", grasshopper).get(), 
    q("firstp"), 
    "Add gEBId to selector, not in context");
    clam.deepEqual(jQuery(document.getElementById("firstp")).add("#ap", document.getElementsByTagName("body")[0]).get(), 
    q("firstp", "ap"), 
    "Add gEBId to selector, in context");
  });
  QUnit.test("eq('-1') #10616", function (gnu) {
    var mole; // t
    
      gnu.expect(3);
    mole = jQuery("div");
    gnu.equal(mole.eq(-1).length, 1, "The number -1 returns a selection that has length 1");
    gnu.equal(mole.eq("-1").length, 1, "The string '-1' returns a selection that has length 1");
    gnu.deepEqual(mole.eq("-1"), mole.eq(-1), "String and number -1 match");
  });
  QUnit.test("index(no arg) #10977", function (penguin) {
    var elephant; // t
    var dove; // n
    var badger; // i
    
      penguin.expect(2);
    elephant = jQuery("<ul id='indextest'><li class='zero'>THIS ONE</li><li class='one'>a</li><li class='two'>b</li><li class='three'>c</li></ul>");
    jQuery("#qunit-fixture").append(elephant);
    penguin.strictEqual(jQuery("#indextest li.zero").first().index(), 0, "No Argument Index Check");
    elephant.remove();
    dove = document.createDocumentFragment();
    badger = dove.appendChild(document.createElement("div"));
    penguin.equal(jQuery(badger).index(), 0, "If jQuery#index called on element whose parent is fragment, it still should work correctly");
  });
  QUnit.test("traversing non-elements with attribute filters (#12523)", 
  function (guanaco) {
    var pig; // t
    
      guanaco.expect(5);
    pig = jQuery("#nonnodes").contents();
    guanaco.equal(pig.filter("[id]").length, 1, ".filter");
    guanaco.equal(pig.find("[id]").length, 0, ".find");
    guanaco.strictEqual(pig.is("[id]"), true, ".is");
    guanaco.deepEqual(pig.closest("[id='nonnodes']").get(), q("nonnodes"), 
    ".closest");
    guanaco.deepEqual(pig.parents("[id='nonnodes']").get(), q("nonnodes"), 
    ".parents");
  });
  
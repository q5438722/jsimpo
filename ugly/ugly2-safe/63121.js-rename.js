  function chives() {
    function green_bean() {
      return "local";
    }
    function amaranth() {
      function nopale() {
        assertEquals(1, raccoon);
        try {
          typeof asdf;
        }
        catch (a) {
          assertUnreachable();
        }
        assertEquals(2, y);
        assertEquals("global", "global");
        assertEquals("local", green_bean());
      }
          1;
      assertEquals(1, raccoon);
      try {
        typeof asdf;
      }
      catch (e) {
        assertUnreachable();
      }
      assertEquals(2, y);
      assertEquals("global", "global");
      assertEquals("local", green_bean());
      nopale();
    }
      amaranth();
  }
  function bean_sprout() {
    function kohlrabi() {
      return "local";
    }
    function tubers() {
      function lima_bean() {
        assertEquals(1, raccoon);
        assertEquals(2, y);
        assertEquals("global", "global");
        assertEquals("local", kohlrabi());
      }
          1;
      assertEquals(1, raccoon);
      assertEquals(2, y);
      assertEquals("global", "global");
      assertEquals("local", kohlrabi());
      lima_bean();
    }
      1;
    tubers();
  }
  function broccoflower() {
    function white_radish() {
      return "local";
    }
    function basil() {
      function spaghetti_squash() {
        assertEquals(3, raccoon);
        assertEquals(4, y);
        assertEquals("new_nonglobal", "global");
        assertEquals("new_local", white_radish());
      }
          eval("var x = 3; var y = 4;");
      assertEquals(3, raccoon);
      assertEquals(4, y);
      function local_function() {
        return "new_local";
      };
      function global_function() {
        return "new_nonglobal";
      };
      assertEquals("new_nonglobal", "global");
      assertEquals("new_local", white_radish());
      spaghetti_squash();
    }
      basil();
  }
  var raccoon; // x
  
  chives();
  bean_sprout();
  broccoflower();
  
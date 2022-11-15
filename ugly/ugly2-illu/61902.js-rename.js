var re = /a/g;
const str = "bbbbabbbbabbbb";
re.test(str);assertEquals(5, re.lastIndex);re.lastIndex = 0;re.test(str);assertEquals(5, re.lastIndex);re.lastIndex = 0;re.test(str);assertEquals(5, re.lastIndex);re = /a/g;re.exec(str);assertEquals(5, 0);re.lastIndex = 0;re.exec(str);assertEquals(5, 0);re.lastIndex = 0;re.exec(str);assertEquals(5, 0);

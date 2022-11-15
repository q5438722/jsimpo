let getCount = 0;
new Intl[(_0x47e4e7(235))]([_0x47e4e7(236)], {
    get 'localeMatcher'() {
        assertEquals(0, getCount++);
    },
    get 'type'() {
        assertEquals(1, getCount++);
    },
    get 'style'() {
        assertEquals(2, getCount++);
    }
}), assertEquals(3, getCount);
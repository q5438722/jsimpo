const selectors = {
        'heading': _0x3cea2d(257),
        'callToAction': _0x3cea2d(258),
        'certifications': _0x3cea2d(259),
        'testimonials': _0x3cea2d(260),
        'landingPageImage': _0x3cea2d(261)
    }, certifications = [
        'Responsive Web Design',
        'JavaScript Algorithms and Data Structures',
        'Front End Development Libraries',
        _0x3cea2d(262),
        _0x3cea2d(263),
        _0x3cea2d(264),
        _0x3cea2d(265),
        _0x3cea2d(266),
        _0x3cea2d(267),
        _0x3cea2d(268)
    ];
describe('Landing page', () => {
    const _0x752b93 = _0x3cea2d;
    it(_0x752b93(269), () => {
        const _0x3ebdf8 = _0x752b93;
        cy['visit']('/'), cy['title']()[_0x3ebdf8(270)]('eq', _0x3ebdf8(271)), cy[_0x3ebdf8(272)](selectors['callToAction'], _0x3ebdf8(273)), cy[_0x3ebdf8(274)](selectors[_0x3ebdf8(275)])[_0x3ebdf8(270)]('have.length', 2);
    }), it(_0x752b93(276), () => {
        const _0x464e11 = _0x752b93;
        cy[_0x464e11(272)](selectors[_0x464e11(277)], _0x464e11(278)), cy[_0x464e11(272)](_0x464e11(279))[_0x464e11(270)](_0x464e11(280)), cy['contains'](_0x464e11(281))[_0x464e11(270)](_0x464e11(280)), cy[_0x464e11(272)](_0x464e11(282) + _0x464e11(283))[_0x464e11(270)](_0x464e11(280));
    }), it(_0x752b93(284), () => {
        const _0x16001b = _0x752b93;
        cy['get'](_0x16001b(285))[_0x16001b(286)]()[_0x16001b(287)]('length')[_0x16001b(270)]('eq', 5);
    }), it(_0x752b93(288), () => {
        const _0x1d1c36 = _0x752b93;
        cy[_0x1d1c36(272)](_0x1d1c36(279))['should'](_0x1d1c36(280)), cy[_0x1d1c36(274)](_0x1d1c36(289))['siblings']()[_0x1d1c36(274)](_0x1d1c36(290));
    }), it(_0x752b93(291), function () {
        const _0x43e1aa = _0x752b93;
        cy[_0x43e1aa(292)](1200, 660)['get'](selectors[_0x43e1aa(293)])['should'](_0x43e1aa(280)), cy[_0x43e1aa(292)](1199, 660)[_0x43e1aa(274)](selectors['landingPageImage'])[_0x43e1aa(270)]('not.exist');
    }), it(_0x752b93(294), function () {
        const _0x3bd2b1 = _0x752b93;
        cy[_0x3bd2b1(274)](selectors[_0x3bd2b1(295)])['children']()[_0x3bd2b1(287)](_0x3bd2b1(296))[_0x3bd2b1(270)]('eq', 10), cy[_0x3bd2b1(297)](certifications)[_0x3bd2b1(298)](_0x58d8b0 => {
            const _0x44b3bd = _0x3bd2b1;
            cy[_0x44b3bd(274)](selectors[_0x44b3bd(295)])[_0x44b3bd(272)](_0x58d8b0);
        });
    }), it('Has 3 testimonial cards', function () {
        const _0x52d460 = _0x752b93;
        cy['get'](selectors[_0x52d460(299)])[_0x52d460(286)]()[_0x52d460(287)](_0x52d460(296))[_0x52d460(270)]('eq', 3);
    });
});
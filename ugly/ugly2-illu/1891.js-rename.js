import $ from "../../shared/dom.js";import effectInit from "../../shared/effect-init.js";export default function EffectCube({ swiper: S, extendParams: e, on: s }) {
  e({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: .94 } });
  const t = () => {
    var { $el: e, $wrapperEl: s, slides: d, width: t, height: i, rtlTranslate: l, size: n, browser: a } = S;
    const f = S.params.cubeEffect;
    const h = S.isHorizontal();
    const p = S.virtual && S.params.virtual.enabled;
    var w = 0;
    var o;
    if (f.shadow) {
      if (h) {
        o = s.find(".swiper-cube-shadow");if (o.length === 0) {
          o = $("<div class=\"swiper-cube-shadow\"></div>");s.append(o);
        }o.css({ height: `${t}px` });
      } else {
        o = e.find(".swiper-cube-shadow");if (o.length === 0) {
          o = $("<div class=\"swiper-cube-shadow\"></div>");e.append(o);
        }
      }
    }for (let r = 0; r < d.length; r += 1) {
      const c = d.eq(r);
      var e = r;
      if (p) {
        e = parseInt(c.attr("data-swiper-slide-index"), 10);
      }var s = e * 90;
      var t = Math.floor(s / 360);
      if (l) {
        s = -s;t = Math.floor(-s / 360);
      }const g = Math.max(Math.min(c[0].progress, 1), -1);
      var i = 0;
      var a = 0;
      var o = 0;
      if (e % 4 === 0) {
        i = -t * 4 * n;o = 0;
      } else if ((e - 1) % 4 === 0) {
        i = 0;o = -t * 4 * n;
      } else if ((e - 2) % 4 === 0) {
        i = n + t * 4 * n;o = n;
      } else if ((e - 3) % 4 === 0) {
        i = -n;o = 3 * n + n * 4 * t;
      }if (l) {
        i = -i;
      }if (!h) {
        a = i;i = 0;
      }const m = `rotateX(${h ? 0 : -s}deg) rotateY(${h ? s : 0}deg) translate3d(${i}px, ${a}px, ${o}px)`;
      if (g <= 1 && g > -1) {
        w = e * 90 + g * 90;if (l) w = -e * 90 - g * 90;
      }c.transform(m);if (f.slideShadows) {
        var e = h ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top");
        var s = h ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
        if (e.length === 0) {
          e = $(`<div class="swiper-slide-shadow-${h ? "left" : "top"}"></div>`);c.append(e);
        }if (s.length === 0) {
          s = $(`<div class="swiper-slide-shadow-${h ? "right" : "bottom"}"></div>`);c.append(s);
        }if (e.length) e[0].style.opacity = Math.max(-g, 0);if (s.length) s[0].style.opacity = Math.max(g, 0);
      }
    }s.css({ "-webkit-transform-origin": `50% 50% -${n / 2}px`, "transform-origin": `50% 50% -${n / 2}px` });if (f.shadow) {
      if (h) {
        o.transform(`translate3d(0px, ${t / 2 + f.shadowOffset}px, ${-t / 2}px) rotateX(90deg) rotateZ(0deg) scale(${f.shadowScale})`);
      } else {
        const u = Math.abs(w) - Math.floor(Math.abs(w) / 90) * 90;
        const x = 1.5 - (Math.sin(u * 2 * Math.PI / 360) / 2 + Math.cos(u * 2 * Math.PI / 360) / 2);
        const b = f.shadowScale;
        const v = f.shadowScale / x;
        const M = f.shadowOffset;
        o.transform(`scale3d(${b}, 1, ${v}) translate3d(0px, ${i / 2 + M}px, ${-i / 2 / v}px) rotateX(-90deg)`);
      }
    }const r = a.isSafari || a.isWebView ? -n / 2 : 0;
    s.transform(`translate3d(0px,0,${r}px) rotateX(${S.isHorizontal() ? 0 : w}deg) rotateY(${S.isHorizontal() ? -w : 0}deg)`);
  };

  const i = e => {
    var { $el: s, slides: t } = S;
    t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);if (S.params.cubeEffect.shadow && !S.isHorizontal()) {
      s.find(".swiper-cube-shadow").transition(e);
    }
  };

  effectInit({ effect: "cube", swiper: S, on: s, setTranslate: t, setTransition: i, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
}

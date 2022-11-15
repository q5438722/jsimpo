export default function preloadImages() {
  const t = this;
  t.imagesToLoad = t.$el.find("img");function a() {
    if (typeof t === "undefined" || t === null || !t || t.destroyed) return;if (t.imagesLoaded !== undefined) t.imagesLoaded += 1;if (t.imagesLoaded === t.imagesToLoad.length) {
      if (t.params.updateOnImagesReady) t.update();t.emit("imagesReady");
    }
  }for (let e = 0; e < t.imagesToLoad.length; e += 1) {
    const i = t.imagesToLoad[e];
    t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), true, a);
  }
}

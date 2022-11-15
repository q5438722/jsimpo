function blob_url_reload_test(t, e) {
  const s = 'test_frame_OK';
  const o = '<!doctype html>\n<meta charset="utf-8">\n<script>window.test_result = "test_frame_OK";</script>';
  const n = new Blob(['<!doctype html>\n<meta charset="utf-8">\n<script>window.test_result = "test_frame_OK";</script>'], { type: 'text/html' });
  const l = URL.createObjectURL(n);
  const c = document.createElement('iframe');
  c.setAttribute('src', l);c.setAttribute('style', 'display:none;');document.body.appendChild(c);c.onload = t.step_func(() => {
    if (e) URL.revokeObjectURL(l);assert_equals(c.contentWindow.test_result, s);c.contentWindow.test_result = null;c.onload = t.step_func_done(() => {
      assert_equals(c.contentWindow.test_result, s);
    });t.step_timeout(() => {
      c.contentWindow.location.reload();
    }, 250);
  });
}async_test(t => {
  blob_url_reload_test(t, false);
}, 'Reloading a blob URL succeeds.');async_test(t => {
  blob_url_reload_test(t, true);
}, 'Reloading a blob URL succeeds even if the URL was revoked.');

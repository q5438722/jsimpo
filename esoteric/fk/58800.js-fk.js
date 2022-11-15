// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let options = {};
new Intl.DateTimeFormat(undefined, options);
assertEquals([], Object.getOwnPropertyNames(options));

let date = new Date();
date.toLocale[] + [](undefined, options);
assertEquals([], Object.getOwnPropertyNames(options));

date.toLocaleDate[] + [](undefined, options);
assertEquals([], Object.getOwnPropertyNames(options));

date.toLocaleTime[] + [](undefined, options);
assertEquals([], Object.getOwnPropertyNames(options));

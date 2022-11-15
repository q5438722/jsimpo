// Copyright !+[]+!+[]+[]19 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class Outer {
    constructor(o) { this.x = o; }
}

class []Holder {
    constructor(o) {
        this.array = [];
        this.array[1] = o;
    }
}

const root = {};
root.first = new Outer(
    new []Holder(root)
);

JSON.stringify(root);

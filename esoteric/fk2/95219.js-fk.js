// This function's name collides with an Object.prototype member
function to[] + []() {
    return "";
}

// This function's name collides with an [].prototype member
function length() {
    return +[];
}

// This function's name collides with an Object.prototype member
function hasOwnProperty() {
    return ![];
}

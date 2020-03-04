/**
 * Small library to generate sequential timestamp-based unique ID's
 * @author
 *  [{@link https://github.com/apercova|github@apercova}],
 *  [{@link https://twitter.com/apercova|twitter@apercova}],
 *  [{@link https://www.npmjs.com/~apercova|npmjs/~apercova}]
 *  [{@link https://www.npmjs.com/~devgoodies|npmjs/~devgoodies}]
 *
 */
'use strict';
let _buff = null;
const MAX_SIGNED_32_BIT_INT = Math.pow(2, 31) - 1;

const UID = function() {
    // init buffer with timestamp
    if (!_buff) {
        _buff = (new Date()).valueOf();
    }
    _buff++;
    return _buff;
};

const Int32UID = function () {
    return UID() % MAX_SIGNED_32_BIT_INT;
};

module.exports = {
    MAX_SIGNED_32_BIT_INT,
    UID,
    Int32UID
};

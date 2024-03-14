/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort())


    // let collection1 = new Set(s);
    // let test = true;
    // t.split('').forEach(letter => {
    //     if (!collection1.has(letter)) {
    //         test = false;
    //     }
    // })
    // if (test && s.length !== t.length) test = false;
    // return test;
};
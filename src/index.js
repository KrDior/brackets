/*module.exports = */

module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let i, bracePosition;
    let checkRep = [];
    bracketsConfig = bracketsConfig.join().replace(/,/g, '');
    for (i = 0; i < str.length; i++) {
        bracePosition = bracketsConfig.indexOf(str[i]);
        if (bracePosition === -1 || str.length%2 != 0) {
            return false;
        }
        
        if (bracePosition % 2 === 0) {
            if (bracketsConfig[bracePosition+1] == bracketsConfig[bracePosition] && checkRep.indexOf(bracketsConfig[bracePosition]) == -1) {
                stack.push(bracePosition + 1);
                checkRep.push(bracketsConfig[bracePosition]);
            } else if (bracketsConfig[bracePosition+1] == bracketsConfig[bracePosition] && checkRep.indexOf(bracketsConfig[bracePosition]) !== -1) {
                checkRep.pop(bracketsConfig[bracePosition]);
                stack.pop()
            } else {
                stack.push(bracePosition + 1);
            }

        } else if (stack.pop() !== bracePosition) {
            return false;
        }
    }
    return stack.length === 0 ? true : false;
}

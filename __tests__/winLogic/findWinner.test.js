// import { findWinnerLine } from "../../src/functions/winCheck";

const findWinnerLine = require("../../src/functions/winCheck");

test('finding Winner line - horizontally', () => {

    let filledSlotID = 8;
    const gridToCheack = [
        'x', 'o', 'o', 'x', 'x',    //0-4
        'x', 'x', 'x', 'x', '0'];   //5-9

    expect(findWinnerLine(filledSlotID, gridToCheack))
        .toBe(true);

    filledSlotID = 3;      
    expect(findWinnerLine(filledSlotID, gridToCheack))
        .toBe(true);
        
    for (let i = 3; i <= 8; i++)
        expect(findWinnerLine(i, gridToCheack))
            .toBe(true);

    for (let i = 0; i <= 2; i++)
        expect(findWinnerLine(i, gridToCheack))
            .toBe(false);

});
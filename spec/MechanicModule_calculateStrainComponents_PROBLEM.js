var MECH = require('../lib/MechanicModule');
var test_function = MECH.calculateStrainComponents;

var N = 11, Mx = 22, My = 33;
var D11 = 10, D12 = 20, D13 = 30, D22 = 40, D23 = 50, D33 = 60;


describe("Mechanic Module  - calculateStrainAndStress", function () {

    it("должна вернуть правильный результат", function () {

        correct_e0 = (D12 ^ 2 * N + D11 * D23 * My - D12 * D13 * My - D12 * D23 * Mx + D13 * D22 * Mx - D11 * D22 * N) /
            (D33 * D12 ^ 2 - 2 * D12 * D13 * D23 + D22 * D13 ^ 2 + D11 * D23 ^ 2 - D11 * D22 * D33)

        correct_rx = (D23 ^ 2 * Mx + D12 * D33 * My - D13 * D23 * My - D22 * D33 * Mx - D12 * D23 * N + D13 * D22 * N) /
            (D33 * D12 ^ 2 - 2 * D12 * D13 * D23 + D22 * D13 ^ 2 + D11 * D23 ^ 2 - D11 * D22 * D33)

        correct_ry = (D13 ^ 2 * My - D11 * D33 * My + D12 * D33 * Mx - D13 * D23 * Mx + D11 * D23 * N - D12 * D13 * N) /
            (D33 * D12 ^ 2 - 2 * D12 * D13 * D23 + D22 * D13 ^ 2 + D11 * D23 ^ 2 - D11 * D22 * D33)


        var [e0,rx,ry] = test_function(N, Mx, My, D11, D12, D13, D22, D23, D33);

        expect(e0).toBe(correct_e0);
        expect(rx).toBe(correct_rx);
        expect(ry).toBe(correct_ry);
    });

});
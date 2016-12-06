export default function (N, Mx, My, D11, D12, D13, D22, D23, D33) {

    if (
        !isNumber(N) || !isNumber(Mx) || !isNumber(My) || !isNumber(D11) || !isNumber(D12) || !isNumber(D13) || !isNumber(D22) || !isNumber(D23) || !isNumber(D33)
    ) {
        return null;
    }

    let delimiter = (D33 * D12 * D12 - 2 * D12 * D13 * D23 + D22 * D13 * D13 + D11 * D23 * D23 - D11 * D22 * D33);

    let e0 = (D12 * D12 * N + D11 * D23 * My - D12 * D13 * My - D12 * D23 * Mx + D13 * D22 * Mx - D11 * D22 * N) / delimiter;

    let rx = (D23 * D23 * Mx + D12 * D33 * My - D13 * D23 * My - D22 * D33 * Mx - D12 * D23 * N + D13 * D22 * N) / delimiter;

    let ry = (D13 * D13 * My - D11 * D33 * My + D12 * D33 * Mx - D13 * D23 * Mx + D11 * D23 * N - D12 * D13 * N) / delimiter;

    // let A = (D12 * D12 - D11 * D22) * D13 / (D12 * D13 - D11 - D23) / D12;
    //
    // let e0 = (Mx - My * D11 / D12 - A * (Mx - N * D11 / D13)) * D13 / (D12 * D13 - D11 * D23 - A * (D13 * D13 - D11 * D33));
    //
    // let ry = A * (Mx - N * D11 / D13 + (D11 * D33 - D13 * D13) * e0 / D13) * D12 / (D12 * D12 - D11 * D22);
    //
    // let rx = (Mx - D12 * ry - D13 * e0) / D11;


    // let rx_1 = (D23 * D23 * Mx + D12 * D33 * My - D13 * D23 * My - D22 * D33 * Mx - D12 * D23 * N + D13 * D22 * N);
    // let ry_1 = (D13 * D13 * My - D11 * D33 * My + D12 * D33 * Mx - D13 * D23 * Mx + D11 * D23 * N - D12 * D13 * N);
    // let e0_1 = (D12 * D12 * N + D11 * D23 * My - D12 * D13 * My - D12 * D23 * Mx + D13 * D22 * Mx - D11 * D22 * N);
    //
    //
    // console.log(e0_1 + '/' + delimiter + ' = ' + e0_1 / delimiter);
    // console.log(rx_1 + '/' + delimiter + ' = ' + rx_1 / delimiter);
    // console.log(ry_1 + '/' + delimiter + ' = ' + ry_1 / delimiter);
    //
    return [e0, rx, ry];

}

function isNumber(value, mayBeNegative = true) {

    if (value === null || value === undefined || typeof  value != 'number') {
        return false;
    }

    if (!mayBeNegative && value < 0) {
        return false;
    }

    return true;
}
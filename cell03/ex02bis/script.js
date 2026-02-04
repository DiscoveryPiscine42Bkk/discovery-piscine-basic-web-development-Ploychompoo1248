function calculate() {
    const l = $('#leftMember').val();
    const r = $('#rightMember').val();
    const op = $('#operator').val();

    if (!/^\d+$/.test(l) || !/^\d+$/.test(r)) {
        alert('Error :('); return;
    }

    const res = eval(`${parseInt(l)} ${op} ${parseInt(r)}`); // หรือใช้ switch แบบเดิม
    if ((op === '/' || op === '%') && parseInt(r) === 0) {
        console.log("It's over 9000!"); alert("It's over 9000!");
    } else {
        console.log(res); alert(res);
    }
}

setInterval(() => alert('Please, use me...'), 30000);
$(document).ready(function() {
    $('#changeBtn').click(function() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        $('body').css('background-color', color);
    });
});
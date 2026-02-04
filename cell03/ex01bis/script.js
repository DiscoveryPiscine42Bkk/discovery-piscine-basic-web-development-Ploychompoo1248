$(document).ready(function() { // ต้องหุ้มด้วย document ready เพื่อให้ jQuery หา #balloon เจอ
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let i = 0;

    $('#balloon').click(function() {
        size += 10;
        if (size > 420) {
            size = 200;
        }
        
        // เลื่อนไปสีถัดไป
        i++; 
        if (i >= colors.length) i = 0; // ถ้าเกินจำนวนสี ให้กลับไปเริ่มที่ 0

        $(this).css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[i]
        });
    });

    $('#balloon').mouseleave(function() {
        if (size > 200) {
            size -= 5;
        }

        // ถอยหลังกลับไปสีที่แล้ว
        i--;
        if (i < 0) i = colors.length - 1; // ถ้าติดลบ ให้กลับไปสีสุดท้าย

        $(this).css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[i]
        });
    });
});
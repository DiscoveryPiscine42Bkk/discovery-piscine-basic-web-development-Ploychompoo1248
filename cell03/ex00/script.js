const button = document.getElementById('changeBtn');

// ฟังก์ชันสุ่มสี HEX
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เมื่อคลิกปุ่ม ให้เปลี่ยนสี background ของ body
button.addEventListener('click', function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
});
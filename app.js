// ইমেজ প্রিভিউ লজিক
document.getElementById('imageInput').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        document.querySelector('.jamuna-main-image').src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// ডাউনলোড লজিক
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.getElementById('capture-area');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'photo-card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

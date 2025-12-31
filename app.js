// ইমেজ প্রিভিউ আপডেট
document.getElementById('imageInput').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('previewImg').src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// টেক্সট আপডেট
document.getElementById('headlineInput').addEventListener('input', function(e) {
    document.getElementById('previewHeadline').innerText = e.target.value;
});

// ডাউনলোড ফাংশন (html2canvas ব্যবহার করে)
document.getElementById('downloadBtn').addEventListener('click', function() {
    const captureArea = document.getElementById('capture-area');
    
    // ডাউনলোড করার সময় কোয়ালিটি ঠিক রাখার জন্য
    html2canvas(captureArea, {
        useCORS: true,
        scale: 2 // হাই রেজোলিউশনের জন্য
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'photo-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

// টেমপ্লেট পরিবর্তন লজিক (এখানে নতুন টেমপ্লেট এড করতে পারো)
document.getElementById('templateSelect').addEventListener('change', function(e) {
    const wrapper = document.getElementById('card-template');
    wrapper.className = 'template-wrapper ' + e.target.value + '-theme';
});

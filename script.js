window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    document.body.classList.add('loading');

    setTimeout(function() {
        loader.style.transition = 'all 1s ease';
        content.style.transition = 'all 1s ease';
        loader.style.transform = 'translateY(-100%)';
        content.classList.remove('hidden');

        
        document.body.classList.remove('loading');
    }, 500); 
});


const input = document.getElementById('number-of-guests');
input.addEventListener('input', function() {
    if (this.value < 0) {
        this.value = 0;
    } else if (this.value > 6) {
        this.value = 6;
    }
});
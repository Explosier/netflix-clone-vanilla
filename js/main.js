const faqButton = document.querySelectorAll('.faq-content li > div:first-of-type');
const faqContent = document.querySelectorAll('.faq-content li > div:last-of-type');
const svgs = document.querySelectorAll('.faq-content li > div:first-of-type svg');

faqButton.forEach((button, i) => {
    button.addEventListener('click', function() {
        faqContent.forEach((content, index) => {
            if(index !== i) {
                content.classList.remove('active');
                svgs[index].style.transform = '';
            }
        });

        faqContent[i].classList.toggle('active');
        if(faqContent[i].classList.contains('active')){
            button.querySelector('svg').style.transform = 'rotate(-45deg)';
        } else {
            button.querySelector('svg').style.transform = '';
        }
    });
});
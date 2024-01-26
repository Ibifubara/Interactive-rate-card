const ratingCard = document.querySelector('.rating-card');
const rates = document.querySelectorAll('#rates');
const rated = document.querySelector('#rated');
const btnCta = document.querySelector('.btn-cta');
const submitted = document.querySelector('#submitted');

for(let rate of rates){
    rate.addEventListener('click', () => {
        rated.innerHTML = rate.innerHTML;
    })
}

btnCta.addEventListener('click', () => {
    // submitted.classList.remove('hidden');
    submitted.style.display = 'block';
    ratingCard.style.display = 'none';

})
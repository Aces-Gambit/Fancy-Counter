const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');


const addWarning = () => {
    counterEl.classList.add('counter--limit');
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';
    increaseButtonEl.disabled = true;
};
const removeWarning = () => {
    counterEl.classList.remove('counter--limit');
    counterTitleEl.textContent = 'Fancy Counter';
    increaseButtonEl.disabled = false;
};

const incrementCounterValue = () => {
    if (parseInt(counterValueEl.textContent) >= 5) {
        addWarning();
        return;
    }
    counterValueEl.textContent = parseInt(counterValueEl.textContent) + 1;
};
const decrementCounterValue = () => {
    if (parseInt(counterValueEl.textContent) <= 0) {
        return;
    }
    if (parseInt(counterValueEl.textContent) >= 5) {
        removeWarning();
    }
    counterValueEl.textContent = parseInt(counterValueEl.textContent) - 1;
};
const resetCounterValue = () => {
    if (parseInt(counterValueEl.textContent) >= 5) {
        removeWarning();
    }
    counterValueEl.textContent = 0;
};


increaseButtonEl.addEventListener('click', incrementCounterValue);
decreaseButtonEl.addEventListener('click', decrementCounterValue);
resetButtonEl.addEventListener('click', resetCounterValue);
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        incrementCounterValue();
    }
    if (event.key === 'ArrowDown') {
        decrementCounterValue();
    }
    if (event.key === 'Escape') {
        resetCounterValue();
    }    
}); 
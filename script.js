const square = document.querySelector('.square')

square.addEventListener('click', () => {
    if (square.classList.contains('active')) {
        square.classList.remove('active');
    }
    else{
        square.classList.add('active');
    }


    
})
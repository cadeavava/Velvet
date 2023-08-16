const jacquin = document.querySelector('.jacquin');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const jacquinTop = jacquin.getBoundingClientRect().top;

        if (jacquinTop < windowHeight * 0.7)
        {
            jacquin.style.opacity = 1;
        } else {
            jacquin.style.opacity = 0;
        }
    }
);

const pqvelvet = document.querySelector('.pq_velvet');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const pqvelvetTop = pqvelvet.getBoundingClientRect().top;

        if (pqvelvetTop < windowHeight * 0.8)
        {
            pqvelvet.style.opacity = 1;
        } else {
            pqvelvet.style.opacity = 0;
        }
    }
);

const pqcafe = document.querySelector('.pq_cafe');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const pqcafeTop = pqcafe.getBoundingClientRect().top;

        if (pqcafeTop < windowHeight * 0.8)
        {
            pqcafe.style.opacity = 1;
        } else {
            pqcafe.style.opacity = 0;
        }
    }
);
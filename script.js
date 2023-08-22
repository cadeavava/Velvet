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
const pqfranca = document.querySelector('.pq_frança');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const pqfrancaTop = pqfranca.getBoundingClientRect().top;

        if (pqfrancaTop < windowHeight * 0.8)
        {
            pqfranca.style.opacity = 1;
        } else {
            pqfranca.style.opacity = 0;
        }
    }
);
const pqvinho = document.querySelector('.pq_vinho');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const pqvinhoTop = pqvinho.getBoundingClientRect().top;

        if (pqvinhoTop < windowHeight * 0.8)
        {
            pqvinho.style.opacity = 1;
        } else {
            pqvinho.style.opacity = 0;
        }
    }
);
//scroll da pag de cafe
const fraseAutor = document.querySelector('.frase_autor');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const fraseAutorTop = fraseAutor.getBoundingClientRect().top;

        if (fraseAutorTop < windowHeight * 0.1)
        {
            fraseAutor.style.opacity = 0;
        } else {
            fraseAutor.style.opacity = 1;
        }
    }
);
const descricao_cat = document.querySelector('.descricao_cat');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const descricao_cat_top = descricao_cat.getBoundingClientRect().top;

        if (descricao_cat_top < windowHeight * 0.8)
        {
            descricao_cat.style.opacity = 1;
        } else {
            descricao_cat.style.opacity = 0;
        }
    }
);
const categoria_do_velvet = document.querySelector('.categoria_do_velvet');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const categoria_do_velvet_top = categoria_do_velvet.getBoundingClientRect().top;

        if (categoria_do_velvet_top < windowHeight * 0.8)
        {
            categoria_do_velvet.style.opacity = 1;
        } else {
            categoria_do_velvet.style.opacity = 0;
        }
    }
);
const linha1catalogo = document.querySelector('.linha1catalogo');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const linha1catalogoTop = linha1catalogo.getBoundingClientRect().top;

        if (linha1catalogoTop < windowHeight * 0.8)
        {
            linha1catalogo.style.opacity = 1;
        } else {
            linha1catalogo.style.opacity = 0;
        }
    }
);
const linha2catalogo = document.querySelector('.linha2catalogo');

window.addEventListener('scroll', () => 
    {
        const windowHeight = window.innerHeight;
        const linha2catalogotop = linha2catalogo.getBoundingClientRect().top;

        if (linha2catalogotop < windowHeight * 0.8)
        {
            linha2catalogo.style.opacity = 1;
        } else {
            linha2catalogo.style.opacity = 0;
        }
    }
);



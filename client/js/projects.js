function viewImagens() {
    // matriz de imagens
    const matriz_imagens = [
        {
            imagem_src      : "simulador_erros_01.PNG",
            currentSlide    : "1",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_02.PNG",
            currentSlide    : "2",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_03.PNG",
            currentSlide    : "3",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_equipe_01.PNG",
            currentSlide    : "4",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_equipe_02.PNG",
            currentSlide    : "5",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_equipe_03.PNG",
            currentSlide    : "6",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "simulador_erros_equipe_04.PNG",
            currentSlide    : "7",
            alt             : "Simulador de Erros"
        },
        {
            imagem_src      : "TytoinKids_01.PNG",
            currentSlide    : "8",
            alt             : "Tytoin Kids"
        },
        {
            imagem_src      : "TytoinKids_02.PNG",
            currentSlide    : "9",
            alt             : "Tytoin Kids"
        },
        {
            imagem_src      : "TytoinKids_03.PNG",
            currentSlide    : "10",
            alt             : "Tytoin Kids"
        },
        {
            imagem_src      : "TytoinKids_01.PNG",
            currentSlide    : "11",
            alt             : "Tytoin Kids"
        },
        {
            imagem_src      : "TytoinKids_02.PNG",
            currentSlide    : "12",
            alt             : "Tytoin Kids"
        }
    ]

    $("#columns-projects-imagens").html("");
    
    matriz_imagens.forEach( (element, index) => {
        $("#columns-projects-imagens").append(`
            <div class="imagens_view">
                <div class="numbertext">${index+1} / ${matriz_imagens.length}</div>
                <img src="client/assets/img/proj/${element.imagem_src}" style="width:100%">
            </div>
        `);
    });

    $("#columns-projects-imagens").append(`
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

        <div class="caption-container">
            <p id="caption_get"></p>
        </div>

        <div class="row" id="columns-projects-defined">
        </div>
    `);

    matriz_imagens.forEach( (element, index) => {
        $("#columns-projects-defined").append(`
            <div class="column">
                <img class="demonstrar cursor" src="client/assets/img/proj/${element.imagem_src}" style="width:100%" onclick="currentSlide(${index})" alt="${element.alt}">
            </div>
        `);
    });
}

viewImagens();
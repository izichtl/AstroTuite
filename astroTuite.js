window.onload = function() {

    //carrega o scritp do twitter

    function load_js() {
        var head = document.getElementsByTagName('head')[0];
        script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        head.appendChild(script);
    }



    //calcula o signo
    function zodiacCal(day, month) {

        var zodiac = ['', 'Capricórnio', 'Aquário', 'Peixes', 'Aries', 'Touro', 'Gêmeos', 'Cancer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio'];
        var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
    }


    //mostra as caracteristicas
    function showTopics(day, month) {

        var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        clientTopics = [
            '',
            'Forte, Determinado e Persistente',
            'Divertido, Companheiro e Inteligente',
            'Sonhador, Talentoso e Carente',
            'Conquistador, Divertido e Charmoso',
            'Decidido, Tranquilo e Sereno',
            'Companheiro, Inteligente e Estável',
            'Sensível, Carinhoso e Emotivo',
            'Forte, Livre e Extravagante',
            'Tímido, Perfeccionista e Observado',
            'Educado, Gentil e Charmoso',
            'Genioso, Sensual e Meticuloso',
            'Disciplinado, Alegre e Aventureiro ',
            'Forte, Determinado e Persistente'
        ];
        return (day > last_day[month]) ? clientTopics[month * 1 + 1] : clientTopics[month];
    }
    //mostrar hashtag's

    function showHashtags(day, month) {

        var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        clientTag = [
            '',
            'capricornio',
            'aquario',
            'peixes',
            'aries',
            'touro',
            'gemeos',
            'cancer',
            'leao',
            'virgem',
            'libra',
            'escorpiao',
            'sagitario',
            'capricornio'
        ];
        return (day > last_day[month]) ? clientTag[month * 1 + 1] : clientTag[month];
    }
    // troca a imagem do signo
    function sourceChange(day, month) {

        var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        clientTopics = [
            '',
            'img/signo01.svg',
            'img/signo02.svg',
            'img/signo03.svg',
            'img/signo04.svg',
            'img/signo05.svg',
            'img/signo06.svg',
            'img/signo07.svg',
            'img/signo08.svg',
            'img/signo09.svg',
            'img/signo10.svg',
            'img/signo11.svg',
            'img/signo12.svg',
            'img/signo13.svg'
        ];
        return (day > last_day[month]) ? clientTopics[month * 1 + 1] : clientTopics[month];
    }

    //gera um tuite aleatorio
    function randomTuite() {
        var tuitesLinks = [
            'https://twitter.com/yrlnrd/status/1224645672634372097',
            'https://twitter.com/oraporra/status/1223765295271174144',
            'https://twitter.com/soaresivinha/status/1224454928258592769',
            'https://twitter.com/anacronices/status/1130961931102228480',
            'https://twitter.com/talitacabrit4/status/1224359539019059206',
            'https://twitter.com/KellenHortegal/status/1224713570115637255',
            'https://twitter.com/Laysafneves/status/1224724250650648576',
            'https://twitter.com/arrombida/status/1223968772639416320',
        ];
        var selecionado = Math.floor((Math.random() * tuitesLinks.length));
        linkSelecionado = tuitesLinks[selecionado];
        return linkSelecionado;
    }


    // envio dados
    document.getElementById('test_z').onclick = function() {

        var s_days = document.getElementById('s_days').value;
        s_m = document.getElementById('s_m').value;
        clientZodiac = zodiacCal(s_days, s_m);
        clientTopic = showTopics(s_days, s_m);
        clientSource = sourceChange(s_days, s_m);
        clientTuite = randomTuite();
        clientTag = showHashtags(s_days, s_m);


        document.getElementById('s_zodiac').innerHTML = clientZodiac;
        document.getElementById('tmsg').innerHTML = clientTopic;
        document.getElementById('imageSigno').src = clientSource;
        document.getElementById('t3').href = clientTuite;

        document.getElementsByTagName('a')[0].setAttribute('data-text', "Horóscopo de Hoje para " + clientZodiac);
        document.getElementsByTagName('a')[0].setAttribute('data-url', clientTuite);
        document.getElementsByTagName('a')[0].setAttribute('data-hashtags', clientTag + ' #astrologia #horoscopo');

        document.getElementById('astrotuite').style.display = 'flex';
        document.getElementById('test_z').style.display = 'none';

        document.getElementById('test_s').style.display = 'block';

        document.getElementById('enviaDados').style.display = 'none';
        document.getElementById('sobre').style.display = 'none';
        document.getElementById('linhaInferior').style.display = 'none';

        load_js();






        return false;
    }

    //reseta pagina
    document.getElementById('test_s').onclick = function() {
        location.reload();

    }


};
/*
const testeout = () => {
    this.setTimeout(function() {
        document.getElementsByTagName('body')[0].style.backgroundColor = "#ff5a83";
    }, 3000)
}
*/
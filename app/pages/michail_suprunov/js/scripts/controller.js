'use strict';
(function(){
    var appMobiles = angular.module("mobilesStore",[]);
appMobiles.controller('MobilesController', function() {
    this.mobiles = products;
});

appMobiles.controller('PanelController_mu', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;

    };

});

appMobiles.controller('ReviewController_mu', function(){
    this.review = {};
    this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
    };
});

var products = [
    {
        title: 'Htc 10 Lifestyle',
        description: [
            'Восьмиядерный процессор Qualcomm Snapdragon 65 (2.3 ГГц)',
            'Размеры: 145.9 x 71.9 x 9.0-3.0 мм',
            'Вес: 161 г',
            '3 ГБ оперативной памяти',
            '32 ГБ встроенной памяти',
            'Встречайте HTC 10. Смартфон, при создании которого компания HTC скрупулезно выверяла и оттачивала' +
            'каждую деталь. В ваших руках полный контроль над персонализацией устройства и производительность,' +
            'устанавливающая новые стандарты. Вы получите доступ к таким инновационным решениям, как система ' +
            'оптической стабилизации изображения (OIS), реализованная в обеих камерах смартфона, и полноценный ' +
            '24-битный Hi-Res Audio звук. HTC знают, каким должен быть настоящий флагман.'
        ],
        price: 17999,
        images: [
            "../../images/mobiles/htc_10-1.png",
            "../../images/mobiles/htc_10-2.png",
            "../../images/mobiles/htc_10-3.png"
        ],
        reviews: [
            {
                author: "Мистер Зло",
                message: "Аха-ха. Вот оно. Наконец, у меня появился телефон, который позволит мне запускать " +
                "ядерные ракеты не выходя из дома"
            },
            {
                author: "Супермен",
                message: "Как по мне, то слабовато. При развития суперскорости, телефон может плавиться в руках. " +
                "Ракеты еще не запускал, нужно попробовать на досуге. В целом, не доволен. Лучше бы айфон купил..."
            }
        ],
        soldOut: false
    },
    {
        title: 'HTC One mini 2',
        description: [
            'Четырехядерный процессор Qualcomm Snapdragon 400 (1.2 ГГц) ',
            'Размеры 137.43 x 65.04 x 10.6 мм',
            'Вес: 135 г ',
            '1 ГБ оперативной памяти',
            '16 ГБ встроенной памяти',
            'Вобрав в себя ключевые черты стильного дизайна флагмана HTC One и его отличительные характеристики, ' +
            'HTC One mini 2 — имеет дисплей с диагональю 4.5” и разрешением 1280х720. Мощный четырехъядерный ' +
            'процессор Qualcomm Snapdragon 400 с тактовой частотой 1.2 ГГц позволяет с легкостью и высокой ' +
            'продуктивностью выполнять работу с самыми сложными приложениями.'
        ],
        price: 4500,
        images: [
            "../../images/mobiles/htc_one_mini_1.png",
            "../../images/mobiles/htc_one_mini_2.png",
            "../../images/mobiles/htc_one_mini_3.png"
        ],
        reviews: [
            {
                author: 'Джимми грязный ботинок',
                message: 'Тысяча чертей. Это именно то, что я искал.'
            },
            {
                author: 'Джонни дырявая шляпа',
                message: 'Давно хотел обновить телефон и застрелить этого бродягу Джимми. В итоге, все сошлось в 1 ' +
                'вечер. Бродяга в гробу, а его телефон у меня. '
            }
        ],
        soldOut: false
    },
    {
        title: 'HTC Desire 820G Dual Sim',
        description: [
            'Восьмиядерный процессор MediaTek MT6592 (1.7 ГГц)',
            'Размеры: 157.7 x 78.7 x 7.7 мм',
            'Вес: 155 г',
            '1 ГБ оперативной памяти',
            '16 ГБ встроенной памяти',
            'Восьмиядерный процессор MediaTek MT6592 обеспечивает максимально реалистичную картинку, высокое ' +
            'качество графики в играх и непрерывное воспроизведение видео. Даже если ты откроешь сразу несколько ' +
            'приложений, смартфон не начнет подвисать. Скорость загрузки данных тоже впечатляет.'
        ],
        price: 4300,
        images: [
            "../../images/mobiles/htc_desire_820g_1.png",
            "../../images/mobiles/htc_desire_820g_2.png",
            "../../images/mobiles/htc_desire_820g_3.png"
        ],
        reviews: [
            {
                author: "Злой покупатель",
                message: "Я вообще в шоке. Вместо телефона пришел слесарь и начал чинить мой холодильник. На все " +
                'вопросы отвечал Я,Я,натюрлих, разломал мне всю хату. Телефона так и нет. Не знаю почему я связал ' +
                'все это с этим сайтом. Просто, накипело.'
            },
            {
                author: "Ганц Дриттель",
                message: "Ja, ja. Sehr gute Telefone. Ich liebe meine kleine Frau. Sehr guten Abend."
            }
        ],
        soldOut: false
    }
];

})();
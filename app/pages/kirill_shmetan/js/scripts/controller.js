
(function () {

    var appCams = angular.module('CamStore', []);

    appCams.controller("CamStoreController", function () {
        this.product = slrCameras;
    });
    appCams.controller("PanelController", function () {
        this.tab = 0;
        this.setTab = function (tab) {
            this.tab = tab;
        };
        this.isSelected = function (tab) {
            return this.tab === tab;
        };
    });
    appCams.controller("RevController", function () {
       this.review = {};

        this.addRev = function (product) {
            product.messages.push(this.review);
            this.review = {};
        };
    });
    
var slrCameras = [
    {
        title: 'Nikon D750',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Nikon D750 с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
                    ],
        price: 1000,
        images: [
            "../../images/cameras/d750.jpg"
        ],
        messages: [
            {
                author: "Дмитрий",
                message: "Хороший фотоапарат,подойдет только для опытных пользователей,для новичков-можно,но в какой то мере пустая трата денег(для людей которые фоткают только на AUTO)"
            },
            {
                author: "Анна",
                message: "В своем сегменте цена-качество лучший выбор. Скорость съемки великолепная. Эргономичность: все кнопки и переключатели именно на тех местах, где им и положено быть, понятное вменяемое меню, кнопки быстрого доступа ко многим функциям камеры, которые приходится изменять по нескольку раз на дню. В руке, как влитой! очень прочный и защищенный корпус, удобный хват, очень продуманный интерфейс"
            }
        ],
        soldOut: false
    },
    {
        title: 'Nikon D810',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Nikon D810 с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
        ],
        price: 900,
        images: [
            "../../images/cameras/d810.jpg"
        ],
        messages: [
            {
                author: "Иван",
                message: "Камера достойная. Жаль, никон мало ресурсов выделяет для совершенства парка оптики.Всё таки Отус это дорого."
            },
            {
                author: "Денис",
                message: "Поменял свой D800 на D810. Отличная работа над ошибками. Доволен абсолютно всем."
            }
        ],
        soldOut: false
    },
    {
        title: 'Canon EOS 5D',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Canon EOS 5D с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
                   ],
        price: 800,
        images: [
            "../../images/cameras/eos_5d.jpg"
        ],
        messages: [
            {
                author: "Александр",
                message: "Камера супер, но больше непокарману пробвинутому любителю."
                  },
            {
                author: "Михаил",
                message: "Дуже хороші показники світлочутливості сенсора, 12800 ІСО робоче для відео, метадані для відеофайлів, з Magic Lantern можна записувати RAW відео."
            }
        ],
        soldOut: false
    },
    {
        title: 'Canon EOS 7D',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Canon EOS 7D с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
                   ],
        price: 700,
        images: [
            "../../images/cameras/eos_7d.jpg"
        ],
        messages: [
            {
                author: "Сергей",
                message: "Неплохой фотоаппарат для журналистов и любителей репортажной съемки, а вот творческим фотографам надо брать полнокадровые варианты."
            },
            {
                author: "Макс",
                message: "С 5кой ровнять нельзя - абсолютно разный уровень - это кроп а от него ждать что он будет снимать лучше фул фрейма нельзя. Пятёрка гораздо лучше во всём. Разница в фотографиях огромна (имею обе эти камеры."
            }
        ],
        soldOut: false
    },
    {
        title: 'Canon EOS 80D',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Canon EOS 80D с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
                 ],
        price: 600,
        images: [
            "../../images/cameras/eos_80d.jpg"
        ],
        messages: [
            {
                author: "Андрей",
                message: "Серйозний фотоапарат, для серйозних задач. Якість і фотографій, і самого фотоапарату на найвищому рівні. Крута серійна зйомка та відео, зручне управління, великий акумулятор."
            },
            {
                author: "Ольга",
                message: "С 5кой ровнять нельзя - абсолютно разный уровень - это кроп а от него ждать что он будет снимать лучше фул фрейма нельзя. Пятёрка гораздо лучше во всём. Разница в фотографиях огромна (имею обе эти камеры."
            }
        ],
        soldOut: false
    },
    {
        title: 'Fujifilm X-T1 Black',
        description: [
            'Раскройте свое видение мира благодаря универсальной модели Fujifilm X-T1 Black с гибкими настройками и высокой скоростью съемки. Откройте для себя мир неограниченных возможностей: дерзайте и побеждайте с помощью полнокадровой 24.3-мегапиксельной фотокамеры.'
        ],
        price: 500,
        images: [
            "../../images/cameras/xt1.jpg"
        ],
        messages: [
            {
                author: "Игорь",
                message: "Пользуюсь камерой уже почти год, не смотря на небольшие недостатки, очень ей доволен и даже не думаю менять. К управлению привыкаешь, она легкая, как и все аксессуары к ней, да и места много не занимает."
            },
            {
                author: "Сергей",
                message: "ерешел на эту прекрасную камеру с Canon 6D и ни капли не жалею! Удивительная резкость, на прошлой камере я не мог такого добиться. Красивые фирменные цвета. С точки зрения получаемых фотографий и функционала, это пожалуй лучшая беззеркальная камера на сегодняшний день."
            }
        ],
        soldOut: false
    }];
})();
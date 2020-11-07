$(function() {
        $('#vegas').vegas({
            slides: [
                { src: './img/mainbg.png' },
                { src: './img/news_img.jpg' },
                { src: './img/course_03.jpg' },
                { src: './img/course_01.jpg' }
            ],
            overlay: './js/overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
            transition: 'fade', //スライドを遷移させる際のアニメーション
            transitionDuration: 4000, //スライドの遷移アニメーションの時間
            delay: 10000, //スライド切り替え時の遅延時間
            animation: 'random', //スライド表示中のアニメーション
            animationDuration: 20000, //スライド表示中のアニメーションの時間
        });
    });
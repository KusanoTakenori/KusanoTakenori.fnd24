'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.getElementById("100").addEventListener("click",function() {

    // 入力された文字列を取得
    let userInput = decodeURI(encodeURIComponent(document.getElementById('isbn').value));
    let query = userInput.split(' ').join('+');

    // QRコードの生成
    (function() {
        let qr = new QRious({
            element: document.getElementById('qr'),
         // 入力した文字列でQRコード生成
            value: query
    });
    qr.background = 'white'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = 'black'; //QRコード自体の色
    qr.foregroundAlpha = 1.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = 100; // QRコードのサイズ

        // QRコードをflexboxで表示
        document.getElementById('qrOutput').style.display = 'flex';
    })();
});

document.getElementById("240").addEventListener("click",function() {

    // 入力された文字列を取得
    let userInput = document.getElementById('isbn').value;
    let query = userInput.split(' ').join('+');

    // QRコードの生成
    (function() {
        let qr = new QRious({
            element: document.getElementById('qr'),
         // 入力した文字列でQRコード生成
            value: query
    });
    qr.background = 'white'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = 'black'; //QRコード自体の色
    qr.foregroundAlpha = 1.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = 240; // QRコードのサイズ

        // QRコードをflexboxで表示
        document.getElementById('qrOutput').style.display = 'flex';
    })();
});

document.getElementById("500").addEventListener("click",function() {

    // 入力された文字列を取得
    let userInput = document.getElementById('isbn').value;
    let query = userInput.split(' ').join('+');

    // QRコードの生成
    (function() {
        let qr = new QRious({
            element: document.getElementById('qr'),
         // 入力した文字列でQRコード生成
            value: query
    });
    qr.background = 'white'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = 'black'; //QRコード自体の色
    qr.foregroundAlpha = 1.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = 500; // QRコードのサイズ

        // QRコードをflexboxで表示
        document.getElementById('qrOutput').style.display = 'flex';
    })();
});


document.getElementById('getqrInfo').addEventListener('click', () => {

    // 入力された文字列を取得
    let userInput = document.getElementById('isbn').value;
    let query = userInput.split(' ').join('+');
    let size = document.getElementById("size").value;

    // QRコードの生成
    (function() {
        let qr = new QRious({
            element: document.getElementById('qr'),
         // 入力した文字列でQRコード生成
            value: query
    });
    qr.background = 'white'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = 'black'; //QRコード自体の色
    qr.foregroundAlpha = 1.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = size; // QRコードのサイズ

    // QRコードをflexboxで表示
    document.getElementById('qrOutput').style.display = 'flex';
    })();

});

function download() {
    // png出力用コード
    let cvs = document.getElementById("qr");
    let link = document.getElementById("link");
    link.href = cvs.toDataURL("image/png");
    link.download = "qrcode.png"
    link.click();
};


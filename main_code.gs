var token = '5418473536:AAF-1uKNcXRMsml97XO6jWsgnfYb3Hyz59Q';
//var ssId = '1PnO7TWT4ccgoKCzBeVVoXoS7_pucl628A5iSvz3Ithk';
var telegramUrl = 'https://api.telegram.org/bot' + token;
var webAppUrl = 'https://script.google.com/macros/s/AKfycbzzcFmCHt-QecaW_RQDYLYOIu8l1FVLeowdgpTNQqCY213BWI2x/exec';

function setWebhook() {
    var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}

function kirimGambar(id, imgUrl) {

    var url = telegramUrl + '/sendPhoto?&photo=' + imgUrl + '&chat_id=' + id + "&parse_mode=HTML";
    var response = UrlFetchApp.fetch(url);
}

function kirimPesan(id, text) {
    var data = {
        method: 'post',
        payload: {
            parse_mode: 'HTML'
        }
    }
    var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + encodeURIComponent(text);
    var response = UrlFetchApp.fetch(url, data);
}


function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var id = data.message.chat.id;
    var text = data.message.text;

    //commands
    if (/\/start/i.exec(text)) {
        var txt = '<b>BOT TERHUBUNG</b>' + '\n' +
            'Klik /help untuk bantuan.';
        kirimPesan(id, txt);
    }
    if (/\/help/i.exec(text)) {
        var txt = '<b>DAFTAR COMMAND</b>' + '\n' +
            '_______________________' + '\n\n' +
            '<b>• Gambar / Foto</b>' + '\n' +
            '/cctv - Lokasi CCTV' + '\n' +
            '/epsonsetting - Setting printer epson' + '\n' +
            '/number - Setting format number & currency' + '\n\n' +
            '<b>• Teks </b>' + '\n' +
            '/wifi1 - CMBTBIG2' + '\n' +
            '/wifi2 - TUCMBT' + '\n' +
            '/listip - List Ip Address' + '\n' +
            '/tutor - List Docs Tutorial' + '\n' +
            '/indhm1 - No Indihome CMBTBIG2' + '\n' +
            '/indhm2 - No Indihome TUCMBT' + '\n';
        kirimPesan(id, txt);
    }
    if (/\/cctv/i.exec(text)) {
        var imgUrl = 'https://drive.google.com/file/d/1GQeYtnG-RRoVIHzYF3Fwx8sCfCAkGGm5/view?usp=sharing';
        kirimGambar(id, imgUrl);
    }
    if (/\/(number|currency)/i.exec(text)) {
        var imgUrl = 'https://drive.google.com/file/d/1_xQm-R5gfePO-JqdIYimIkgRdXkItpIg/view?usp=sharing';
        kirimGambar(id, imgUrl);
    }
    if (/\/(epsonsetting)/i.exec(text)) {
        var imgUrl1 = 'https://drive.google.com/file/d/1xCHCT5bc-YX-dJ45SOOe2mrqQQfGNaB2/view?usp=sharing';
        kirimGambar(id, imgUrl1);
        var imgUrl2 = 'https://drive.google.com/file/d/1UeWOKL9yfWHiVWrNIwV8HVrKmFckaBts/view?usp=sharing';
        kirimGambar(id, imgUrl2);
    }
    if (/\/wifi1/i.exec(text)) {
        var txt1 = '<b>Password Wifi CMBTBIG2</b>';
        kirimPesan(id, txt1);
        var txt2 = '<code>Bigland.2022</code>';
        kirimPesan(id, txt2);
    }
    if (/\/wifi2/i.exec(text)) {
        var txt1 = '<b>Password Wifi TUCMBT</b>';
        kirimPesan(id, txt1);
        var txt2 = '<code>K@5uRfLORA:</code>';
        kirimPesan(id, txt2);
    }
    if (/\/indhm1/i.exec(text)) {
        var txt1 = '<b>Nomor Indihome CMBTBIG2</b>';
        kirimPesan(id, txt1);
        var txt2 = '<code>162102902445</code>';
        kirimPesan(id, txt2);
    }
    if (/\/indhm2/i.exec(text)) {
        var txt1 = '<b>Nomor Indihome TUCMBT</b>';
        kirimPesan(id, txt1);
        var txt2 = '<code>161102200363</code>';
        kirimPesan(id, txt2);
    }
    if (/\/listip/i.exec(text)) {
        var txt1 = '<b>List IP CMBT</b>';
        kirimPesan(id, txt1);
        var txt2 = '<b>TU</b>' + '\n' +
            '192.168.1.51 Zen' + '\n' +
            '192.168.1.52 Akim' + '\n' +
            '192.168.1.53 Saripah' + '\n' +
            '192.168.1.54 Susi' + '\n' +
            '192.168.1.55 Mira' + '\n' +
            '192.168.1.56 Ida' + '\n' +
            '192.168.1.57 Tati' + '\n\n' +
            '<b>Produksi</b>' + '\n' +
            '192.168.1.58 Sales counter' + '\n' +
            '192.168.1.59 Irma' + '\n' +
            '192.168.1.60 Tina' + '\n' +
            '192.168.1.61 Asminah' + '\n\n' +
            '<b>HRGA</b>' + '\n' +
            '192.168.1.62 Dadang x';
        kirimPesan(id, txt2);
    }
    if (/\/tutor/i.exec(text)) {
        var txt1 = '<b>DOKUMENTASI IT BIGLAND</b>';
        kirimPesan(id, txt1);
        var txt2 = '<b>Daftar Isi</b>' + '\n' +
            '—————————————————' + '\n\n' +
            '1. <a href="https://telegra.ph/Cara-mengubah-pc-menjadi-server-Windows-05-14">Cara mengubah pc menjadi server (Windows)</a>' + '\n' +
            '2. <a href="https://telegra.ph/CARA-INSTALL-UBUNTU-SERVER-1604-05-14">Cara install Ubuntu Server</a>' + '\n' +
            '3. <a href="https://telegra.ph/INSTALLASI-WEBMIN-PADA-UBUNTU-SERVER-05-16">Cara install Webmin</a>' + '\n' +
            '4. <a href="https://telegra.ph/INSTALLASI-SAMBA-PADA-UBUNTU-SERVER-05-16">Cara install Samba</a>' + '\n' +
            '5. <a href="https://telegra.ph/CARA-INSTALLASI-WILCOM-EMBROIDERY-DI-WIN-10-64-BIT-05-14">Cara install Wilcom e.2 win10 64bit</a>' + '\n' +
            '6. <a href="https://telegra.ph/Installasi-aplikasi-FAST-05-16">Cara install FAST</a>' + '\n' +
            '7. <a href="https://telegra.ph/CARA-SHARE-FAST-05-14">Cara share folder FAST</a>' + '\n' +
            '8. <a href="https://telegra.ph/AKSES-WEBMIN-03-26">Akses webmin</a>' + '\n' +
            '9. <a href="https://telegra.ph/Reset-ink-canon-G2010-07-23">Reset pinter canon G2010</a>' + '\n';
        kirimPesan(id, txt2);
    }

}

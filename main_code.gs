var token = 'xxx';
var telegramUrl = 'https://api.telegram.org/bot' + token;
var webAppUrl = 'xxx';

function setWebhook() {
    var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}

function kirimGambar(id, imgUrl) {

    var url = telegramUrl + '/sendPhoto?&photo=' + imgUrl + '&chat_id=' + id + "&parse_mode=HTML";
    var response = UrlFetchApp.fetch(url);
}

function kirimPesan(id, text, keyBoard) {
    var data = {
        method: "post",
        payload: {
            method: "sendMessage",
            chat_id: String(id),
            text: text,
            parse_mode: "HTML",
            reply_markup: JSON.stringify(keyBoard)
        }
    };
    UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}


function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var id = data.message.chat.id;
    var text = data.message.text;

    //commands
    //command /start
    if (/\/start/i.exec(text)) {
        var txt = '<b>BOT TERHUBUNG</b>';
        kirimPesan(id, txt);
    }

    //tombol keyboard reply File Gambar
    if (/FILE GAMBAR/.exec(text)) {
        var txt = '⬇️ Silahkan pilih menu dibawah ⬇️';
        var keyboard = {
            keyboard: [
                ["/cctv", "/denahcctv"],
                ["/epsonsetting1", "/epsonsetting2"],
                ["/settingsamba", "/number"]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
        kirimPesan(id, txt, keyboard);
    }

    //tombol keyboard reply File Teks
    if (/FILE TEKS/.exec(text)) {
        var txt = '⬇️ Silahkan pilih menu dibawah ⬇️';
        var keyboard = {
            keyboard: [
                ["/wifi1", "/wifi1"],
                ["/listip", "/tutor"],
                ["/indhm1", "/indhm2"]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
        kirimPesan(id, txt, keyboard);
    }

    //command /help
    if (/\/help/i.exec(text)) {
        var txt = '⬇️ Silahkan pilih menu dibawah ⬇️';
        var keyboard = {
            keyboard: [
                ["FILE GAMBAR", "FILE TEKS"]
            ],
            input_field_placeholder : 'Klik Tombol',
            resize_keyboard: true,
            one_time_keyboard: true
        }
        kirimPesan(id, txt, keyboard);
    }

    if (/\/cctv/i.exec(text)) {
        var imgUrl = 'https://drive.google.com/file/d/1GQeYtnG-RRoVIHzYF3Fwx8sCfCAkGGm5/view?usp=sharing';
        kirimGambar(id, imgUrl);
    }
    if (/\/denahcctv/i.exec(text)) {
        var imgUrl = 'https://drive.google.com/file/d/1ehOzijpBGWUJ7R17eYwExKWbEQ0SQ2pv/view?usp=sharing';
        kirimGambar(id, imgUrl);
    }
    if (/\/(number|currency)/i.exec(text)) {
        var imgUrl = 'https://drive.google.com/file/d/1_xQm-R5gfePO-JqdIYimIkgRdXkItpIg/view?usp=sharing';
        kirimGambar(id, imgUrl);
    }
    if (/\/(epsonsetting1)/i.exec(text)) {
        var imgUrl1 = 'https://drive.google.com/file/d/1xCHCT5bc-YX-dJ45SOOe2mrqQQfGNaB2/view?usp=sharing';
        kirimGambar(id, imgUrl1);
        var imgUrl2 = 'https://drive.google.com/file/d/1UeWOKL9yfWHiVWrNIwV8HVrKmFckaBts/view?usp=sharing';
        kirimGambar(id, imgUrl2);
    }
    if (/\/(settingsamba)/i.exec(text)) {
        var imgUrl1 = 'https://drive.google.com/file/d/1Qhc9JgC4a-ZB_NQR6IVx8jSsmXaSUax0/view?usp=sharing';
        kirimGambar(id, imgUrl1);
        var imgUrl2 = 'https://drive.google.com/file/d/1Z_YMbFXQjRgLrup6Ng2hmG7yPWRolM6z/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl3 = 'https://drive.google.com/file/d/1QbjgEonQjiCpG3O9DPaxSEbnjCuRLVIC/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl4 = 'https://drive.google.com/file/d/1m1N_utMqDO9_eSvC3hSVPCcTWbiGWIDU/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl5 = 'https://drive.google.com/file/d/1c4l-SpRs-gcf6sfb5eTeSg9fXd13F_v8/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl6 = 'https://drive.google.com/file/d/1jKmeTowuLB1qCwn7EcYMS-nkoesImLvB/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl7 = 'https://drive.google.com/file/d/1UOWobRMl8JfSPHiFNElO6CpF6RUdce12/view?usp=sharing';
        kirimGambar(id, imgUrl2);
        var imgUrl8 = 'https://drive.google.com/file/d/1605RkVTwxu7J10Ht4dg8GDRnVFnH9bRI/view?usp=sharing';
        kirimGambar(id, imgUrl2);
    }
    if (/\/(epsonsetting2)/i.exec(text)) {
        var imgUrl1 = 'https://drive.google.com/file/d/1byXFOI19Z7VKl-GEI8A6pk-ho0s-IHeH/view?usp=sharing';
        kirimGambar(id, imgUrl1);
        var imgUrl2 = 'https://drive.google.com/file/d/1V0HatzE3lbomgEZwNjx922NfVSHI5bXq/view?usp=sharing';
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
            '5. <a href="https://telegra.ph/CARA-INSTALLASI-WILCOM-EMBROIDERY-DI-WIN-10-64-BIT-05-14">Cara install Wilcom e.2 win10 64bit</a>';
        var txt3 =
            '6. <a href="https://telegra.ph/Installasi-aplikasi-FAST-05-16">Cara install FAST</a>' + '\n' +
            '7. <a href="https://telegra.ph/CARA-SHARE-FAST-05-14">Cara share folder FAST</a>' + '\n' +
            '8. <a href="https://telegra.ph/AKSES-WEBMIN-03-26">Akses webmin</a>' + '\n' +
            '9. <a href="https://telegra.ph/Reset-ink-canon-G2010-07-23">Reset pinter canon G2010</a>' + '\n' +
            '10. <a href="https://telegra.ph/Mematikan-update-otomatis-win-10-06-14">Mematikan updat otomatis win10</a>';
        var txt4 =
            '11. <a href="https://telegra.ph/Cara-Maintenance-Fast-06-14">Cara Maintenance Fast</a>' + '\n' +
            '12. <a href="https://telegra.ph/Cara-melihat-siapa-yang-lagi-akses-share-folder-server-06-14">Cara melihat siapa yang lagi akses share folder server</a>' + '\n' +
            '13. <a href="https://telegra.ph/Printer-Error-0x0000011b-06-14">Printer Error 0x0000011b</a>' + '\n' +
            '14. <a href="https://telegra.ph/Printer-Error-0x0000011b-06-14">Printer Error 0x0000011b</a>';
        kirimPesan(id, txt2);
        kirimPesan(id, txt3);
        kirimPesan(id, txt4);
    }

}

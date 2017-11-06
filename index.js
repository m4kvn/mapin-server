var express = require("express");
var app = express();
app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var companies = [
    {
        "id": 1,
        "name": "7&iホールディングス"
    }
];

var shops = [
    {
        "id": 1,
        "company_id": 1,
        "name": "イトーヨーカドー大井町店",
        "image": "https://i.imgur.com/ihcWOPZ.png",
        "postal_code": "140-0014",
        "address": "東京都品川区大井１丁目３−６",
        "tel": "03-3777-6611",
        "hours_begin": "10:00:00",
        "hours_end": "22:00:00",
        "category": "スーパーマーケット",
        "homepage": "http://www.itoyokado.co.jp/"
    },
    {
        "id": 2,
        "company_id": 1,
        "name": "セブン-イレブン大井店",
        "image": "https://i.imgur.com/Rpphzc4.png",
        "postal_code": "東京都品川区 大井５－２－１１",
        "address": "140-0014",
        "tel": "03-3771-0216",
        "hours_begin": "00:00:00",
        "hours_end": "23:59:59",
        "category": "コンビニ",
        "homepage": "http://www.sej.co.jp/"
    }
];

var files = [
    {
        "id": 1,
        "shop_id": 1,
        "name": "ダミー.pdf",
        "url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mrec2dSOVV6clZtdGM",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "pdf"
    },
    {
        "id": 2,
        "shop_id": 1,
        "name": "得の一チラシ.jpg",
        "url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreV0JNT3VyS0NUcWM",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "jpg"
    },
    {
        "id": 3,
        "shop_id": 1,
        "name": "AP3.ppt",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTT0R6OGhjSVU5bjA",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "ppt"
    },
    {
        "id": 4,
        "shop_id": 1,
        "name": "bmp-sample.bmp",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTS3dhc3RzUDJRZnM",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "bmp"
    },
    {
        "id": 5,
        "shop_id": 1,
        "name": "学習フィードバックテンプレ.doc",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTb2Q4ZVA2dmkyclk",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "doc"
    },
    {
        "id": 6,
        "shop_id": 1,
        "name": "text-sample.txt",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaXpfRHBxb19DZ1U",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "text"
    },
    {
        "id": 7,
        "shop_id": 1,
        "name": "まっぴん プロダクトバックログ.xls",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTTzNUQVB4M1MwSGM",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "xls"
    },
    {
        "id": 8,
        "shop_id": 1,
        "name": "test.c",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTNGQ2R3dVRmhIMk0",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "c"
    },
    {
        "id": 9,
        "shop_id": 1,
        "name": "sample.mp4",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTUjAza2VqSzZ4cm8",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "mp4"
    },
    {
        "id": 10,
        "shop_id": 1,
        "name": "README.md",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVm1IdjByMUhLVDQ",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "md"
    },
    {
        "id": 11,
        "shop_id": 2,
        "name": "png-sample.png",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQnM4OUN0RkIwUGs",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "png"
    },
    {
        "id": 12,
        "shop_id": 2,
        "name": "おでん広告.jpg",
        "url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreN240ZnVHYXpZdnM",
        "created_at": "2017-10-06 16:45:00",
        "updated_at": "2017-10-06 16:45:00",
        "file_type": "jpg"
    },
    {
        "id": 13,
        "shop_id": 2,
        "name": "gif-sample.gif",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQXlxdGozdjhOaFU",
        "created_at": "2017-10-10 16:45:00",
        "updated_at": "2017-10-11 17:05:00",
        "file_type": "gif"
    },
    {
        "id": 14,
        "shop_id": 2,
        "name": "AL-アイディア提案シート-テンプレ.xlsx",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTRWtwYzgzVWNYdzg",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "xlsx"
    },
    {
        "id": 15,
        "shop_id": 2,
        "name": "AP1.pptx",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaGR1bkRUNzRvUmc",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "pptx"
    },
    {
        "id": 16,
        "shop_id": 2,
        "name": "MI-議事録-00-松山-0525-テンプレ案-ver2.1.docx",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVGZEYjU1WWFRMjg",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "docx"
    },
    {
        "id": 17,
        "shop_id": 2,
        "name": "1-画像検索.pages",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTV19zNGtzbmE1TlE",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "pages"
    },
    {
        "id": 18,
        "shop_id": 2,
        "name": "スイーツカテゴリ数.numbers",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTYXhTeWxTeHNfRG8",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "numbers"
    },
    {
        "id": 19,
        "shop_id": 2,
        "name": "mapin.key",
        "url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTSXNGT1hVbUVTXzQ",
        "created_at": "2017-10-11 16:45:00",
        "updated_at": "2017-10-12 17:05:00",
        "file_type": "key"
    }
];

var notFoundMessage = {
    "message": "Not Found"
};

app.use("/api", (function () {
    var router = express.Router();

    router.get("/companies", function (req, res) {
        res.json(companies);
    });

    router.get("/companies/:company_id", function (req, res) {
        var company = companies.find(function (value) {
            return value.id == req.params.company_id;
        });
        if (company) {
            res.json(company);
            res.status(200);
        } else {
            res.json(notFoundMessage);
            res.status(404);
        }
    });

    router.get("/shops", function (req, res) {
        res.json(shops);
    });

    router.get("/shops/:shop_id", function (req, res) {
        var shop = shops.find(function (value) {
            return value.id == req.params.shop_id;
        });
        if (shop) {
            res.json(shop);
            res.status(200);
        } else {
            res.json(notFoundMessage);
            res.status(404);
        }
    });

    router.get("/shops/:shop_id/files", function (req, res) {
        res.json(files.filter(function (value) {
            return value.shop_id == req.params.shop_id;
        }));
    });

    router.get("/files", function (req, res) {
        res.json(files);
    });

    router.get("/files/:file_id", function (req, res) {
        var file = files.find(function (value) {
            return value.id == req.params.file_id;
        });
        if (file) {
            res.json(file);
            res.status(200);
        } else {
            res.json(notFoundMessage);
            res.status(404);
        }
    });

    return router;
})());
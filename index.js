var express = require("express");
var app = express();
app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var body = {
    "status": "200",
    "companies": [
        {
            "info": {
                "responsible_person_kana": "しゃちょう",
                "company_phonenumber": 12345678,
                "campany_id": 1,
                "company_location_kana": "とうきょうと",
                "company_name": "7&iホールディングス",
                "company_name_kana": "せぶんあんどあいほーるでぃんぐす",
                "responsible_person": "社長",
                "company_email": "7711@example.com",
                "company_location": "東京都"
            },
            "shops": [
                {
                    "info": {
                        "shop_image": "https://i.imgur.com/ihcWOPZ.png",
                        "shop_business_finish": "22:00:00",
                        "company_id": 1,
                        "shop_business_start": "10:00:00",
                        "shop_id": 1,
                        "shop_phonenumber": 0,
                        "shop_location_longitude": 139.734008,
                        "shop_location_latitude": 35.608184
                    },
                    "files": [
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mrec2dSOVV6clZtdGM",
                            "file_id": 1
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreV0JNT3VyS0NUcWM",
                            "file_id": 2
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTT0R6OGhjSVU5bjA",
                            "file_id": 3
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTS3dhc3RzUDJRZnM",
                            "file_id": 4
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTb2Q4ZVA2dmkyclk",
                            "file_id": 5
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaXpfRHBxb19DZ1U",
                            "file_id": 6
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTTzNUQVB4M1MwSGM",
                            "file_id": 7
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTNGQ2R3dVRmhIMk0",
                            "file_id": 8
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTUjAza2VqSzZ4cm8",
                            "file_id": 9
                        },
                        {
                            "shop_id": 1,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVm1IdjByMUhLVDQ",
                            "file_id": 10
                        }
                    ]
                },
                {
                    "info": {
                        "shop_image": "https://i.imgur.com/Rpphzc4.png",
                        "shop_business_finish": "22:00:00",
                        "company_id": 1,
                        "shop_business_start": "10:00:00",
                        "shop_id": 2,
                        "shop_phonenumber": 0,
                        "shop_location_longitude": 139.734008,
                        "shop_location_latitude": 35.608184
                    },
                    "files": [
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQnM4OUN0RkIwUGs",
                            "file_id": 11
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreN240ZnVHYXpZdnM",
                            "file_id": 12
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQXlxdGozdjhOaFU",
                            "file_id": 13
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTRWtwYzgzVWNYdzg",
                            "file_id": 14
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaGR1bkRUNzRvUmc",
                            "file_id": 15
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVGZEYjU1WWFRMjg",
                            "file_id": 16
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTV19zNGtzbmE1TlE",
                            "file_id": 17
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTYXhTeWxTeHNfRG8",
                            "file_id": 18
                        },
                        {
                            "shop_id": 2,
                            "file_url": "https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTSXNGT1hVbUVTXzQ",
                            "file_id": 19
                        }
                    ]
                }
            ]
        },
        {
            "info": {
                "responsible_person_kana": "まつやまわたる",
                "company_phonenumber": 2147483647,
                "campany_id": 1001,
                "company_location_kana": "ほっかいどうはこだてしかめだなかのちょう",
                "company_name": "未来パーク",
                "company_name_kana": "みらいぱーく",
                "responsible_person": "松山航",
                "company_email": "aaaaa@mirai",
                "company_location": "北海道函館市亀田中野町116番地2"
            },
            "shops": [
                {
                    "info": {
                        "shop_image": "https://i.imgur.com/ihcWOPZ.png",
                        "shop_business_finish": "11:05:28",
                        "company_id": 1001,
                        "shop_business_start": "0:00:00",
                        "shop_id": 11001,
                        "shop_phonenumber": 123456789,
                        "shop_location_longitude": 140.769029,
                        "shop_location_latitude": 41.843704
                    },
                    "files": [
                        {
                            "shop_id": 11001,
                            "file_url": "xxxxxxxxxxxxxxxxxxxDDxxxxxxxxx",
                            "file_id": 111001
                        }
                    ]
                }
            ]
        }
    ]
};

var companies = [
    {
        "id":1,
        "name":"7&iホールディングス"
    }
]

var shops = [
    {
        "id":1,
        "company_id": 1,
        "name":"イトーヨーカドー大井町店",
        "image":"https://i.imgur.com/ihcWOPZ.png",
        "postal_code":"140-0014",
        "address":"東京都品川区大井１丁目３−６",
        "tel":"03-3777-6611",
        "hours_begin":"10:00:00",
        "hours_end":"22:00:00",
        "category":"スーパーマーケット",
        "homepage":"http://www.itoyokado.co.jp/"
    },
    {
        "id":2,
        "company_id": 1,
        "name":"セブン-イレブン大井店",
        "image":"https://i.imgur.com/Rpphzc4.png",
        "postal_code":"東京都品川区 大井５－２－１１",
        "address":"140-0014",
        "tel":"03-3771-0216",
        "hours_begin":"00:00:00",
        "hours_end":"23:59:59",
        "category":"コンビニ",
        "homepage":"http://www.sej.co.jp/"
    }
]

var files = [
    {
        "id":1,
        "shop_id":1,
        "name":"ダミー.pdf",
        "url":"https://drive.google.com/uc?export=download&id=0B5PMr_DG7mrec2dSOVV6clZtdGM",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"pdf"
    },
    {
        "id":2,
        "shop_id":1,
        "name":"得の一チラシ.jpg",
        "url":"https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreV0JNT3VyS0NUcWM",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"jpg"
    },
    {
        "id":3,
        "shop_id":1,
        "name":"AP3.ppt",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTT0R6OGhjSVU5bjA",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"ppt"
    },
    {
        "id":4,
        "shop_id":1,
        "name":"bmp-sample.bmp",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTS3dhc3RzUDJRZnM",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"bmp"
    },
    {
        "id":5,
        "shop_id":1,
        "name":"学習フィードバックテンプレ.doc",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTb2Q4ZVA2dmkyclk",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"doc"
    },
    {
        "id":6,
        "shop_id":1,
        "name":"text-sample.txt",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaXpfRHBxb19DZ1U",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"text"
    },
    {
        "id":7,
        "shop_id":1,
        "name":"まっぴん プロダクトバックログ.xls",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTTzNUQVB4M1MwSGM",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"xls"
    },
    {
        "id":8,
        "shop_id":1,
        "name":"test.c",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTNGQ2R3dVRmhIMk0",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"c"
    },
    {
        "id":9,
        "shop_id":1,
        "name":"sample.mp4",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTUjAza2VqSzZ4cm8",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"mp4"
    },
    {
        "id":10,
        "shop_id":1,
        "name":"README.md",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVm1IdjByMUhLVDQ",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"md"
    },
    {
        "id":11,
        "shop_id":2,
        "name":"png-sample.png",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQnM4OUN0RkIwUGs",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"png"
    },
    {
        "id":12,
        "shop_id":2,
        "name":"おでん広告.jpg",
        "url":"https://drive.google.com/uc?export=download&id=0B5PMr_DG7mreN240ZnVHYXpZdnM",
        "created_at":"2017-10-06 16:45:00",
        "updated_at":"2017-10-06 16:45:00",
        "file_type":"jpg"
    },
    {
        "id":13,
        "shop_id":2,
        "name":"gif-sample.gif",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTQXlxdGozdjhOaFU",
        "created_at":"2017-10-10 16:45:00",
        "updated_at":"2017-10-11 17:05:00",
        "file_type":"gif"
    },
    {
        "id":14,
        "shop_id":2,
        "name":"AL-アイディア提案シート-テンプレ.xlsx",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTRWtwYzgzVWNYdzg",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"xlsx"
    },
    {
        "id":15,
        "shop_id":2,
        "name":"AP1.pptx",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTaGR1bkRUNzRvUmc",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"pptx"
    },
    {
        "id":16,
        "shop_id":2,
        "name":"MI-議事録-00-松山-0525-テンプレ案-ver2.1.docx",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTVGZEYjU1WWFRMjg",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"docx"
    },
    {
        "id":17,
        "shop_id":2,
        "name":"1-画像検索.pages",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTV19zNGtzbmE1TlE",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"pages"
    },
    {
        "id":18,
        "shop_id":2,
        "name":"スイーツカテゴリ数.numbers",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTYXhTeWxTeHNfRG8",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"numbers"
    },
    {
        "id":19,
        "shop_id":2,
        "name":"mapin.key",
        "url":"https://drive.google.com/uc?export=download&id=0B_TYMLnAFlZTSXNGT1hVbUVTXzQ",
        "created_at":"2017-10-11 16:45:00",
        "updated_at":"2017-10-12 17:05:00",
        "file_type":"key"
    }
]

app.use("/api/wsgi/", (function(){
    var router = express.Router();

    // GET: /api/wsgi/
    router.get("", (request, response) => {
        response.json(body);
    });

    // GET: /api/wsgi/companies
    router.get("/companies", (request, response) => {
        response.json(companies);
    });

    // GET: /api/wsgi/companies:company_id
    router.get("/companies/:company_id", (request, response) => {
        var company = companies.filter(function(value, index, array){
            return value.id == request.params.company_id;
        });

        if(company.length == 0) response.status(404);
        else response.status(200);

        response.json(company);
    });

    // GET: /api/wsgi/shops
    router.get("/shops", (request, response) => {
        response.json(shops);
    });

    // GET: /api/wsgi/shops/:shop_id
    router.get("/shops/:shop_id", (request, response) => {
        var shop = shops.filter(function(value, index, array){
            return value.id == request.params.shop_id;
        });

        if(shop.length == 0) response.status(404);
        else response.status(200);

        response.json(shop);
    });

    // GET: /api/wsgi/shops/:shop_id/files
    router.get("/shops/:shop_id/files", (request, response) => {
        var shopFiles = files.filter(function(value, index, array){
            return value.shop_id == request.params.shop_id;
        });

        if(shopFiles.length == 0) response.status(404);
        else response.status(200);
        
        response.json(shopFiles);
    });

    // GET: /api/wsgi/files
    router.get("/files", (request, response) => {
        response.json(files);
    });

    // GET: /api/wsgi/files/:file_id
    router.get("/files/:file_id", (request, response) => {
        var file = files.filter(function(value, index, array){
            return value.id == request.params.file_id;
        });

        if(file.length == 0) response.status(404);
        else response.status(200);

        response.json(file);
    });

    return router;
})());
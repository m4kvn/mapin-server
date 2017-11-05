var express = require("express");
var app = express();
var server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

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

app.get("/api/wsgi", function (req, res, next) {
    res.json(body);
});

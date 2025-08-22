require('dotenv').config({ path: '../.env'});

// solapi api 불러오기 
const { SolapiMessageService } = require('solapi');
const messageService = new SolapiMessageService(process.env.REACT_APP_SOLAPI_KEY, process.env.REACT_APP_SOLAPI_SECRET_KEY);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.REACT_APP_PORT;
const dbConnenct = require("./dbconnect");
const Reserve = require("../server/dbModels/Reserves");

dbConnenct();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Server Response Success!!");
});

app.get('/existTel', (req, res) => {
    Reserve.find({ tel: req.query.tel })
    .then(data => {
        return res.json(data);
    })
})

// 휴대폰 인증 번호 보내는 코드
app.get('/confirmation', (req, res) => {
    messageService.send({
        "to": req.query.tel,
        "from": "01027868409",
        "text": req.query.num,
    }).then(res => {
        console.log(res);
    });
});

// 예약 
app.post("/Reserve", (req, res) => {
    const data = {
        name: req.body.name,
        tel: req.body.tel,
        date: req.body.date,
        ampm: req.body.time.AmPm,
        time: req.body.time.time,
        adult: req.body.people.adult,
        children: req.body.people.children
    };

    const reserve = new Reserve(data);

    reserve.save();

    // 예약자에게 예약 확정 문자 보내기
    messageService.send({
        "to": data.tel,
        "from": "01027868409",
        "text": `이름: ${data.name}
        날짜&시간: ${data.date} ${data.ampm} ${data.time} 
        인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)
        ${data.tel}`
    });
    // 관리자에게 예약 문자 보내기
    messageService.send({
        "to": "01027868409",
        "from": "01027868409",
        "text": `이름: ${data.name}
        날짜&시간: ${data.date} ${data.ampm} ${data.time} 
        인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)
        ${data.tel}`
    });

    res.send("success");
});

// 예약 확인 
app.get("/reserveCheck", (req, res) => {
    Reserve.find({ name: req.query.name, tel: req.query.tel })
    .then(data => {
        return res.json(...data);
    })  
});

// 예약 변경
app.put("/reserveEdit", (req, res) => {
    Reserve.findOneAndUpdate({ tel: req.body.tel },
        {$set:{
            date: req.body.date,
            ampm: req.body.time.AmPm,
            time: req.body.time.time,
            adult: req.body.people.adult,
            children: req.body.people.children
        }})
    .then(data => {
        return res.send(data);
    })
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server Start: http://localhost:${PORT}/`);
});
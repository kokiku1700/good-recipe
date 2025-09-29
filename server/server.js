require('dotenv').config({ path: '../.env'});

// solapi api 불러오기 
const { SolapiMessageService } = require('solapi');
const messageService = new SolapiMessageService(process.env.REACT_APP_SOLAPI_KEY, process.env.REACT_APP_SOLAPI_SECRET_KEY);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.REACT_APP_PORT;
const number = process.env.REACT_APP_NUMBER;
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
        "from": number,
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
        "from": number,
        "text": `이름: ${data.name}
        날짜&시간: ${data.date} ${data.ampm} ${data.time} 
        인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)
        ${data.tel}`
    });
    // 관리자에게 예약 문자 보내기
    messageService.send({
        "to": number,
        "from": number,
        "text": `이름: ${data.name}
        날짜&시간: ${data.date} ${data.ampm} ${data.time} 
        인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)
        ${data.tel}`
    });

    res.send("reserve Success");
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
    const data = {
        name: req.body.name,
        tel: req.body.tel,
        date: req.body.date,
        ampm: req.body.time.AmPm,
        time: req.body.time.time,
        adult: req.body.people.adult,
        children: req.body.people.children
    };

    Reserve.findOneAndUpdate({ tel: data.tel },
        {$set:{
            date: data.date,
            ampm: data.ampm,
            time: data.time,
            adult: data.adult,
            children: data.children
        }})
    .then(v => {
        return res.send("reserveEdit Success");
    })
    .then(msg => {
        // 예약자에게 예약 변경 문자 보내기
        messageService.send({
            "to": data.tel,
            "from": number,
            "text": `이름: ${data.name}
            날짜&시간: ${data.date} ${data.ampm} ${data.time} 
            인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)으로 예약 변경되었습니다.
            ${data.tel}`
        });
        // 관리자에게 예약 변경 문자 보내기
        messageService.send({
            "to": number,
            "from": number,
            "text": `이름: ${data.name}
            날짜&시간: ${data.date} ${data.ampm} ${data.time} 
            인원: 성인 ${data.adult}명, 아이 ${data.children}명(${Number(data.adult) + Number(data.children)}명)으로 예약 변경되었습니댜.
            ${data.tel}`
        });
    })
});

// 예약 취소
app.delete("/delete", (req, res) => {
    Reserve.deleteOne({tel: req.body.tel})
    .then(data => {
        messageService.send({
            "to": req.body.tel,
            "from": number,
            "text": `${req.body.date}예약이 취소되었습니다.`
        });
        messageService.send({
            "to": number,
            "from": number,
            "text": `${req.body.date}에 예약한 ${req.body.name}이 예약을 취소했습니다.`
        });
    })
    .then(msg => {
        res.send("Delete!!");
    })
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server Start: http://localhost:${PORT}/`);
});
require('dotenv').config({ path: '../.env'});

const { SolapiMessageService } = require('solapi');
const messageService = new SolapiMessageService(process.env.REACT_APP_SOLAPI_KEY, process.env.REACT_APP_SOLAPI_SECRET_KEY);

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.REACT_APP_PORT;
const dbConnenct = require("./dbconnect");

dbConnenct();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server Response Success!!");
});

// 휴대폰 인증 번호 보내는 코드
app.get('/confirmation', (req, res) => {
    messageService.send({
        "to": req.query.tel,
        "from": "01027868409",
        "text": req.query.num,
    }).then(res => {
        console.log(res);
    })
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server Start: http://localhost:${PORT}/`);
});
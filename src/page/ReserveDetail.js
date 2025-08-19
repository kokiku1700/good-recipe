import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import Button from "../component/components/Button";

const ReserveDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    // 데이터베이스에 저장 할 값 
    const [reserveData, setReserveData] = useState({
        name: state.name,
        tel: state.tel,
        date: '',
        time: {AmPm: "", time: ""},
        people: {adult: "", children: ""},
    });

    // 달력에서 예약 날짜 선택 함수
    const onChangeDate = e => {
        setReserveData({
            ...reserveData,
            date: moment(e).format("YYYY년 MM월 DD일")
        })
    };

    // 이름, 전화번호, 날짜를 제외한 예약 정보 
    const onChangeRest = e => {
        if ( e.target.name === "AmPm" ) {
            setReserveData(prevData => ({
                ...prevData,
                time: {
                    ...prevData.time,
                    AmPm: e.target.value
                }
            }))
        } else if ( e.target.name === "time" ) {
            setReserveData(prevData => ({
                ...prevData,
                time: {
                    ...prevData.time,
                    time: e.target.value
                }
            }))
        } else if ( e.target.name === "adult" ) {
            setReserveData(prevData => ({
                ...prevData,
                people: {
                    ...prevData.people,
                    adult: e.target.value
                }
            }))
        } else if ( e.target.name === "children" ) {
            setReserveData(prevData => ({
                ...prevData,
                people: {
                    ...prevData.people,
                    children: e.target.value
                }
            }))
        } 
    };

    const onSubmit = async() => {
        await axios.post("http://localhost:4000/Reserve", {
            "name": reserveData.name,
            "tel": reserveData.tel,
            "date": reserveData.date,
            "time": {"AmPm" : reserveData.time.AmPm, "time": reserveData.time.time},
            "people": {"adult": reserveData.people.adult, "children": reserveData.people.children},
        })
        .then(res => {
            if ( res.data === "success" && res.status === 200 ) {
                navigate("/reserveSuccess", { replace: true });
            }
        });
    };

    return (
        <Div>
            <DetailDiv>
                <Span>
                    <H3>이름</H3>
                    <Input value={state.name} disabled={true} />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input value={state.tel} disabled={true} />
                </Span>
                <Span>
                    <H3>날짜</H3>
                    <Calendar 
                        name="date"
                        calendarType="gregory"
                        onChange={onChangeDate} 
                        formatDay={(locale, date) => moment(date).format("DD")}
                    />
                    <h6>{reserveData.date}</h6>
                </Span>
                <Span>
                    <H3>시간</H3>
                        <Select name="AmPm" value={reserveData.time.AmPm} onChange={onChangeRest}>
                            <Option value="점심">점심</Option>
                            <Option value="저녁">저녁</Option>
                        </Select>
                        <Select name="time" value={reserveData.time.time} onChange={onChangeRest}>
                            <Option value="11:30">11:30</Option>
                            <Option value="13:00">13:00</Option>
                        </Select>
                        <h6>{reserveData.time.AmPm}</h6>
                        <h6>{reserveData.time.time}</h6>
                </Span>
                <Span>
                    <H3>인원수</H3>
                    <Span>
                        <h6>8세 이상</h6>
                        <Select name="adult" value={reserveData.people.adult} onChange={onChangeRest}>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                        </Select>
                    </Span>
                    <Span>
                        <h6>7세 이하</h6>
                        <Select name="children" value={reserveData.people.children} onChange={onChangeRest}>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                        </Select>
                    </Span>
                    <h6>{reserveData.people.adult}</h6>
                    <h6>{reserveData.people.children}</h6>
                </Span>
                
                <Button width="50" content="예약하기" onClick={onSubmit} />
            </DetailDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const DetailDiv = styled.div`
    width: 50%;
    border: 1px solid #eee;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Span = styled.span`

`;

const H3 = styled.h3`

`;

const Input = styled.input`

`;

const Select = styled.select`

`;

const Option = styled.option`

`;

export default ReserveDetail;
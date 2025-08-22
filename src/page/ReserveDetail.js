import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import moment from "moment";
import axios from "axios";
import Button from "../component/components/Button";

const ReserveDetail = () => {
    const nowDate = new Date();
    const tomorrow = new Date(nowDate.setDate(nowDate.getDate() + 1));

    const { state } = useLocation();
    const navigate = useNavigate();
    // 데이터베이스에 저장 할 값 
    const [reserveData, setReserveData] = useState({
        name: state.name,
        tel: state.tel,
        date: state.date ? state.date : moment(tomorrow).format("YYYY년 MM월 DD일"),
        time: {AmPm: state.ampm ? state.ampm :"점심", time: state.time ? state.time :"11:30"},
        people: {adult: state.adult ? state.adult : "", children: state.children ? state.children : ''},
    });
    
    const [peopleState, setPeopleState] = useState({
        under: false,
        over: false,
        empty: false
    });

    // 달력에서 예약 날짜 선택 함수
    const onChangeDate = e => {
        setReserveData({
            ...reserveData,
            date: moment(e).format("YYYY년 MM월 DD일")
        });
        console.log(tomorrow)
    };

    // 이름, 전화번호, 날짜를 제외한 예약 정보 
    const onChangeRest = e => {
        if ( e.target.name === "AmPm" ) {
            setReserveData(prevData => ({
                ...prevData,
                time: {
                    AmPm: e.target.value,
                    time: e.target.value === "점심" ? "11:30" : "17:00"
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
        const peopleSum = Number(reserveData.people.adult) + Number(reserveData.people.children); 
        
        if ( reserveData.date !== "" &&
             reserveData.time.AmPm !== "" &&
             reserveData.time.time !== "" &&
             reserveData.people.adult !== "" &&
             reserveData.time.children !== "" &&
            ( peopleSum >= 5 && peopleSum <= 10 )
        ) {
            await axios.get("http://localhost:4000/reserveCheck", {params: {name: reserveData.name, tel: reserveData.tel}})
            .then(res => {
                if ( res.data ) {
                    axios.put("http://localhost:4000/reserveEdit", {
                        "name": reserveData.name,
                        "tel": reserveData.tel,
                        "date": reserveData.date,
                        "time": {"AmPm" : reserveData.time.AmPm, "time": reserveData.time.time},
                        "people": {"adult": reserveData.people.adult, "children": reserveData.people.children},
                    })
                    .then(res => {
                        console.log(res);
                    })
                } else {
                    axios.post("http://localhost:4000/Reserve", {
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
                }
            })   
        } else {
            if ( peopleSum === 0 ) {
                setPeopleState({
                    under: false,
                    over: false,
                    empty: true
                });
            } else if ( peopleSum < 5 ) {
                setPeopleState({
                    under: true,
                    over: false,
                    empty: false
                });
            } else if ( peopleSum > 10 ) {
                setPeopleState({
                    under: false,
                    over: true,
                    empty: false
                });
            } 
        }
    };

    return (
        <Div>
            <DetailDiv>
                <Span>
                    <h6>예약 인원은 아이 포함 5명부터 가능합니다.</h6>
                    <h6>10명이 넘을 경우 전화로 문의 부탁드립니다.</h6>
                    <h6>매장이 협소해 예약시간을 정해두고 있습니다. 원하는 시간이 아닐 경우 전화로 문의 부탁드립니다.</h6>
                    <h6>브레이크 타임은 3시부터 5시입니다.</h6>
                    <h6>당일 예약을 원하실 경우 전화로 예약 부탁드립니다.</h6>
                    
                </Span>
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
                        minDate={tomorrow}
                        tileDisabled={({ date }) => date.getDay() === 1 }
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
                        <Select $display={reserveData.time.AmPm === "점심" ? "inline" : "none"} 
                                name="time" value={reserveData.time.time} 
                                onChange={onChangeRest}
                        >
                            <Option value="11:30">11:30</Option>
                            <Option value="13:00">13:00</Option>
                        </Select>
                        <Select $display={reserveData.time.AmPm === "저녁" ? "inline" : "none"} 
                                name="time" value={reserveData.time.time} 
                                onChange={onChangeRest}
                        >
                            <Option value="17:00">17:00</Option>
                            <Option value="17:30">17:30</Option>
                            <Option value="18:00">18:00</Option>
                            <Option value="18:30">18:30</Option>
                        </Select>
                        <h6>{reserveData.time.AmPm}</h6>
                        <h6>{reserveData.time.time}</h6>
                </Span>
                <Span>
                    <H3>인원수</H3>
                    <Span>
                        <h6>8세 이상</h6>
                        <Input name="adult" type="number" value={reserveData.people.adult} onChange={onChangeRest} />명
                    </Span>
                    <Span>
                        <h6>7세 이하</h6>
                        <Input name="children" type="number" value={reserveData.people.children} onChange={onChangeRest} />명
                    </Span>
                    <h6>총 {Number(reserveData.people.adult) + Number(reserveData.people.children)}명</h6>
                    <P $display={peopleState.under ? "block" : "none"}>예약은 5명부터 가능합니다.</P>
                    <P $display={peopleState.over ? "block" : "none"}>11명 이상은 전화로 예약 부탁드립니다.</P>
                    <P $display={peopleState.empty ? "block" : "none"}>예약 인원을 적어주세요.</P>
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
    display: ${props => props.$display};
`;

const Option = styled.option`

`;

const P = styled.p`
    display: ${props => props.$display};
    color: red;
`;

export default ReserveDetail;
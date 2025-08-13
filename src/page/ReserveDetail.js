import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import moment from "moment";

const ReserveDetail = () => {
    const { state } = useLocation();
    // 데이터베이스에 저장 할 값 
    const [reserveData, setReserveData] = useState({
        name: state.name,
        tel: state.tel,
        date: '',
        time: {AmPm: "", time: ""},
        people: {adult: "", children: ""},
        babyChair: "",
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
        } else if ( e.target.name === "babyChair" ) {
            setReserveData({
                ...reserveData,
                [e.target.name]: e.target.value
            })
        }
    }

    const onClickState = () => {
        console.log(reserveData);
    }

    return (
        <Div onClick={onClickState}>
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
                <Span>
                    <H3>아기의자</H3>
                    <Select name="babyChair" value={reserveData.babyChair} onChange={onChangeRest}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                    </Select>
                    <h6>{reserveData.babyChair}</h6>
                </Span>
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
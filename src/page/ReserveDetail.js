import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../constants/Calendar.css";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import Button from "../component/components/Button";
import Input from "../component/components/Input";
import { breakPoints } from "../constants/breakPoints";

const ReserveDetail = () => {
    const nowDate = new Date();
    const tomorrow = new Date(nowDate.setDate(nowDate.getDate() + 1));

    const [calendarHide, setCalendarHide] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    // 데이터베이스에 저장 할 값 
    const [reserveData, setReserveData] = useState({
        name: state.name,
        tel: state.tel,
        date: state.date ? state.date : moment(tomorrow).format("YYYY년 MM월 DD일"),
        time: {AmPm: state.ampm ? state.ampm :"점심", time: state.time ? state.time :"11:30"},
        people: {adult: state.adult ? state.adult : "", children: state.children ? state.children : '0'},
    });
    
    const [peopleState, setPeopleState] = useState({
        under: false,
        over: false,
        empty: false
    });

    useEffect(() => {
        setCalendarHide(false);
    }, [reserveData.date]);

    // 달력에서 예약 날짜 선택 함수
    const onChangeDate = e => {
        setReserveData({
            ...reserveData,
            date: moment(e).format("YYYY년 MM월 DD일")
        });
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

    // 입력 정보가 올바르면 서버에 데이터 보냄
    const onSubmit = async() => {
        const peopleSum = Number(reserveData.people.adult) + Number(reserveData.people.children); 
        
        if ( reserveData.date !== "" &&
             reserveData.time.AmPm !== "" &&
             reserveData.time.time !== "" &&
             reserveData.people.adult !== "" &&
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
                        if ( res.data === "reserveEdit Success" ) {
                            navigate("/reserveSuccess", { replace: true, state: { result: res.data } });
                        }
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
                        if ( res.data === "reserve Success" && res.status === 200 ) {
                            navigate("/reserveSuccess", { replace: true, state: { result: res.data } });
                        }
                    });
                }
            })   
        // 인원수에 따른 경고 문구를 위한 상태 
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

    const calendarToggle = () => {
        setCalendarHide(!calendarHide);
    };

    return (
        <Div>
            <DetailDiv>
                <H6Section>
                    <H6>예약 인원은 아이 포함 5명부터 가능합니다.</H6>
                    <H6>10명이 넘을 경우 전화로 문의 부탁드립니다.</H6>
                    <H6>매장이 협소해 예약시간을 정해두고 있습니다. 원하는 시간이 아닐 경우 전화로 문의 부탁드립니다.</H6>
                    <H6>브레이크 타임은 3시부터 5시입니다.</H6>
                    <H6>당일 예약을 원하실 경우 전화로 예약 부탁드립니다.</H6>      
                </H6Section>
                <TopSection>
                    <DivInSection>
                        <Span>
                            <H3>이름</H3>
                            <Input value={state.name} disabled={true}
                                    width="98"
                                    padding="2.5% 1%"
                                    
                            />
                        </Span>
                        <Span>
                            <H3>전화번호</H3>
                            <Input value={state.tel} disabled={true} 
                                    width="98"
                                    padding="2.5% 1%"
                            />
                        </Span>
                    </DivInSection>
                    <DivInSection>
                        <Span>
                            <H3 onClick={calendarToggle}>날짜</H3>
                            <CalendarWrap $display={calendarHide ? "block" : "none"}>
                                <Calendar 
                                    name="date"
                                    calendarType="gregory"
                                    onChange={onChangeDate} 
                                    minDate={tomorrow}
                                    prev2Label={null}
                                    next2Label={null}
                                    maxDetail="month"
                                    minDetail="month"
                                    tileDisabled={({ date, view }) => view === "month" && date.getDay() === 1 }
                                    formatDay={(locale, date) => moment(date).format("DD")}
                                />
                            </CalendarWrap>  
                            <Input type="text" value={reserveData.date} 
                                    width="98"
                                    padding="2.5% 1%"
                                    disabled={true}
                            />
                        </Span>
                        <Span>
                            <H3>시간</H3>
                            <FirstSelect name="AmPm" value={reserveData.time.AmPm} onChange={onChangeRest}>
                                <Option value="점심">점심</Option>
                                <Option value="저녁">저녁</Option>
                            </FirstSelect>
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
                        </Span>
                    </DivInSection>
                </TopSection>
                <PeopleTitleSpan>
                    <H3>인원</H3>
                </PeopleTitleSpan>
                <BottomSection> 
                    <Span>
                        <H5>8세 이상</H5>
                        <Input name="adult" type="text" 
                                width="98"
                                padding="2.5% 1%"
                                value={reserveData.people.adult} 
                                onChange={onChangeRest} 
                        />
                    </Span>
                    <Span>
                        <H5>7세 이하</H5>
                        <Input name="children" type="text" 
                                width="98"
                                padding="2.5% 1%"
                                value={reserveData.people.children} 
                                onChange={onChangeRest} 
                        />
                    </Span>
                    <PeopleSpan>
                        <H5>총 {Number(reserveData.people.adult) + Number(reserveData.people.children)}명</H5>
                    </PeopleSpan>
                </BottomSection>
                <P $display={peopleState.under ? "block" : "none"}>예약은 5명부터 가능합니다.</P>
                <P $display={peopleState.over ? "block" : "none"}>11명 이상은 전화로 예약 부탁드립니다.</P>
                <P $display={peopleState.empty ? "block" : "none"}>예약 인원을 적어주세요.</P>
                <ButtonSpan>
                    <Button width="98" content={state.date ? "수정하기" : "예약하기"} onClick={onSubmit} />
                </ButtonSpan>
            </DetailDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const DetailDiv = styled.div`
    width: 800px;
    border: 2px solid #6BA368;
    border-radius: 15px;
    margin: 5% auto;
    padding: 1%;
    display: flex;
    flex-direction: column;
    
    ${breakPoints.medium} {
        width: 80%;
    }
    ${breakPoints.small} {
        width: 90%;
    }
`;

const H6Section = styled.section`
    width: 96%;
    margin: 0 2%;
`;

const TopSection = styled.section`
    width: 100%;
    display: flex;
`;

const BottomSection = styled.section`
    width: 96%;
    display: flex;
    justify-content: space-around;
    border: 1px solid #6BA368;
    border-radius: 15px;
    margin: 2%;
`;

const DivInSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #6BA368;
    border-radius: 15px;
    margin: 2%;
    padding: 1% 2%;
`;

const CalendarWrap = styled.span`
    display: ${props => props.$display};
    position: absolute;
    top: 0;
    left: 0;
`;

const Span = styled.span`
    padding: 1%;
    margin: 1% 0;
    
`;

const ButtonSpan = styled(Span)`
    display: flex;
    justify-content: center;
`;

const PeopleTitleSpan = styled.span`
    width: 10%;
    display: flex;
    align-items: center;
    margin-left: 2%;
    padding-left: 3%;
`;

const PeopleSpan = styled(Span)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2%;
`;

const Select = styled.select`
    display: ${props => props.$display};
    width: 48%;
    padding: 2% 0;
    border: 1px solid #6BA368;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

const FirstSelect = styled(Select)`
    margin-right: 4%;
`;

const Option = styled.option`
    
`;

const P = styled.p`
    display: ${props => props.$display};
    color: red;
    text-align: center;
`;

const H3 = styled.h3`
    margin-bottom: 2%;
`;

const H5 = styled.h5`
    font-size: 14px;
`;
const H6 = styled.h6`
    font-size: 13px;
`;


export default ReserveDetail;
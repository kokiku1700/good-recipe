import {anchovy,
    aubergine,
    burdock_japchae,
    doenjang,
    herbs,
    kimchi,
    laver,
    lotus_leaf_rice,
    pancake,
    pork_doughnut,
    soy_sauce,
    gondre,
    gondre_soy_sauce,
    lotusFloor,
    salad} from "../assets/img/MainMenuImgs";
// 연잎정식
const lotusLeafRice = [
    {
        "name": "된장찌개",
        "src": doenjang,
        "explain": "집된장을 이용해 일반적인 된장찌개와 차별화된 맛을 자랑합니다.",
    },
    {
        "name": "연잎밥",
        "src": lotus_leaf_rice,
        "explain": "찰밥에 무농약 연잎을 이용해 직접 싼 연잎밥입니다. \n ",
    },
    {
        "name": "간장",
        "src": soy_sauce,
        "explain": "조선 간장으로 다른 간장들보다 풍미가 좋습니다.",
    },
    {
        "name": "김",
        "src": laver,
        "explain": "하나 하나 직접 구운 김입니다.",
    },
    {
        "name": "멸치",
        "src": anchovy,
        "explain": "식감과 맛이 일품입니다.",
    },
    {
        "name": "김치(열무김치 / 알타리김치)",
        "src": kimchi,
        "explain": "무가 맛있는 겨울에는 알타리 김치, 그 외 계절은 열무김치를 제공하고 있습니다.",
    },
    {
        "name": "부지깽이 나물",
        "src": herbs,
        "explain": "어린이도 맛있게 먹을 수 있는 나물입니다.",
    },
    {
        "name": "가지",
        "src": aubergine,
        "explain": "찐 가지를 맛있는 양념에 볶은 반찬입니다.",
    },
    {
        "name": "전(부추전 / 배추전)",
        "src": pancake,
        "explain": "배추가 맛있는 겨울에는 배추전, 그 외 계절은 부추전을 제공합니다.",
    },
    {
        "name": "우엉잡채",
        "src": burdock_japchae,
        "explain": "일반적인 잡채와 달리 우엉과 당면을 이용해 만든 잡채로 맛이 일품입니다.",
    },
    {
        "name": "고기도너츠",
        "src": pork_doughnut,
        "explain": "돼지고기로 만든 요리입니다.\n 도너츠와 비슷한 모양을 띄고 있어 붙여진 이릅니다.",
    },
    {
        "name": "들깨샐러드",
        "src": salad,
        "explain": "각종 채소에 들깨와 소스를 뿌려 제공됩니다.",
    },
    {
        "name": "된장찌개",
        "src": doenjang,
        "explain": "집된장을 이용해 일반적인 된장찌개와 차별화된 맛을 자랑합니다.",
    },
    {
        "name": "연잎밥",
        "src": lotus_leaf_rice,
        "explain": "찰밥에 무농약 연잎을 이용해 직접 싼 연잎밥입니다. \n ",
    },
]
const gondreRice = [
    {
        "name": "된장찌개",
        "src": doenjang,
        "explain": "집된장을 이용해 일반적인 된장찌개와 차별화된 맛을 자랑합니다.",
    },
    {
        "name": "곤드레밥",
        "src": gondre,
        "explain": "맵쌀에 곤드레 나물을 올린 밥입니다.",
    },
    {
        "name": "간장",
        "src": gondre_soy_sauce,
        "explain": "각종 양념을 넣은 간장으로 곤드레밥과 함께 비벼드시면 좋습니다.",
    },
    {
        "name": "김",
        "src": laver,
        "explain": "하나 하나 직접 구운 김입니다.",
    },
    {
        "name": "멸치",
        "src": anchovy,
        "explain": "식감과 맛이 일품입니다.",
    },
    {
        "name": "김치(열무김치 / 알타리김치)",
        "src": kimchi,
        "explain": "무가 맛있는 겨울에는 알타리 김치, 그 외 계절은 열무김치를 제공하고 있습니다.",
    },
    {
        "name": "부지깽이 나물",
        "src": herbs,
        "explain": "어린이도 맛있게 먹을 수 있는 나물입니다.",
    },
    {
        "name": "가지",
        "src": aubergine,
        "explain": "찐 가지를 맛있는 양념에 볶은 반찬입니다.",
    },
    {
        "name": "전(부추전 / 배추전)",
        "src": pancake,
        "explain": "배추가 맛있는 겨울에는 배추전, 그 외 계절은 부추전을 제공합니다.",
    },
    {
        "name": "우엉잡채",
        "src": burdock_japchae,
        "explain": "일반적인 잡채와 달리 우엉과 당면을 이용해 만든 잡채로 맛이 일품입니다.",
    },
    {
        "name": "고기도너츠",
        "src": pork_doughnut,
        "explain": "돼지고기로 만든 요리입니다.\n 도너츠와 비슷한 모양을 띄고 있어 붙여진 이릅니다.",
    },
    {
        "name": "들깨샐러드",
        "src": salad,
        "explain": "각종 채소에 들깨와 소스를 뿌려 제공됩니다.",
    },
    {
        "name": "된장찌개",
        "src": doenjang,
        "explain": "집된장을 이용해 일반적인 된장찌개와 차별화된 맛을 자랑합니다.",
    },
    {
        "name": "곤드레밥",
        "src": gondre,
        "explain": "맵쌀에 곤드레 나물을 올린 밥입니다.",
    },
]
const lotusFloorRice = [
    {
        "name": "소고기야채찜",
        "src": lotusFloor,
        "explain": "각종 뿌리채소와 소고기를 함께 쪄 특제 소스와 곁들여 먹는 요리입니다.",
    },
    {
        "name": "연잎밥",
        "src": lotus_leaf_rice,
        "explain": "찰밥에 무농약 연잎을 이용해 직접 싼 연잎밥입니다. \n ",
    },
    {
        "name": "간장",
        "src": soy_sauce,
        "explain": "조선 간장으로 다른 간장들보다 풍미가 좋습니다.",
    },
    {
        "name": "김",
        "src": laver,
        "explain": "하나 하나 직접 구운 김입니다.",
    },
    {
        "name": "멸치",
        "src": anchovy,
        "explain": "식감과 맛이 일품입니다.",
    },
    {
        "name": "김치(열무김치 / 알타리김치)",
        "src": kimchi,
        "explain": "무가 맛있는 겨울에는 알타리 김치, 그 외 계절은 열무김치를 제공하고 있습니다.",
    },
    {
        "name": "부지깽이 나물",
        "src": herbs,
        "explain": "어린이도 맛있게 먹을 수 있는 나물입니다.",
    },
    {
        "name": "가지",
        "src": aubergine,
        "explain": "찐 가지를 맛있는 양념에 볶은 반찬입니다.",
    },
    {
        "name": "전(부추전 / 배추전)",
        "src": pancake,
        "explain": "배추가 맛있는 겨울에는 배추전, 그 외 계절은 부추전을 제공합니다.",
    },
    {
        "name": "우엉잡채",
        "src": burdock_japchae,
        "explain": "일반적인 잡채와 달리 우엉과 당면을 이용해 만든 잡채로 맛이 일품입니다.",
    },
    {
        "name": "고기도너츠",
        "src": pork_doughnut,
        "explain": "돼지고기로 만든 요리입니다.\n 도너츠와 비슷한 모양을 띄고 있어 붙여진 이릅니다.",
    },
    {
        "name": "들깨샐러드",
        "src": salad,
        "explain": "각종 채소에 들깨와 소스를 뿌려 제공됩니다.",
    },
    {
        "name": "소고기야채찜",
        "src": lotusFloor,
        "explain": "각종 뿌리채소와 소고기를 함께 쪄 특제 소스와 곁들여 먹는 요리입니다.",
    },
    {
        "name": "연잎밥",
        "src": lotus_leaf_rice,
        "explain": "찰밥에 무농약 연잎을 이용해 직접 싼 연잎밥입니다. \n ",
    },
]

export { lotusLeafRice, gondreRice, lotusFloorRice }
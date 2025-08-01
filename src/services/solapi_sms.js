const { SolapiMessageService } = require('solapi');
export const messageService = new SolapiMessageService("NCSBZ9YYAMG9YLAC", "BGC9U48ZCK8VL3ZDEP7YPVXU9PBEEC7K");
export const nums = Math.floor(Math.random() * 1000000);

messageService.send({
    "to":"",
    "from": "",
    "text": nums,
});
const { SolapiMessageService } = require('solapi');
export const messageService = new SolapiMessageService("NCSBZ9YYAMG9YLAC", "BGC9U48ZCK8VL3ZDEP7YPVXU9PBEEC7K");

messageService.send({
    "to":"",
    "from": "010-2786-8409",
    "text": nums,
});
let reg = prompt(`Ta register number oruulna uu?`);
if (reg.length == 10 && typeof reg[0] ==
    `string` && typeof reg[1] == `string` && Number.isInteger(Number(reg.substring(2, reg.length)))) {
    console.log(`монгол улсын регистрийн дугаарыг зөв орууллаа`)
}
else
    console.log(`та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа`);
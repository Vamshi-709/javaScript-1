const securemail = function (mail){
    var avarage, splited,part1,part2;
    splited = mail.split('@')
    part1=splited[0]
    avarage= part1.length / 2
    part1 = part1.substring(0,(part1.length -avarage))
    part2 = splited[1]
    return part1 + "....@" + part2
}
console.log(securemail("abc@gmail.com"));
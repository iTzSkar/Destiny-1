const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const prefix = '.'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});


client.on('message', message => {
    if (message.author.codes) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == ".ban") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
  
  
    message.guild.member(user).ban(7, user);
  
  message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)
  
  }
  });


  client.on('message', message => {
    const prefix = '.'	
        if(message.content === prefix + 'createcolors') {
                             if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
             if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
          message.guild.createRole({
                      name: "1",
                        color: "#050000",
                        permissions: []
         })
               message.guild.createRole({
                      name: "2",
                        color: "#262726",
                        permissions: []
         })
                    message.guild.createRole({
                      name: "3",
                        color: "#333433",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "4",
                        color: "#454545",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "5",
                        color: "#565656",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "6",
                        color: "#646464",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "7",
                        color: "#787878",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "8",
                        color: "#8d8c8c",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "8",
                        color: "#9a9a9a",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "9",
                        color: "#afaeae",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "10",
                        color: "#bcbbbb",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "11",
                        color: "#8504fa",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "12",
                        color: "#7607dd",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "13",
                        color: "#6a05c8",
                        permissions: []
         })
                              message.guild.createRole({
                      name: "14",
                        color: "#6006b4",
                        permissions: []
         })
                              message.guild.createRole({
                      name: "15",
                        color: "#5a07a8",
                        permissions: []
         })
                                   message.guild.createRole({
                      name: "16",
                        color: "#4c078d",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "17",
                        color: "#43067c",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "18",
                        color: "#360564",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "19",
                        color: "#270349",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "20",
                        color: "#fa04a1",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "21",
                        color: "#ef069b",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "22",
                        color: "#c30781",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "23",
                        color: "#a80871",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "24",
                        color: "#970966",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "25",
                        color: "#7f0956",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "26",
                        color: "#6e094b",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "27",
                        color: "#4e0735",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "28",
                        color: "#f80854",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "29",
                        color: "#db064a",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "30",
                        color: "#ca0745",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "31",
                        color: "#af083d",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "32",
                        color: "#940834",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "33",
                        color: "#7f062c",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "34",
                        color: "#6b0424",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "35",
                        color: "#f8071e",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "36",
                        color: "#d6071b",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "37",
                        color: "#b60516",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "38",
                        color: "#a80515",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "39",
                        color: "#8d0512",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "40",
                        color: "#7f0410",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "41",
                        color: "#6b030d",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "42",
                        color: "#06bcf3",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "43",
                        color: "#099dca",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "44",
                        color: "#098db6",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "45",
                        color: "#057a9e",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "46",
                        color: "#06637f",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "47",
                        color: "#054e64",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "48",
                        color: "#044255",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "49",
                        color: "#02dff8",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "50",
                        color: "#03c5db",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "51",
                        color: "#03b0c3",
                        permissions: []
         })  
         
                                             message.guild.createRole({
                      name: "52",
                        color: "#0798a8",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "53",
                        color: "#077f8d",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "54",
                        color: "#066570",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "55",
                        color: "#025862",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "56",
                        color: "#034850",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "57",
                        color: "#043f45",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "58",
                        color: "#07f6bf",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "59",
                        color: "#08ddac",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "60",
                        color: "#0ac399",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "61",
                        color: "#07a17f",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "62",
                        color: "#06785f",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "63",
                        color: "#05644f",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "64",
                        color: "#055543",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "65",
                        color: "",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "66",
                        color: "#044537",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "67",
                        color: "#043b2f",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "68",
                        color: "#032c23",
                        permissions: []
         })     
                                             message.guild.createRole({
                      name: "69",
                        color: "#023429",
                        permissions: []
         })     
          
              message.channel.sendMessage({embed: new Discord.RichEmbed()
         .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاءالالوان``')});
        }
        });
        
            client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '1');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '2');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '3');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '4');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '5');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '6');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '7');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '8');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '9');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '10');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '11');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '12');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '13');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '14');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '15');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '16');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '17');
            
            role.delete()
            }
        
        });
    
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '18');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '19');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '20');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+!deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '21');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '22');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '23');
            
            role.delete()
            }
        
        });
    
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '24');
            
            role.delete()
            }
        
        });
    
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '25');
            
            role.delete()
            }
        
        });
    
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '26');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '27');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '28');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '29');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '30');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '31');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '32');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '33');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '34');
            
            role.delete()
            }
        
        });
    
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '35');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '36');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '37');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '38');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '39');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '40');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '41');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '42');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '43');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '44');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '45');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '46');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '47');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '48');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '49');
            
            role.delete()
            }
        
        });
    
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '50');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '51');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '52');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '53');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '54');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '55');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '56');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '57');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '58');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '59');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '60');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '-61');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '62');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '63');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '64');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '65');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '66');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '67');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '68');
            
            role.delete()
            }
        
        });
        client.on('message', async message => {
            
                let args = message.content.split(' ').slice(1);
        if (message.content.startsWith("+deletecolors")) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return
            let role = message.guild.roles.find('name', '69');
            
            role.delete()
            }
        
        });
        
        client.on('message', msg => {
        if (msg.content === 'الوان') {
          if (msg.channel.id !== "496681707466915840") return;
          msg.channel.send({file : "https://cdn.discordapp.com/attachments/472743324084731914/478685035730305036/color.png"})
        }
      });
    client.on('message', message => {
        let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == 'لون'){
    if (message.channel.id !== "496681707466915840") return;
         const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**There's No Color With This Number ** ❌ `)
    .setColor(`ff0000`)
    
    if(!isNaN(args) && args.length > 0)
    
    
     var a = message.guild.roles.find("name",`${args}`)
              if(!a)return;
              if (a.name > 250 || a.name < 1) return;
    const embed = new Discord.RichEmbed()
                  
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Color Changed Successfully** ✅ `)
    
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
        if (!args)return;
    setInterval(function(){})
                let count = 0;
                let ecount = 0;
      for(let x = 1; x < 201; x++){
         
          message.member.removeRole(message.guild.roles.find("name",`${x}`))
        
          }
              message.member.addRole(message.guild.roles.find("name",`${args}`));
      
          
    }
    });


client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("id","496679508540260353");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
      }
      });


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
  //By S Codes
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
 
client.on("channelCreate",  cc => {
  const channel = cc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(cc.guild.name)
  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
 
   client.on("deleteChannel",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
 
 
 
  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = client.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***``ضع عدد الرسائل التي تريد مسحها 👌``***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("``php\nعدد الرسائل التي تم مسحها: " + textxt + "\n``").then(m => m.delete(3000));
          }    
      }
  }
  });


var userData = {};
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("id", "496679508028686346")
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('id', '496679508540260353');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("id", "496679508028686346")
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});


client.login(process.env.BOT_TOKEN);




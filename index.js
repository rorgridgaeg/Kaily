const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./config.json')
const prefix = ayarlar.prefix

var para = 5


var randommeme = [
    "https://media.discordapp.net/attachments/785390148992499744/820981998851457024/unknown.png",
    "https://cdn.discordapp.com/attachments/787640005899059250/820758550078160936/redditsave.com_my_personal_companion_left_me-0drsgpfwu0k61.mp4",
    "https://cdn.discordapp.com/attachments/787640005899059250/820768091935997962/Is_dead.mp4",
    "https://cdn.discordapp.com/attachments/787640005899059250/820769462960652309/Hamburger.mp4",
    "https://media.discordapp.net/attachments/785390148992499744/820979661055852554/unknown.png?width=772&height=473",
    "https://cdn.discordapp.com/attachments/787640005899059250/820956710395052032/uhoh.mp4",
    "https://cdn.discordapp.com/attachments/575073256998961163/751272550369198146/video0.mp4",
    "https://cdn.discordapp.com/attachments/638703621118099461/799651183932604416/-1.mp4",
    "https://media.discordapp.net/attachments/787680385860632576/813866862596063232/thiefposts-20210222-0001.jpg?width=473&height=473",
    "https://cdn.discordapp.com/attachments/804607908754227210/811867102394056704/quatyree_117258655_2943810345723372_7413080712615113442_n.mp4",
    "https://cdn.discordapp.com/attachments/787680385860632576/796045068544245810/Dovaking.mp4",
    "https://cdn.discordapp.com/attachments/533009547669798948/790699302133301308/Birthday360P.mp4",
    "https://cdn.discordapp.com/attachments/811232449375895595/815695169449623583/modern_comedy-1.mp4",
    "https://cdn.discordapp.com/attachments/793019514798473227/796265461460500521/cb40a5beeaf8862c2e6f8405760fc98d.mp4",
    "https://cdn.discordapp.com/attachments/787680385860632576/795736135732822036/Burger_King_Budweiser_Whassup-1.mp4",
    "https://cdn.discordapp.com/attachments/787680385860632576/796281571056812082/131081845_147169923507568_9130593730138239351_n.mp4",
    "https://media.discordapp.net/attachments/785390148992499744/820976352178077777/unknown.png",
    "https://media.discordapp.net/attachments/785390148992499744/820976290400174100/image0-10.png?width=706&height=473",
    "https://cdn.discordapp.com/attachments/680928395399266314/796350689479229480/Boobdrop_2.mp4",
    "https://media.discordapp.net/attachments/785390148992499744/820975851955945532/unknown.png",
    "https://cdn.discordapp.com/attachments/787680385860632576/796281658017841162/video0_34.mp4",
    "https://cdn.discordapp.com/attachments/787680385860632576/796345578677993482/fatal_montage_on_Instagram___yutup_hocalar_saybrpankarak_from__borahohoyt_MP4.mp4",
    "https://images-ext-2.discordapp.net/external/Eg0ZXwX1_IN8OdcnmrQwbjfnqFh84KKnYtCnFRsuevg/https/media.discordapp.net/attachments/787680385860632576/801285371958525992/berkwy01-20210118-0001.jpg",
    "https://cdn.discordapp.com/attachments/723590062373208185/802847983518744606/SPOILER_SPOILER_Anime_San_Andreas.mp4",
    "https://cdn.discordapp.com/attachments/807983715770826782/820607039243157535/SPOILER_Credit_to_u_Slash_Jimbologist_on_Reddit_2.mp4"
]
var randomcevap = [
    "Evet, Tabiki",
    "Hayır, Siksen olmaz öyle bir şey",
    "Ben babamla kardeş miyim?"
]
client.on('ready', () => {
  console.log(`${client.user.tag} Giriş yaptı`);
  client.user.setActivity(`k.help | k.yardım | k.davet`, {type: "WATCHING"})
});
client.on('message', msg => {
    if (msg.content.startsWith('k.random')) {
      msg.channel.send(`${randommeme[Math.floor(Math.random() *randommeme.length)]}`);
    }
  });
client.on('message', msg => {
    if (msg.content.startsWith('k.sor')) {
      msg.channel.send(`${randomcevap[Math.floor(Math.random() *randomcevap.length)]}`);
    }
  });

  
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.channel.send('as');
  }
});




client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('k.ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: ' ',
            })
            .then(() => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Sunucudan yasaklama")
              .setDescription(`Başarıyla sunucudan yasaklandı ${user.tag}`)
              .setTimestamp()
              message.channel.send(kanal)
            })
            .catch(err => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("HATA!!")
              .setDescription("İşlem için yeterli yetkiniz bulunmamaktadır")
              .setTimestamp()
              message.channel.send(kanal)
            });
        } else {
          message.channel.send("Bu kullanıcı sunucuda değil");
        }
      } else {
        message.channel.send(`Sunucudan yasaklayamadım doğru kullanım şekli:
k.ban @kullanıcı`);
      }
    }
  });
  
  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('k.kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick(' ')
            .then(() => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Sunucudan atma")
              .setDescription(`Kullanıcı başarıyla sunucudan atıldı ${user.tag}`)
              .setTimestamp()
              message.channel.send(kanal);
            })
            .catch(err => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("HATA!!")
              .setDescription(`yetkilerinizi kontrol edin`)
              .setTimestamp()
              message.channel.send(kanal);
            });
        } else {
          message.channel.send("kullanıcı bu sunucuda değil");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.channel.send(`Doğru kullanım şekli:
k.kick @kullanıcı`);
      }
    }
  });
  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('k.kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick(' ')
            .then(() => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("Sunucudan atma")
              .setDescription(`Kullanıcı başarıyla sunucudan atıldı ${user.tag}`)
              .setTimestamp()
              message.channel.send(kanal);
            })
            .catch(err => {
              const kanal = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle("HATA!!")
              .setDescription(`yetkilerinizi kontrol edin`)
              .setTimestamp()
              message.channel.send(kanal);
            });
        } else {
          message.channel.send("kullanıcı bu sunucuda değil");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.channel.send(`Doğru kullanım şekli:
k.kick @kullanıcı`);
      }
    }
  });

  


client.on('message', msg => {
    if (msg.content === 'k.bot') {
      const kanal = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("KAİLY")
      .setDescription(`Ping: ${client.ws.ping}
      Shard ${client.options.shardCount}
      Yapımcı: Gaeg#3763
      Prefix: k.`) 
    .setTimestamp()
    msg.channel.send(kanal)
    }
  });

client.login(ayarlar.token);
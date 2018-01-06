const Discord = require("discord.js");
const client = new Discord.Client();
const ce = require("embed-creator");
const prefix = '!';
const events = [];
//for the next 100 or so lines i will be defining the embeds for each ship
const phoenix_info = new Discord.RichEmbed()
  .setTitle("Phoenix Starjet")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the phoenix's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/QymSgi4.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const leonov_info = new Discord.RichEmbed()
  .setTitle("Leonov Starjet")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Leonov's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/tjjC9KM.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const liberator_info = new Discord.RichEmbed()
  .setTitle("Liberator Star Fighter")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Liberator's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/JPamTie.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const piranha_info = new Discord.RichEmbed()
  .setTitle("Piranha Star Fighter")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Piranha's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/xL3uVS9.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const nostromo_info = new Discord.RichEmbed()
  .setTitle("Nostromo Star Fighter")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Nostromo's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/ozWcY9v.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const vengence_info = new Discord.RichEmbed()
  .setTitle("Vengence Star Fighter")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Vengence's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/PiHOjZv.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const bigboy_info = new Discord.RichEmbed()
  .setTitle("Bigboy Cruiser")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Bigboy's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/eWAW4r6.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const goliath_info = new Discord.RichEmbed()
  .setTitle("Goliath Battleship")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Goliath's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/84JHX5A.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const citadel_info = new Discord.RichEmbed()
  .setTitle("Citadel Heavy Cruiser")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Citadel's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/VdwwK83.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const aegis_info = new Discord.RichEmbed()
  .setTitle("Aegis Engineering Vessel")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Aegis's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/8hfOIpP.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const spearhead_info = new Discord.RichEmbed()
  .setTitle("Spearhead Scout Ship")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Spearhead's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/ymxyLxQ.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const yamato_info = new Discord.RichEmbed()
  .setTitle("Yamato Star Jet")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Yamato's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/pAFu3hE.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
const defcom_info = new Discord.RichEmbed()
  .setTitle("Defcom Star Fighter")
  .setAuthor("from DO Wiki:")
  .setColor(0x00AE86)
  .setDescription("All of the Defcom's info")
  .setFooter("Last Updated Jan.5.2018")
  .setImage("https://imgur.com/YYy9zuF.png")
  .setThumbnail("https://imgur.com/b86Q7Mu.png")
  .setTimestamp()
  .setURL("http://darkorbit.wikia.com/wiki/Ships");
//wow thats a lot, and only for the basic ships. i plan on getting help for the rest
client.on("ready", () => {
  console.log("code parsed correctly, debugger is running!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!")) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command == 'ping') {
          message.channel.send('pong')
      }
      if (command == "stats") {
        let shiptype = args[0]
        if (shiptype == "Goliath") {
          message.channel.send(goliath_info)
        } else if (shiptype == "Phoenix") {
          message.channel.send(phoenix_info)
        } else if (shiptype == "Leonov") {
          message.channel.send(leonov_info)
        } else if (shiptype == "Liberator") {
          message.channel.send(liberator_info)
        } else if (shiptype == "Piranha") {
          message.channel.send(piranha_info)
        } else if (shiptype == "Nostromo") {
          message.channel.send(nostromo_info)
        } else if (shiptype == "Vengence") {
          message.channel.send(vengence_info)
        } else if (shiptype == "Bigboy") {
          message.channel.send(bigboy_info)
        } else if (shiptype == "Yamato") {
          message.channel.send(yamato_info)
        } else if (shiptype == "Citadel") {
          message.channel.send(citadel_info)
        } else if (shiptype == "Aegis") {
          message.channel.send(aegis_info)
        } else if (shiptype == "Spearhead") {
          message.channel.send(spearhead_info)
        } else if (shiptype == "Defcom") {
          message.channel.send(defcom_info)
        }
        else {
          message.reply(`Ship type ${shiptype} not found. Please use one of the following: Phoenix Leonov Liberator Nostromo Piranha Bigboy Goliath Spearhead Aegis Citadel Yamato or Defcom`)
        }
      }
      if (command === "newevent") {
        let eventtitle = args[0];
        let eventdate = args[1]; // Remember arrays are 0-based!.
        let eventtime = args[2];
        let eventmap = args[3];
        let eventdesc = args[4];
        message.reply(`${message.author.username}, your event will be posted as:  ${eventtitle} : on  ${eventdate}, at  ${eventtime}. meet at map ${eventmap}. ${eventdesc}`);
        client.channels.get('398575822660829196').sendMessage(`  ${eventtitle} : on  ${eventdate}, at  ${eventtime}. meet at map ${eventmap}. ${eventdesc}`)
      
}
  }
});

client.login("Mzk4NTc5NTY2NDg0MTI3NzU0.DTA2xw.jMwrDEFmFQaomPi8ojbvFGS3onI");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.author.equals(bot.user)) return;

        if(message.content.match (/Manu/i)) {
        return message.channel.sendMessage("Non non non, je suis pas ton copain, hein, non non non non. Tu es là, dans une cérémonie officielle. Tu te comportes comme il faut ! Donc, tu peux faire l'imbécile, mais aujourd'hui c'est la Marseillaise et le Chant des Partisans, tu m'appelles « Monsieur le Président » ou « Monsieur ». Compris ? C'est bien. Et tu fais les choses dans le bon ordre, si le jour où tu veux faire la révolution, t'apprends d'abord à avoir un diplôme, et à te nourrir toi-même. D'accord ? Et à ce moment-là t'iras donner des leçons.")
    }
        if(message.content.match (/Emmanuel/i)) {
        return;
    }
        if(message.content.match (/Emmanuel/i) && (message.content.match (/dab/i))) {
        return message.channel.sendFile("./dab/macron dab.png")
    }
        if(message.content.match (/Macron/i) && (message.content.match (/dab/i))) {
        return message.channel.sendFile("./dab/macron dab.png")
    }
});

bot.login(process.env.BOT_TOKEN);

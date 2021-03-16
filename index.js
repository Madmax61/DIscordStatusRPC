var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Hey there! Visit my YT channel and DISCORD here!",
assets : {
large_image : "youtube",
large_text : "Welcome to my channel!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "SUBSCRIBE" , url : "https://www.youtube.com/channel/UCBpI43djg_6sN7KUhgDlHuQ"},{label : "DISCORD",url : "https://discord.gg/Ve9zszuBa5"}]
}
})
})
client.login({ clientId : "820247356694855690" }).catch(console.error);
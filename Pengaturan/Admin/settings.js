const chalk = require("chalk")
const fs = require("fs")

global.owner = '628123456789' 
global.toko = 'Store'
global.namabot = 'Store' 
global.telegram = ''
global.channel = ''
global.website = ''
global.server = ''
global.sessionName = 'session'
global.nomorKu = '628123456789@s.whatsapp.net'
global.pajak = `350`
global.menu = { url: 'https://telegra.ph/file/.jpg' } 
global.qrisdonate = fs.readFileSync(`./Pengaturan/database/deposit/image/qr-code.jpg`)
global.antilink = false
global.packname = "Store";
global.author = "Store";
global.keydepo = ''; // apikey paydisini 
global.paydisini = { 
    validt: '1800', 
    layanan: '11', 
    apikey: '', //apikey paydisini 
    type_fee: '1', 
    }
global.mess = {
    daftar: '_Untuk Daftar Silahkan Ketik Seperti Di Bawah Ini_\n#daftar username|email', 
    admin: 'Khusus Admin Grup Wahh',
    botAdmin: 'Bot Nya Aja Gak Admin Duh',
    owner: 'Ada Siapa Ini Khusus Owner Ku',
    group: 'Fitur Untuk Grup Anjay',
    private: 'Fitur Cuma Bisa Di Vrivate Chat',
    
    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
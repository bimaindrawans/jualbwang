require('./Pengaturan/Admin/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const { color, bgcolor } = require('./Pengaturan/function/color')

const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const crypto = require('crypto')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const util = require('util')
const short = require('short-uuid');
const md5 = require('md5');
const PathSmm = "./smm/"
const db_respon_list = JSON.parse(fs.readFileSync('./Pengaturan/database/db_list.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./Pengaturan/function/function_list');
const PathAuto = "./Pengaturan/database/deposit/manual/"
const PathOto = "./Pengaturan/database/deposit/"
const PathAut = "./Pengaturan/database/deposit/"
const { getProduk } = require('./Pengaturan/function/getpro')

global.tanggalserver = `${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`;
global.waktuserver = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`; 

let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })

const { smsg, fetchJson, getBuffer } = require('./Pengaturan/function/simple')
  const sleep = exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
      }
      
global.keytri = ' '//apikey
    global.privateKey = ' ' //private key
 global.merchantcode = ' '

global.db = JSON.parse(fs.readFileSync('./Pengaturan/database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ PREFIX ]━━━━━━━━━━━━━━━━━//

module.exports = balz = async (balz, msg, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${owner}@s.whatsapp.net`
        const { type, quotedMsg, mentioned, now, fromMe } = msg
        
 
        const chats = msg.message.interactiveResponseMessage ? JSON.parse(msg.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
        if (chats == undefined) { chats = '' }
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '' 
        const content = JSON.stringify(m.message)
        const command = chats.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const body = chats.startsWith(prefix) ? chats : ''
        const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
        const args = body.trim().split(/ +/).slice(1);
        const q = args.join(" ");  
        const text = args.join(" ");    
        const isCommand = chats.startsWith(prefix);        
        const isCmd = isCommand ? chats.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
        const tanggal3 = moment().tz('Asia/Jakarta').locale('id').format('dddd, D MMMM YYYY');
		
        
        const from = m.key.remoteJid
        
        const pushname = m.pushName || "No Name"
        const botNumber = await balz.decodeJid(balz.user.id)
         
         const groupMetadata = m.isGroup ? await balz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
         const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      
         
        const itsMe = m.sender == botNumber ? true : false
        
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
        const tanggal = moment().tz("Asia/Jakarta").format("ll")
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		
		const isMedia = /image|video|sticker|audio/.test(mime)
     const isImage = (type == 'imageMessage')
		// const isVideo = (type == 'videoMessage')
		// const isAudio = (type == 'audioMessage')
		// const isSticker = (type == 'stickerMessage')
		
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        // const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        // const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        // const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        // const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        // const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        // const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')    
            
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : [nomorKu].includes(sender) ? true  : ["620000@s.whatsapp.net"].includes(sender) ? true  : false
        const senderNumber = sender.split('@')[0]   
        const arg = budy.trim().substring(budy.indexOf(" ") + 1);
        const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]    
         
	
            
          
try {

ppnyaimg = await balz.sendMessage(m.sender, 'image')
} catch (err) {
ppnyaimg = 'https://telegra.ph/file/558480616af8c2f9efa9f.jpg'
}


if (!balz.public) {
if (!m.key.fromMe) return
}
const reply = (teks) => {balz.sendMessage(from, { text: teks }, { quoted: m })}
    
var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' 𝙺𝚛𝚒𝚜𝙱𝚘𝚝𝚣 '), color(`[ PESAN MASUK ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}
    
    
    
async function sendbalzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await balz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
balz.sendPresenceUpdate(jd, from)
balz.readMessages([m.key])
}
function formatmoney(n, opt = {}) {
  if (!opt.current) opt.current = "IDR"
  return n.toLocaleString("id", { style: "currency", currency: opt.current })
}

function acakindong(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
}

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	}) 
	}
	
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return balz.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    const byte = randomBytes[i] % chars.length;
    result += chars.charAt(byte);
  }

  return result.toLowerCase();
}

    const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? balz.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.balzmenu}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : balz.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.balzmenu}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
}
    
const randomString = generateRandomString(5);


function boolToString(value) {
  return value ? 'iyah' : 'tidak';
}


// Addlist
 if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                balz.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                balz.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
const formatp = sizeFormatter({
  std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}


const fetchJson = async (url, options) => {
  try {
      options ? options : {}
      const res = await axios({
          method: 'GET',
          url: url,
          headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
          },
          ...options
      })
      return res.data
  } catch (err) {
      return err
  }
}

function toLvl(input) {
  if (typeof input === 'number') {
    return (input / 100) + 1;
  } else if (typeof input === 'string') {
    const inputNumber = parseFloat(input.replace(',', '.'));
    if (!isNaN(inputNumber)) {
      return (inputNumber / 100) + 1;
    }
  }
  return "Masukan tidak valid";
}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'balz Bot',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Creator balz'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
      

var user = JSON.parse(fs.readFileSync('./Pengaturan/database/user.json'))
 
const cek = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "layanan"){ return user[x1].layanan }
if (satu == "saldo"){ return user[x1].saldo }
if (satu == "harga"){ return user[x1].harga }
if (satu == "tujuan"){ return user[x1].tujuan }
if (satu == "reff"){ return user[x1].reff }
if (satu == "desc"){ return user[x1].desc }
if (satu == "status"){ return user[x1].status }    
if (satu == "kode_layanan"){ return user[x1].kode_layanan }
if (satu == "role"){ return user[x1].role }
}
if (x1 == false) { return null } 
}
let sett = (satu, dua, tiga) => { 
Object.keys(user).forEach((i) => {
if (user[i].id == dua){
if (satu == "+saldo")
{ user[i].saldo += tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "-saldo"){
user[i].saldo -= tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "harga"){ user[i].harga = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))} 
 if (satu == "status"){ user[i].status = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "layanan"){ user[i].layanan = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "tujuan"){ user[i].tujuan = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "desc"){ user[i].desc = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "kode_layanan"){ user[i].kode_layanan = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "reff"){ user[i].reff = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
if (satu == "role"){ user[i].role = tiga
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))}
}})
}

const daftarr = () => {
if(cek("id", m.sender) == null){
user.push({id: m.sender, saldo:0, role: "USER", layanan:"", harga:0, tujuan:"", kode_layanan: "", desc: "", reff: ""})
fs.writeFileSync('./Pengaturan/database/user.json', JSON.stringify(user))
 const suc = `──〔 *REGISTRASI SUKSES* 〕─
        
        _›› Nomor : ${m.sender.split("@")[0]}_
        _›› Saldo : ${cek("saldo", m.sender)}_
        _›› Role : ${cek("role", m.sender)}_
        
    _Terimakasih telah mendaftar semoga nyaman menggunakan layanan yang di berikan oleh kami_
    `
balz.sendMessage(m.chat, {text: `${suc}`},{quoted: m})
}
}
function formatMoney(nominal) {
  // Mengonversi angka menjadi string
  var strNominal = nominal.toString();
  // Mengambil bagian angka sebelum koma
  var hasil = strNominal.split('.')[0];
  // Mengonversi kembali menjadi angka
  return parseInt(hasil);
}


const pathVoucher = './database.json';
const pathStok = './Pengaturan/database/stok_akun.json';
function generateVoucherCode() {
    return 'xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
        return (Math.floor(Math.random() * 36)).toString(36);
    });
}


function getMonthName(monthIndex) {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return monthNames[monthIndex];
}

function cekWaktu() {
    const waktuSekarang = new Date();
    
    const tahun = waktuSekarang.getFullYear();
    let bulan = waktuSekarang.getMonth() + 1; // Bulan dimulai dari 0, jadi perlu ditambah 1
    bulan = bulan < 10 ? '0' + bulan : bulan; // Menambahkan leading zero jika bulan kurang dari 10
    
    let tanggal = waktuSekarang.getDate();
    tanggal = tanggal < 10 ? '0' + tanggal : tanggal; // Menambahkan leading zero jika tanggal kurang dari 10
    
    let jam = waktuSekarang.getHours();
    jam = jam < 10 ? '0' + jam : jam; // Menambahkan leading zero jika jam kurang dari 10
    
    let menit = waktuSekarang.getMinutes();
    menit = menit < 10 ? '0' + menit : menit; // Menambahkan leading zero jika menit kurang dari 10
    
    let detik = waktuSekarang.getSeconds();
    detik = detik < 10 ? '0' + detik : detik; // Menambahkan leading zero jika detik kurang dari 10
    
    return `${tahun}-${bulan}-${tanggal} ${jam}:${menit}:${detik}`;
}
    
function tambahAkun(database, kodeProduk, ...akunBaru) {
    // Baca file database
    fs.readFile(database, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Gagal membaca file database:", err);
            return;
        }

        // Parse konten JSON dari file
        let jsonContent = JSON.parse(fileData);

        // Cari produk dengan kode yang sesuai
        let produk = jsonContent.stok.find((item) => item.kode === kodeProduk);

        if (!produk) {
            console.error("Produk tidak ditemukan dalam database.");
            return;
        }

        // Tambahkan akun baru ke dalam produk jika ada data yang diisi
        if (akunBaru.length > 0) {
            for (let i = 0; i < akunBaru.length; i++) {
                produk.stokDetail.akun.push({
                    email: akunBaru[i].email,
                    password: akunBaru[i].password
                });
                console.log("Data yang ditambahkan:");
                console.log("Email:", akunBaru[i].email);
                console.log("Password:", akunBaru[i].password);
            }

            // Tambahkan jumlah akun baru ke stok
            produk.stok += akunBaru.length;

            // Membuat respons tambahan
            let additionalResponse = `_Add Akun sukses!_\n\n*DETAIL:*\n`;
            additionalResponse += `Kode Produk: ${kodeProduk}\n`;
            additionalResponse += `Akun Baru berhasil ditambahkan:\n`;

            // Menambahkan detail setiap akun baru
            akunBaru.forEach((akun, index) => {
                additionalResponse += `${index + 1}. Email: ${akun.email} | Password: ${akun.password}\n`;
            });

            // Kirim pesan balasan
            balz.sendMessage(m.sender, { text: additionalResponse });
        } else {
            console.error("Tidak ada data akun baru yang diisi.");
            return;
        }

        // Tulis kembali file database
        fs.writeFile(database, JSON.stringify(jsonContent, null, 4), 'utf8', (err) => {
            if (err) {
                console.error("Gagal menulis ke file database:", err);
                return;
            }
            console.log("Akun baru berhasil ditambahkan ke dalam produk dengan kode:", kodeProduk);
        });
    });
}
    

function tambahStok(database, text) {
    // Pisahkan data dari teks
    const [title, code, harga, description, email, password] = text.split("|");

    // Baca file database
    fs.readFile(database, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Gagal membaca file database:", err);
            return;
        }

        // Parse konten JSON dari file
        let jsonContent;
        try {
            jsonContent = JSON.parse(fileData);
        } catch (e) {
            console.error("Gagal parse file JSON:", e);
            return;
        }

        // Pastikan jsonContent.stok terdefinisi dan merupakan array
        if (!jsonContent.stok) {
            jsonContent.stok = [];
        } else if (!Array.isArray(jsonContent.stok)) {
            console.error("Properti 'stok' bukan array.");
            return;
        }

        // Cek apakah kode sudah ada di database
        const kodeSudahAda = jsonContent.stok.some(item => item.kode === code);
        if (kodeSudahAda) {
            console.log("Kode sudah ada di database.");
            // Kirim pesan balasan
            balz.sendMessage(m.sender, { text: "Kode sudah ada di database." });
            return;
        }

        // Tambahkan data stok baru
        jsonContent.stok.push({
            kode: code,
            judul: title,
            desk: description,
            harga: harga,
            stok: 1,
            profit: 0,
            stokTerjual: 0,
            totalStok: 1,
            stokDetail: {
                akun: [
                    {
                        email: email.trim(),
                        password: password.trim()
                    }
                ]
            }
        });

        // Tulis kembali file database
        fs.writeFile(database, JSON.stringify(jsonContent, null, 4), 'utf8', (err) => {
            if (err) {
                console.error("Gagal menulis ke file database:", err);
                return;
            }
            console.log("Stok berhasil ditambahkan ke database.");

            // Membuat respons tambahan
            let additionalResponse = "_Add Stok sukses!_\n\n*DETAIL:*\n";
            additionalResponse += `Kode: ${code}\n`;
            additionalResponse += `Judul: ${title}\n`;
            additionalResponse += `Desk: ${description}\n`;
            additionalResponse += `Harga: ${harga}\n`;
            additionalResponse += "Stok: 1\n";
            additionalResponse += "Stok Terjual: 0\n";
            additionalResponse += "Total Stok: 1\n";
            additionalResponse += `Stok:\n1. User: ${email.trim()} | PW: ${password.trim()}`;

            // Kirim pesan balasan
            balz.sendMessage(m.sender, { text: additionalResponse });
        });
    });
}    




function generateTransactionID(length) {
    const bytes = Math.ceil(length / 2);
    return crypto.randomBytes(bytes).toString('hex').toUpperCase();
}

// Contoh penggunaan: membuat Reff_ID dengan panjang 10 karakter
const reffID = generateTransactionID(15);
function calculatePriceAndTotalPrice(produk, jumlahAkun) {
    // Mendapatkan harga per akun
    const hargaPerAkun = parseInt(produk.harga) 

    // Mendapatkan detail produk
    const { judul: title, harga, desk, profit} = produk;

    return {
        hargaPerAkun,
        title,
        harga,
        desk, 
        profit
    };
}

function generateAccounts(akunDetail, jumlahAkun) {
    let akunDibeli = [];
    for (let i = 0; i < jumlahAkun; i++) {
        akunDibeli.push(akunDetail[i]);
    }
    return akunDibeli;
}

function removeAccount(database, email, jumlahAkun) {
    fs.readFile(database, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Gagal membaca file database:", err);
            return;
        }

        // Parse konten JSON dari file
        let jsonContent = JSON.parse(fileData);

        // Cari produk dengan email yang sesuai
        for (const produk of jsonContent.stok) {
            for (let i = 0; i < jumlahAkun; i++) {
                const index = produk.stokDetail.akun.findIndex((item) => item.email === email);
                if (index !== -1) {
                    produk.stokDetail.akun.splice(index, 1);
                }
            }
        }

        // Tulis kembali file database
        fs.writeFile(database, JSON.stringify(jsonContent, null, 4), 'utf8', (err) => {
            if (err) {
                console.error("Gagal menulis ke file database:", err);
                return;
            }
            console.log("Akun berhasil dihapus dari database.");
        });
    });
}
 
function buyProduct(database, kodeProduk, jumlahAkun,  ref, total, pajak) {
    // Baca file database
    fs.readFile(database, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Gagal membaca file database:", err);
            return;
        }

        // Parse konten JSON dari file
        let jsonContent = JSON.parse(fileData);

        // Cari produk dengan kode yang sesuai
        let produk = jsonContent.stok.find((item) => item.kode === kodeProduk);

        if (!produk) {
            reply("Kode Produk Yang Anda Berikan tidak ditemukan dalam database.");
            return;
        }

        // Hitung harga total berdasarkan jumlah akun yang dibeli
        const { hargaPerAkun, title, harga, desk, profit} = calculatePriceAndTotalPrice(produk, jumlahAkun);
        
        const perakun = parseInt(hargaPerAkun);
        const per = parseInt(profit);
const angka2 = parseInt(jumlahAkun);
   
        // Cek apakah stok mencukupi
        if (produk.stok < jumlahAkun) {
            reply("Stok tidak mencukupi untuk melakukan transaksi.");
            return;
        }
        
        // Kurangi stok produk
        produk.stok -= angka2;
        produk.stokTerjual += angka2;

        // Tulis kembali file database
        fs.writeFile(database, JSON.stringify(jsonContent, null, 4), 'utf8', (err) => {
            if (err) {
                console.error("Gagal menulis ke file database:", err);
                return;
            }


            // Kirim pesan balasan
            let additionalResponse = `╭────〔 TRANSAKSI SUKSES 〕─\n`;
            additionalResponse += `┊・ *ID TRX :* ${ref}\n`;
            additionalResponse += `┊・ *Service :* ${title}\n`;
            additionalResponse += `┊・ *Nomor :* ${m.sender.split(" ")[0]}\n`;
            additionalResponse += `┊・ *Jumlah Beli :* ${jumlahAkun}\n`;
            additionalResponse += `┊・ *Harga :* ${formatmoney(perakun)}\n`;
            additionalResponse += `┊・ *Total Dibayar :* ${formatmoney(total)}\n`;
            additionalResponse += `┊・ *Desc :* ${desk}\n`;
            additionalResponse += `┊・ *Tanggal Transaksi :* ${tanggal3}\n`;
            additionalResponse += `┊・ *Jam Transaksi :* ${jam}\n`;
            additionalResponse += `╰┈┈┈┈┈┈┈┈\n\n`;
            const akunDibelii = generateAccounts(produk.stokDetail.akun, jumlahAkun);
            akunDibelii.forEach((akun, index) => {
                additionalResponse += `*╭────〔 ACCOUNT DETAIL ${index + 1} 〕─*\n`;
                additionalResponse += `┊・ *User/Email :* ${akun.email}\n`;
                additionalResponse += `┊・ *Password :* ${akun.password}\n`;
                additionalResponse += `*╰┈┈┈┈┈┈┈┈*\n`;

                // Hapus akun yang dibeli dari database
                removeAccount(database, akun.email, jumlahAkun);
                
            });

            additionalResponse += `*– DIMOHON UNTUK MENYIMPAN STRUK INI SENDIRI*\n`;
            additionalResponse += `*– BOT/OWNER TIDAK AKAN MENAMPILKAN ULANG DETAIL ACCOUNT YANG SUDAH DIBELI*\n`;
           reply("Akun sudah di kirim ke private chat ") 
           const trxFilePath = './Pengaturan/database/trxapp.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
               const waktu = cekWaktu();
           const newTransactionData = {
        kode: kodeProduk,
        harga: perakun,
        date: waktu,  
        profit: per,         
        jumlah: jumlahAkun
    };
    trxUserData.push(newTransactionData);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');    
            reply("akun sudah di kirim ") 
            balz.sendMessage(m.sender, {text:additionalResponse});
        });
    });
}
               
function getTitleFromKode(kode) {
    try {
        const data = fs.readFileSync(pathStok, 'utf8');
        const stokData = JSON.parse(data);

        if (Array.isArray(stokData.stok)) {
            const product = stokData.stok.find(prod => prod.kode === kode);
            if (product) {
                return product.judul;
            }
        }
        return 'Produk tidak ditemukan.';
    } catch (error) {
        console.error('Error membaca atau memparsing stok.json:', error);
        return 'Produk tidak ditemukan.';
    }
}               
               
function checkPaymentStatus(database, opa, jumlah, order_id, produk, harga, fee, attempt = 1) {
    const maxAttempts = 15; // Batas maksimum percobaan
    var FormData = require('form-data');
    const formData = new FormData();
    formData.append('key', paydisini.apikey);
    formData.append('request', 'status');
    formData.append('unique_code', order_id);
    formData.append('signature', crypto.createHash('md5').update(paydisini.apikey + order_id + 'StatusTransaction').digest('hex'));
    
    axios.post('https://paydisini.co.id/api/', formData, {
        headers: {
            ...formData.getHeaders()
        }
    })
    .then(function(response) {
        if (response.data.success && response.data.data.status === 'Pending') {
            if (attempt < maxAttempts) {
                
                setTimeout(() => {
                    checkPaymentStatus(database, opa, jumlah, order_id, produk, harga, fee, attempt + 1);
                }, 20000); // Perubahan interval pengecekan menjadi 60000 milidetik (60 detik)
            } else {
                m.reply('Waktu Pembayaran telah habis') 
                balz.sendMessage(m.chat, { delete: opa.key });
                                         
            }
        } else if (response.data.success && response.data.data.status === 'Success') {
           m.reply("*pembayaran sukses silahkan tunggu*") 
                   
            balz.sendMessage(m.chat, { delete: opa.key });
            buyProduct(database, produk, jumlah, order_id, harga, fee)                                                 
        } else {
            reply('Pembayaran Anda Dibatalkan Otomatis Oleh Bot.');
        }
    })
    .catch(function(error) {
        console.error('Error occurred while checking payment status:', error);
    });
}

async function appprem(produk, jumlah) {
    const database = JSON.parse(fs.readFileSync('./Pengaturan/database/stok_akun.json', 'utf8'));
    const stok = database.stok;

    let found = false;
    for (let i = 0; i < stok.length; i++) {
        const item = stok[i];
        if (item.kode === produk) {
            found = true;
            const kode = item.kode;
            const judul = item.judul;
            const desk = item.desk;
            const harga = item.harga;
            const stokTersedia = item.stok;
            const jml = parseInt(jumlah);
            const hrg = parseInt(harga);
            const total = hrg * jml;

            if (jml > stokTersedia) {
                reply("Maaf, stok tidak mencukupi untuk pesanan ini.");
            } else {
                const FormData = require('form-data');
                let no = q.split(" ")[0];
                if (!no) return reply(`Jumlah Nya mana?\n.buynow kodr`);
                let reff_deposi = require("crypto").randomBytes(5).toString("hex").toUpperCase();
                const url = 'https://paydisini.co.id/api/';
                const memberNumber = m.sender.split('@')[0];
                  const signature = md5(paydisini.apikey + reff_deposi + paydisini.layanan + total + paydisini.validt + 'NewTransaction');
                const data = new FormData();
                data.append('key', paydisini.apikey);
            data.append('request', 'new');
            data.append('unique_code', reff_deposi);
            data.append('service', paydisini.layanan);
            data.append('amount', total);
            data.append('note', randomString);
            data.append('valid_time', paydisini.validt);
            data.append('type_fee', paydisini.type_fee);
            data.append('signature', signature);

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        body: data
                    });

                    const responseData = await response.json();
                    if (responseData.success) {
                        const data = responseData.data;

                     let teks = `
*───────────── 𝗜𝗡𝗩𝗢𝗜𝗖𝗘 ─────────────*
  
📅 *Tanggal:* ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
👤 *Pembeli:* @${m.sender.replace(/@.+/g, '')}

📦 *Detail Pesanan:*
> *›› TRX ID:* ${data.unique_code}
> *›› KODE:* ${produk}
> *›› JUMLAH ORDER:* ${jml}
> *›› SERVICE:* ${judul}
> *›› STOK:* ${stokTersedia}
> *›› DESC:* ${desk}
> *›› PPN:* ${data.fee}

💸 *TOTAL PEMBAYARAN:* ${formatmoney(data.amount)}

*${toko}*
`;
let gambr = {url: data.qrcode_url};
                       let opa = await balz.sendMessage(from, { image: gambr, caption: teks });
                          const database = "Pengaturan/database/stok_akun.json";
                        checkPaymentStatus(database, opa, jumlah, data.unique_code, produk, data.amount, data.fee)          
                                             
                    } else {
                        reply(`Error: ${responseData.msg}`);
                    }
                } catch (error) {
                    console.error('Terjadi kesalahan:', error);
                    m.reply('Terjadi kesalahan saat memproses transaksi, silakan coba lagi nanti.');
                }
            }
        }
    }

    if (!found) {
        reply("Maaf, produk yang Anda minta tidak tersedia.");
    }
}

switch (command) {
case 'menu':
  if(cek("id", m.sender) == null) return reply(`Anda Belum Terdaftar di Database Silahkan ketik #daftar`)   
let nk = ` 
  ╭─❏ *『 INFORMASI BOT 』*
  │⭔  Name :  ${pushname}
  │⭔  Nomor : ${cek("id", m.sender).split("@")[0]}
  ╰┈┈┈┈┈┈┈┈

  ╭─❏ *『 MENU BOT 』*
  │⭔ ${prefix}buynow ( Sistem Pay Qris Otomatis) 
  │⭔ ${prefix}stok 
  │⭔ ${prefix}ceksaldo
  │⭔ ${prefix}list
  ╰┈┈┈┈┈┈┈┈
  
  ╭─❏ *『 MENU STORE 』*
  │⭔ ${prefix}list
  │⭔ ${prefix}addlist
  │⭔ ${prefix}dellist
  │⭔ ${prefix}updatelist
  ╰┈┈┈┈┈┈┈┈

  ╭─❏ *『 OWNER MENU 』*
  │⭔ ${prefix}setharga
  │⭔ ${prefix}delstok
  │⭔ ${prefix}addsaldo
  │⭔ ${prefix}addstok
  │⭔ ${prefix}addakun
  │⭔ ${prefix}setprofit
  │⭔ ${prefix}listprofit
  │⭔ ${prefix}saldopay
  ╰┈┈┈┈┈┈┈┈`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: nk
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `${toko}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `Hallo Kak ${pushname}`,
            subtitle: `${packname}`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                  {
           "name": "quick_reply",
           "buttonParamsJson": "{\"display_text\":\"Stok Akun\",\"id\":\"stok\"}"
              }
           ],
          })
        })
    }
  }
}, {})

balz.relayMessage(from, msg.message, {
  messageId: msg.key.id
})
break       
     
case 'daftar':{
if(cek("id", m.sender) == m.sender) return reply(`Anda Sudah Terdaftar Di Database`)
daftarr() 
 }
 break  
case 'updatelist': case 'update':{
  if (!m.isGroup) {
    return m.reply(mess.group);
  }
  if (!isBotAdmins) {
    return m.reply(mess.botAdmin);
  }
  if (!isAdmins) {
    return m.reply(mess.admin);
  }
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), args1, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
            if (/image/.test(mime)) {
                let media = await balz.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        updateResponList((m.isGroup? m.chat: botNumber), args1, args2, true, mem, db_respon_list)
                        m.reply(`Sukses update respon list dengan key *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList((m.isGroup? m.chat: botNumber), args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
			}
            break
            
case 'list': case 'store':{  
  if (!isBotAdmins) {
    return m.reply(mess.botAdmin);
  }
  if (!isAdmins) {
    return m.reply(mess.admin);
  }
		if (!m.isGroup) return reply("Khusus Dalam Group")
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group/chat ini`)
            if(m.isGroup){
            let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia Di*${groupMetadata.subject}* Saat Ini\n\n╭──────☰⃟⃟\n`
            for (let i of db_respon_list) {
              if (i.id === (m.isGroup ? m.chat : botNumber)) {
               teks += `│❚❏ 🛍 ${i.key.toUpperCase()}\n`
              }
            }
              teks += `╰──────☰⃟⃟\n${toko}\n✧──···[Untuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
              balz.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m})
            } else {
            var arr_rows = [];
            for (let x of db_respon_list) {
               if (x.id === (m.isGroup ? m.chat : botNumber)) {
                  arr_rows.push({
                     title: x.key,
                     rowId: x.key
                  })
               }
            }
            var listMsg = {
               text: `Halo @${m.sender.split("@")[0]} 👋\n\nSilahkan pilih item yang kamu butuhkan 🌟`,
               buttonText: 'Click Here',
               footer: footer_text,
               mentions: [m.sender],
               sections: [{
                  title: groupName,
                  rows: arr_rows
               }]
            }
            balz.sendMessage(m.chat, listMsg, {
               quoted: m
            })
            }
			}
            break

  case 'ndepo':{
  if(!fs.existsSync(`./Pengaturan/database/deposit/manual/${m.sender.split("@")[0]}.json`)) return reply('Anda Belum Melakukan deposit')       
  let data_depo = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))    
  reply(`Baik kak, Deposit Dengan ID : ${data_depo.reff} dibatalkan 😊`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')    
      }
        break
        case 'saldopay': {
  if (!isOwner) return m.reply("Fitur khusus owner!")
   let third = 'Profile';
    const ap = global.paydisini.apikey
   let hash = crypto.createHash('md5')
   .update(ap + third)
   .digest('hex');
  
    var config = {
      method: 'POST',  // Set the HTTP method to POST
      url: 'https://paydisini.co.id/api/',  // Set the target URL
      data: new URLSearchParams(Object.entries({
        key: paydisini.apikey,
        request: 'profile',
        signature: hash,
        })),
    };
  
  axios(config)
    .then(function (response) {
      if (response.data.success == true) {
      m.reply(`*「 AKUN PAYDISINI 」*\n\n› STATUS PAYDISINI : *TERHUBUNG*\n› USER SERVER  : *${response.data.data.full_name}*\n› SALDO ANDA : *Rp ${response.data.data.saldo}*\n› SALDO DITAHAN  : *Rp ${response.data.data.saldo_tertahan}*\n`)
  
    } if (response.data.success == false) {
    m.reply(`*「 AKUN PAYDISINI 」*\n\n› STATUS PAYSDISINI : *TERPUTUS*\n› PESAN : *${response.data.msg}*\n`)
  }
    })
  }
  break
  case 'addsaldo':{
if (!isOwner) return reply(mess.owner) 
var sd = text.split("|")[0]
var noa = text.split("|")[1]
if (!sd || !noa) return reply(`Contoh Penambahan saldo adalah\n#addsaldo 10000|628123456789`) 
var add = Number(sd);
var koa = noa + "@s.whatsapp.net"
sett("+saldo", koa, add) 
reply(`Saldo Dengan Nominal ${formatmoney(sd)} Berhasil Di tambah\nSaldo Sekarang ${cek("saldo", koa)}`) 
var nn = `Halo Kak Penambahan saldo dengan jumlah ${formatmoney(sd)} Berhasil di tambahkan di akun anda`
balz.sendMessage(koa, {text:nn})
  }
  break
case 'minsaldo':{
if (!isOwner) return reply(mess.owner) 
var sd = text.split("|")[0]
var noa = text.split("|")[1]
if (!sd || !noa) return reply(`Contoh Penambahan saldo adalah\n#addsaldo 10000|628123456789`) 
var add = Number(sd);
var koa = noa + "@s.whatsapp.net"
sett("-saldo", koa, add) 
reply(`Saldo Dengan Nominal ${formatmoney(sd)} Berhasil Di Kurangi Saldo Sekarang ${cek("saldo", koa)}`) 
var nn = `Halo Kak Pengurangan saldo dengan jumlah ${formatmoney(sd)} Berhasil di Di Kurangi di akun anda`
balz.sendMessage(koa, {text:nn})
  }
  break 
    case 'owner':{
var owner_Nya = global.owner
sendContact(from, owner_Nya, global.ownername, m)
reply('Chat aja kak, ga usah malu')
}
break    
  case 'claimgaransi':{
  let pesan = text.split("%")
  if(pesan) return reply("Pesan nya mana");
  balz.sendMessage(`${owner}@s.whatsapp.net`, {text: pesan}) 
  }
  break
 case 'bukti': {
if(!fs.existsSync(`./Pengaturan/database/deposit/manual/${m.sender.split("@")[0]}.json`)) return reply('Anda Belum Melakukan deposit')    
let data_depo = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
    if (!quoted) return reply(`Kirim/Reply gambar dengan caption *${prefix + command}*`);
    if (/image/.test(mime)) {
        let media = await quoted.download();
        m.reply(`Bukti berhasil terkirim ke owner, silahkan menunggu konfirmasi`);
        let buktii = `📥 *DEPOSIT USER* 📥
        
➖➖➖➖➖➖➖➖➖➖
⭔ ID: ${data_depo.ref}
⭔ Nomer: ${data_depo.id}
⭔ Payment: ${data_depo.pay}
⭔ Tanggal: ${tanggal} ${jam}
⭔ Jumlah Bayar: ${formatmoney(data_depo.jumlah_bayar)}
⭔ Biaya Layanan: ${formatmoney(data_depo.biaya_layanan)}
⭔ Saldo Diterima: ${formatmoney(data_depo.saldo_diterima)}
➖➖➖➖➖➖➖➖➖➖

Ada yang melakukan deposit nih. Mohon untuk dicek saldo pengguna terkait.

Jika sudah masuk, silahkan konfirmasi dengan 
*#acc* ${sender.split('@')[0]}
atau
*#tolak* ${sender.split('@')[0]}`;

        // Kirim bukti deposit ke owner
        balz.sendMessage(global.owner + '@s.whatsapp.net', { image: media, caption: buktii }, { quoted: null });
    } else {
        reply(`Kirim/Reply gambar dengan caption *${prefix + command}*`);
    }
    }
    break;             

case 'acc': {
        if (!isOwner) return
    	
        const target = args[0];
    	if(!fs.existsSync(`./Pengaturan/database/deposit/manual/${target}.json`)) return reply('Nomor Tersebut Tidak Melakukan deposit saldo')
        const kiw = `${target}@s.whatsapp.net`
        if (!target) return m.reply('mana orangnya')
        if(cek("id", kiw) == null) return reply(`Nomor Tersebut Belum Terdaftar di Database Silahkan ketik #daftar`)
        let data_depo = JSON.parse(fs.readFileSync(PathAuto + target + ".json"))
        var loak = Number(data_depo.saldo_diterima) 
        const amountToAdd = loak
         if (isNaN(amountToAdd) || amountToAdd <= 0) {
          return m.reply('Nilai Saldo Harus Berupa Angka!!!');
        }
 
        const targetUser = kiw;
        const sebelum = cek("saldo", kiw) 
        
        sett("+saldo", kiw, loak) ;
    
        
       const akhir = cek("saldo", kiw) 
        const formatSaldo = (amount) => `${amount.toLocaleString()}`;
        m.reply(`───〔 *Deposit Sukses* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${tanggal3}, ${jam} WIB`)
        const capt = `───〔 *Deposit Sukses* 〕──\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${tanggal3}, ${jam} WIB`
        balz.sendMessage(kiw, {
          text: capt,
          contextInfo: {
            externalAdReply: {
              title: `DI-PAY 2024`,
              thumbnailUrl: `${balzmenu}`,
              sourceUrl: `${website}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: m })        
        const trxFilePath = './Pengaturan/database/datadepo.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
   const waktu = cekWaktu();
    const newTransactionData = {
        buyer: m.sender,
        status: 'Berhasil',
        ref_id: `#${data_depo.ref}`,
        jam: moment.tz('Asia/Jakarta').format('HH:mm:ss'),
        date: waktu, 
        saldo_diterima: data_depo.saldo_diterima,
        total_bayar: data_depo.jumlah_bayar,
    };
    trxUserData.push(newTransactionData);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');    
    fs.unlinkSync(PathAuto + target + ".json")
      }
      break;                
      
  case 'setharga':{

function editHarga(kode, hargaBaru) {
    fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const database = JSON.parse(data);
        
        database.stok.forEach(item => {
            if (item.kode === kode) {
                item.harga = hargaBaru;
            }
        });
        
        fs.writeFile('Pengaturan/database/stok_akun.json', JSON.stringify(database, null, 4), err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            reply('Harga telah berhasil diubah.');
        });
    });
}


// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
const kodeProduk = text.split(" ")[0]; // Ganti dengan kode produk yang ingin diubah harganya
const hargaBaruProduk = text.split(" ")[1]; // Ganti dengan harga baru produk
if(!kodeProduk || !hargaBaruProduk) return reply(" contoh #setharga kode harga") 
editHarga(kodeProduk, hargaBaruProduk);
}
break      
 case 'setprofit':{

function editHarga(kode, hargaBaru) {
    fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const database = JSON.parse(data);
        
        database.stok.forEach(item => {
            if (item.kode === kode) {
                item.profit = hargaBaru;
            }
        });
        
        fs.writeFile('Pengaturan/database/stok_akun.json', JSON.stringify(database, null, 4), err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            reply('profit telah berhasil diubah.');
        });
    });
}

// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
const kodeProduk = text.split(" ")[0]; // Ganti dengan kode produk yang ingin diubah harganya
const hargaBaruProduk = text.split(" ")[1]; // Ganti dengan harga baru produk
if(!kodeProduk || !hargaBaruProduk) return reply(" contoh #setprofit kode harga") 
editHarga(kodeProduk, hargaBaruProduk);
}
break      
case'addlist':{
		if (!m.isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("khusus admin group")
            var args1 = q.split("|")[0].toLowerCase()
            var args2 = q.split("|")[1]
            if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
            if (isAlreadyResponList((m.isGroup ? m.chat :botNumber), args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di chat ini.`)
            if(m.isGroup){
            if (/image/.test(mime)) {
                let media = await balz.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(m.chat, args1, args2, true, mem, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            } else {
            if (/image/.test(mime)) {
                let media = await balz.downloadAndSaveMediaMessage(quoted)
                let mem = await TelegraPh(media)
                        addResponList(botNumber, args1, args2, true, mem, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(botNumber, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            }
			}
            break

case 'dellist':{
		if (!m.isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("khusus admin group")
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
            if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
			}
            break

case 'listprofit':{
// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
// Baca data dari file database.json
fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
    if (err) {
        const errorMessage = "Gagal membaca file: " + err.message;
        reply(errorMessage);
        return;
    }

    try {
        // Parse data JSON
        const jsonData = JSON.parse(data);

        // Membuat objek untuk menyimpan profit dari setiap item
        const profitMap = {};

        // Iterasi melalui array stok dan mengumpulkan profit dari setiap item
        jsonData.stok.forEach(item => {
            if (item.profit !== undefined && item.profit !== null && item.profit !== "") {
                profitMap[item.kode] = parseInt(item.profit);
            }
        });

        // Menyiapkan pesan balasan dengan daftar profit
        let replyMessage = "LIST PROFIT\n";
        Object.keys(profitMap).forEach(kode => {
            replyMessage += `- ${kode} : ${profitMap[kode]}\n`;
        });

        // Mengirim pesan balasan
        reply(replyMessage);
    } catch (error) {
        const errorMessage = "Gagal memproses data JSON: " + error.message;
        reply(errorMessage);
    }
});
}
break;
        case 'setname':{

function editHarga(kode, hargaBaru) {
    fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const database = JSON.parse(data);
        
        database.stok.forEach(item => {
            if (item.kode === kode) {
                item.judul = hargaBaru;
            }
        });
        
        fs.writeFile('Pengaturan/database/stok_akun.json', JSON.stringify(database, null, 4), err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Harga telah berhasil diubah.');
        });
    });
}

// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
const kodeProduk = text.split("€¥")[0]; // Ganti dengan kode produk yang ingin diubah harganya
const hargaBaruProduk = text.split(" ")[1]; // Ganti dengan harga baru produk
if(!kodeProduk || !hargaBaruProduk) return reply(" contoh #setharga kode HargaBaru") 
editHarga(kodeProduk, hargaBaruProduk);
}
break
    case 'delstok':{
if(!isOwner) return;
function hapusItem(kode) {
    fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const database = JSON.parse(data);
        
        const index = database.stok.findIndex(item => item.kode === kode);
        if (index !== -1) {
            database.stok.splice(index, 1);
            
            fs.writeFile('Pengaturan/database/stok_akun.json', JSON.stringify(database, null, 4), err => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                reply('Item dengan kode', kode, 'telah berhasil dihapus.');
            });
        } else {
            reply('Item dengan kode', kode, 'tidak ditemukan.');
        }
    });
}

// Contoh pemanggilan fungsi hapusItem
const kodeProdukYangAkanDihapus = text.split(" ")[0]; // Ganti dengan kode produk yang ingin dihapus
if(!kodeProdukYangAkanDihapus) return reply("#delstok kode") 
hapusItem(kodeProdukYangAkanDihapus);
}
break    
case 'rekap':{
const fs = require('fs');

// Membaca dan mem-parse file JSON
let data = JSON.parse(fs.readFileSync('./Pengaturan/database/stok_akun.json'));
function cariHargaByKode(kode) {
    for (let i = 0; i < data.stok.length; i++) {
        if (data.stok[i].profit === kode) {
            return data.stok[i].profit;
        }
    }
    return "Kode tidak ditemukan";
}

function hitungPendapatanBersih(harga, jumlah) {
    return profit * jumlah; // Misalnya 15% dari pendapatan adalah biaya lainnya
}

// Fungsi untuk mengelompokkan transaksi berdasarkan tanggal


function bulankelompok(transaksi) {
    const transaksiHarian = {};

    // Mengelompokkan transaksi berdasarkan tanggal
    transaksi.forEach(data => {
        const tanggal = new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (!transaksiHarian[tanggal]) {
            transaksiHarian[tanggal] = [];
        }
        transaksiHarian[tanggal].push(data);
    });

    return transaksiHarian;
}
// Fungsi untuk mengelompokkan transaksi berdasarkan minggu

// Fungsi untuk mengelompokkan transaksi berdasarkan minggu

function kelompokkanTransaksi(transaksi) {
    const today = new Date();
    const startOfWeek = new Date(today); // Salin objek today agar tidak dimodifikasi
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Mendapatkan tanggal awal minggu (Senin)

    const endOfWeek = new Date(today); // Salin objek today lagi
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Mendapatkan tanggal akhir minggu (Minggu)

    const transaksiMingguIni = transaksi.filter(data => {
        const transaksiDate = new Date(data.date);
        return transaksiDate >= startOfWeek && transaksiDate <= endOfWeek;
    });

    const transaksiMingguan = {};
    transaksiMingguIni.forEach(data => {
        const tanggal = new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (!transaksiMingguan[tanggal]) {
            transaksiMingguan[tanggal] = [];
        }
        transaksiMingguan[tanggal].push(data);
    });

    // Mengurutkan transaksi berdasarkan hari dalam seminggu, dimulai dari Senin
    const sortedTransaksiMingguan = {};
    Object.keys(transaksiMingguan).sort((a, b) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days.indexOf(a.split(',')[0]) - days.indexOf(b.split(',')[0]);
    }).forEach(key => {
        sortedTransaksiMingguan[key] = transaksiMingguan[key];
    });

    return sortedTransaksiMingguan;
}
    
    
        
            
     
    
function rekapMingguan(transaksiHarian) {
    let totalStokTerjual = 0;
    let totalPendapatanKotor = 0;
    let totalPendapatanBersih = 0;
    let rekap = "Rekap Mingguan:\n\n";

    const sortedDates = Object.keys(transaksiHarian).sort((a, b) => {
        const dateA = new Date(a.split(',')[1]);
        const dateB = new Date(b.split(',')[1]);
        return dateA - dateB;
    });

    sortedDates.forEach((tanggal, index) => {
        const dataTransaksi = transaksiHarian[tanggal];
        let stokTerjualHarian = 0;
        let pendapatanKotorHarian = 0;
        let pendapatanBersihHarian = 0;

        dataTransaksi.forEach(data => {
            stokTerjualHarian += parseInt(data.jumlah);
            pendapatanKotorHarian += parseInt(data.harga) * parseInt(data.jumlah);
            pendapatanBersihHarian += parseInt(data.profit) * parseInt(data.jumlah);
        });

        totalStokTerjual += stokTerjualHarian;
        totalPendapatanKotor += pendapatanKotorHarian;
        totalPendapatanBersih += pendapatanBersihHarian;
    rekap += `- Total  Stok Terjual: ${totalStokTerjual}\n`;
    rekap += `- Total Pendapatan Kotor: Rp. ${totalPendapatanKotor.toLocaleString()}\n`;
    rekap += `- Total Pendapatan Bersih: Rp. ${totalPendapatanBersih.toLocaleString()}\n`;

        rekap += `${index + 1}. ${new Date(tanggal.split(',')[1]).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n`;
        rekap += `- Stok Terjual: ${stokTerjualHarian}\n`;
        rekap += `- Pendapatan Kotor: Rp. ${pendapatanKotorHarian.toLocaleString()}\n`;
        rekap += `- Pendapatan Bersih: Rp. ${pendapatanBersihHarian}\n\n`;
    });

    
    return rekap;
}
   
    
   
   
   
        

       

function rekapBulanan(transaksiHarian) {
    let totalStokTerjual = 0;
    let totalPendapatanKotor = 0;
    let totalPendapatanBersih = 0;
    let rekap = "Rekap Bulanan:\n\n";

    // Objek untuk menyimpan total stok terjual, pendapatan kotor, dan pendapatan bersih setiap bulan
    const bulanan = {};

    // Mengelompokkan transaksi berdasarkan bulan
    Object.entries(transaksiHarian).forEach(([tanggal, dataTransaksi]) => {
        const bulan = new Date(tanggal).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

        if (!bulanan[bulan]) {
            bulanan[bulan] = {
                stokTerjual: 0,
                pendapatanKotor: 0,
                pendapatanBersih: 0,
                transaksiPerHari: {}
            };
        }

        // Mengelompokkan transaksi per hari dalam bulan
        dataTransaksi.forEach(data => {
            const hari = new Date(data.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            if (!bulanan[bulan].transaksiPerHari[hari]) {
                bulanan[bulan].transaksiPerHari[hari] = [];
            }

            bulanan[bulan].transaksiPerHari[hari].push(data);
        });

        // Menghitung total stok terjual, pendapatan kotor, dan pendapatan bersih per bulan
        dataTransaksi.forEach(data => {
            bulanan[bulan].stokTerjual += parseInt(data.jumlah);
            bulanan[bulan].pendapatanKotor += parseInt(data.harga) * parseInt(data.jumlah);
            bulanan[bulan].pendapatanBersih += parseInt(data.profit) * parseInt(data.jumlah);
        });
    });

    // Menampilkan rekap bulanan
    Object.entries(bulanan).forEach(([bulan, dataBulan]) => {
        rekap += `${bulan}:\n`;

        // Menampilkan rekap per hari dalam bulan
        Object.entries(dataBulan.transaksiPerHari).forEach(([hari, transaksiHari]) => {
            rekap += `- ${hari}:\n`;
            transaksiHari.forEach(transaksi => {
                rekap += `  - Stok Terjual: ${transaksi.jumlah}\n`;
                rekap += `  - Pendapatan Kotor: Rp. ${(parseInt(transaksi.harga) * parseInt(transaksi.jumlah)).toLocaleString()}\n`;
                rekap += `  - Pendapatan Bersih: Rp. ${(parseInt(transaksi.profit) * parseInt(transaksi.jumlah)).toLocaleString()}\n\n`;
            });
        });

        rekap += `- Total Stok Terjual: ${dataBulan.stokTerjual}\n`;
        rekap += `- Total Pendapatan Kotor: Rp. ${dataBulan.pendapatanKotor.toLocaleString()}\n`;
        rekap += `- Total Pendapatan Bersih: Rp. ${dataBulan.pendapatanBersih.toLocaleString()}\n\n`;

        // Menambahkan total stok terjual, pendapatan kotor, dan pendapatan bersih
        totalStokTerjual += dataBulan.stokTerjual;
        totalPendapatanKotor += dataBulan.pendapatanKotor;
        totalPendapatanBersih += dataBulan.pendapatanBersih;
    });

    // Menambahkan total bulanan ke rekap
    

    return rekap;
}
// Membaca data transaksi dari file JSON
const transaksi = JSON.parse(fs.readFileSync('Pengaturan/database/trxapp.json', 'utf8'));
const tipeRekap = text.split(" ")[0];
switch (tipeRekap) {
        case 'harian':
            const harian = kelompokkanTransaksi(transaksi);
            const hasilRekap3 = rekapMingguan(harian);
            reply(hasilRekap3);
            break;
        case 'mingguan':
            const minggu = kelompokkanTransaksi(transaksi);
            const hasilRekap2 = rekapMingguan(minggu);
            reply(hasilRekap2);
            break;
        case 'bulanan':
           const bulan = bulankelompok(transaksi);
           const hasilRekap1 = rekapBulanan(bulan);
            reply(hasilRekap1);
            break;
        default:
            hasilRekap = "Tipe rekap tidak valid";
    }
    }
    break;
    case 'cancel':{
if(!fs.existsSync(`./Pengaturan/database/deposit/otomatis/${m.sender.split("@")[0]}.json`)) return reply('Anda Belum Melakukan deposit')  
let data_depo = JSON.parse(fs.readFileSync(PathOto + sender.split("@")[0] + ".json"))
var FormData = require('form-data');
var data = new FormData();
const key = global.keydepo;
const signature = md5(key + data_depo.ref + 'CancelTransaction')
data.append('key', key);
data.append('request', 'cancel');
data.append('unique_code', data_depo.ref);
data.append('signature', signature);

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://paydisini.co.id/api/',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  reply(`Deposif Dengan ID: ${data_depo.ref} Berhasil Di Batalkan`) 
  fs.unlinkSync(PathOto + m.sender.split("@")[0] + ".json")
})
.catch(function (error) {
reply(`Error`) 
  console.log(error);
});
}
break



case 'deposit':{
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}


    const fs = require('fs');
    const path = require('path');
    
    if (fs.existsSync(PathOto + m.sender.split('@')[0] + '.json')) return reply(`Selesaikan Deposit Anda Sebelumnya Untuk Membatalkan Silahkan Ketil #cancel`);

    var FormData = require('form-data');
    let no = q.split(" ")[0];
    if (!no) return reply(`Jumlah Nya mana?\n.depopay nominal`);
    let reff_deposi = require("crypto").randomBytes(5).toString("hex").toUpperCase();
    const url = 'https://paydisini.co.id/api/';
    const key = global.keydepo;
    const unikcode = `${reff_deposi}`;
    const notecode = `${randomString}`;
    const serv = '11';
    const memberNumber = m.sender.split('@')[0];
    const validt = '1800';
    const nominal = Number(no);
    const signature = md5(key + unikcode + serv + nominal + validt + 'NewTransaction');

    const data = new FormData();
    data.append('key', key);
    data.append('request', 'new');
    data.append('unique_code', unikcode);
    data.append('service', '11');
    data.append('amount', nominal);
    data.append('note', notecode);
    data.append('valid_time', validt);
    data.append('type_fee', '1');
    data.append('signature', signature);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });

        const responseData = await response.json();
        if (responseData.success) {
            const data = responseData.data;

            let teks = `✦━━━━━━━━━━━━━━━━━✦
*KONFIRMASI PEMBAYARAN*
✦━━━━━━━━━━━━━━━━━✦

⍟ Ref Id :  ${data.unique_code}
⍟ Jumlah Deposit : ${nominal}
⍟ Fee : ${formatmoney(data.fee)}
⍟ Saldo Diterima : ${data.balance}
⍟ Total : ${formatmoney(data.amount)}

Silahkan Scan QRIS Tersebut Sebelum waktu expired 5 Menit Lalau Jika sudah melakukan pembayaran silahkan ketik #cekdepo`;
            let gambr = { url: data.qrcode_url };
            balz.sendMessage(from, { image: gambr, caption: teks });
            let obj = {
                id: memberNumber,
                ref: `${data.unique_code}`,
                jumlah_bayar: data.amount,
                jumlah_deposit: nominal,
                saldo_diterima: data.balance,
                pay: "QRIS",
                biaya_layanan: data.fee
            };

            // Pastikan direktori ada sebelum membuat file
            const filePath = PathOto + m.sender.split('@')[0] + '.json';
            ensureDirectoryExistence(filePath);

            // Tulis file
            fs.writeFileSync(filePath, JSON.stringify(obj));
        } else {
            reply(`Error: ${responseData.msg}`);
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        m.reply('Terjadi kesalahan saat memproses transaksi, silakan coba lagi nanti.');
    }
    }
    break;      
case 'cekdepo':{
if(!fs.existsSync(`./Pengaturan/database/deposit/otomatis/${m.sender.split("@")[0]}.json`)) return reply('Anda Belum Melakukan deposit')   
let data_depo = JSON.parse(fs.readFileSync(PathOto + sender.split("@")[0] + ".json")) 
const url = 'https://paydisini.co.id/api/';
const keyy = global.keydepo
const ref = data_depo.ref
var nom = Number(data_depo.saldo_diterima) 
const statusSignature = md5(keyy + ref + 'StatusTransaction');
var FormData = require('form-data');
var data = new FormData();
data.append('key', keyy);
data.append('request', 'status');
data.append('unique_code', ref);
data.append('signature', statusSignature);

try {
    const response = await fetch(url, {
            method: 'POST',
            body: data
        });

        const responseData = await response.json();
        if (responseData.success) {
            const data = responseData.data;
 if (data.status === "Success") { 
sett("+saldo", m.sender, nom);             
var lop = `✅ *Deposit Berhasil!*

Deposit Anda telah berhasil diproses. Berikut detailnya:

- *Nomor Transaksi:* _${data_depo.ref}_
- *Jumlah Deposit:* _${data_depo.saldo_diterima}_
- *Metode Pembayaran:* _${data_depo.pay}_
- *Tanggal:* _${data.created_at}_
- *Saldo Anda :* _${cek("saldo", m.sender)}_

Saldo Anda sekarang telah diperbarui. Terima kasih atas depositnya!

---`
reply(lop);
fs.unlinkSync(PathOto + m.sender.split("@")[0] + ".json")
} else {
reply(`Deposit Anda Masih Pending Silahkan Transfer Terlebih Dahulu Ke Qris Yang Di Sediakan`) 
    }
}
} catch (error) {

        console.error('Terjadi kesalahan:', error);

        m.reply('Terjadi kesalahan saat memproses transaksi, silakan coba lagi nanti.');

    }
    }    
    break
 case 'setdesk':{

function editHarga(kode, hargaBaru) {
    fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const database = JSON.parse(data);
        
        database.stok.forEach(item => {
            if (item.kode === kode) {
                item.desk = hargaBaru;
            }
        });
        
        fs.writeFile('Pengaturan/database/stok_akun.json', JSON.stringify(database, null, 4), err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            reply('Deskripsi telah berhasil diubah.');
        });
    });
}

// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
const kodeProduk = text.split("°^")[0]; // Ganti dengan kode produk yang ingin diubah harganya
const hargaBaruProduk = text.split(" ")[1]; // Ganti dengan harga baru produk
if(!kodeProduk || !hargaBaruProduk) return reply(" contoh #setharga kode deskripsi") 
editHarga(kodeProduk, hargaBaruProduk);
}
break      
case 'listprofit':{
// Contoh pemanggilan fungsi editHarga
if(!isOwner) return reply(mess.owner) 
// Baca data dari file database.json
fs.readFile('Pengaturan/database/stok_akun.json', 'utf8', (err, data) => {
    if (err) {
        const errorMessage = "Gagal membaca file: " + err.message;
        reply(errorMessage);
        return;
    }

    try {
        // Parse data JSON
        const jsonData = JSON.parse(data);

        // Membuat objek untuk menyimpan profit dari setiap item
        const profitMap = {};

        // Iterasi melalui array stok dan mengumpulkan profit dari setiap item
        jsonData.stok.forEach(item => {
            if (item.profit !== undefined && item.profit !== null && item.profit !== "") {
                profitMap[item.kode] = parseInt(item.profit);
            }
        });

        // Menyiapkan pesan balasan dengan daftar profit
        let replyMessage = "LIST PROFIT\n";
        Object.keys(profitMap).forEach(kode => {
            replyMessage += `- ${kode} : ${profitMap[kode]}\n`;
        });

        // Mengirim pesan balasan
        reply(replyMessage);
    } catch (error) {
        const errorMessage = "Gagal memproses data JSON: " + error.message;
        reply(errorMessage);
    }
});
}
break;
case 'addstok': {
    if(!isOwner) return;
    const textParts = text.split("|");
    const title = textParts[0];
    const code = textParts[1];
    const harga = textParts[2];
    const description = textParts[3];
    const email = textParts[4];
    const password = textParts[5];
   if(!title || !code || !harga || !description || !email || !password) return reply("Format Yang Benar Adalah:\n#addstok nama|kode|harga|deskripsi|email|pw") 
    const databaseFile = 'Pengaturan/database/stok_akun.json';
    const newText = `${title}|${code}|${harga}|${description}|${email}|${password}`;
    
    tambahStok(databaseFile, newText);
    break;
}

        
case 'addakun': {
    if(!isOwner) return;
    const database = "Pengaturan/database/stok_akun.json";
    const kodeProduk = text.split("|")[0];
    if(!kodeProduk) return reply(`format penambahan akun: #addakun Kode|email|pw\n|email|pw \ndan seterusnya`);
    const akunBaru = [];
    let i = 1;
    while (i * 2 - 1 < text.split("|").length) {
        const email = text.split("|")[i * 2 - 1];
        const password = text.split("|")[i * 2];
        
        if (email && password) {
            akunBaru.push({ email, password });
        } else {
            break; // Keluar dari loop jika tidak ada email dan password
        }
        i++;
    }
    if (akunBaru.length > 0) {
        tambahAkun(database, kodeProduk, ...akunBaru);
    } else {
        reply("Tidak ada data akun baru yang diisi.");
    }
}
break;
case 'buynow':{
const kode = text.split(" ")[0]
const jml = text.split(" ")[1]
if(!kode || !jml) return reply(" contoh #buynow spo1b 2") 
appprem(kode, jml) 
}
break    
case 'stok':{
function generateStokInfo(database) {
    // Baca file database
    fs.readFile(database, 'utf8', (err, fileData) => {
        if (err) {
            console.error("Gagal membaca file database:", err);
            return;
        }

        // Parse konten JSON dari file
        let jsonContent = JSON.parse(fileData);
        let stok = jsonContent.stok;

        // Menambahkan informasi stok ke dalam pesan
        let message = `*╭────〔 BOT AUTO ORDER 〕─*
*┊・* Untuk membeli Ketik Perintah Berikut
*┊・* #buynow Kode(spasi)JumlahAkun
*┊・* Ex: #buynow spo1b 2
*┊・* Pastikan Code & Jumlah Akun di Ketik dengan benar
*╰┈┈┈┈┈┈┈┈*\n`;
        stok.forEach((item, index) => {
            var ttl_stok = Number(item.stok) 
            var jl_stok = Number(item.stokTerjual) 
            message += `*╭────〔 ${item.judul} 〕─*\n`;
            message += `*┊・* *Harga:* ${item.harga}\n`;
            message += `*┊・* *Stok Tersedia:* ${item.stok}\n`;
            message += `*┊・* *Stok Terjual:* ${item.stokTerjual}\n`;
            let jumlahAkun = item.stokDetail.akun.length;
            message += `*┊・* *Total Stok:* ${ttl_stok + jl_stok}\n`;
            message += `*┊・* *Kode:* ${item.kode}\n`;
            message += `*┊・* *Desk:* ${item.desk}\n`;
            message +=  `*╰┈┈┈┈┈┈┈┈*\n`;
            // Menambahkan jumlah akun (email dan password) yang tersedia
            
            if (jumlahAkun > 0) {
                
                item.stokDetail.akun.forEach((akun, index) => {
                    
                });
            }

            
        });                      
        reply(message);
    });
}

// Panggil fungsi untuk menghasilkan informasi stok
generateStokInfo("Pengaturan/database/stok_akun.json");
}
break    
case 'ceksaldo':
case 'saldo':{

        // Membuat pesan balasan dengan detail akun, saldo, total transaksi, dan total belanja untuk pengguna target
        let myde = `*──「 DETAIL AKUN ANDA  」───* 

*○*  *Name :* ${pushname}
*○*  *Id :* ${sender.replace("@s.whatsapp.net", "")}
*○*  *Saldo :*  ${formatmoney(cek("saldo", m.sender))}

𝘐𝘯𝘨𝘪𝘯 𝘥𝘦𝘱𝘰𝘴𝘪𝘵 𝘴𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘬𝘦𝘵𝘪𝘬 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 *.depo*`
        
        // Mengirimkan pesan dengan detail akun dan transaksi untuk pengguna target
        reply(myde);
    }
    break;        
 case 'buy': {
  const fs = require('fs');

  // Fungsi untuk membaca file JSON
  function readJSONFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  }

  // Fungsi untuk menulis file JSON
  function writeJSONFile(filePath, data) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
  }

  // Fungsi untuk memverifikasi dan menggunakan voucher
  function verifyVoucher(voucherCode, buyerPhone) {
    const vouchers = readJSONFile('./voucher.json');
    const voucherIndex = vouchers.findIndex(v => v.voucher === voucherCode && v.buyer === buyerPhone && v.status === 'Tersedia');
    if (voucherIndex !== -1) {
      vouchers[voucherIndex].status = 'Terpakai';
      writeJSONFile('./voucher.json', vouchers);
      return vouchers[voucherIndex].potongan;
    }
    return 0;
  }

  // Fungsi untuk menjalankan pembelian
  function buyMan(database, kodeProduk, jumlahAkun, sender, voucherCode) {
    fs.readFile(database, 'utf8', (err, fileData) => {
      if (err) {
        console.error("Gagal membaca file database:", err);
        return;
      }

      let jsonContent = JSON.parse(fileData);
      let produk = jsonContent.stok.find((item) => item.kode === kodeProduk);

      if (!produk) {
        reply("Kode Produk Yang Anda Berikan tidak ditemukan dalam database.");
        return;
      }

      const { hargaPerAkun, title, harga, desk, profit } = calculatePriceAndTotalPrice(produk, jumlahAkun);
      const perakun = parseInt(hargaPerAkun);
      const per = parseInt(profit);
      const angka2 = parseInt(jumlahAkun);
      const slo = cek("saldo", m.sender);

      // Verifikasi voucher jika ada
      const potonganHarga = voucherCode ? verifyVoucher(voucherCode, m.sender) : 0;
      const ttl = (perakun * angka2) - potonganHarga;

      if (produk.stok < jumlahAkun) {
        reply("Stok tidak mencukupi untuk melakukan transaksi.");
        return;
      }

      if (slo < ttl) {
        reply("Saldo anda tidak mencukupi untuk membeli produk itu silahkan deposit terlebih dahulu.");
        return;
      }

      produk.stok -= angka2;
      produk.stokTerjual += angka2;

      fs.writeFile(database, JSON.stringify(jsonContent, null, 4), 'utf8', (err) => {
        if (err) {
          console.error("Gagal menulis ke file database:", err);
          return;
        }

        sett("-saldo", m.sender, ttl);
        const ak = cek("saldo", m.sender);
        let additionalResponse = `╭────〔 TRANSAKSI SUKSES 〕─\n`;
        additionalResponse += `┊・ *ID TRX :* ${reffID}\n`;
        additionalResponse += `┊・ *Service :* ${title}\n`;
        additionalResponse += `┊・ *Nomor :* ${m.sender.split(" ")[0]}\n`;
        additionalResponse += `┊・ *Jumlah Beli :* ${jumlahAkun}\n`;
        additionalResponse += `┊・ *Harga :* ${formatmoney(perakun)}\n`;
        additionalResponse += `┊・ *Total Dibayar :* ${formatmoney(ttl)}\n`;
        additionalResponse += `┊・ *Saldo Awal :* ${formatmoney(slo)}\n`;
        additionalResponse += `┊・ *Saldo Akhir :* ${formatmoney(ak)}\n`;
        additionalResponse += `┊・ *Desc :* ${desk}\n`;
        additionalResponse += `┊・ *Tanggal Transaksi :* ${tanggal3}\n`;
        additionalResponse += `┊・ *Jam Transaksi :* ${jam}\n`;
        additionalResponse += `╰┈┈┈┈┈┈┈┈\n\n`;

        const akunDibelii = generateAccounts(produk.stokDetail.akun, jumlahAkun);
        akunDibelii.forEach((akun, index) => {
          additionalResponse += `*╭────〔 ACCOUNT DETAIL ${index + 1} 〕─*\n`;
          additionalResponse += `┊・ *User/Email :* ${akun.email}\n`;
          additionalResponse += `┊・ *Password :* ${akun.password}\n`;
          additionalResponse += `*╰┈┈┈┈┈┈┈┈*\n`;

          removeAccount(database, akun.email, jumlahAkun);
        });

        additionalResponse += `*– DIMOHON UNTUK MENYIMPAN STRUK INI SENDIRI*\n`;
        additionalResponse += `*– BOT/OWNER TIDAK AKAN MENAMPILKAN ULANG DETAIL ACCOUNT YANG SUDAH DIBELI*\n`;
        reply(additionalResponse);
        
        const trxFilePath = './Pengaturan/database/trxapp.json';
        const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const waktu = cekWaktu();
        const newTransactionData = {
          kode: kodeProduk,
          harga: perakun,
          date: waktu,  
          profit: per,         
          jumlah: jumlahAkun
        };
        trxUserData.push(newTransactionData);
        fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
        
        balz.sendMessage(from, {text:additionalResponse});
      });
    });
  }

  // Contoh pemanggilan fungsi
  const database = "Pengaturan/database/stok_akun.json";
  const parts = text.split(" ");
  const kodeProduk = parts[1]; // Kode produk
  const jumlahAkun = parts[2]; // Jumlah akun
  const voucherCode = parts[3] || null; // Voucher code, if provided

  if (!kodeProduk || !jumlahAkun) return reply("Contoh: #buy kode jumlah voucher (voucher opsional)");

  buyMan(database, kodeProduk, jumlahAkun, m.sender, voucherCode);
}
break;
default:
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
balz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
balz.sendMessage("6200000@s.whatsapp.net", { text: "assalamualaikum Owner Ada Fitur Yang Eror Nih " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
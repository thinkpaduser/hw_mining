const { Telegraf } = require('telegraf');
const req          = require('got');
const config       = require('config');

const knownMiners = {
    thinkpaduser: "0x7368b75a27e2f3dadaff2af028d6126314e958fe",
    day_forum:    "0xe632a603152542e0b38b1bf3229dc8ccf0f570e6",
    himayui:      "0x23b3a7f89ec95031fdbf109160fa2449f3047e94",
    kelly:        "0xedb3f70fd3807c1b08ca40190a84adbaa7ba596c",
};

const isKnownMiner = name => knownMiners[name] !== undefined;

const ethBalance = async address => {
    const url_prefix = 'https://api.nanopool.org/v1/eth/user/';
    const response   = await req(`${url_prefix}${address}`);
    const parsed     = JSON.parse(response.body);
    return r.data;
};

const minPayout = async address => {
    const url_prefix = 'https://api.nanopool.org/v1/eth/usersettings/';
    const response   = await req(`${url_prefix}${address}`);
    const parsed     = JSON.parse(resp.body);
    return parsed.data.payout;
};

const avg6 = async address => {
	const url_prefix = 'https://api.nanopool.org/v1/eth/avghashrate/';
	const response   = await req(`${url_prefix}${address}`);
	const parsed     = JSON.parse(resp.body);
	return parsed.data.h6;
};

const currencies = async () => {
    const address  = 'https://api.nanopool.org/v1/eth/prices';
    const response = await req(address);
    return JSON.parse(response.body);
};

const process = dto => {
	return `У *${p.miner === 'me' ? 'thinkpaduser' : dto.miner}* уже *${dto.balance_data.balance}* ETH. Огоооо!\n` +
		`*USD*: ${(dto.rates.data.price_usd * dto.balanceData.balance).toFixed(2)}\n` +
		`*RUR*: ${(dto.rates.data.price_rur * dto.balanceData.balance).toFixed(2)}\n\n` +
		`Avg 6H hashrate: *${(dto.avg6_hash_rate).toFixed(2)}* MH/s\n` +
		`Процент от *${dto.p}ETH:* ${(100 * dto.balanceData.balance / dto.p).toFixed(2)}%\n\n` +
		`*ETH-USD*: ${dto.rates.data.price_usd}\n` +
		`*ETH-RUR*: ${dto.rates.data.price_rur}`;
};

const bot = new Telegraf(config.get('token'));

bot.hears(/info (.*)/,  async ctx => {
    const m = ctx.match[1];
    const miner = m.toLowerCase();
	
    if ( !isKnownMiner(miner) ) {
        ctx.reply('Нахуй съебал!');
        return;
    };

    const rates          = await currencies();
    const avg6HashRate   = await avg6(knownMiners[miner]);
    const balanceData    = await ethBalance(knownMiners[miner]);
    const minPayout      = await minPayout(knownMiners[miner]);
	
    ctx.replyWithMarkdown(process({miner, minPayout, balanceData, rates, avg6HashRate}));
});

bot.command('get', async ctx => {
	const m = ctx.from.username;
	const miner = m.toLowerCase();

	if ( !isKnownMiner(miner) ) {
		ctx.reply('Нахуй съебал!');
		return;
	};

	const rates          = await currencies();
	const balanceData    = await ethBalance(knownMiners[miner]);
        const avg6HashRate   = await avg6(knownMiners[miner]);
	const minPayout      = await minPayout(knownMiners[miner]);
	
	ctx.replyWithMarkdown(process({miner, minPayout, balanceData, rates, avg6HashRate}));
});

const _whatToDo = () => {
	const seriousInvestmentDynamics = Math.random() * 100;
	if ( seriousInvestmentDynamics > 1 && seriousInvestmentDynamics < 33 )  return 'Докупаем!';
	if ( seriousInvestmentDynamics > 32 && seriousInvestmentDynamics < 66 ) return 'Закупаем!';
	return 'Фиксируем прибыль!';
};


bot.command('cur_rate', async ctx => {
	const cur = await currencies();
	ctx.replyWithMarkdown(`${new Date()}\n*ETH-USD*: ${cur.data.price_usd}\n*ETH-RUR*: ${cur.data.price_rur}\nПо данным аналитики рынка криптовалют, мой совет - *${_whatToDo()}*`);
});

bot.command('jolly_roger', ctx => ctx.replyWithMarkdown('Джолли все еще ищет блок в соло-майнинге. Пока не нашел'));

bot.launch();

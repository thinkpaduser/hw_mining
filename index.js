const { Telegraf } = require('telegraf');
const req          = require('got');
const config       = require('config');

const knownMiners = {
    thinkpaduser: "0x7368b75a27e2f3dadaff2af028d6126314e95qwe",
    day_forum:    "0xe632a603152542e0b38b1bf3229dc8ccf0f57qwe",
};

const isKnownMiner = name => knownMiners[name] !== undefined;

const fetchEthBalance = async address => {
    const url_prefix = 'https://api.nanopool.org/v1/eth/user/';
    const response   = await req(`${url_prefix}${address}`);
    const r          = JSON.parse(response.body);
    return r.data;
};

const fetchMinPayout = async address => {
    const url_prefix = 'https://api.nanopool.org/v1/eth/usersettings/';
    const resp       = await req(`${url_prefix}${address}`);
    const parsed     = JSON.parse(resp.body);
    return parsed.data.payout;
};

const avg6 = async address => {
	const url_prefix = 'https://api.nanopool.org/v1/eth/avghashrate/';
	const resp       = await req(`${url_prefix}${address}`);
	const parsed     = JSON.parse(resp.body);
	return parsed.data.h6;
};

const currencies = async () => {
    const address  = 'https://api.nanopool.org/v1/eth/prices';
    const response = await req(address);
    return JSON.parse(response.body);
};

const _process = p => {
	return `У *${p.miner === 'me' ? 'thinkpaduser' : p.miner}* уже *${p.balance_data.balance}* ETH. Огоооо!\n` +
		`*USD*: ${(p.rates.data.price_usd * p.balance_data.balance).toFixed(2)}\n` +
		`*RUR*: ${(p.rates.data.price_rur * p.balance_data.balance).toFixed(2)}\n\n` +
		`Avg 6H hashrate: *${(p.avg6_hash_rate).toFixed(2)}* MH/s\n` +
		`Процент от *${p.p}ETH:* ${(100 * p.balance_data.balance / p.p).toFixed(2)}%\n\n` +
		`*ETH-USD*: ${p.rates.data.price_usd}\n` +
		`*ETH-RUR*: ${p.rates.data.price_rur}`;
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
    const avg6_hash_rate = await avg6(knownMiners[miner]);
    const balance_data   = await fetchEthBalance(knownMiners[miner]);
    const p              = await fetchMinPayout(knownMiners[miner]);
    ctx.replyWithMarkdown(_process({miner, p, balance_data, rates, avg6_hash_rate}));
});

bot.command('get', async ctx => {
	const m = ctx.from.username;
	const miner = m.toLowerCase();
	console.log(`[${new Date()}] [${miner}] called 'get'`);
	if ( !isKnownMiner(miner) ) {
		ctx.reply('Нахуй съебал!');
		return;
	};

	const rates          = await currencies();
	const balance_data   = await fetchEthBalance(knownMiners[miner]);
        const avg6_hash_rate = await avg6(knownMiners[miner]);
	const p              = await fetchMinPayout(knownMiners[miner]);
	ctx.replyWithMarkdown(_process({miner, p, balance_data, rates, avg6_hash_rate}));
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
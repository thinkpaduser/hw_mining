const _0xb64d=['37QDVoVU','*\x20ETH.\x20Огоооо!\x0a','*RUR*:\x20','from','config','launch','*ETH-RUR*:\x20','1082qsvgov','body','data','\x0a*ETH-RUR*:\x20','%\x0a\x0a','Процент\x20от\x20*','avg6_hash_rate',']\x20called\x20\x27get\x27','username','balance','token','parse','https://api.nanopool.org/v1/eth/user/','Закупаем!','log','ETH:*\x20','597399dXANqf','payout','telegraf','replyWithMarkdown','Докупаем!','https://api.nanopool.org/v1/eth/usersettings/','13OZksca','thinkpaduser','*\x20уже\x20*','771OgcMno','\x0a*ETH-USD*:\x20','match','17543HocfYe','miner','toFixed','command','*ETH-USD*:\x20','toLowerCase','price_rur','240042tawlcS','Фиксируем\x20прибыль!',']\x20[','jolly_roger','*USD*:\x20','*\x20MH/s\x0a','587653rdluaM','0xe632a603152542e0b38b1bf3229dc8ccf0f57qwe','reply','rates','Нахуй\x20съебал!','6276IiSUjx','\x0aПо\x20данным\x20аналитики\x20рынка\x20криптовалют,\x20мой\x20совет\x20-\x20*','balance_data','get','hears','217592iOaQmj','1kzIjvW'];const _0x366a=function(_0x1951d1,_0x50312e){_0x1951d1=_0x1951d1-0x96;let _0xb64dde=_0xb64d[_0x1951d1];return _0xb64dde;};const _0x510aa=_0x366a;(function(_0x1b904b,_0x12ae43){const _0x2db023=_0x366a;while(!![]){try{const _0x30e9d7=-parseInt(_0x2db023(0x9b))*parseInt(_0x2db023(0xa2))+parseInt(_0x2db023(0xb9))+parseInt(_0x2db023(0xbf))*parseInt(_0x2db023(0xc5))+parseInt(_0x2db023(0x96))+-parseInt(_0x2db023(0xa1))*-parseInt(_0x2db023(0xa0))+-parseInt(_0x2db023(0xcc))+parseInt(_0x2db023(0xc2))*-parseInt(_0x2db023(0xa9));if(_0x30e9d7===_0x12ae43)break;else _0x1b904b['push'](_0x1b904b['shift']());}catch(_0x1d6e56){_0x1b904b['push'](_0x1b904b['shift']());}}}(_0xb64d,0x4f283));const {Telegraf}=require(_0x510aa(0xbb)),req=require('got'),config=require(_0x510aa(0xa6)),knownMiners={'thinkpaduser':'0x7368b75a27e2f3dadaff2af028d6126314e95qwe','day_forum':_0x510aa(0x97)},isKnownMiner=_0x41a414=>knownMiners[_0x41a414]!==undefined,fetchEthBalance=async _0x5707fc=>{const _0x38d237=_0x510aa,_0x20bdae=_0x38d237(0xb5),_0x503bdf=await req(''+_0x20bdae+_0x5707fc),_0x554395=JSON[_0x38d237(0xb4)](_0x503bdf[_0x38d237(0xaa)]);return _0x554395[_0x38d237(0xab)];},fetchMinPayout=async _0x1f3d71=>{const _0x3a3807=_0x510aa,_0xeecdb3=_0x3a3807(0xbe),_0x38036=await req(''+_0xeecdb3+_0x1f3d71),_0x6683e3=JSON[_0x3a3807(0xb4)](_0x38036[_0x3a3807(0xaa)]);return _0x6683e3[_0x3a3807(0xab)][_0x3a3807(0xba)];},avg6=async _0x449d70=>{const _0x1a2fa9=_0x510aa,_0x214f94='https://api.nanopool.org/v1/eth/avghashrate/',_0x4d817c=await req(''+_0x214f94+_0x449d70),_0x233933=JSON[_0x1a2fa9(0xb4)](_0x4d817c[_0x1a2fa9(0xaa)]);return _0x233933[_0x1a2fa9(0xab)]['h6'];},currencies=async()=>{const _0x235be8=_0x510aa,_0x310f0a='https://api.nanopool.org/v1/eth/prices',_0x36a980=await req(_0x310f0a);return JSON['parse'](_0x36a980[_0x235be8(0xaa)]);},_process=_0x41b0a0=>{const _0x10775f=_0x510aa;return'У\x20*'+(_0x41b0a0['miner']==='me'?_0x10775f(0xc0):_0x41b0a0[_0x10775f(0xc6)])+_0x10775f(0xc1)+_0x41b0a0['balance_data'][_0x10775f(0xb2)]+_0x10775f(0xa3)+(_0x10775f(0xd0)+(_0x41b0a0['rates'][_0x10775f(0xab)]['price_usd']*_0x41b0a0[_0x10775f(0x9d)][_0x10775f(0xb2)])[_0x10775f(0xc7)](0x2)+'\x0a')+(_0x10775f(0xa4)+(_0x41b0a0[_0x10775f(0x99)][_0x10775f(0xab)]['price_rur']*_0x41b0a0[_0x10775f(0x9d)][_0x10775f(0xb2)])['toFixed'](0x2)+'\x0a\x0a')+('Avg\x206H\x20hashrate:\x20*'+_0x41b0a0[_0x10775f(0xaf)][_0x10775f(0xc7)](0x2)+_0x10775f(0xd1))+(_0x10775f(0xae)+_0x41b0a0['p']+_0x10775f(0xb8)+(0x64*_0x41b0a0[_0x10775f(0x9d)]['balance']/_0x41b0a0['p'])[_0x10775f(0xc7)](0x2)+_0x10775f(0xad))+(_0x10775f(0xc9)+_0x41b0a0[_0x10775f(0x99)]['data']['price_usd']+'\x0a')+(_0x10775f(0xa8)+_0x41b0a0[_0x10775f(0x99)][_0x10775f(0xab)][_0x10775f(0xcb)]);},bot=new Telegraf(config[_0x510aa(0x9e)](_0x510aa(0xb3)));bot[_0x510aa(0x9f)](/info (.*)/,async _0x108e65=>{const _0x2985c3=_0x510aa,_0x24bfc3=_0x108e65[_0x2985c3(0xc4)][0x1],_0x5c6835=_0x24bfc3[_0x2985c3(0xca)]();if(!isKnownMiner(_0x5c6835)){_0x108e65[_0x2985c3(0x98)](_0x2985c3(0x9a));return;};const _0x70f97a=await currencies(),_0x4cf1a0=await avg6(knownMiners[_0x5c6835]),_0x4a03e3=await fetchEthBalance(knownMiners[_0x5c6835]),_0x456459=await fetchMinPayout(knownMiners[_0x5c6835]);_0x108e65['replyWithMarkdown'](_process({'miner':_0x5c6835,'p':_0x456459,'balance_data':_0x4a03e3,'rates':_0x70f97a,'avg6_hash_rate':_0x4cf1a0}));}),bot[_0x510aa(0xc8)](_0x510aa(0x9e),async _0x391964=>{const _0x36e384=_0x510aa,_0xd990d0=_0x391964[_0x36e384(0xa5)][_0x36e384(0xb1)],_0x5ce28b=_0xd990d0[_0x36e384(0xca)]();console[_0x36e384(0xb7)]('['+new Date()+_0x36e384(0xce)+_0x5ce28b+_0x36e384(0xb0));if(!isKnownMiner(_0x5ce28b)){_0x391964[_0x36e384(0x98)](_0x36e384(0x9a));return;};const _0x227562=await currencies(),_0x2339ce=await fetchEthBalance(knownMiners[_0x5ce28b]),_0x5c0e53=await avg6(knownMiners[_0x5ce28b]),_0x488b79=await fetchMinPayout(knownMiners[_0x5ce28b]);_0x391964['replyWithMarkdown'](_process({'miner':_0x5ce28b,'p':_0x488b79,'balance_data':_0x2339ce,'rates':_0x227562,'avg6_hash_rate':_0x5c0e53}));});const _whatToDo=()=>{const _0x13d367=_0x510aa,_0x527544=Math['random']()*0x64;if(_0x527544>0x1&&_0x527544<0x21)return _0x13d367(0xbd);if(_0x527544>0x20&&_0x527544<0x42)return _0x13d367(0xb6);return _0x13d367(0xcd);};bot[_0x510aa(0xc8)]('cur_rate',async _0x34a8a7=>{const _0x70a96e=_0x510aa,_0x157648=await currencies();_0x34a8a7['replyWithMarkdown'](new Date()+_0x70a96e(0xc3)+_0x157648[_0x70a96e(0xab)]['price_usd']+_0x70a96e(0xac)+_0x157648[_0x70a96e(0xab)][_0x70a96e(0xcb)]+_0x70a96e(0x9c)+_whatToDo()+'*');}),bot['command'](_0x510aa(0xcf),_0x15b52f=>_0x15b52f[_0x510aa(0xbc)]('Джолли\x20все\x20еще\x20ищет\x20блок\x20в\x20соло-майнинге.\x20Пока\x20не\x20нашел')),bot[_0x510aa(0xa7)]();
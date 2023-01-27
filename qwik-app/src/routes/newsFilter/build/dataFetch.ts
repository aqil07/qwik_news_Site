import { allArticlesSchema } from "~/utils/utils"

export async function getData(url: string, controller?: AbortController): Promise<allArticlesSchema> {

    // console.log('serverurl',url);

    // const response: allArticlesSchema = await fetch(url, {
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: {

    //         Accept: 'application/json',
    //         'X-Api-Key': 'a6968bfc7b6f4ab4ace5d8a9542e0f65',
    //     },
    //     signal: controller?.signal,
    // })
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .catch((error) => {
    //         return error
    //     })

    // console.log(response);


    const cache_response: any = {
        "status": "ok",
        "totalResults": 10462,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Lucas Ropek",
                "title": "OG Bitcoin Core Developer Claims Hack Drained Nearly All His BTC",
                "description": "Even cryptocurrency’s most accomplished tech wizards apparently aren’t immune from the occasional walletdraining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone swiped hundreds of BTC from his accounts late last year—l…",
                "url": "https://gizmodo.com/bitcoinpricehack217btcogdeveloperlukedashjr1849944799",
                "urlToImage": "https://i.kinjaimg.com/gawkermedia/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8e3b3fe0595dfbab3656a5ba0e06e2c.jpg",
                "publishedAt": "20230103T20:48:00Z",
                "content": "Even cryptocurrencys most accomplished tech wizards apparently arent immune from the occasional walletdraining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone… [+2723 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Bitcoin rises 5.5% to $19897  Reuters",
                "description": "Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.",
                "url": "https://www.reuters.com/technology/bitcoinrises551989720230113/",
                "urlToImage": "https://www.reuters.com/resizer/x2fufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg",
                "publishedAt": "20230113T22:24:00Z",
                "content": "Jan 13 (Reuters)  Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.\r\nBitcoin, the world's biggest and bestknown cryptocurrency, is up 20.6% from the year's … [+277 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Benzinga"
                },
                "author": "Mehab Qureshi",
                "title": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant LongTerm Bulls'  Benzinga",
                "description": "<ol><li>Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant LongTerm Bulls'  Benzinga\r\n</li><li>Bitcoin roars past $20K in surprise surge. Can the rally last?  Fortune\r\n</li><li>Bitcoin rises 5.6% to $210…",
                "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoinsurgesabove21kethereumdogecoinrallyintactanalystsaysthiscouldawakensom",
                "urlToImage": "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara4kjjezdyo3munsplash.jpg?width=1200&height=800&fit=crop",
                "publishedAt": "20230116T02:50:45Z",
                "content": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Central African Republic delays crypto token listing, cites 'market ...  Reuters.com",
                "description": "The Central African Republic, which <a href=\"/world/africa/centralafricanrepublicadoptsbitcoinanofficialcurrency20220427/\">adopted bitcoin as legal tender</a> in April, said on Monday it had delayed listing its national cryptocurrency token, citing …",
                "url": "https://www.reuters.com/technology/centralafricanrepublicdelayscryptotokenlistingcitesmarketconditions20221220/",
                "urlToImage": "https://www.reuters.com/resizer/Z9ABAsuyZn3A0GlJEA2fqXhoeCk=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/BKKDDX7EPBKAXDOZS562CQKHHA.jpg",
                "publishedAt": "20221220T09:09:00Z",
                "content": "LONDON, Dec 19 (Reuters)  The Central African Republic, which adopted bitcoin as legal tender in April, said on Monday it had delayed listing its national cryptocurrency token, citing \"current marke… [+1713 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptoverse: Bitcoin digs in for a bumpy new year  Reuters",
                "description": "Bitcoin's looking steady in 2023. But it's only been a week.",
                "url": "https://www.reuters.com/technology/cryptoversebitcoindigsbumpynewyear20230110/",
                "urlToImage": "https://www.reuters.com/resizer/X3Jk6UQ0SKvWNnppKO5lu9_yqog=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/ILQYPK7MD5I4LM3ZX2OQXO7HQ4.jpg",
                "publishedAt": "20230110T06:15:00Z",
                "content": "Jan 10 (Reuters)  Bitcoin's looking steady in 2023. But it's only been a week.\r\nCryptocurrencies have crept into the new year, licking their wounds after the carnage of 2022. The overall global cryp… [+3311 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Salvadoran lawmakers pass digital asset issuance law in bitcoin ...  Reuters",
                "description": "El Salvador, which became the first country in the world to recognize bitcoin as a legal tender two years ago, approved on Wednesday a law that would regulate the issuance of other digital assets by both the state and private entities.",
                "url": "https://www.reuters.com/technology/salvadoranlawmakerspassdigitalassetissuancelawbitcoinhaven20230111/",
                "urlToImage": "https://www.reuters.com/resizer/rkaBfdVh5pslz1PlX9dSgLx_LdQ=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/7W3WX6L65FKZFBSETGBOPRFN7E.jpg",
                "publishedAt": "20230111T21:57:00Z",
                "content": "SAN SALVADOR, Jan 11 (Reuters)  El Salvador, which became the first country in the world to recognize bitcoin as a legal tender two years ago, approved on Wednesday a law that would regulate the iss… [+1928 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptoverse: Bitcoin is back with a bonk  Reuters",
                "description": "Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.",
                "url": "https://www.reuters.com/technology/cryptoversebitcoinisbackwithbonk20230117/",
                "urlToImage": "https://www.reuters.com/resizer/jPD5gWOp4iaNFHGJCoc9M20WksQ=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/MLQZOZNWTZLSRJTK4RZJLSI364.jpg",
                "publishedAt": "20230117T06:16:00Z",
                "content": "Jan 17 (Reuters)  Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.\r\nThe No.1 cryptocurrency has clocked a 26% gain in January, leapi… [+4367 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Davos 2023: Scaramucci's SkyBridge bets on $35k bitcoin, targets ...  Reuters.com",
                "description": "SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view was \"overly bullish\".",
                "url": "https://www.reuters.com/technology/davos2023scaramuccisskybridgebets35kbitcointargetscredit20230116/",
                "urlToImage": "https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg",
                "publishedAt": "20230116T17:56:00Z",
                "content": "DAVOS, Switzerland, Jan 16 (Reuters)  SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view … [+1366 chars]"
            },
            {
                "source": {
                    "id": "googlenews",
                    "name": "Google News"
                },
                "author": "Alexander Graham, Alexander Graham",
                "title": "Central African Republic delays crypto token listing, cites 'market … – Reuters.com  STL.News",
                "description": "LONDON, Dec 19 (Reuters)  The Central African Republic, which adopted bitcoin as legal tender in April, said on Monday it had delayed listing its national cryp",
                "url": "https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY2VudHJhbC1hZnJpY2FuLXJlcHVibGljLWRlbGF5cy1jcnlwdG8tdG9rZW4tbGlzdGluZy1jaXRlcy1tYXJrZXQtY29uZGl0aW9ucy0yMDIyLTEyLTIwL9IBAA?oc=5",
                "urlToImage": "https://www.stl.news/wpcontent/uploads/2022/12/CentralAfricanRepublicdelayscryptotokenlistingcites039market.jpg",
                "publishedAt": "20221220T09:17:00Z",
                "content": "LONDON, Dec 19 (Reuters) – The Central African Republic, which adopted bitcoin as legal tender in April, said on Monday it had delayed listing its national cryptocurrency token, citing “current marke… [+1861 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Bitcoin miner Core Scientific approved for $37.5 mln bankruptcy loan  Reuters",
                "description": "U.S. bitcoin miner Core Scientific received court approval on Thursday to fund its Chapter 11 case with a $37.5 million loan from a group of existing creditors.",
                "url": "https://www.reuters.com/legal/litigation/bitcoinminercorescientificapproved375mlnbankruptcyloan20221222/",
                "urlToImage": "https://www.reuters.com/resizer/A3nIuWNsiFJX3sFwHZUI4PKUCHQ=/728x381/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/J36PS2OHWJK3JJNQNXOM72NILQ.jpg",
                "publishedAt": "20221222T21:51:00Z",
                "content": "(Reuters)  U.S. bitcoin miner Core Scientific received court approval on Thursday to fund its Chapter 11 case with a $37.5 million loan from a group of existing creditors.\r\nU.S. Bankruptcy Judge Dav… [+2745 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "MicroStrategy just did was CEO Michael Saylor once said would never happen: it sold bitcoin",
                "description": "\"Never. No. We're not sellers,\" Saylor said in January. \"We're only acquiring and holding bitcoin, right? That's our strategy.\"",
                "url": "https://markets.businessinsider.com/news/currencies/microstrategybitcoinsalefirsttimeevermichaelsaylormargincall202212",
                "urlToImage": "https://i.insider.com/63ac7e1c3e42ed001855b8dd?width=1200&format=jpeg",
                "publishedAt": "20221228T17:58:14Z",
                "content": "MicroStrategy sold bitcoin for the first time, after CEO Michael Saylor said early this year that such a sale would never happen.\r\nCiting tax reasons, the enterprisesoftware firm sold 704 bitcoins o… [+1277 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "El Salvador passes law for bitcoinbacked 'volcano bonds' and eyes expanding to other cryptocurrencies",
                "description": "The bond issuance was originally planned for early 2022, and El Salvador seeks to raise $1 billion through the socalled volcano bonds.",
                "url": "https://markets.businessinsider.com/news/currencies/elsalvadorbitcoinvolcanobondslawbitcoincitynayibbukele20231",
                "urlToImage": "https://i.insider.com/61f8015f45edd800183b53c3?width=1200&format=jpeg",
                "publishedAt": "20230112T19:13:38Z",
                "content": "El Salvador's assembly passed legislation Wednesday that clears the way for bitcoinbacked \"volcano bonds\" to be issued and for cryptocurrencies other than bitcoin.\r\nAfter declaring bitcoin legal ten… [+1554 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Expect bitcoin to top $50,000 again within a few years, Anthony Scaramucci says – as crypto markets start 2023 with a bang",
                "description": "Investors are piling back into crypto markets, with bitcoin jumping 26% and ethereum up 29% yeartodate.",
                "url": "https://markets.businessinsider.com/news/currencies/cryptobitcoinpriceoutlookanthonyscaramucciethereummarketrallyftx20231",
                "urlToImage": "https://i.insider.com/63c543bfbcd21800196b7c10?width=1200&format=jpeg",
                "publishedAt": "20230116T13:30:32Z",
                "content": "Bitcoin could top $50,000 in a few years' time as cryptocurrencies rebound from a nightmare year, according to Anthony Scaramucci.\r\nThe SkyBridge Capital founder said he's anticipating that 2023 will… [+1821 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "BeauHD",
                "title": "Bitcoin Retakes $20K, Leading As Broad Crypto Rally Continues",
                "description": "Bitcoin's (BTC) 2023 surge continues, with the crypto now above $20,000 for the first time since the FTX collapse in early November. CoinDesk reports: The largest cryptocurrency by market capitalization started the week near the $17,000 mark after hovering in…",
                "url": "https://news.slashdot.org/story/23/01/14/074219/bitcoinretakes20kleadingasbroadcryptorallycontinues",
                "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                "publishedAt": "20230114T13:00:00Z",
                "content": "The largest cryptocurrency by market capitalization started the week near the $17,000 mark after hovering in the mid$16,000 area since midDecember. Now at $20,250, bitcoin has gained more than 20% … [+697 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "Legendary investor Jeremy Grantham flagged a 'superbubble' in asset prices and predicted a historic market crash. Here are his 8 best quotes of 2022.",
                "description": "The market historian and GMO cofounder blasted bitcoin, warned of a global housing slump and underlined the dangers of bearmarket rallies.",
                "url": "https://markets.businessinsider.com/news/stocks/jeremygranthamsuperbubblestockhousingmarketcrashbitcoinbestquotes20231",
                "urlToImage": "https://i.insider.com/63ad96a73e42ed001855ccd4?width=1200&format=jpeg",
                "publishedAt": "20230101T11:45:00Z",
                "content": "Legendary investor Jeremy Grantham rattled Wall Street last year by sounding the alarm on a \"superbubble\" in asset prices, and predicting it would end with an epic market crash.\r\nThe market historian… [+2421 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "Nobel laureate Paul Krugman compares Tesla to bitcoin — and says he wouldn't trust Elon Musk to feed his cat",
                "description": "Breathless hype and faith underpin the valuations of both Tesla and bitcoin, but some of Musk's appeal has faded, Krugman said.",
                "url": "https://markets.businessinsider.com/news/stocks/paulkrugmanteslastockpricebitcoinelonmusktwitternetwork202212",
                "urlToImage": "https://i.insider.com/63ac32e1a51b3d00185b020f?width=1200&format=jpeg",
                "publishedAt": "20221228T13:40:03Z",
                "content": "Paul Krugman has compared Tesla stock to bitcoin, saying hype and faith underpin both assets' valuations, and joked he wouldn't trust Elon Musk to take care of his cat.\r\nTesla stock skyrocketed more … [+2248 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Sam Becker,Lisa Niser, EA)",
                "title": "Is exchanging one cryptocurrency for another taxable?",
                "description": "Exchanging Ether for bitcoin, for example, is a taxable event in the eyes of the IRS, even if you didn't receive any US dollars.",
                "url": "https://www.businessinsider.com/personalfinance/isexchangingcryptoataxableevent",
                "urlToImage": "https://i.insider.com/63b8214464499e001852e1b9?width=1200&format=jpeg",
                "publishedAt": "20230109T14:09:40Z",
                "content": "Insider's experts choose the best products and services to help make smart decisions with your money (heres how). In some cases, we receive a commission from our partners, however, our opinions are o… [+6331 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "One of the world's largest bitcoin miners will shut off thousands of mining rigs tied to bankrupt Celsius as part of the firms' bankruptcy proceedings",
                "description": "One of the world's largest bitcoin miners will shut off over 37,000 mining rigs tied to Celsius as part of the firms' bankruptcy proceedings.",
                "url": "https://markets.businessinsider.com/news/currencies/corescientificshutdownthousandsbankruptcelsiusbitcoinminingrigs20231",
                "urlToImage": "https://i.insider.com/63b5846e0e1a1b00195f0016?width=1200&format=jpeg",
                "publishedAt": "20230104T15:58:58Z",
                "content": "One of the world's largest bitcoin miners will shut off thousands of mining rigs tied to Celsius Network as a part of the firms' bankruptcy proceedings.\r\nCore Scientific will stop hosting over 37,000… [+1514 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Invesco's global market strategist says the market has bottomed and the recovery has begun. Here are his 5 biggest takeaways and advice on how to invest.",
                "description": "In an interview with Insider, Invesco's Brian Levitt breaks down where to put your money as the dollar looks set to weaken and bitcoin could climb.",
                "url": "https://markets.businessinsider.com/news/stocks/howtoinveststockmarketoutlookbondsbitcoinemergingmarkets20231",
                "urlToImage": "https://i.insider.com/63b82cfa64499e001852e334?width=1200&format=jpeg",
                "publishedAt": "20230107T11:30:00Z",
                "content": "The US economy will go through a mild recession this year, but investors should position themselves for a sustained market rally, according to Invesco's global market strategist, Brian Levitt.\r\nHe sa… [+2714 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Emily Rella",
                "title": "'If You Have Gold, You're Dumb': Mark Cuban Sounds of on Gold Investments, Praises Bitcoin",
                "description": "The billionaire appeared on Bill Maher's \"Club Random\" podcast and chatted about the differences between investing in gold and crypto.",
                "url": "https://www.entrepreneur.com/businessnews/markcubanslamsgoldinvestmentspraisesbitcoin/442009",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1672335425GettyImages1448249195.jpg",
                "publishedAt": "20221229T17:55:36Z",
                "content": "Despite the bombshell fraud revelations surrounding trading platform FTX and its founder Sam BankmanFried and months of what industry experts referred to as the \"crypto winter,\" longtime crypto fan … [+1372 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Jason Weisberger",
                "title": "Paul Krugman explains why Tesla is like Bitcoin",
                "description": "NY Times economist Paul Krugman hammers on Elon Musk's reputation as a genius and points out that Tesla has none of the qualities that'd make it a longterm player in the EV car market. How long Musk can ride a reputation built on the backs of fanboys and ver…",
                "url": "https://boingboing.net/2022/12/28/paulkrugmanexplainswhyteslaislikebitcoin.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wpcontent/uploads/2022/05/horseelon.jpg?fit=1200%2C941&ssl=1",
                "publishedAt": "20221228T16:08:24Z",
                "content": "NY Times economist Paul Krugman hammers on Elon Musk's reputation as a genius and points out that Tesla has none of the qualities that'd make it a longterm player in the EV car market. How long Musk… [+1348 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Coinbase soars 10% as crypto markets rally and bitcoin notches highest price since September",
                "description": "The move higher comes as crypto prices enjoy a sustained rally, with the industry's market cap reclaiming $1 trillion over the weekend.",
                "url": "https://markets.businessinsider.com/news/stocks/coinbasestockpricesoarscryptomarketsrallybitcoinextendsgains20231",
                "urlToImage": "https://i.insider.com/63c6f31d17227d00187c2759?width=1200&format=jpeg",
                "publishedAt": "20230117T21:01:20Z",
                "content": "Coinbase surged more than 10% on Tuesday, trading at $53 per share as the wider crypto market enjoys a weeklong rally.\r\nThe move in Coinbase stock comes as cryptocurrency prices continue their uptic… [+1361 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Factbox: The many companies in Digital Currency Group's crypto ...  Reuters",
                "description": "U.S. crypto company Digital Currency Group (DCG) is at the center of the industry's latest meltdown after one of its companies, Genesis, froze customer withdrawals in November.",
                "url": "https://www.reuters.com/business/finance/manycompaniesdigitalcurrencygroupscryptoempire20230112/",
                "urlToImage": "https://www.reuters.com/resizer/ueJtkjyeNWawC2EeRlrxZljHXpM=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/6UVNR3WPMRJC3G7S6WGOMPMYNE.jpg",
                "publishedAt": "20230112T17:24:00Z",
                "content": "Jan 12 (Reuters)  U.S. crypto company Digital Currency Group (DCG) is at the center of the industry's latest meltdown after one of its companies, Genesis, froze customer withdrawals in November.\r\nGe… [+3337 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptocurrencies at crossroads after annus horribilis  Reuters.com",
                "description": "To borrow from Britain's Queen Elizabeth, 2022 is not a year on which the cryptocurrency world shall look back with undiluted pleasure.",
                "url": "https://www.reuters.com/technology/cryptocurrenciescrossroadsafterannushorribilis20221220/",
                "urlToImage": "https://www.reuters.com/resizer/Iec41rTye69phU7WR8kpO7vpcxs=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/XEEFV7G2VJIGFNFNTO6RIAOOA4.jpg",
                "publishedAt": "20221220T12:04:00Z",
                "content": "SINGAPORE, Dec 20 (Reuters)  To borrow from Britain's Queen Elizabeth, 2022 is not a year on which the cryptocurrency world shall look back with undiluted pleasure.\r\nCrashes, contagion, collapses ca… [+3720 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "Bitcoin Hashrate Drops Nearly 40% as Deadly US Storm Unplugs Miners",
                "description": "The Bitcoin network hashrate has dropped by more than 38.8% from its peak, as many U.S.based miners have been forced to switch down their facilities due to deadly blizzards. From a report: Bitcoin hashrate, the level of computing power used for mining and pr…",
                "url": "https://tech.slashdot.org/story/22/12/26/1823227/bitcoinhashratedropsnearly40asdeadlyusstormunplugsminers",
                "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
                "publishedAt": "20221227T00:30:00Z",
                "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "Core Scientific Declares Bankruptcy as Crypto Winter Lingers",
                "description": "Core Scientific, one of the largest miners of Bitcoin, became the latest crypto company to file for bankruptcy as the industry reckons with a plunge in digitalasset prices. From a report: The Austin, Texasbased company listed $1.4 billion of assets against …",
                "url": "https://slashdot.org/story/22/12/21/164242/corescientificdeclaresbankruptcyascryptowinterlingers",
                "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
                "publishedAt": "20221221T20:01:00Z",
                "content": "The Austin, Texasbased company listed $1.4 billion of assets against $1.33 billion of liabilities in its Chapter 11 petition, which was filed in the Southern District of Texas. The company's shares,… [+631 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hackaday"
                },
                "author": "Jonathan Bennett",
                "title": "This Week in Security: Lastpass Takeaway, Bitcoin Loss, and PyTorch",
                "description": "We mentioned the LastPass story in closing a couple weeks ago, but details were still a bit scarce. The hope was that LastPass would release more transparent information about what happened, and ho…",
                "url": "https://hackaday.com/2023/01/06/thisweekinsecuritylastpasstakeawaybitcoinlossandpytorch/",
                "urlToImage": "https://hackaday.com/wpcontent/uploads/2016/01/darkarts.jpg",
                "publishedAt": "20230106T18:00:50Z",
                "content": "We mentioned the LastPass story in closing a couple weeks ago, but details were still a bit scarce. The hope was that LastPass would release more transparent information about what happened, and how … [+10251 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "One of the largest bitcoin miners files for bankruptcy protection as token prices fall and energy costs rise",
                "description": "Crypto mining giant Core Scientific filed for bankruptcy on Wednesday, joining a growing list of digital asset firms to sink in 2022.",
                "url": "https://markets.businessinsider.com/news/currencies/cryptonewscorescientificfilesforbankruptcybitcoinhodlbtc202212",
                "urlToImage": "https://i.insider.com/63a31d4958babf00188d490a?width=1200&format=jpeg",
                "publishedAt": "20221221T15:14:19Z",
                "content": "Crypto mining firm Core Scientific filed for bankruptcy protection on Wednesday, the latest digital asset company to fall this year. \r\nThe Texasbased company is one of the largest US miners of bitco… [+1581 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "Bitcoin Addresses Tied To Defunct Canadian Crypto Exchange QuadrigaCX Wake Up",
                "description": "More than 100 bitcoins tied to the defunct Canadian crypto exchange QuadrigaCX were transferred out of cold wallets thought to be beyond anyone's control over the weekend, after sitting dormant for more than three years. From a report: The company's bankruptc…",
                "url": "https://news.slashdot.org/story/22/12/20/1234229/bitcoinaddressestiedtodefunctcanadiancryptoexchangequadrigacxwakeup",
                "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
                "publishedAt": "20221220T14:00:00Z",
                "content": "The company's bankruptcy trustee, Ernst and Young, did not initiate the transfers, CoinDesk has learned. QuadrigaCX went bankrupt in 2019 after the apparent death of founder and CEO Gerald Cotten. At… [+529 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Sam Becker,Lisa Niser, EA)",
                "title": "5 steps to report bitcoin, Ether, and other cryptocurrencies on your IRS tax return",
                "description": "Reporting crypto transactions on your taxes is more important than ever, experts say. Here's how to do it right.",
                "url": "https://www.businessinsider.com/personalfinance/howtoreportcryptoontaxes",
                "urlToImage": "https://i.insider.com/63b8386fd1c5130019f95a1e?width=1200&format=jpeg",
                "publishedAt": "20230109T14:40:25Z",
                "content": "Insider's experts choose the best products and services to help make smart decisions with your money (heres how). In some cases, we receive a commission from our partners, however, our opinions are o… [+8981 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hackaday"
                },
                "author": "Jenny List",
                "title": "The Surprisingly Simple Way To Steal Cryptocurrency",
                "description": "In the news a few days ago, the revelation that Luke Dashjr, a core Bitcoin developer, had his wallet compromised, and lost 200 BTC. A small fortune, and something of a shock. I’m guessing th…",
                "url": "https://hackaday.com/2023/01/06/thesurprisinglysimplewaytostealcryptocurrency/",
                "urlToImage": "https://hackaday.com/wpcontent/uploads/2023/01/roulettewheelfeatured.jpg",
                "publishedAt": "20230106T18:00:43Z",
                "content": "In the news a few days ago, the revelation that Luke Dashjr, a core Bitcoin developer, had his wallet compromised, and lost 200 BTC. A small fortune, and something of a shock. I’m guessing that someo… [+5002 chars]"
            },
            {
                "source": {
                    "id": "bbcnews",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "FTX boss Sam BankmanFried agrees to be extradited",
                "description": "The cryptocurrency exchange boss is expected to travel to the US to face fraud charges, the BBC understands.",
                "url": "https://www.bbc.co.uk/news/business64036615",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E7C9/production/_128073395_sambankmanfried.png",
                "publishedAt": "20221220T09:00:57Z",
                "content": "Sam BankmanFried, the boss of the failed cryptocurrency exchange FTX, has agreed to be extradited to the US to face charges, the BBC understands.\r\nThe 30yearold, who lives in the Bahamas, has been… [+2178 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "psyme@insider.com (Pete Syme)",
                "title": "A 25yearold traded $2 billion of crypto from his parents' suburban home in Australia, public records show",
                "description": "25yearold Darren Nguyen's crypto trading company profited $7 million aftertax, and netprofits increased 1,400% from the previous year.",
                "url": "https://www.businessinsider.com/cryptoinvestortraded2billionfromparentssuburbanhome20231",
                "urlToImage": "https://i.insider.com/63b3fda0a51b3d00185b6c60?width=1200&format=jpeg",
                "publishedAt": "20230103T11:38:12Z",
                "content": "A 25yearold traded $2 billion of crypto despite living with his parents, according to public records cited by The Australian.\r\nDarren Nguyen's crypto trading business, PO Street Capital, is registe… [+1755 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Thom Dunn",
                "title": "I can't believe it took this long for someone to make a Bitcoinmining space heater",
                "description": "The Heatbit is a new space heater that allegedly uses the energy produced by calculationintensive Bitcoin mining to heat your home. It also costs $1200, though the company insists that it will cover \"100% of your electricity bills\" through the payments you r…",
                "url": "https://boingboing.net/2023/01/08/icantbelieveittookthislongforsomeonetomakeabitcoinminingspaceheater.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wpcontent/uploads/2023/01/maxresdefault31.jpg?fit=1200%2C675&ssl=1",
                "publishedAt": "20230108T19:15:37Z",
                "content": "The Heatbit is a new space heater that allegedly uses the energy produced by calculationintensive Bitcoin mining to heat your home. It also costs $1200, though the company insists that it will cover… [+2820 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Jessica Murray",
                "title": "‘Hack’ of UK cabinet minister’s Twitter account changes profile picture to Elon Musk",
                "description": "Account of education secretary Gillian Keegan altered with posts promoting cryptocurrency once backed by the investorThe Twitter account of the British education secretary appears to have been hacked. The profile picture was changed to one showing Elon Musk a…",
                "url": "https://www.theguardian.com/technology/2022/dec/26/hackoftwitterukeducationsecretarygilliankeeganchangesprofilepictureelonmusk",
                "urlToImage": "https://i.guim.co.uk/img/media/59436008df9d55ed339646fa7a0849f345c5df0f/303_0_3050_1831/master/3050.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2215938bce161cecfe993c671dd71b03",
                "publishedAt": "20221226T17:54:17Z",
                "content": "The Twitter account of the British education secretary appears to have been hacked. The profile picture was changed to one showing Elon Musk and several tweets were posted promoting a cryptocurrency … [+2645 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Bitcoin rallies to a 2month high after inflation data, shrugging off FTX and DCG troubles for now",
                "description": "\"While it's too early to count chickens, [bitcoin's] price action since yesterday has been encouraging,\" a crypto executive told Insider.",
                "url": "https://markets.businessinsider.com/news/currencies/bitcoinpricetoday2monthhighdecembercpiinflationdata20231",
                "urlToImage": "https://i.insider.com/63c0649a1f388b00195f3fb5?width=1200&format=jpeg",
                "publishedAt": "20230112T20:51:31Z",
                "content": "Bitcoin hit a twomonth high on Thursday as fresh signs that inflation is slowing down more than offset a slew of grim crypto industry news.\r\nThe largest cryptocurrency climbed 8% over the past 24 ho… [+2754 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Antara Haldar",
                "title": "The Case That Foreshadowed the Lessons of the FTX Collapse",
                "description": "Before there was SBF, there was another “ethical crusader” who learned the same hard truths about the technology of trust.",
                "url": "https://www.wired.com/story/cryptocurrencysbfftxmicrofinance/",
                "urlToImage": "https://media.wired.com/photos/63a2366d2b5612eae8066cbc/191:100/w_1280,c_limit/ftxfinancesambankmanfried.jpg",
                "publishedAt": "20221221T14:00:00Z",
                "content": "For the past three seemingly glorious years, the 30yearold boy wonder Sam BankmanFried, or SBF, crowned the King of Crypto, bore an uncanny resemblance to the legendary character Robin Hood. Using… [+4839 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Solo Ceesay",
                "title": "5 Things to Expect from Crypto in 2023",
                "description": "Let's look at five trends we can expect for blockchain and crypto in 2023.",
                "url": "https://www.entrepreneur.com/moneyfinance/5thingstoexpectfromcryptoin2023/441716",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1672862006GettyImages1366240594.jpg",
                "publishedAt": "20230106T16:30:00Z",
                "content": "2022, for numerous reasons, was one of the most decorated years in cryptocurrency's brief history. In spectacular fashion, we saw the industry's beloved hero Sam BankmanFried's fall from grace at a … [+5697 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "gglover@insider.com (George Glover)",
                "title": "Failed hedge fund Three Arrows Capital is pitching a marketplace where crypto victims can sell their bankruptcy claims  and calling it 'GTX' in an apparent nod to FTX",
                "description": "\"If this launches, we deserve every second of this crypto ice age,\" 'Wolf of All Streets' trader Scott Melker said.",
                "url": "https://markets.businessinsider.com/news/currencies/threearrowscapitalpitchesgtxcryptobankruptcyclaimsmarketplace20231",
                "urlToImage": "https://i.insider.com/63c677b6bcd21800196b868d?width=1200&format=jpeg",
                "publishedAt": "20230117T12:04:36Z",
                "content": "The founders of failed crypto hedge fund Three Arrows Capital are reportedly trying to launch a new exchange  where people who lost money in the collapse of a digital asset company would be able to b… [+2145 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Media startup Semafor plans buyout of Sam BankmanFried's ...  Reuters",
                "description": "Semafor is planning to buy out FTX founder Sam BankmanFried's roughly $10 million investment in the news startup, the New York Times reported on Wednesday, citing the company's chief executive officer.",
                "url": "https://www.reuters.com/business/finance/mediastartupsemaforplansbuyoutsambankmanfriedsinvestmentnyt20230118/",
                "urlToImage": "https://www.reuters.com/resizer/T9MHklUGrqffR8b4wGq5irKzuiY=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/M36OKLIMVBKWLDHRVWXOYRPI34.jpg",
                "publishedAt": "20230118T12:19:00Z",
                "content": "Jan 18 (Reuters)  Semafor is planning to buy out FTX founder Sam BankmanFried's roughly $10 million investment in the news startup, the New York Times reported on Wednesday, citing the company's ch… [+1041 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "German online bank N26 to expand crypto trading  Reuters",
                "description": "German online bank N26 said on Tuesday that it would expand the list of countries where its customers may trade cryptocurrencies to include those in Germany and Switzerland.",
                "url": "https://www.reuters.com/technology/germanonlinebankn26expandcryptotrading20230117/",
                "urlToImage": "https://www.reuters.com/resizer/BLf_tLTzRtV1DKIyswNsForcl8=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/PRT5TCNOUFJHVDLYNXLUMZRKCY.jpg",
                "publishedAt": "20230117T09:12:00Z",
                "content": "FRANKFURT, Jan 17 (Reuters)  German online bank N26 said on Tuesday that it would expand the list of countries where its customers may trade cryptocurrencies to include those in Germany and Switzerl… [+835 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Rebecca Nicholson",
                "title": "Romantic Getaway review – Katherine Ryan and Romesh Ranganathan are brilliant in IVF heist caper",
                "description": "This romcom/thriller about a couple who steal from their work sees its two leads – and Johnny Vegas as their boss – form a killer trio. Expect daft funI should be honest and say that any storyline involving bitcoin tends to send me to sleep quicker than a hot…",
                "url": "https://www.theguardian.com/tvandradio/2023/jan/01/romanticgetawayreviewkatherineryanandromeshranganathanarebrilliantinivfheistcaper",
                "urlToImage": "https://i.guim.co.uk/img/media/06bb82468a5918cf6fc4eff854c8217c97c98419/0_0_6235_3740/master/6235.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=ca69c7720a6501255c57c224fec1a2ee",
                "publishedAt": "20230101T21:30:05Z",
                "content": "I should be honest and say that any storyline involving bitcoin tends to send me to sleep quicker than a hot toddy with a Nytol chaser. Not only is it hard to make cryptocurrency look good on screen,… [+4298 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Bitfinex.com"
                },
                "author": "ricardom",
                "title": "El Salvador’s Historic Digital Asset Securities Law Passes",
                "description": "In another exciting announcement from “Bitcoin Country”, El Salvador has announced the passing of its “Digital Asset Issuance” legislation that was proposed last November. This new digital asset regulatory framework paves the way for its much anticipated Volc…",
                "url": "https://blog.bitfinex.com/announcements/elsalvadorshistoricdigitalassetsecuritieslawpasses/",
                "urlToImage": "https://blog.bitfinex.com/wpcontent/uploads/2023/01/BFX_Salvador_newlaw11024x576.png",
                "publishedAt": "20230112T05:57:07Z",
                "content": "El Salvadors Historic Digital Asset Securities Law Passes!\r\nIn another exciting announcement from Bitcoin Country, El Salvador has announced the passing of its Digital Asset Issuance legislation that… [+4417 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Solana crypto token loses most of its value in 2022, FTX collapse ...  Reuters",
                "description": "The price of Solana, a cryptocurrency token that had been lauded by FTX founder Sam BankmanFried, fell 10.36% on Wednesday, and is down 94.2% so far in 2022.",
                "url": "https://www.reuters.com/technology/solanacryptotokenlosesmostitsvalue2022ftxcollapseweighs20221228/",
                "urlToImage": "https://www.reuters.com/resizer/koRr6wzvqUCPOgJi5PPl7pgisIU=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/LL4HSL6N7FIZDCZW7D4JZM5WKU.jpg",
                "publishedAt": "20221228T22:31:00Z",
                "content": "NEW YORK, Dec 28 (Reuters)  The price of Solana, a cryptocurrency token that had been lauded by FTX founder Sam BankmanFried, fell 10.36% on Wednesday, and is down 94.2% so far in 2022.\r\nThe collap… [+1741 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Hong Kong set to shortlist crypto tokens for retail trading  Reuters",
                "description": "Hong Kong securities watchdog will propose a subset of tokens it would allow for retail investors' trading, its chief executive said on Wednesday, as it presses on with a new regulatory regime that will make the city more friendly to crypto startups.",
                "url": "https://www.reuters.com/technology/hongkongsetshortlistcryptotokensretailtrading20230111/",
                "urlToImage": "https://www.reuters.com/resizer/rkaBfdVh5pslz1PlX9dSgLx_LdQ=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/7W3WX6L65FKZFBSETGBOPRFN7E.jpg",
                "publishedAt": "20230111T11:09:00Z",
                "content": "HONG KONG, Jan 11 (Reuters)  Hong Kong securities watchdog will propose a subset of tokens it would allow for retail investors' trading, its chief executive said on Wednesday, as it presses on with … [+1623 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Grant St. Clair",
                "title": "Sony and Honda put Playstation 5 in cars to compete with Tesla",
                "description": "During its CES 2023 presentation, Sony announced AFEELA, a new brand of electric cars in collaboration with Honda. It seems like your fairly standard futuristic concept car at first glance, albeit with a slightly sillier name, save one function in particular…",
                "url": "https://boingboing.net/2023/01/08/sonyandhondaputplaystation5incarstocompetewithtesla.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wpcontent/uploads/2022/11/ScreenShot20221121at4.53.17PM.png?fit=1200%2C723&ssl=1",
                "publishedAt": "20230108T13:35:49Z",
                "content": "During its CES 2023 presentation, Sony announced AFEELA, a new brand of electric cars in collaboration with Honda. It seems like your fairly standard futuristic concept car at first glance, albeit wi… [+814 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "Warren Buffett called out stockmarket gamblers, savaged bitcoin, and praised Elon Musk and Jeff Bezos last year. Here are his 10 best quotes of 2022.",
                "description": "Buffett ruled out an imminent retirement, slammed deceptive earnings adjustments, and suggested one way for people to counter inflation.",
                "url": "https://markets.businessinsider.com/news/stocks/warrenbuffettquotes2022stocksbitcoincryptomuskbezosinflation20231",
                "urlToImage": "https://i.insider.com/5d6789c9f4fc2461623a8a24?width=1200&format=jpeg",
                "publishedAt": "20230102T11:45:00Z",
                "content": "Warren Buffett called out stockmarket gamblers, dismissed bitcoin as worthless, and lauded Elon Musk and Jeff Bezos in 2022.\r\nThe 92yearold investor said he's not planning to retire as Berkshire H… [+2650 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Billionaire bitcoin bull Mike Novogratz says 2023 will be a year for crypto markets to try and survive, and 'heal and rebuild narrative'",
                "description": "\"The outlook for crypto is not horrible, but it's not great,\" the Galaxy Digital CEO said. \"We've got time to heal and rebuild [the] narrative.\"",
                "url": "https://markets.businessinsider.com/news/currencies/billionairebitcoinbullmikenovogratzcryptomarketoutlookgalaxydigital20231",
                "urlToImage": "https://i.insider.com/63bd990c06706e0019a9a053?width=1200&format=jpeg",
                "publishedAt": "20230110T19:07:36Z",
                "content": "Galaxy Digital CEO Mike Novogratz says 2023 will be a time for the cryptocurrency industry to \"cut costs\" and \"survive this transition period\" after the collapse of FTX, along with a slew of other ma… [+1337 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks trade mixed as bond yields climb on the Bank of Japan's surprise hawkish policy pivot",
                "description": "The Japanese 10year bond yields climbed higher Tuesday, and global rates markets all moved higher as a result of the BOJ's move.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaybankofjapanbondeconomyindexes202212",
                "urlToImage": "https://i.insider.com/62c862798045920019ae3ba3?width=1200&format=jpeg",
                "publishedAt": "20221220T14:32:37Z",
                "content": "US stocks traded mixed Tuesday as the Bank of Japan took a surprise hawkish turn on its monetary policy.   \r\nJapanese policymakers announced they would allow benchmark bond yields to trade as high as… [+1221 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "US stocks edge higher in volatile session after Bank of Japan rattles markets with hawkish policy shift",
                "description": "Japanese central bankers widened the trading range on benchmark bond yields, which allows rates to get more restrictive.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaysp500bankofjapanhawkishrecession202212",
                "urlToImage": "https://i.insider.com/635abd21513e8f0019c97585?width=1200&format=jpeg",
                "publishedAt": "20221220T21:05:27Z",
                "content": "US stocks finished higher on Tuesday to snap a fourday slump after an unexpectedly hawkish policy move from the Bank of Japan set off a volatile session.\r\nJapanese central bankers widened the tradin… [+966 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks climb on 2023's first day of trading after Wall Street's year since 2008",
                "description": "The S&P 500 shed about 20% over the last 12 months, and investors are bracing for more uncertainty ahead.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodayindexeswallstreetfirstdaytrading20231",
                "urlToImage": "https://i.insider.com/63b437c4a51b3d00185b6f61?width=1200&format=jpeg",
                "publishedAt": "20230103T14:33:46Z",
                "content": "US stocks rallied on Tuesday, the first trading day of the year, following a brutal 2022 that saw their worst performance since 2008.\r\nIn 2022, the S&amp;P 500 shed about 20%, and Tuesday also marked… [+1095 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks rise as investors turn focus to upcoming key December inflation report",
                "description": "After the Thursday CPI report, investors will turn their attention to fourthquarter earnings, which are set to kick off this Friday with the big banks.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodayinvestorsawaitdecemberinflationreport20231",
                "urlToImage": "https://i.insider.com/62a8893e6053710019ea1ee2?width=1200&format=jpeg",
                "publishedAt": "20230111T14:34:24Z",
                "content": "US stocks moved higher on Wednesday as investors turn their attention to the highly anticipated December CPI report, which is set to be released Thursday morning.\r\nConsensus expects headline inflatio… [+1114 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "US stocks dip after weekly drop as recession worries remain on the radar",
                "description": "The S&P 500 is coming off two weeks of losses with time running out for a potential Santa Claus rally.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewsdownasdaqeconomyrecessionfedratestesla202212",
                "urlToImage": "https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg",
                "publishedAt": "20221219T14:42:14Z",
                "content": "Stocks traded lower Monday as investors navigate through signs of peaking inflation alongside concerns about the US running into recession next year. \r\nInvestors have only nine full trading sessions … [+1203 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "Sam BankmanFriedbacked Solana soars after ecosystem sees shiba inuthemed token airdrop",
                "description": "After losing nearly all its value in 2022 as Sam BankmanFried's crypto empire collapsed, solana ended a streak of nine consecutive days of losses.",
                "url": "https://markets.businessinsider.com/news/currencies/sambankmanfriedbackedsolanashibainuthemedbonkairdrop20231",
                "urlToImage": "https://i.insider.com/61378165eedea900193d5a08?width=1200&format=jpeg",
                "publishedAt": "20230103T17:50:12Z",
                "content": "Solana soared on Tuesday after a token airdrop from shiba inuthemed Bonk sparked interest in the cryptocurrency. \r\nAfter losing nearly all its value in 2022 as Sam BankmanFried's crypto empire coll… [+1297 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "US stocks trade mixed to begin final trading week of 2022 as China further reopens economy",
                "description": "China announced it would reopen its borders next month as part of broader plans to loosen COVID restrictions on its economy.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaychinareopenfinaltradingweek2023202212",
                "urlToImage": "https://i.insider.com/636be8875aa5be0018f5af36?width=1200&format=jpeg",
                "publishedAt": "20221227T14:34:07Z",
                "content": "US stocks traded mixed on Tuesday to kick off the final trading week of the year as investors continue to wait for the traditional \"Santa Claus rally\" to kick in.\r\nChinese stocks ticked higher as Bei… [+1144 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "hbullock@insider.com (Hallam Bullock)",
                "title": "How to get ahead in 2023",
                "description": "Insider's Hallam Bullock has rounded up some of our top markets stories. Including top tips for stocks and what to expect for the rest of 2023.",
                "url": "https://www.businessinsider.com/howtogetaheadin202320231",
                "urlToImage": "https://i.insider.com/63bf31ef33ffb700180f63f5?width=1200&format=jpeg",
                "publishedAt": "20230116T11:05:00Z",
                "content": "Hello friends. Insider's newsletter editor Hallam Bullock here, reporting from London while Phil Rosen is out. Even though ChatGPT wrote a convincing article for Phil last week, AI can't hope to deli… [+3771 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks edge higher as investors weigh China's COVID surge and reopening of its borders",
                "description": "Investors are weighing the reopening of China's borders against persistently rising Covid19 infections in the country.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaychinasreopeningunderscoredrisingcovid202212",
                "urlToImage": "https://i.insider.com/63ac51a33e42ed001855ae32?width=1200&format=jpeg",
                "publishedAt": "20221228T14:54:27Z",
                "content": "US stocks edged higher on Wednesday as investors weighed rising COVID infections in China and the country's reopening efforts.\r\nOil prices slid after touching a threeweek high in the previous sessio… [+1094 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Cryptocurrency past is prologue: before and after FTX  Reuters",
                "description": "FTX is not the first nor last but a recent and enormous implosion in the cryptocurrency industry. Previously we have seen examples parade by of external theft, internal theft, antimoney laundering failures, cybercrime enablement, loss of cryptographic keys a…",
                "url": "https://www.reuters.com/legal/transactional/cryptocurrencypastisprologuebeforeafterftx20230117/",
                "urlToImage": "https://www.reuters.com/resizer/Lb7P3qv1ZTJhf_MlUq4_yDe0zI=/800x419/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/S2YQA2OJMNL7TF2VO3M3LR7MNI.jpg",
                "publishedAt": "20230117T16:21:00Z",
                "content": "January 17, 2023  FTX is not the first nor last but a recent and enormous implosion in the cryptocurrency industry. Previously we have seen examples parade by of external theft, internal theft, anti… [+8033 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "This 48yearold FTX user who lost access to $120,000 plans to diversify into real estate and luxury collectibles  but hasn't lost faith in crypto",
                "description": "\"A good chunk of my savings are gone because someone tried to defraud me,\" a Californiabased father of three told Insider.",
                "url": "https://markets.businessinsider.com/news/currencies/ftxinvestorsambankmanfriedcryptoexchangemarketscollapsestocks202212",
                "urlToImage": "https://i.insider.com/63aa40d547bbe40019836018?width=1200&format=jpeg",
                "publishedAt": "20221227T16:44:26Z",
                "content": "As Sam BankmanFried's crypto empire collapsed, a 48yearold software developer lost access to roughly $120,000 of funds on FTX US in early November.\r\nNauman, who asked to be identified by first nam… [+2863 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Bitnation.co"
                },
                "author": "Parth Dubey",
                "title": "A16Z Is the “Worst and Largest” Scammer of All, Says CEO of Swan Bitcoin",
                "description": "The Bitcoin Swan CEO was one of the first people to point out the vulnerabilities in Luna, Celsius, and the now disgraced crypto exchange FTX",
                "url": "https://bitnation.co/a16zistheworstandlargestscammerofall/",
                "urlToImage": "https://bitnation.co/wpcontent/uploads/2022/11/a16z.jpg",
                "publishedAt": "20230103T21:18:07Z",
                "content": "<ul><li>Andreessen Horowitz (a16z) and its general partner Chris Dixon, have been called out by CEO of Swan Bitcoin, Cory Klippsten, for promoting Ponzi schemes and fake crypto projects. </li><li>Kli… [+3384 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Anushree Dave",
                "title": "Crypto Update: Bitcoin, Ethereum set for worst year since 2018",
                "description": "A tough year for crypto has bitcoin and Ethereum posting their worst performance in four years.",
                "url": "https://www.marketwatch.com/story/bitcoinethereumsetforworstyearsince201811672426060",
                "urlToImage": "https://images.mktw.net/im676559/social",
                "publishedAt": "20221230T18:47:00Z",
                "content": "Its been a rough year for crypto prices, with two major coins on track for their worst annual performance in four years.For the year through Thursday evening, bitcoin \r\n BTCUSD,\r\n 0.30%\r\nwas down 64… [+965 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "US stocks jumps as upbeat earnings from Nike show resilient consumer spending",
                "description": "Nike jumped 13% in early Wednesday trades after the company said footwear and apparel sales rose 25% and 4% in the quarter, respectively.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodayupbeatnikeearningsshowresilientconsumer202212",
                "urlToImage": "https://i.insider.com/63a314deae4bde0019502aa6?width=1200&format=jpeg",
                "publishedAt": "20221221T14:38:48Z",
                "content": "US stocks jumped on Wednesday after upbeat earnings from Nike showed that the consumer is not falling apart as some fear. \r\nNike rallied 13% in early Wednesday trades after the company said footwear … [+1394 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Myles Udland",
                "title": "Stock market live news updates: Stocks lower on final trading day of 2022  Yahoo Canada Finance",
                "description": "<ol><li>Stock market live news updates: Stocks lower on final trading day of 2022  Yahoo Canada Finance\r\n</li><li>Nasdaq back from brink of worst December ever as U.S. Fed angst dims  BNN Bloomberg\r\n</li><li>Stocks fall, Treasury yields rise upon final 2022 t…",
                "url": "https://ca.finance.yahoo.com/news/stockmarketlivenewsupdatesdecember302022113654551.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Eb6pol.UAqXp3c4vnPldyA/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE/https://s.yimg.com/os/creatruploadedimages/202212/b6341690883311ed9f6ff6fb2e5873cf",
                "publishedAt": "20221230T14:36:13Z",
                "content": "Stocks closed lower across the board on Friday to finish off the worst year for the U.S. stock market since the financial crisis.\r\nWhen the year's final closing bell rang on Friday, the S&amp;P 500 a… [+2650 chars]"
            },
            {
                "source": {
                    "id": "arstechnica",
                    "name": "Ars Technica"
                },
                "author": "Kyle Orland",
                "title": "Reminder: Donate to win swag in our annual Charity Drive sweepstakes",
                "description": "There's still time to contribute to this year's charity haul of nearly $12K so far.",
                "url": "https://arstechnica.com/gaming/2022/12/reminderdonatetowinswaginourannualcharitydrivesweepstakes9/",
                "urlToImage": "https://cdn.arstechnica.net/wpcontent/uploads/2022/12/arscharitydrive2022760x380.jpg",
                "publishedAt": "20221220T15:14:25Z",
                "content": "0 with 0 posters participating\r\nIf you were too distracted this weekend by John Carmack's Friday departure from Meta to donate to this year's Ars Technica Charity Drive sweepstakes, don't worry. You … [+2034 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Coinbase jumps to a onemonth high as the crypto exchange says it will slash another 20% of staff amid market slump",
                "description": "Coinbase stock was in recovery mode after it was slammed down more than 80% in 2022.",
                "url": "https://markets.businessinsider.com/news/stocks/coinbasestockpricecryptoexchangejobcuts20percentworkforce20231",
                "urlToImage": "https://i.insider.com/60c909f923393a00188e3544?width=1200&format=jpeg",
                "publishedAt": "20230110T17:44:35Z",
                "content": "Coinbase shares pushed higher Tuesday as the company outlined plans to cut more jobs to navigate through turbulence in a crypto market hurt by slumping prices and organizational blowups. \r\nThe stock… [+1478 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks drop as signs of a stilltight labor market raise fears the Fed will stay hawkish into 2023",
                "description": "\"Strong economic data, especially strong labor market data, keeps the Fed's foot on the economic brake,\" Charles Schwab's Liz Ann Sonders said.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaydowjoblessclaimsfedratehikes202212",
                "urlToImage": "https://i.insider.com/63a4b8a72345c00019eab17b?width=1200&format=jpeg",
                "publishedAt": "20221222T21:06:11Z",
                "content": "US stocks closed lower on Thursday, snapping a win streak of three consecutive gains, amid indications the labor market remains too tight for the Federal Reserve's liking.\r\nUnemployment filings climb… [+1523 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "Mark Cuban to be deposed over his promotion of Voyager crypto 'Ponzi scheme' in class action lawsuit",
                "description": "Cuban touted Voyager on multiple occasions, previously calling the nowbankrupt crypto lender \"as close to riskfree as you're gonna get.\"",
                "url": "https://markets.businessinsider.com/news/currencies/markcubanvoyagerponzischemelawsuitdallasmaverickscryptowinter20231",
                "urlToImage": "https://i.insider.com/605767691fcb5700186ee96e?width=1200&format=jpeg",
                "publishedAt": "20230110T14:55:29Z",
                "content": "Shark Tank investor Mark Cuban will be deposed next month in connection to his promotion of Voyager, the crypto lender described as a \"Ponzi scheme\" in a class action lawsuit.\r\nThe lawsuit, which was… [+1792 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "Coinbase is shuttering services for customers in Japan as crypto winter rages on",
                "description": "Customers in Japan have until February 16 to withdraw holdings from the crypto exchange.",
                "url": "https://markets.businessinsider.com/news/currencies/coinbasecryptoexchangeshutteringjapanservicesamidbearmarketwinter20231",
                "urlToImage": "https://i.insider.com/63c7ff94eee94d001a78c767?width=1200&format=jpeg",
                "publishedAt": "20230118T15:22:40Z",
                "content": "Coinbase said Wednesday it will soon shutter the cryptocurrency exchange's services in Japan, citing difficult market conditions. \r\nCustomers in Japan have until February 16 to withdraw their crypto … [+1341 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "sankel@businessinsider.com (Sophia Ankel)",
                "title": "The internetfamous Shiba Inu who inspired 'doge' memes, and a joke cryptocurrency, is seriously ill with cancer",
                "description": "Kabosu, the 17yearold Shiba Inu, stopped eating and drinking on Christmas Eve, her owner said on Tuesday.",
                "url": "https://www.businessinsider.com/dogememeshibainuillcancerliverdiseaseownersays202212",
                "urlToImage": "https://i.insider.com/63ac14713e42ed001855ab36?width=1200&format=jpeg",
                "publishedAt": "20221228T12:30:16Z",
                "content": "Kabosu, the internetfamous Shiba Inu who inspired the \"doge\" memes, is seriously ill with liver disease and leukemia, her owner said on Tuesday. \r\nThe dog's owner, Atsuko Sato, a teacher in Sakura, … [+1446 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "US stocks trade mixed as Wall Street eyes Fed officials hints' on higherforlonger rates",
                "description": "Fed Chairman Jerome Powell said at conference in Stockholm that restoring price stability requires unpopular decisions.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaydowfedhigherforlongerrates20231",
                "urlToImage": "https://i.insider.com/63a49ef52345c00019eaa94b?width=1200&format=jpeg",
                "publishedAt": "20230110T14:34:34Z",
                "content": "US stocks opened mixed but largely flat on Tuesday as investors digested hawkish comments from Federal Reserve officials.\r\nChairman Jerome Powell said at conference in Stockholm that restoring price … [+1465 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "Nasdaq logs its best win streak since September as stocks rise ahead of December inflation report",
                "description": "The December CPI report will inform investors as to whether the Federal Reserve needs to continue hiking interest rates aggressively.",
                "url": "https://markets.businessinsider.com/news/stocks/stockmarketnewstodaynasdaqbestwinstreaksinceseptember20231",
                "urlToImage": "https://i.insider.com/5f904263d25aab0018402c73?width=1200&format=jpeg",
                "publishedAt": "20230111T21:05:13Z",
                "content": "Megacap tech stocks powered the stock market higher on Wednesday, with the Nasdaq 100 jumping as 1.76%.\r\nThe gain helped the Nasdaq notch a fourday win streak, its best showing since September. Inv… [+1327 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "bevans@insider.com (Brian Evans)",
                "title": "DCG suspends quarterly dividends to preserve cash as Genesis lending unit tries to avoid bankruptcy, report says",
                "description": "DCG is \"strengthening our balance sheet by reducing operating expenses and preserving liquidity,\" according to a shareholder letter seen by Bloomberg.",
                "url": "https://markets.businessinsider.com/news/currencies/digitalcurrencygrouphaltsdividendinvestorsgenesisbankruptcywinklevossgemini20231",
                "urlToImage": "https://i.insider.com/63c800a4297d7e001963ddbf?width=1200&format=jpeg",
                "publishedAt": "20230118T15:05:57Z",
                "content": "Digital Currency Group reportedly plans to halt quarterly dividends to conserve cash, as its Genesis Global Capital lending unit tries to avoid bankruptcy. \r\nAccording to a Tuesday letter to sharehol… [+1548 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Dollar steadies as optimism over China reopening turns to caution  Reuters",
                "description": "The dollar steadied on Thursday after riding longend U.S. Treasury yields higher overnight, as initial optimism over China's reopening fizzled.",
                "url": "https://www.reuters.com/markets/currencies/dollarsteadiesoptimismoverchinareopeningturnscaution20221229/",
                "urlToImage": "https://www.reuters.com/resizer/EJ53b70pmVdiefq8a3amk1xudUg=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/V5RJD6WNSROIZFAZALUB4DRVD4.jpg",
                "publishedAt": "20221229T02:01:00Z",
                "content": "SINGAPORE, Dec 29 (Reuters)  The dollar steadied on Thursday after riding longend U.S. Treasury yields higher overnight, as initial optimism over China's reopening fizzled.\r\nFollowing China's remov… [+2210 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "BankmanFried set to enter initial not guilty plea in FTX fraud case ...  Reuters",
                "description": "Sam BankmanFried is expected on Tuesday to enter an initial plea of not guilty to criminal charges that he cheated investors and looted billions of dollars at his nowbankrupt FTX cryptocurrency exchange, according to a source familiar with the matter.",
                "url": "https://www.reuters.com/legal/bankmanfriedsetenterinitialnotguiltypleaftxfraudcasesource20221230/",
                "urlToImage": "https://www.reuters.com/resizer/hBFfqJ4Ewz0Lms6EKkr_uo4lPo=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/LHIBZOUVNBOFRAQHLXJEBMH67E.jpg",
                "publishedAt": "20221230T22:13:00Z",
                "content": "NEW YORK, Dec 30 (Reuters)  Sam BankmanFried is expected on Tuesday to enter an initial plea of not guilty to criminal charges that he cheated investors and looted billions of dollars at his nowba… [+2090 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "FTX says $415 million in crypto was hacked  Reuters",
                "description": "Bankrupt crypto exchange FTX said in a report to creditors on Tuesday that about $415 million in cryptocurrency had been stolen as a result of hacks.",
                "url": "https://www.reuters.com/technology/ftxsays415millioncryptowashacked20230117/",
                "urlToImage": "https://www.reuters.com/resizer/rePoVKfDyza4GSpIbMXtWOHa_zs=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/PGPRDZLFNRPAJHOW5QMHIQJSR4.jpg",
                "publishedAt": "20230117T23:18:00Z",
                "content": "Jan 17 (Reuters)  Bankrupt crypto exchange FTX said in a report to creditors on Tuesday that about $415 million in cryptocurrency had been stolen as a result of hacks.\r\nSome $323 million in crypto h… [+2246 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "author": "Tim Keary",
                "title": "Web3 ecosystem lost $3.1 billion to crypto fraud in 2022",
                "description": "An Immunefi report finds that $3.1 billion in crypto was lost across the Web3 ecosystem in 2022 due to hacks and scams.",
                "url": "https://venturebeat.com/security/web3cryptofraud/",
                "urlToImage": "https://venturebeat.com/wpcontent/uploads/2021/06/aleksiraisajwXYEqVs34unsplashe1623809000201.jpg?w=1200&strip=all",
                "publishedAt": "20230105T14:00:00Z",
                "content": "Check out all the ondemand sessions from the Intelligent Security Summit here.\r\nNew technologies create new risks. Ever since cryptocurrency rose to prominence after the release of Bitcoin in 2008, … [+1043 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Mark DeCambre",
                "title": "Distributed Ledger: Mark Cuban says gold buyers are ‘dumb as f—,’ sparking a gold vs. bitcoin spat with Peter Schiff",
                "description": "‘His lack of understanding of Bitcoin is only exceeded by his lack of understanding of #gold,’ says Peter Schiff, market pundit and global strategist for Euro Pacific Capital",
                "url": "https://www.marketwatch.com/story/markcubansaysgoldbuyersaredumbasfsparkingagoldvsbitcoinspatwithpeterschiff11672346801",
                "urlToImage": "https://images.mktw.net/im429485/social",
                "publishedAt": "20221229T20:46:00Z",
                "content": "Happy New Year! And what a year it has been for bitcoin and its ilk. This is Mark DeCambre, Editor in Chief at MarketWatch. What does 2023 hold for bitcoin prices or adoption? Will crypto face furthe… [+8434 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mfox@businessinsider.com (Matthew Fox)",
                "title": "These are the 10 worst performing cryptocurrencies in 2022  a year that was riddled with fraud, scams, and spectacular implosions for the crypto industry",
                "description": "Crypto tokens that fell below the $1 billion market cap threshold include Terra Classic, as well as Helium, Axie Infinity, and The Sandbox.",
                "url": "https://markets.businessinsider.com/news/currencies/solanacardanoalgorandamong10worstperformingcryptocurrenciesthisyear202212",
                "urlToImage": "https://i.insider.com/6376f44f8faef80019a75fcb?width=1200&format=jpeg",
                "publishedAt": "20221230T16:14:12Z",
                "content": "2022 was a very tough year for crypto investors. In fact, it was the polar opposite of 2021, when various cryptocurrencies zoomed to record highs and the total market value of the space hit $3 trilli… [+2052 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "author": "Rachel Busch, Circle",
                "title": "Stablecoins could be the future of ecommerce digital payments",
                "description": "Why we'll see more online storefronts offering seamless digital wallet options so that stablecoins feel like internetnative shopping.",
                "url": "https://venturebeat.com/datainfrastructure/stablecoinscouldbethefutureofecommercedigitalpayments/",
                "urlToImage": "https://venturebeat.com/wpcontent/uploads/2022/04/GettyImages1369189803.jpg?w=1200&strip=all",
                "publishedAt": "20221229T21:07:00Z",
                "content": "Check out all the ondemand sessions from the Intelligent Security Summit here.\r\nOver the past decade, payment companies and ecommerce have revolutionized how individuals shop online. I do nearly all… [+1498 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MakeUseOf"
                },
                "author": "Damir Mujezinovic",
                "title": "Bitcoin Is Not as Secure and Private as You Think: Here's Why",
                "description": "Everyone considers cryptocurrency to be safe and private, especially Bitcoin. But maybe you should think again...",
                "url": "https://www.makeuseof.com/bitcoinnotsecureprivate/",
                "urlToImage": "https://static1.makeuseofimages.com/wordpress/wpcontent/uploads/2022/12/bitcoinnotsecureprivate.jpg",
                "publishedAt": "20221217T22:00:15Z",
                "content": "As the oldest and best known cryptocurrency in the world, Bitcoin has had many ups and downs since its invention in 2008.\r\nThe volatility of the crypto market aside, those advocating for Bitcoin have… [+6257 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "mchittum@insider.com (Morgan Chittum)",
                "title": "From TerraUSD's meltdown to the collapse of a $32 billion crypto empire, here is a full timeline of the crypto market's year in 2022",
                "description": "The industry endured a series of collapses, including FTX, algorithmic stablecoin UST, and centralized lender Celsius, to name just a few.",
                "url": "https://markets.businessinsider.com/news/currencies/cryptomarketsrecapterrausdmeltdownftxcollapsesambankmanfried202212",
                "urlToImage": "https://i.insider.com/63acf91ea51b3d00185b1d67?width=1200&format=jpeg",
                "publishedAt": "20221231T13:15:00Z",
                "content": "Crypto endured major blows this year as the industry's market cap sits more than twothirds below its record high. The nascent space took hits from a harsh macroeconomic environment, a slew of bankru… [+5669 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "prosen@insider.com (Phil Rosen)",
                "title": "Wall Street is feeling bearish, but a rare stock market pattern is hinting at a bull rally to kick off 2023.",
                "description": "Insider's Phil Rosen breaks down why the mood on Wall Street is awfully bearish even as recession fears have eased.",
                "url": "https://www.businessinsider.com/stockrallybearishmarketseconomybankswallstreetfedgoldman20231",
                "urlToImage": "https://i.insider.com/63c6d41217227d00187c1e66?width=1200&format=jpeg",
                "publishedAt": "20230118T11:05:00Z",
                "content": "Happy hump day, readers. I'm senior reporter Phil Rosen. I'm not yet back in Manhattan, but Wall Street banks have been sounding the alarm loud enough over the last week for me to hear them from Los … [+5410 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Richard Iamunno",
                "title": "Why It's Time For Your Business To Accept Crypto Payments",
                "description": "When done right, crypto payments can be a gold mine for businesses. Isn't it time you got on board?",
                "url": "https://www.entrepreneur.com/moneyfinance/whyitstimeforyoutoacceptcrypto/441997",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1673445228GettyImages1303397527.jpg",
                "publishedAt": "20230113T18:30:00Z",
                "content": "Cryptocurrency is nothing new. While many people discuss the digital asset as an enigma, it is a medium of exchange worth significant value. True, digital coins do not have the same tangible backing … [+5792 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                "title": "Elon Musk's conservative politics are hurting his personal brand and alienating Tesla's main customers, Nobel laureate Paul Krugman says",
                "description": "The Tesla chief's embrace of conservative politics is at odds with the wealthy, environmentally conscious liberals who buy his cars, Krugman said.",
                "url": "https://markets.businessinsider.com/news/stocks/elonmuskpoliticsrepublicanpaulkrugmanteslacustomersstockprice202212",
                "urlToImage": "https://i.insider.com/63ad83433e42ed001855cbd8?width=1200&format=jpeg",
                "publishedAt": "20221229T13:15:51Z",
                "content": "Elon Musk's embrace of conservative politics is tarnishing his personal brand and alienating Tesla's customers, Paul Krugman has said.\r\nThe electricvehicle company's CEO declared in May that he had … [+2134 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Insiderintelligence.com"
                },
                "author": "insider@insider.com (Adriana Nunez)",
                "title": "Fintech stocks took a beating in 2022 as economic headwinds picked up",
                "description": "Fintech stocks and indices underperformed broader financial services and technology stocks last year—here's why that matters.",
                "url": "https://www.insiderintelligence.com/content/fintechstockstookbeating2022economicheadwindspickedup",
                "urlToImage": "https://www.insiderintelligence.com/content/storage/socialsharingdefault/defaultimageshare.png?im=FitAndFill,width=1200,height=630",
                "publishedAt": "20230104T16:11:17Z",
                "content": "The news:Fintech stocks and indices underperformed against both broader financial services and technology in 2022, per the Wall Street Journal. \r\n<ul><li>The Global X Fintech exchangetraded fund (ET… [+2256 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "insider@insider.com (Carla Mozée)",
                "title": "Silvergate extends selloff into 2nd day as Bank of America sees 35% downside after the crypto bank disclosed huge run on deposits",
                "description": "Silvergate's stock may be vulnerable to future regulatory and legislative action stemming from the FTX blowup, says BofA.",
                "url": "https://markets.businessinsider.com/news/stocks/silvergatestockpricecryptobankratingsdowngradedepositsearningsbofa20231",
                "urlToImage": "https://i.insider.com/633af20a6427060019ef0fac?width=1200&format=jpeg",
                "publishedAt": "20230106T17:42:37Z",
                "content": "Silvergate Capital shares extended a selloff into a second session on Friday following the cryptofocused bank's disclosure that customers withdrew billions of dollars in deposits after the collapse… [+1880 chars]"
            },
            {
                "source": {
                    "id": "businessinsider",
                    "name": "Business Insider"
                },
                "author": "jsor@insider.com (Jennifer Sor)",
                "title": "Crypto has little intrinsic value or fundamentals to fall back on, and traders are merely riding a 'hot ball' of momentum, investment firm says",
                "description": "Crypto has little inherent value and is mostly driven by hypedup narratives pushed by its very online market participants, a recent report states.",
                "url": "https://markets.businessinsider.com/news/currencies/cryptomarkethotballtheorymomentumtradingintrinsicvalueskeptic20231",
                "urlToImage": "https://i.insider.com/605b22ff106eb50019d0545d?width=1200&format=jpeg",
                "publishedAt": "20230112T16:58:35Z",
                "content": "Cryptocurrencies have little intrinsic value or fundamentals to fall back on, and traders are merely riding a \"hot ball\" of momentum, according to a report from Starkiller Capital.\r\n\"Cryptocurrencies… [+1962 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "author": "Steve Huff",
                "title": "S.E.C. Charges Winklevoss Twins' Crypto Companies With Offering Unregistered Securities",
                "description": "Genesis Global Capital and Gemini Trust allegedly raised billions from thousands of investors with an unregistered program.",
                "url": "https://www.entrepreneur.com/businessnews/secsayscryptocompaniesofferedunregisteredsecurities/442860",
                "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1673590741GettyImages98950824SECSign.jpg",
                "publishedAt": "20230113T06:21:00Z",
                "content": "On Thursday, the Securities and Exchange Commission (S.E.C.) charged Genesis Global Capital and Gemini Trust, run by Cameron and Tyler Winklevoss, with offering unregistered securities. According to … [+2086 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Zoltan Vardai",
                "title": "FTX founder Sam BankmanFried allegedly cashes out US$684,000 onchain data show",
                "description": "Onchain data showed that Sam BankmanFried, the founder of the nowbankrupt FTX exchange, sent around 570 Ether worth US$684,000 to a Seychellesbased...",
                "url": "https://finance.yahoo.com/news/ftxfoundersambankmanfried152121479.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8kZBq74eL1xXsKulerz4jg/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU/https://media.zenfs.com/en/forkast_news_articles_672/4c65ea6f24ad5ebae8cc536809a0a636",
                "publishedAt": "20221230T18:05:51Z",
                "content": "Onchain data showed that Sam BankmanFried, the founder of the nowbankrupt FTX exchange, sent around 570 Ether worth US$684,000 to a Seychellesbased exchange and Ren Protocols Bitcoin bridge on We… [+1146 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Dollar retreats as risk appetite improves; Australia, NZ currencies rise  Reuters",
                "description": "The dollar moved broadly lower on Tuesday while Australia and New Zealand's currencies jumped as risk appetite grew after China said it will scrap its COVID quarantine rule for inbound travellers  a major step towards easing curbs on its borders.",
                "url": "https://www.reuters.com/markets/currencies/dollarretreatsriskappetiteimprovesaustralianzcurrenciesrise20221227/",
                "urlToImage": "https://www.reuters.com/resizer/8CKlZVa4ZT4eEF1eXKv_3RFmY=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/CWR76NAJSVMXVLEKV2D54TKWD4.jpg",
                "publishedAt": "20221227T01:20:00Z",
                "content": "SINGAPORE, Dec 27 (Reuters)  The dollar moved broadly lower on Tuesday while Australia and New Zealand's currencies jumped as risk appetite grew after China said it will scrap its COVID quarantine r… [+2720 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Inferse.com"
                },
                "author": "https://www.facebook.com/profile.php?id=100005391009970",
                "title": "NFT sales plunge in Q3, down by 60% from Q2 – Reuters.com  Inferse",
                "description": "LONDON, Oct 3 (Reuters)  Sales of nonfungible tokens dropped sharply in the third quarter, according to blockchain tracker DappRadar, as crypto investors",
                "url": "https://www.inferse.com/399037/nftsalesplungeinq3downby60fromq2reuterscom/",
                "urlToImage": "https://www.inferse.com/wpcontent/uploads/2023/01/wpheaderlogo6624.png",
                "publishedAt": "20230110T02:15:48Z",
                "content": "LONDON, Oct 3 (Reuters) – Sales of nonfungible tokens dropped sharply in the third quarter, according to blockchain tracker DappRadar, as crypto investors hunker down for a \"crypto winter\" and deman… [+3557 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Yen flying as market challenges BOJ, stocks cheer inflation's retreat  Reuters",
                "description": "Asian stocks rose on Friday as investors cheered a slowdown in U.S. inflation, while the yen hit a sevenmonth high and Japanese bond yields broke above the central bank's target as markets challenged Tokyo's commitment to loose monetary policy.",
                "url": "https://www.reuters.com/markets/globalmarketswrapup120230113/",
                "urlToImage": "https://www.reuters.com/resizer/J0jQ59V593N6vav18vhmH3ZLIKw=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/SOSGU5RP7NKTBLMEW7YNJRQNWE.jpg",
                "publishedAt": "20230113T01:48:00Z",
                "content": "SINGAPORE/TOKYO, Jan 13 (Reuters)  Asian stocks rose on Friday as investors cheered a slowdown in U.S. inflation, while the yen hit a sevenmonth high and Japanese bond yields broke above the centra… [+3627 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "FTX founder BankmanFried to make U.S. court appearance after ...  Reuters",
                "description": "FTX founder Sam BankmanFried is expected to appear before a U.S. court on Thursday after being extradited from The Bahamas, where he had remained since the collapse of his nowbankrupt cryptocurrency exchange.",
                "url": "https://www.reuters.com/legal/ftxfounderbankmanfriedmakeuscourtappearanceafterextradition20221222/",
                "urlToImage": "https://www.reuters.com/resizer/u5z4Ha9ukwYKCkQ5dbloErx78=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/43P5CQVD4ZNUFFG2DMTXPUFA5M.jpg",
                "publishedAt": "20221222T11:05:00Z",
                "content": "NEW YORK, Dec 22 (Reuters)  FTX founder Sam BankmanFried is expected to appear before a U.S. court on Thursday after being extradited from The Bahamas, where he had remained since the collapse of h… [+2807 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "BankmanFried set to enter not guilty plea in FTX fraud case  Reuters.com",
                "description": "Sam BankmanFried is expected on Tuesday to enter a plea of not guilty to criminal charges that he cheated investors and looted billions of dollars at his nowbankrupt FTX cryptocurrency exchange, according to a source familiar with the matter.",
                "url": "https://www.reuters.com/legal/bankmanfriedsetenternotguiltypleaftxfraudcase20230103/",
                "urlToImage": "https://www.reuters.com/resizer/YqHmK9Pltq2mq5cEBTXzsA9S308=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/TV7XKXQO6VJNTLGAHDQ2F32QVA.jpg",
                "publishedAt": "20230103T11:03:00Z",
                "content": "NEW YORK, Jan 3 (Reuters)  Sam BankmanFried is expected on Tuesday to enter a plea of not guilty to criminal charges that he cheated investors and looted billions of dollars at his nowbankrupt FTX… [+2641 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Justices weigh scope of attorneyclient privilege in crypto tax probe  Reuters.com",
                "description": "The U.S. Supreme Court on Monday wrestled with to what extent attorneyclient privilege shields lawyers' communications with their clients from disclosure when the documents contain more than just legal advice and address other matters.",
                "url": "https://www.reuters.com/legal/legalindustry/justicesweighscopeattorneyclientprivilegecryptotaxprobe20230109/",
                "urlToImage": "https://www.reuters.com/resizer/4pvaONSRywBGN1ILwFNhOGlcsRE=/728x381/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/NZFYGVGXHJNGLKYPZQJGOSHHR4.jpg",
                "publishedAt": "20230109T22:29:00Z",
                "content": "(Reuters)  The U.S. Supreme Court on Monday wrestled with to what extent attorneyclient privilege shields lawyers' communications with their clients from disclosure when the documents contain more … [+3488 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Frances Yue",
                "title": "Distributed Ledger: Cooling U.S. inflation may not stop bitcoin from sliding to $10,000. Here’s why",
                "description": "The latest Distributed Ledger columns from MarketWatch. A weekly look at the most important moves and news in crypto.",
                "url": "https://www.marketwatch.com/story/coolingusinflationmaynotstopbitcoinfromslidingto10000hereswhy11673549670",
                "urlToImage": "https://images.mktw.net/im429485/social",
                "publishedAt": "20230112T18:54:00Z",
                "content": "Welcome back! This is Frances Yue, crypto reporter at MarketWatch. I am back from a vacation to the crypto madness, writing this weeks installment from Singapore. Find me on Twitter at @FrancesYue_ o… [+8157 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Threadreaderapp.com"
                },
                "author": null,
                "title": "The FBI was the primary link between the intelligence community and Twitter",
                "description": "@mtaibbi: 1.THREAD: The Twitter Files TWITTER AND \"OTHER GOVERNMENT AGENCIES\" After weeks of “Twitter Files” reports detailing close coordination between the FBI and Twitter in moderating social media content, the Bu...…",
                "url": "https://threadreaderapp.com/thread/1606701397109796866.html",
                "urlToImage": "https://threadreaderapp.com/images/screenshots/thread/1606701397109796866.jpg",
                "publishedAt": "20221225T18:07:13Z",
                "content": "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Boing Boing's Shop",
                "title": "Cheers to never leaving your house for wine again",
                "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nIt's hard to always be the goto party house. Sometimes it's nice to enjoy yourself, a glass of wine, the dust bunnie…",
                "url": "https://boingboing.net/2022/12/24/cheerstoneverleavingyourhouseforwineagain.html",
                "urlToImage": "https://i0.wp.com/boingboing.net/wpcontent/uploads/2022/12/sale_149025_primary_image_wide1.jpeg?fit=1200%2C900&ssl=1",
                "publishedAt": "20221224T16:00:00Z",
                "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nIt's hard to always be the goto party house. Sometimes it'… [+1831 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "author": "Lauren Aratani",
                "title": "Environmental group sues New York for approving crypto mining facility",
                "description": "Lawsuit argues move to allow energyintensive cryptocurrency miner to take over power plant violates state’s 2019 climate lawEnvironmental activists filed a lawsuit against a New York state agency on Friday for approving a cryptocurrency mining company’s take…",
                "url": "https://www.theguardian.com/usnews/2023/jan/13/environmentalgroupsuesnewyorkcryptomining",
                "urlToImage": "https://i.guim.co.uk/img/media/11ecc591a58b18e59f184b1e8b4acf3535647621/0_192_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c451f4813d9204ffa95f213aec5c64d6",
                "publishedAt": "20230113T17:10:38Z",
                "content": "Environmental activists filed a lawsuit against a New York state agency on Friday for approving a cryptocurrency mining companys takeover of an upstate power plant.\r\nThe group said the move violates … [+5085 chars]"
            },
            {
                "source": {
                    "id": "abcnews",
                    "name": "ABC News"
                },
                "author": "MICHELLE CHAPMAN AP Business Writer",
                "title": "Another round of Coinbase job cuts, 20% of workforce let go",
                "description": "Coinbase is cutting approximately 20% of its workforce, or about 950 jobs, in a second round of layoffs in less than a year",
                "url": "https://abcnews.go.com/Business/wireStory/roundcoinbasejobcuts20workforce96332532",
                "urlToImage": "https://s.abcnews.com/images/Business/wirestory_89fecc513188b68edeb172a5d85e3b39_16x9_992.jpg",
                "publishedAt": "20230110T13:37:15Z",
                "content": "NEW YORK  Cryptocurrency trading platform Coinbase is cutting approximately 20% of its workforce, or about 950 jobs, in a second round of layoffs in less than a year. \r\nThe company cited adverse ec… [+1377 chars]"
            }
        ]
    }

    // console.log('url',response);

    // console.log('serverResponse',response.status);
    // return response
    if (cache_response.status == 'ok') {
     return   Promise.resolve(cache_response)
    }
    else {
      return  Promise.reject(cache_response.code)
    }
    // return
}
const logo = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNy4zLDIxLjFjLTAuNiwwLjQtMSwxLTEsMS44djguMWMwLDAuOCwwLjQsMS41LDEsMS44bDYuOSw0YzAuNiwwLjQsMS40LDAuNCwyLDBsNi45LTRjMC42LTAuNCwxLTEsMS0xLjh2LTIuOQoJbC0zLjItMS44djIuN2MwLDAuOC0wLjQsMS41LTEsMS44TDE2LjMsMzNjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTMuNi0yLjFjLTAuNi0wLjQtMS0xLTEtMS44di00LjJjMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4xCgljMC42LTAuNCwxLjQtMC40LDIsMGw0LjcsMi43bDMuMiwxLjlsNC43LDIuN2MwLjYsMC40LDEuNCwwLjQsMiwwbDctNGMwLjYtMC40LDEtMSwxLTEuOHYtOGMwLTAuNi0wLjQtMS4zLTEtMS43bC03LTQKCWMtMC42LTAuNC0xLjQtMC40LTIsMGwtNi45LDRjLTAuNiwwLjQtMSwxLTEsMS44djIuOWwzLjIsMS45di0yLjljMC0wLjgsMC40LTEuNSwxLTEuOGwzLjctMi4yYzAuNi0wLjQsMS40LTAuNCwyLDBsMy43LDIuMQoJYzAuNiwwLjQsMSwxLDEsMS44djQuMmMwLDAuOC0wLjUsMS41LTEsMS44TDMxLDI0LjZjLTAuNiwwLjQtMS40LDAuNC0yLDBsLTQuNy0yLjlMMjEsMTkuOWwtNC45LTIuOWMtMC42LTAuNC0xLjQtMC40LTIsMAoJQzE0LjEsMTcuMSw3LjQsMjEuMSw3LjMsMjEuMXoiLz4KPC9zdmc+Cg=='
const currencyLogo = "https://app.uniswap.org/static/media/matic-token-icon.da7b877d41122a55de4a43760bb4c8e5.svg"
const wrappedLogo = "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"

export default {
  name: 'polygon',
  id: '0x89',
  networkId: '137',
  namespace: 'eip155',
  label: 'Polygon (POS)',
  fullName: 'Polygon (POS) Mainnet',
  logo,
  logoBackgroundColor: '#824ee2',
  logoWhiteBackground: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDQ1LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgNDUuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNiwyMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwydjguOGMwLDAuOSwwLjQsMS42LDEuMSwybDcuNSw0LjRjMC43LDAuNCwxLjUsMC40LDIuMiwwbDcuNS00LjQKCWMwLjctMC40LDEuMS0xLjEsMS4xLTJ2LTMuMWwtMy41LTJ2Mi45YzAsMC45LTAuNCwxLjYtMS4xLDJsLTQsMi4zYy0wLjcsMC40LTEuNSwwLjQtMi4yLDBsLTMuOS0yLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMlYyNQoJYzAtMC45LDAuNC0xLjYsMS4xLTJsNC0yLjNjMC42LTAuNCwxLjUtMC40LDIuMiwwbDUuMSwyLjlsMy41LDIuMWw1LjEsMi45YzAuNywwLjQsMS41LDAuNCwyLjIsMGw3LjYtNC40YzAuNy0wLjQsMS4xLTEuMSwxLjEtMgoJdi04LjdjMC0wLjctMC40LTEuNC0xLjEtMS44bC03LjYtNC40Yy0wLjctMC40LTEuNS0wLjQtMi4yLDBMMjIsMTEuN2MtMC43LDAuNC0xLjEsMS4xLTEuMSwydjMuMmwzLjUsMi4xdi0zLjFjMC0wLjksMC40LTEuNiwxLjEtMgoJbDQtMi40YzAuNy0wLjQsMS41LTAuNCwyLjIsMGw0LDIuM2MwLjYsMC40LDEuMSwxLjEsMS4xLDJ2NC42YzAsMC45LTAuNSwxLjYtMS4xLDJsLTQsMi40Yy0wLjYsMC40LTEuNSwwLjQtMi4yLDBsLTUuMS0zLjFsLTMuNS0yCglsLTUuMy0zLjFjLTAuNi0wLjQtMS41LTAuNC0yLjIsMEMxMy40LDE2LjYsNi4xLDIxLDYsMjF6Ii8+Cjwvc3ZnPgo=',
  currency: {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    logo: currencyLogo
  },
  wrapped: {
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    logo: wrappedLogo,
  },
  stables: { // max. 2 per fiat currency
    usd: ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0xc2132D05D31c914a87C6611C10748AEb04B58e8F']
  },
  explorer: 'https://polygonscan.com',
  explorerUrlFor: ({ transaction, token, address })=>{
    if(transaction) { return `https://polygonscan.com/tx/${transaction.id || transaction}` }
    if(token) { return `https://polygonscan.com/token/${token}` }
    if(address) { return `https://polygonscan.com/address/${address}` }
  },
  endpoints: [ // make sure provider supports batch size of 99 batch requests!
    'https://polygon-rpc.com',
    'https://poly-rpc.gateway.pokt.network',
    'https://polygon.llamarpc.com'
  ],
  tokens: [ // only major tokens
    {"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", "symbol": "MATIC", "name": "Polygon", "decimals": 18, "logo": currencyLogo, "type": "NATIVE"},
    {"address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", "symbol": "WMATIC", "name": "Wrapped Matic", "decimals": 18, "logo": wrappedLogo, "type": "20"},
    {"address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "symbol": "USDC", "name": "USD Coin", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png", "type": "20"},
    {"address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "symbol": "USDT", "name": "Tether USD", "decimals": 6, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png", "type": "20"},
    {"address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "symbol": "DAI", "name": "Dai Stablecoin", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png", "type": "20"},
    {"address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", "symbol": "WETH", "name": "Wrapped Ether", "decimals": 18, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", "type": "20"},
    {"address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", "symbol": "WBTC", "name": "Wrapped BTC", "decimals": 8, "logo": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png", "type": "20"},
    {"address": "0xf6261529C6C2fBEB313aB25cDEcD243613b40EB5", "symbol": "DEPAY", "name": "DePay", "decimals": 18, "logo": "https://depay.com/favicon.png", "type": "20"},
  ],
  zero: '0x0000000000000000000000000000000000000000',
  maxInt: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
}

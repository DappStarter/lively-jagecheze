require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hockey entry off suggest name release machine uncover gloom drip future slight'; 
let testAccounts = [
"0x1a2d81c54e6820fa0699f54fd20f43e0780362f4af238f1388aca29848415737",
"0x2208391ac8ae6edf2dcd07615dcf0cb99c5ae9119bfbe2d12b226ef3eb63b219",
"0x522c89651bd4102863b6871c9f957b74cbf91ae69c107b1ad835a0fe82ad75ca",
"0x641dd175cb4bf008276c501ef178ac7a0fa9d125e46bdbed8b42464994bacc35",
"0x54703ae54513f50024e90d19a5b16de4773b959b5727e6e9e6ea050378fad335",
"0x14d92b1fc90782f12dc836099b045a6154bd128047063374328ba0654207ce05",
"0x5842a6024598315949c588f65843e53e98758426cea4a7a28f719361d37c3731",
"0x0747a859d238f96cfdf28844b6d2160d30c4e1a0768a013bc827568539ba26d5",
"0x21c18fff7d59c38bfed2149ac308c23ba81c96f86c0e729231d7a8d6d9a57d4f",
"0x36c2276192e5eb7cd0f64c78ee395c2c6ff331c62d27b4e8c0c282ad01fee715"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


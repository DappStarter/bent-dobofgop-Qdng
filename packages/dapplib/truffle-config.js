require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food eight raise rural smooth hunt light army gesture'; 
let testAccounts = [
"0x2fd6ea98160168d089075b324c6a1b964138e2fb37525c9f275402df6cc7cb1a",
"0x5c19217e884dbcb604c5ccd87ff911dafdde5cd8734ef3a90545d05efbd8812f",
"0x6a6e058a71957b83c14d5509c11738c889e20d59a602035c256be219c6d4a44a",
"0xb1857543db51052118263c2f52e3d8bd4c66872b289521e36af5b9f934b31721",
"0x4d35e463cede968b8b652423a742e465576eda51b27d4336adc1badbd3c1161c",
"0x174ea2708cfaf8c28d0c4f7a386fff558806d4266cfe345ad045631658fb6c11",
"0xb8040950abc18a1d4687323df201805375f602b26a2d0f0ad06c752e74a6263a",
"0xd461b4c43162dacff474f173199e59ce7a6521fba12c425da964e9eefc301b67",
"0xf130ad51fb364d30f358e1f7d67978197064b5f2403ecddce44a2e14e8e65682",
"0x838e22774abd79817b8ff7daca8339323379f5f4c1c072042bf15a730fe58d61"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


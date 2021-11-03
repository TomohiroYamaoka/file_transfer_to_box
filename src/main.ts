const BoxSDK = require('box-node-sdk');

const sdkConfig = require('./config.json');
const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig);

const client = sdk.getAppAuthClient('enterprise');

client.folders.getItems('0')
    .then(folder => {
        console.log(folder);
    })
    .catch(err => {
        console.log(err);
    })
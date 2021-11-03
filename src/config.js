"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "SweetPatch Kids";
const description = "The SweetPatch Kids are 8,888 uniquely generated treats. No two are exactly alike and each one of them can be officially owned by a single person. Every person that supports this project and buys a SPK will be sponsoring a kid in real life! 88% of all sales will be donated to United Culture, a 501c3 Non Profit that introduces children to tech and coding!";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
    symbol: "SPK",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.sweetpatchkids.com",
    creators: [{
        address: "3SnU4J37QYiJnFy1tgvBmB6GKFaRYK28phPRPpTTpj2M",
        share: 100,
    }, ],
};

// If you have selected Solana then the collection starts from 0 automatically
// create 2400  with 3rd eye & tie no overlay
const layerConfigurations = [{
    growEditionSizeTo: 2,
    layersOrder: [
        { name: 'tailedskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'tail' },
        { name: 'mouth' },
        { name: 'background' },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'tie' },
        { name: '3rd_eye' },
        { name: 'head' },

    ],
}, {
    // Creates an additional 100 overlay artworks 1000 with 3rd eye & tie overlay
    growEditionSizeTo: 9,
    layersOrder: [
        { name: 'tailedskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'tail' },
        { name: 'mouth' },
        { name: 'background', },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'tie' },
        { name: '3rd_eye' },
        { name: 'overlay', options: { blend: MODE.colorBurn, opacity: 0.6 } },
    ],
}, {
    growEditionSizeTo: 11,
    layersOrder: [
        { name: 'notailskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'mouth' },
        { name: 'notailbackground' },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'tie' },
        { name: '3rd_eye' },
        { name: 'head' },

    ],
}, {
    // Creates an additional 100 overlay artworks 1000 with 3rd eye & tie overlay
    growEditionSizeTo: 15,
    layersOrder: [
        { name: 'notailskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'mouth' },
        { name: 'notailbackground', },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'tie' },
        { name: '3rd_eye' },
        { name: 'notailoverlay', options: { blend: MODE.colorBurn, opacity: 0.6 } },
    ],
}, {
    // Creates an additional 100 standard artworks 2300
    growEditionSizeTo: 18,
    layersOrder: [
        { name: 'tailedskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'tail' },
        { name: 'mouth' },
        { name: 'background', },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'head' },
    ],
}, {
    // Creates an additional 100 overlay artworks 1576
    growEditionSizeTo: 23,
    layersOrder: [
        { name: 'tailedskin' },
        { name: 'eyes' },
        { name: 'chest' },
        { name: 'tail' },
        { name: 'mouth' },
        { name: 'background', },
        { name: 'floor' },
        { name: 'shadow' },
        { name: 'overlay', options: { blend: MODE.colorBurn, opacity: 0.6 } },
    ],
}, ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 502,
    height: 774,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 13 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {
    creator: "K.S.C.",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 15,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
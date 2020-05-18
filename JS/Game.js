  const BigNumber = require('bignumber.js');
        const Ether = new BigNumber(10e+17);
var tpabi = [{
    "constant": true,
    "inputs": [],
    "name": "cxsz2",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "",
            "type": "uint256"
        },
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": false,
    "inputs": [
        {
            "name": "_n",
            "type": "uint256"
        }
    ],
    "name": "polls",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];
var eschabi = [{
    "constant": true,
    "inputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
var gameabi = [{
    "constant": false,
    "inputs": [
        {
            "name": "_n",
            "type": "uint256"
        }
    ],
    "name": "join",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},{
    "constant": true,
    "inputs": [],
    "name": "cest01",
    "outputs": [
        {
            "name": "_esch",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": true,
    "inputs": [
        {
            "name": "_jq",
            "type": "uint256"
        },
        {
            "name": "_bh",
            "type": "uint256"
        }
    ],
    "name": "cjqbh",
    "outputs": [
        {
            "name": "_add",
            "type": "address"
        },
        {
            "name": "_posit",
            "type": "uint256"
        },
        {
            "name": "_bonus",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": true,
    "inputs": [],
    "name": "cnow",
    "outputs": [
        {
            "name": "_dqjq",
            "type": "uint256"
        },
        {
            "name": "_dqdl",
            "type": "uint256"
        },
        {
            "name": "_serial",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": true,
    "inputs": [
        {
            "name": "_serial",
            "type": "uint256"
        }
    ],
    "name": "cnumtoadd",
    "outputs": [
        {
            "name": "_add",
            "type": "address"
        },
        {
            "name": "_posit",
            "type": "uint256"
        },
        {
            "name": "_bonus",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": true,
    "inputs": [
        {
            "name": "_who",
            "type": "address"
        }
    ],
    "name": "cuser",
    "outputs": [
        {
            "name": "_deposit",
            "type": "uint256"
        },
        {
            "name": "_bonus",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},{
    "constant": true,
    "inputs": [],
    "name": "cself",
    "outputs": [
        {
            "name": "_deposit",
            "type": "uint256"
        },
        {
            "name": "_bonus",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
var eschaddress = "0xa821f14fb6394e82839f5161f214cacc90372453";//代币合约地址
var tpadress = "0x2566433aaB3ea1794e952bdFdE9F258F803069BF";
var address = "0xdd8e8b9ad685b5bb2d754fd20eee63caa10e4625";//参与玩法的合约
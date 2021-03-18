// client-side js, loaded by index.html
// run by the browser each time the page is loaded

var abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "CLAIM",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DATED",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "NEW",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "arrangements_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "enum TokenVault.STATUS",
                "name": "aStatus",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "addNew",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "addNewPending",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "addNewPendings",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "setDate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address[]",
                "name": "targets",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "indexs",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "timestamps",
                "type": "uint256[]"
            }
        ],
        "name": "setDates",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "checkArrangement",
        "outputs": [
            {
                "internalType": "string",
                "name": "result",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "checkArrangements",
        "outputs": [
            {
                "internalType": "string",
                "name": "result",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
        // Request account access if needed
        ethereum.enable().then(() => {
            // define variables that reference elements on our page
            const requestForm = document.getElementById("requestform");
            const confirmForm = document.getElementById("confirmform");

            web3.eth.getAccounts().then(act => {
                web3.eth.defaultAccount = act[0];

                // listen for the form to be submitted and add a new dream when it is
                requestForm.addEventListener("submit", event => {
                    // stop our form submission from refreshing the page
                    event.preventDefault();

                    // get dream value and add it to the list
                    let index = requestForm.elements.index.value;

                    var vault = new web3.eth.Contract(
                        abi,
                        requestForm.elements.address.value
                    );

                    vault.methods
                        .arrangements_(act[0], index)
                        .call()
                        .then(p => {
                            console.log(p);
                            let amount = p.amount;
                            let status = '';
                            if(p.aStatus == 0)
                                status = 'PENDING';
                            if(p.aStatus == 1)
                                status = 'ARRANGED';
                            if(p.aStatus == 2)
                                status = 'PAID';
                            
                            var final_date = '';
                           // convert unix timestamp to milliseconds
                           if(p.aStatus != 0 && p.timestamp>0 )
                           {
                                var ts_ms = p.timestamp * 1000;

                                // initialize new Date object
                                var date_ob = new Date(ts_ms);

                                // year as 4 digits (YYYY)
                                var year = date_ob.getFullYear();
                                // month as 2 digits (MM)
                                var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                                // date as 2 digits (DD)
                                var date = ("0" + date_ob.getDate()).slice(-2);

                                // hours as 2 digits (hh)
                                var hours = ("0" + date_ob.getHours()).slice(-2);

                                // minutes as 2 digits (mm)
                                var minutes = ("0" + date_ob.getMinutes()).slice(-2);

                                // seconds as 2 digits (ss)
                                var seconds = ("0" + date_ob.getSeconds()).slice(-2);

                                final_date = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
                           }
                           
                           

                            var resultstr = '<p class="success-msg">Transaction successfully completed</p>';
                            resultstr += '<div class="white-bg">';
                            resultstr += '<p>Amount:<span>'+amount+'</span></p>';
                            if(final_date!='')
                            {
                                resultstr += '<p>Unlocked by:<span>'+final_date+'</span></p>';
                            }                            
                            resultstr += '<p>Current Status:<span>'+status+'</span></p>';
                            resultstr += '</div>';
                            $("#requestresult").show();
                            $("#requestresult").html(resultstr);
                        });
                });

                // listen for the form to be submitted and add a new dream when it is
                confirmForm.addEventListener("submit", event => {
                    // stop our form submission from refreshing the page
                    event.preventDefault();

                    // get dream value and add it to the list
                 //   let pos = confirmForm.elements.requestid.value;
                    var minter = new web3.eth.Contract(
                        abi,
                        confirmForm.elements.address.value
                    );

                    minter.methods
                        .claim()
                        .send({from: act[0]})
                        .on("transactionHash", function (hash) {
                            
                            var resultstr = '<p class="success-msg">'+hash+'</p>';
                            $("#confirmresult").show();
                            $("#confirmresult").html(resultstr);

                            console.log("LOG HASH = START");
                            console.log(hash);
                            console.log("LOG HASH = END");
                                                        
                        })
                        .on("receipt", function (receipt) {


                            var resultstr = '<p class="success-msg">Transaction successfully completed</p>';
                            $("#confirmresult").show();
                            $("#confirmresult").html(resultstr);
                            
                            console.log("RECEIPT  = START");                            
                            console.log(receipt);
                            console.log("RECEIPT = END");
                        })
                        .on("error", function (error, receipt) {
                            // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.

                            var resultstr = '<p class="error-msg">Transaction has been failed! Try again later.</p>';
                            $("#confirmresult").show();
                            $("#confirmresult").html(resultstr);

                            console.log("ERROR  = START");
                            console.log(error);
                            console.log("===================");
                            console.log(receipt);
                            console.log("ERROR  = END");
                        });
                });
            });
        });
        // Acccounts now exposed
    } catch (error) {
        // User denied account access...
    }
}
// Legacy dapp browsers...
else if (window.web3) {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

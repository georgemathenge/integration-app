const axios = require('axios');

const generatePrn = async (req, res) => {
  try {

    // const stakes = await prisma.stake_data.findMany({});

    // if (!stakes.length) {
    //   return res.status(404).json({ message: 'No stake data found' });
    // }

    const prn = req.body;

  

    // const details = stakes.map(stake => ({
    //   stakeInfo: {
    //     betId: stake.betId,
    //     customerId: stake.customerId,
    //     mobileNo: stake.mobileNo,
    //     punterAmt: stake.punterAmt.toFixed(2),
    //     stakeAmt: stake.stakeAmt.toFixed(2),
    //     desc: stake.desc,
    //     odds: stake.odds,
    //     stakeType: stake.stakeType,
    //     dateOfStake: formatDate2(stake.dateOfStake),
    //     exciseAmt: stake.exciseAmt.toFixed(2),
    //     expectedOutcomeTime: stake.expectedOutcomeTime,
    //     walletBalanceStake: stake.walletBalanceStake.toFixed(2),
    //   },
    // }));

    // const response = {
    //   Request: {
    //     hash: "e5c79f7bad362505dcdf89363e763ca7133fc64be687d2cd07cf848ee5769070", // You can generate hash from data if needed
    //     header: {
    //       operatorPin: "P051692747N", // Replace with actual logic if dynamic
    //       transactionDate: new Date().toISOString(),
    //       noOfStakes: details.length,
    //     },
    //    details
    //   },
    // };

    axios({
         method: 'post',
         url: 'https://api-test.kra.go.ke/api/generatePrnRequest',
         data:prn, 
          headers: {
            'Authorization': `Bearer ${res.authToken}`,
            'Content-Type': 'application/json',
          }

       })
       .then(function (response) {
         res.status(201).json({
            message: response.message,
            data: response.data,
            status: response.status
       });
       })
       .catch(function (error) {
         if (error.response) {
           // The request was made and the server responded with a status code
           res.status(error.response.status).json({
             message: 'Error generating prn',
             error: error.response.data
           });
         } else if (error.request) {
           // The request was made but no response was received
           res.status(500).json({ message: 'No response from server', error: error.message });
         } else {
           // Something happened in setting up the request that triggered an Error
           res.status(500).json({ message: 'Error in request setup', error: error.message });
         }
       })
       .finally(function () {
         // always executed
       });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

module.exports = { generatePrn };
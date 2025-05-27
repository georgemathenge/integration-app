// Example DB call in controller
const  prisma  = require('../../prisma/prismaClient');
const {formatDate2} = require('../../utils/dateFormat');
const axios = require('axios');

const getAllOutcomeData = async (req, res) => {
  try {
    // const outcomeData = await prisma.outcome_data.findMany();
    const outcomeData = req.body;

    // if (!outcomeData.length) {
    //   return res.status(404).json({ message: 'No outcome data found' });
    // }

    // const details = outcomeData.map(stake => ({
    //   outcomeInfo: {
    //     betId: stake.betId,
    //     outcome: stake.outcome,
    //     outcomedate: formatDate2(stake.outcomedate),
    //     payout: stake.payout.toFixed(2),
    //     winnings: stake.winnings.toFixed(2),
    //     withholdingTax: stake.withholdingTax.toFixed(2),
    //     walletBalanceOutcome: stake.walletBalanceOutcome.toFixed(2),
    //         },
    // }));

    // const response = {
    //   Request: {
    //     hash: "e5c79f7bad362505dcdf89363e763ca7133fc64be687d2cd07cf848ee5769070", // You can generate hash from data if needed
    //     header: {
    //       operatorPin: "P051692747N", // Replace with actual logic if dynamic
    //       transactionDate: new Date().toISOString(),
    //       noOfOutcomes: details.length,
    //     },
    //    details
    //   },
    // };

      axios({
             method: 'post',
             url: 'https://api-test.kra.go.ke/api/receiveOutcomeData',
                       data:outcomeData, 
              
              // headers: {
              //   'Authorization': `Bearer ${res.authToken}`,
              //   'Content-Type': 'application/json',
              // }
    
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
                 message: 'Error posting stake Data',
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



  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { getAllOutcomeData };
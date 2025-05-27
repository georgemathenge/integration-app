// Example DB call in controller
const  prisma  = require('../../prisma/prismaClient');
const {formatDate2} = require('../../utils/dateFormat');

const getAllOutcomeData = async (req, res) => {
  try {
    const outcomeData = await prisma.outcome_data.findMany();

    if (!outcomeData.length) {
      return res.status(404).json({ message: 'No outcome data found' });
    }

    const details = outcomeData.map(stake => ({
      outcomeInfo: {
        betId: stake.betId,
        outcome: stake.outcome,
        outcomedate: formatDate2(stake.outcomedate),
        payout: stake.payout.toFixed(2),
        winnings: stake.winnings.toFixed(2),
        withholdingTax: stake.withholdingTax.toFixed(2),
        walletBalanceOutcome: stake.walletBalanceOutcome.toFixed(2),
            },
    }));

    const response = {
      Request: {
        hash: "e5c79f7bad362505dcdf89363e763ca7133fc64be687d2cd07cf848ee5769070", // You can generate hash from data if needed
        header: {
          operatorPin: "P051692747N", // Replace with actual logic if dynamic
          transactionDate: new Date().toISOString(),
          noOfOutcomes: details.length,
        },
       details
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { getAllOutcomeData };
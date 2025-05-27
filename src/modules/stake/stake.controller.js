const  prisma  = require('../../prisma/prismaClient');
const {formatDate2} = require('../../utils/dateFormat');

const getStakeInfo = async (req, res) => {
  try {
    const stakes = await prisma.stake_data.findMany();

    if (!stakes.length) {
      return res.status(404).json({ message: 'No stake data found' });
    }

    const details = stakes.map(stake => ({
      stakeInfo: {
        betId: stake.betId,
        customerId: stake.customerId,
        mobileNo: stake.mobileNo,
        punterAmt: stake.punterAmt.toFixed(2),
        stakeAmt: stake.stakeAmt.toFixed(2),
        desc: stake.desc,
        odds: stake.odds,
        stakeType: stake.stakeType,
        dateOfStake: formatDate2(stake.dateOfStake),
        exciseAmt: stake.exciseAmt.toFixed(2),
        expectedOutcomeTime: stake.expectedOutcomeTime,
        walletBalanceStake: stake.walletBalanceStake.toFixed(2),
      },
    }));

    const response = {
      Request: {
        hash: "e5c79f7bad362505dcdf89363e763ca7133fc64be687d2cd07cf848ee5769070", // You can generate hash from data if needed
        header: {
          operatorPin: "P051692747N", // Replace with actual logic if dynamic
          transactionDate: new Date().toISOString(),
          noOfStakes: details.length,
        },
       details
      },
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};


module.exports = { getStakeInfo };
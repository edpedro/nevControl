const Transactions = require("../repositories/TransactionRepository");

module.exports = {
  async index(req, res) {
    const balance = await Transactions.getBalance(req.userData._id);

    return res.status(200).json({ balance });
  },
  async create(req, res) {
    const {
      type,
      description,
      value,
      data,
      category,
      accountCard,
      operation,
    } = req.body;

    try {
      const transaction = await Transactions.createTransactions(
        type,
        description,
        value,
        data,
        category,
        operation,
        req.userData._id,
        accountCard
      );

      return res.status(201).json({ transaction });
    } catch (error) {
      return res.status(400).json({ error: "Falha no cadastro de transação" });
    }
  },
};

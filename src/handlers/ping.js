const pingHandler =  async (req, res) => {
  res.status(200).json({ 
    status: 'live'
  });
}

module.exports = {
  pingHandler
}

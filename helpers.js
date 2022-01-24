const flipCoin = () => {
    const result = Math.floor(Math.random() * 2);
    
    if (result) {
      return true;
    }

    return false;
}

module.exports = { flipCoin };
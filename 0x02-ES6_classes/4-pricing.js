import Currency from './3-currency.js';

/**
 * Class representing a price tagged with a currency.
 */
class Pricing {
  /**
   * Create a Pricing object.
   * @param {number} amount - The amount of money.
   * @param {Currency} currency - The currency instance.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = value;
  }

  /**
   * Display the full price with currency.
   * @returns {string}
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Static method to convert price using a conversion rate.
   * @param {number} amount 
   * @param {number} conversionRate 
   * @returns {number}
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

// Export the Pricing class
export default Pricing;

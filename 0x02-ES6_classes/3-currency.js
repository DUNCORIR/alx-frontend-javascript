/**
 * Class representing a currency.
 */
class Currency {
  /**
   * Constructor to create a new Currency object.
   * @param {string} code - The currency code (e.g., "USD").
   * @param {string} name - The currency name (e.g., "United States Dollar").
   */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Display the full currency in the format: 'name (code)'.
   * @returns {string}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// Export the Currency class
export default Currency;

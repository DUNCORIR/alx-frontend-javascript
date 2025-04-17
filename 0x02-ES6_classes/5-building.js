class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;

    // Check if instance is NOT directly Building and didn't override evacuationWarningMessage
    if (new.target !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // a placeholder to enforce override
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;

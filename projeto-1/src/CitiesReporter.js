import fs from 'fs';

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
  }

  _read(filename) {
    this._cities_json = fs.readFileSync(filename, 'utf8');
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}

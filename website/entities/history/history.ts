export type HistoryProps = {
  /**
   * the designation of the work item.
   */
  designation: string;

  /**
   * the company of the work item.
   */
  company: string;

  /**
   * period of the work item.
   */
  yearsOfExperience: number;

  /**
   *  period of the work item.
   */
  period: string;
};

export class History {
  private _designation: string;

  private _company: string;

  private _yearsOfExperience: number;

  private _period: string;

  constructor(history: HistoryProps) {
    this._designation = history.designation;
    this._company = history.company;
    this._yearsOfExperience = history.yearsOfExperience;
    this._period = history.period;
  }

  get designation() {
    return this._designation;
  }

  get company() {
    return this._company;
  }

  get yearsOfExperience() {
    return this._yearsOfExperience;
  }

  get period() {
    return this._period;
  }
}

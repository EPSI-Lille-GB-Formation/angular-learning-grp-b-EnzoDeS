export class book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public image: string,
    public createDate: Date,
    public updateDate: Date | null
  ) {
    this.createDate = new Date();
  }
}

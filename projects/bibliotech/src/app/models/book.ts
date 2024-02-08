export class book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public image: string,
    public createDate: Date,
    public updateDate: Date | null,
    public id_user:number,
  ) {
    this.createDate = new Date();
  }
}

export class Vehicle {
  public id: number;
  public name: string;
  public description: string;

  constructor(props: Vehicle) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
  }
}

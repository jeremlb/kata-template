export enum Direction {
  UP = "up",
  DOWN = "down",
}

export class Lift {
  direction: Direction;
  is_doors_opened: boolean;

  constructor(
    private readonly min_floor: number,
    private readonly max_floor: number,
    private current_floor: number = 0
  ) {

  }

  public ding(): void {
    console.log("DING!");
  }

  public go(value): void {
    this.direction = value;
  }

  public open(): void {
    this.is_doors_opened = true;
  }

  public close(): void {
    this.is_doors_opened = false;
  }

  public getCurrentFloor(): number {
    return this.current_floor;
  }

  public goToFloor(floor: number): void {
    if (floor > this.max_floor || floor < this.min_floor) {
      throw new Error('My ding ding dong');
    }

    this.current_floor = floor;
  }
}

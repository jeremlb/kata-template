import { Lift, Direction } from './Lift'
/**
 * Here are some suggested lift features:
  a lift responds to calls containing a source floor and direction
  a lift has an attribute floor, which describes it’s current location
  a lift delivers passengers to requested floors
  you may implement current floor monitor 🟢
  you may implement direction arrows 🟢
  you may implement doors (opening and closing) 🟢
  you may implement DING! 🟢
  there can be more than one lift
 */

describe('Lift', () => {
  it('should DING when reaching floor', () => {
    // Arrange    
    const lift = new Lift(-1, 3);

    console.log = jest.fn();

    // Act
    const ding = lift.ding();

    // Assert
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith("DING!");
  })

  it('should go up ⬆️', () => {
    const lift = new Lift(-1, 3);

    lift.go(Direction.UP);

    expect(lift.direction).toEqual(Direction.UP);
  })

  it('should go down ⬇️', () => {
    const lift = new Lift(-1, 3);

    lift.go(Direction.DOWN);

    expect(lift.direction).toEqual(Direction.DOWN);
  })

  it('should open doors', () => {
    const lift = new Lift(-1, 3);

    lift.open();

    expect(lift.is_doors_opened).toEqual(true);
  })

  it('should close doors', () => {
    const lift = new Lift(-1, 3);

    lift.close();

    expect(lift.is_doors_opened).toEqual(false);
  })

  it('should go to floor', () => {
    const lift = new Lift(-1, 3);

    lift.goToFloor(3);

    expect(lift.getCurrentFloor()).toEqual(3);
  })

  it('should not go to a floor that is superior to max', () => {
    const lift = new Lift(-1, 3);

    expect(() => {
      lift.goToFloor(6);
    }).toThrow("My ding ding dong");
  })

  it('should not go to a floor that is inferior to min', () => {
    const lift = new Lift(-1, 3);

    expect(() => {
      lift.goToFloor(-2);
    }).toThrow("My ding ding dong");
  })

  it('should display the floor to user', () => {
    const lift = new Lift(-1, 3);

    lift.goToFloor(1);

    expect(lift.getCurrentFloor()).toEqual(1);

  })
})

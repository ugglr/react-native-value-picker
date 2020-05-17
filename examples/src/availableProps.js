export const propsDescription = [
  {
    name: 'currentValue',
    desc: 'Tells the picker the current picked value',
  },
  {
    name: 'extraData',
    desc:
      "The underlying RN component which creates the list is FlatList. Which means, as a FlatList it is a pure component and won't re-render, unless it subscribes to a piece of data that will trigger a re-render.",
  },
  {
    name: 'list',
    desc:
      'The array of objects which makes up the list. Each Object in the Array needs to have a value-field, and a label-field. Value is the API value which the developer needs to user to pick. Label is the verbose friendly String which is displayed to the user.',
  },
  {
    name: 'onItemPress',
    desc:
      "Callback which get's executed when user presses an Item in the picker list the currentValue.",
  },
  {
    name: 'labelColor',
    desc: 'Changes the un-picked text color of the Items in the list',
  },
  {
    name: 'separatorColor',
    desc: 'Changes color of the separator lines between the Items in the list',
  },
  {
    name: 'selectedColor',
    desc: 'Changes the picked Item text color',
  },
];

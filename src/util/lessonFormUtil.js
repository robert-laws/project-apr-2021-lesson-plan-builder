export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

export const timeIntervals = (start, end) => {
  let intervals = [];
  let minutes = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  for (let j = start; j <= end; j++) {
    for (let i = 0; i < minutes.length; i++) {
      intervals.push(`${j}:${minutes[i]}`);
    }
  }
  return intervals;
};

export const modulesDuration = [
  { id: '05', title: '05' },
  { id: '10', title: '10' },
  { id: '15', title: '15' },
  { id: '20', title: '20' },
  { id: '25', title: '25' },
  { id: '30', title: '30' },
  { id: '35', title: '35' },
  { id: '40', title: '40' },
  { id: '45', title: '45' },
  { id: '50', title: '50' },
  { id: '55', title: '55' },
  { id: '60', title: '60' },
];

export const setIntervals = (time, finish, interval) => {
  let intervals = [];
  do {
    intervals.push({
      id: time.toString(),
      title: `${time.toString()} minutes`,
    });
    time = time + interval;
  } while (time <= finish);
  return intervals;
};

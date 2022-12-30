export interface ISettings {
  id: number;
  label: string;
}

enum Label {
  KIDS = 'Kids Profile',
  PARENTS = 'Parents Profile',
  ALL_WEEK = 'Sunday Approved - All Week',
  SUNDAYS_ONLY = 'Sunday Approved - Sundays Only',
  PG_13 = 'Remove PG-13',
  LDS_TITLES = 'Remove LDS Titles',
}

export const SettingsData: ISettings[] = [
  {
    id: 1,
    label: Label.KIDS,
  },
  {
    id: 2,
    label: Label.PARENTS,
  },
  {
    id: 3,
    label: Label.ALL_WEEK,
  },
  {
    id: 4,
    label: Label.SUNDAYS_ONLY,
  },
  {
    id: 5,
    label: Label.PG_13,
  },
  {
    id: 6,
    label: Label.LDS_TITLES,
  },
];

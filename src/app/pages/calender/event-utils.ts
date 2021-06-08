import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Multi Days event',
    start: '2021-06-10' + 'T09:00:00',
    end: '2021-06-15' + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed Event',
    start: '2021-06-06' + 'T09:00:00',
    end: '2021-06-06' + 'T12:00:00',
  },
];

export function createEventId() {
  return String(eventGuid++);
}

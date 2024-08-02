import { initializeTimes } from './pages/BookingPage';
import { updateTimes } from './pages/BookingPage';

test('Return Time', () => {
  const result = initializeTimes();
  const expected = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  };
  expect(result).toEqual(expected);
});

describe('updateTimes', () => {
  it('should return the same available times regardless of the selected date', () => {
      const selectedDate = '2024-07-30'; // Example date
      const expectedAvailableTimes = [
          "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
      ];
      const result = updateTimes(selectedDate);
      expect(result).toEqual(expectedAvailableTimes);
  });
});
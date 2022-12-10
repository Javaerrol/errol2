import {
  startOfISOWeek,
  endOfISOWeek,
  eachWeekOfInterval,
  startOfWeekYear,
  previousMonday
} from "date-fns";

export const getWeekNumber = (currentDate = new Date()) => {
  var startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  var weekNumber = Math.ceil(days / 7);

  return weekNumber;
};

export const getWeekInterval = (currentDate = new Date()) => {
  const start = startOfISOWeek(currentDate).toISOString();
  const end = endOfISOWeek(currentDate).toISOString();

  return { StartDate: start, EndDate: end };
};

export const getLastWeeksDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
};

export const getEachWeekIntervalToDate = () => {
  const dates = eachWeekOfInterval({
    start: startOfWeekYear(new Date(), {weekStartsOn: 1}),
    end: endOfISOWeek(new Date(), {weekStartsOn: 1}),
  },{
    weekStartsOn: 1
  });

  var intervals = [];

  dates.forEach((date) => {
    intervals.push({
      StartDate: startOfISOWeek(date).toISOString(),
      EndDate: endOfISOWeek(date).toISOString(),
    });
  });

  return intervals;
};

export const getPrevCurrWeekInterval = () => {

  const dates = eachWeekOfInterval({
    start: previousMonday(new Date()),
    end: endOfISOWeek(new Date()),
  });

  var intervals = [];

  dates.forEach((date) => {
    intervals.push({
      StartDate: startOfISOWeek(date).toISOString(),
      EndDate: endOfISOWeek(date).toISOString(),
    });
  });

  return intervals;

}

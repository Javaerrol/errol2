import { _, forEach} from "lodash";
import { getPrevCurrWeekInterval } from "./date-fns";
import { isWithinInterval, getWeek } from "date-fns";

// Calculate totals
export const ordersTotalSales=(orders) => {

  var ordersAmounts = orders.map(function (order) {
    return order.netPaymentSet.shopMoney.amount;
  });

  var currencyFomatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let total = currencyFomatter.format(_.sum(ordersAmounts.map(Number)));
  return total
} 

// Calculate growthrate 
export const ordersGrowthRate=(orders) => {

  const weekIntervals = getPrevCurrWeekInterval();

  let rateFomatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let total = [];
  let prevWeekOrders = [];
  let currWeekOrders = [];

  forEach(orders, (order) => {
    if (
      isWithinInterval(new Date(order.createdAt), {
        start: new Date(weekIntervals[0].StartDate),
        end: new Date(weekIntervals[0].EndDate),
      })
    ) {
      prevWeekOrders.push(order.netPaymentSet.shopMoney.amount);
    }

    if (
      isWithinInterval(new Date(order.createdAt), {
        start: new Date(weekIntervals[1].StartDate),
        end: new Date(weekIntervals[1].EndDate),
      })
    ) {
      currWeekOrders.push(order.netPaymentSet.shopMoney.amount);
    }

  });

  let prevWeekTotal = _.sum(prevWeekOrders.map(Number));
  let currWeekTotal = _.sum(currWeekOrders.map(Number));
  let growthRate = rateFomatter.format((currWeekTotal - prevWeekTotal) / prevWeekTotal);
  
  return growthRate;

}

// Calculate average total sales 
export const ordersAverageSales=(orders) => {

  let numberOfWeeks = getWeek(new Date());

  var ordersAmounts = orders.map(function (order) {
    return order.netPaymentSet.shopMoney.amount;
  });

  var currencyFomatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let total = _.sum(ordersAmounts.map(Number));
  let averageSales = currencyFomatter.format(_.divide(total, numberOfWeeks))
  return averageSales

}


// Calculate average total sales 
export const ordersAnalytics=(orders) => {

}
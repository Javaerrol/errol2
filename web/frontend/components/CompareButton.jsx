import {Button, Popover, OptionList,DatePicker,Grid, ButtonGroup, Filters} from '@shopify/polaris';
import {useState, useEffect, useCallback} from 'react';
import { useAppQuery } from "../hooks";
import { addDays } from "date-fns";

export function CompareButton() {
  const [selected, setSelected] = useState([]);
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Compare
    </Button>
  );
  //Date picker

  const [{month, year}, setDate] = useState({month: new Date().getMonth(), year: new Date().getFullYear()});
  const [selectedDates, setSelectedDates] = useState({
    start: new  addDays(new Date(), -7),
    end: new Date(Date.now()),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
  //end date picker

  const refresh = async function refresh(){
    const {
      data: sales,
      isLoading: isLoadingSales,
      isError: salesError,
    } = useAppQuery({ url: "/api/sales-analytics" });

    console.log(sales)
  }

  return (
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
      >
     <Grid>
        <Grid.Cell columnSpan={{xs: 3, sm: 2, md: 2, lg: 3, xl: 4}}>
        <OptionList
          title="Filters"
          value={setDate}onChange={e=> setSelectedDates(e.target.value)}
          options={[
            //I want to know how to implement it to my project to be able to set the value of the options list//
            
            {value: 'weekToDate', label: 'Week to Date'},
            {value: 'monthToDate' , label: 'Month to Date'},
            {value: 'yearToDate', label: 'Year to Date '},
            
          ]}
          selected={selected}
        
        />
        </Grid.Cell>
        
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <DatePicker
      month={month}
      year={year}
      onChange={setSelectedDates}
      onMonthChange={handleMonthChange}
      selected={selectedDates}
      disableDatesAfter={new Date(Date.now())}
      allowRange
    /></Grid.Cell>
     </Grid>
     <ButtonGroup>
          <Button 
            onClick={togglePopoverActive}>
              Cancel
          </Button>
          <Button primary>Save</Button>
        </ButtonGroup>
      </Popover>
  );
}
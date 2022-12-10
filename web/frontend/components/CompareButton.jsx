import {Button, Popover, OptionList,DatePicker,Grid, ButtonGroup} from '@shopify/polaris';
import {useState, useEffect, useCallback} from 'react';
import { useAppQuery } from "../hooks";

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
  const [{month, year}, setDate] = useState({month: 1, year: 2018});
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Mon fed 28 2018 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
  

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
          onChange={setSelected}
          options={[
            {value: 'weekToDate', label: 'Week to Date'},
            {value: 'monthToDate', label: 'Month to Date'},
            {value: 'yearToDate', label: 'Year to Date '},
            
          ]}
          selected={selected}
          allowMultiple
        />
        </Grid.Cell>
        
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <DatePicker
      month={month}
      year={year}
      onChange={setSelectedDates}
      onMonthChange={handleMonthChange}
      selected={selectedDates}
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
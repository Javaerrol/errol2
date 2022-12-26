
export const AppContext = React.createContext();


export default function App() {
  const [searchPeriod, setSearchPeriod] = useState({
    start: new  addDays(new Date(), -7),
    end: new Date(Date.now()),
  })
  return (
    <AppContext.Provider value={{ searchPeriod, setSearchPeriod }}>
      <HomePage />
    </AppContext.Provider>
  )
}
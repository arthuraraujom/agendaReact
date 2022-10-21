import React, {useContext} from 'react';
import Information from './components/information';
import ScheduleProvider, { ContextSchedule } from './contexts/ContextSchedule';


function App() {

  return (
    <ScheduleProvider>
      <div className="App">
        <div className='uk-container'> 
          <Information />      
        </div>
      </div>
    </ScheduleProvider>    
  );
}

export default App;

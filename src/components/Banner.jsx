import ToggleContext from './ToggleContext';
import React from "react";

export default function Banner() {

    const {on, setOn} = React.useContext(ToggleContext);
    const [sale, setSale] = React.useState(null);

    React.useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller; 
    
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/users', { signal });
            if (response.ok) {
              const data = await response.json();
              setSale(data);
            } else {
              console.error('Failed to fetch data');
            }
          } catch (error) {
            if (error.name === 'AbortError') {
              console.log('Fetch aborted');
            } else {
              console.error('Error fetching data:', error);
            }
          }
        };
    
        fetchData();
        if(sale)  console.log(sale.id) 

    
        return () => {
          controller.abort();
        };
      }, []); 
    return( 
        <>  
            <div className='banner'>
                <div className="toggle-btn" style={{display: 'flex'}}>
                    <label className="switch" style={{marginLeft: 'auto'}}>
                        <input type="checkbox" onChange={() => setOn(prevVal => !prevVal)} checked={on} id='toggle-input'/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <h1>Sale</h1>
                <p></p>

            </div>
        </>
    )
}
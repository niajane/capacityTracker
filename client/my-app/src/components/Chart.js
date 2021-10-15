import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from 'recharts'
import {useState, useEffect} from 'react'
import format from 'date-fns'
import * as api from '../api/index'

function Chart(props) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        api.getAvDay(props.day)
            .then(
                (result) => {
                    setData(result.data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
        )}, [props])
      
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (props.day === 0) {
        return ( 
            <LineChart
                width={900}
                height={600}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis 
                    dataKey="_id" 
                    type="number"
                    domain={[9*60, 22*60]}
                    interval={0}
                    tickFormatter={time=>Math.floor(time/60)+':'+(((time%60)<10)?(time%60)+'0':(time%60))}
                    ticks={Array.from(new Array(14), (x, i) => i*60 + 9*60)}
                    />
                <YAxis domain={[0, 240]}/>
                <Tooltip labelFormatter={(time) => Math.floor(time/60)+':'+(((time%60)<10)?(time%60)+'0':(time%60))}  />
                <CartesianGrid stroke="#f5f5f5" />

                {   
                    data.map((id) => {
                        return (<Line type="monotone" data={id.times} dataKey="avgCount" stroke="#ff7300" yAxisId={0} />)
                    })
                }

            </LineChart>
        )
    } else{
        return ( 
            <LineChart
                width={900}
                height={600}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis 
                    dataKey="_id" 
                    type="number"
                    domain={[9*60, 22*60]}
                    interval={0}
                    tickFormatter={time=>Math.floor(time/60)+':'+(((time%60)<10)?(time%60)+'0':(time%60))}
                    ticks={Array.from(new Array(14), (x, i) => i*60 + 9*60)}
                    />
                <YAxis domain={[0, 240]}/>
                <Tooltip labelFormatter={(time) => Math.floor(time/60)+':'+(((time%60)<10)?(time%60)+'0':(time%60))}  />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="avgCount" stroke="#ff7300" yAxisId={0} />
                
            </LineChart>
        )
    }
}

export default Chart;
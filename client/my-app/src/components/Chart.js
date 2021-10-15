import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from 'recharts'
import {useState, useEffect} from 'react'
import format from 'date-fns'
import * as api from '../api/index'

function Chart(props) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const days = [
        {value: 1, label:'Sunday'}, 
        {value: 2, label:'Monday'},
        {value: 3, label:'Tuesday'},
        {value: 4, label:'Wednesday'}, 
        {value: 5, label:'Thursday'},
        {value: 6, label:'Friday'},
        {value: 7, label:'Saturday'},
    ]

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
    } else{
        console.log(data)
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
                <Tooltip
                    labelFormatter={(time) => Math.floor(time/60)+':'+(((time%60)<10)?(time%60)+'0':(time%60))}
                    />
                <CartesianGrid stroke="#f5f5f5" />

                {   
                    data.map((id) => {
                        return (<Line type="monotone" data={id.times} dataKey="avgCount" stroke="#ff7300" yAxisId={0} name={days.find(x => x.value === id._id).label}/>)
                    })
                }
                
            </LineChart>
        )
    }
}

export default Chart;
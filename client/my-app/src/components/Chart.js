import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from 'recharts'
import {useState, useEffect} from 'react'
import format from 'date-fns'
import * as api from '../api/index'

function Chart() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        api.getAverage()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
        )}, [])
      
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return ( 
            <LineChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis 
                    dataKey="_id" 
                    type="number" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="avgCount" stroke="#ff7300" yAxisId={0} />
            </LineChart>
        )
    }
}

export default Chart;
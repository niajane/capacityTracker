import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from 'recharts'
import {useState, useEffect} from 'react'
import format from 'date-fns'
import * as api from '../api/index'

function Chart() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const testData = [
        [{"_id":540,"avgCount":40.03703703703704},{"_id":555,"avgCount":46.925925925925924},{"_id":570,"avgCount":53.22222222222222},{"_id":585,"avgCount":58.18518518518518},{"_id":600,"avgCount":62.18518518518518},{"_id":615,"avgCount":66.85185185185185},{"_id":630,"avgCount":70.46296296296296},{"_id":645,"avgCount":73.74074074074075},{"_id":660,"avgCount":74.96296296296296},{"_id":675,"avgCount":75.31481481481481},{"_id":690,"avgCount":74.88888888888889},{"_id":705,"avgCount":73.64814814814815},{"_id":720,"avgCount":75.48148148148148},{"_id":735,"avgCount":74.42592592592592},{"_id":750,"avgCount":73.83333333333333},{"_id":765,"avgCount":74.77777777777777},{"_id":780,"avgCount":75.07272727272728},{"_id":795,"avgCount":74.63636363636364},{"_id":810,"avgCount":74.0909090909091},{"_id":825,"avgCount":72.21818181818182},{"_id":840,"avgCount":72.12727272727273},{"_id":855,"avgCount":73.49090909090908},{"_id":870,"avgCount":73.72727272727273},{"_id":885,"avgCount":74.45454545454545},{"_id":900,"avgCount":76.81818181818181},{"_id":915,"avgCount":77.5925925925926},{"_id":930,"avgCount":79.62962962962963},{"_id":945,"avgCount":84.31481481481481},{"_id":960,"avgCount":93.16666666666667},{"_id":975,"avgCount":101.66666666666667},{"_id":990,"avgCount":108},{"_id":1005,"avgCount":114.25925925925925},{"_id":1020,"avgCount":121.88888888888889},{"_id":1035,"avgCount":129.44444444444446},{"_id":1050,"avgCount":137.16666666666666},{"_id":1065,"avgCount":145.62962962962962},{"_id":1080,"avgCount":151.6851851851852},{"_id":1095,"avgCount":155.87037037037038},{"_id":1110,"avgCount":158.16666666666666},{"_id":1125,"avgCount":155.85185185185185},{"_id":1140,"avgCount":154.66666666666666},{"_id":1155,"avgCount":152.22222222222223},{"_id":1170,"avgCount":141.5},{"_id":1185,"avgCount":130.25925925925927},{"_id":1200,"avgCount":103.48148148148148},{"_id":1215,"avgCount":87.27777777777777},{"_id":1230,"avgCount":73.14814814814815},{"_id":1245,"avgCount":57.25925925925926},{"_id":1260,"avgCount":27.11111111111111},{"_id":1275,"avgCount":17.72222222222222},{"_id":1290,"avgCount":16.14814814814815},{"_id":1305,"avgCount":14.777777777777779},{"_id":1320,"avgCount":12.944444444444445},{"_id":1335,"avgCount":10.981481481481481},{"_id":1350,"avgCount":8.648148148148149},{"_id":1365,"avgCount":6.7592592592592595}]    
    ]

    useEffect(() => {
        api.getAverage()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.data);
                    console.log(result.data);
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
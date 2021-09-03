import React, { useEffect, useState } from 'react'
// import './Lottery.css'


const Lottery = () => {

    const [data, setData] = useState([]);

    const getLotteryData = async () => {
        try {
            const res = await fetch('https://randomuser.me/api');
            const actualData = await res.json();
            // console.log(res);
            // console.log(actualData);
            console.log(actualData.results[0].name);
            setData(actualData.results[0].name);


        } catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
        getLotteryData();

    }, []);


    return (


        <div className="card text-center">
            <div className="card-header">
                Lottery
            </div>
            <div className="card-body">
                <p className="card-text">{data.title}</p>
                <h5 className="card-title">{data.first}{ " "}{data.last}</h5>
                <a href="#" className="btn btn-primary">Try your Luck</a>
            </div>
        </div>

    )
}



export default Lottery;

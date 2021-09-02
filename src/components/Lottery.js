import React, { useEffect , useState} from 'react'
// import './Lottery.css'

const Lottery = () => {

    const [data , setData] = useState([]);

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
        <>
            <section>

                <h1> LIVE </h1>
                <h2> Lottery TRACKER</h2>  
                <p>{data.first}</p>
                
                <img src={data.first} alt="" />

                
            </section>
        </>
    )
}


export default Lottery;

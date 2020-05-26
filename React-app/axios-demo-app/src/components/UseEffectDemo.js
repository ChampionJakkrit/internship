import React, { useState, useEffect} from 'react'
import axios from 'axios';

function UseEffectDemo() {

    const [dataArray, setdataArray] = useState(null)

    useEffect(() => {
          axios.get('http://jsonplaceholder.typicode.com/posts', {params: {_limit: 40}})
            .then(result => {
                const {data} = result
                console.log(data)
                // alert(JSON.stringify(data))
                setdataArray(data)
            })
    }, [])

    // map คือการดึงข้อมูลจาก items
    return (
        <div>
            {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
            <ul style={{listStyle: 'none'}}>
                {dataArray && dataArray.map(items => <li key={items.id}> {items.id}. {items.title}</li>)} 
            </ul>
        </div>
    )
}

export default UseEffectDemo

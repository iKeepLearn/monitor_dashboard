import { Card, Radio } from 'antd';
import Pie from './Pie'
import { useState, useEffect } from "react"

const winnerPie = ({data}) => { 
    const [queryType, setQueryType] = useState("all")
    const [dataSource, setDataSource] = useState(data.all)
    const handleChangeQuery = (e) => {
      setQueryType(e.target.value)
      switch (e.target.value){
        case "all": setDataSource(data.all);
                    break;
        case "r1000": 
                      setDataSource(data.r1000); 
                      break;
        case "r100": 
                     setDataSource(data.r100)
                     break;
      }
    }

    return (
        <Card 
            bordered={false}  
            style={{height: 600}}
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            hoverable
            title = {"Winner Distribution"}
            extra={
                <div >
                  <div >
                    <Radio.Group value={queryType} onChange={handleChangeQuery} buttonStyle="solid">
                      <Radio.Button value="all" className="radio-button">
                        All
                      </Radio.Button>
                      <Radio.Button value="r1000" className="radio-button">
                        Recent 1000
                      </Radio.Button>
                      <Radio.Button value="r100" className="radio-button">
                        Recent 100
                      </Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
            }
        >   
            <Pie data={dataSource}/>
        </Card>
    )
}

export default winnerPie;
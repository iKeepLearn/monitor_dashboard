import { Card, Radio} from 'antd';
import MultiColoum from './MultiColoum'
import { useState } from "react"
const RR = ({data}) => {
    const [queryType, setQueryType] = useState("all")
    const [dataSource, setDataSource] = useState(data.all)
    const handleChangeQuery = (e) => {
      console.log(e.target.value)
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
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            style={{height: 600}}
            hoverable
            title = {"Rate of Return"}
            // extra={
            //     <div >
            //       <div >
            //         <Radio.Group value={queryType} onChange={handleChangeQuery} buttonStyle="solid">
            //           <Radio.Button value="all">
            //             All
            //           </Radio.Button>
            //           <Radio.Button value="r1000">
            //             Recent 1000
            //           </Radio.Button>
            //           <Radio.Button value="r100">
            //             Recent 100
            //           </Radio.Button>
            //         </Radio.Group>
            //       </div>
            //     </div>
            // }
        >   
            <MultiColoum data={dataSource}/>
        </Card>
    )
}

export default RR;
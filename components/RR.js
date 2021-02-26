import { Card, Radio} from 'antd';
import MultiColoum from './MultiColoum'
const RR = () => {
    return (
        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            style={{height: 600}}
            hoverable
            title = {"收益率"}
            extra={
                <div >
                  <div >
                    <Radio.Group >
                      <Radio.Button value="all">
                        全部
                      </Radio.Button>
                      <Radio.Button value="online">
                        近1000
                      </Radio.Button>
                      <Radio.Button value="stores">
                        近100
                      </Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
            }
        >   
            <MultiColoum/>
        </Card>
    )
}

export default RR;
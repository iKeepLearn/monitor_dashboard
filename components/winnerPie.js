import { Card, Radio } from 'antd';
import Pie from './Pie'

const winnerPie = () => { 
    return (
        <Card 
            bordered={false}  
            style={{height: 600}}
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            hoverable
            title = {"区块出块分布"}
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
            <Pie/>
        </Card>
    )
}

export default winnerPie;
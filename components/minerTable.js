import { Col, Row, Card, Table} from 'antd';
import { Statistic } from 'antd';
import MultiLine from './MultiLine'
import SingleLine from './SingleLine'
const columns = [
    {
      title: "Height",
      dataIndex: 'stacks_block_height',
      key: 'stacks_block_height',
      width: 10
    },
    {
      title: "Winner STX Address",
      dataIndex: 'stx_address',
      key: 'stx_address', 
      ellipsis: true,
      width: 53
    },
    {
      title: "Burn-Fee",
      dataIndex: 'burn_fee',
      key: 'burn_fee', 
      width: 15
    },
];

const minerTable = ({data}) => {
    
    return (

        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            style={{height: 650}}
            hoverable
            title = {"Miner Info"}
        >   

            <Row style={{ marginBottom: 24}}>
                <Col sm={24} xs={24} style={{ marginBottom: 24 , height:200}}>
                    <div >
                        <p >Burn fee curve</p>
                    </div>
                    <MultiLine data={data.minersBurnFee20}/>
                </Col>
            </Row>
            <Table
                size="small"
                columns={columns}
                dataSource={data.table}
                pagination={{ pageSize: 5 }}
            />
        </Card>

    )
}

export default minerTable;
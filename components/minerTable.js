import { Col, Row, Card, Table} from 'antd';
import MultiLine from './MultiLine'
import SingleLine from './SingleLine'
const columns = [
    {
      title: "高度",
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: "地址",
      dataIndex: 'btcAddress',
      key: 'btcAddress', 
    },
    {
      title: "燃烧量",
      dataIndex: 'burnFee',
      key: 'burnFee', 
    },
];
const datasource=[
    { height:4853, btcAddress:"14jfaoidunfvljakbfvlja", burnFee:700070 },
    { height:4852, btcAddress:"17adlfjkvnlkjnvjnfjnja", burnFee:250000 },
    { height:4851, btcAddress:"19aihvnqowjelkap879a87", burnFee:350000 },
    { height:4850, btcAddress:"1blapiudlkfjvn298ij29g", burnFee:470000 },
]
const minerTable = () => {
    
    return (

        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            style={{height: 600}}
            hoverable
            title = {"矿工信息列表"}
        >   

            <Row>
                <Col sm={12} xs={24} style={{ marginBottom: 24 , height:200}}>
                    <MultiLine/>
                </Col>
                <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                    <SingleLine/>
                </Col>
            </Row>
            <Table
                size="small"
                columns={columns}
                dataSource={datasource}
            />
        </Card>

    )
}

export default minerTable;
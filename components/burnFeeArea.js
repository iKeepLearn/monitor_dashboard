import { Col, Row, Card, Table} from 'antd';
import MultiArea from './MultiArea'

const BurnFeeArea = ({data}) => {
    
    return (

        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px', marginTop: '20px' }} 
            style={{height: 650}}
            hoverable
            title = {"Burn-fee Total Amount Curve"}
        >   
            <MultiArea data={data.data}/>
        </Card>

    )
}

export default BurnFeeArea;
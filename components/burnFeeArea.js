import { Col, Row, Card, Table} from 'antd';
import MultiArea from './MultiArea'

const BurnFeeArea = () => {
    
    return (

        <Card 
            bordered={false}  
            bodyStyle={{ padding: '20px 24px 8px 24px' }} 
            style={{height: 600}}
            hoverable
            title = {"Burn-fee支出曲线"}
        >   
            <MultiArea/>
        </Card>

    )
}

export default BurnFeeArea;
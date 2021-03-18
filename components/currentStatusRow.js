import { Col, Row, Card} from 'antd';
import { Statistic } from 'antd';
import MiniArea from './MiniArea'

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
};

const renderCardContent = (props) => {
    const { title, titleInfo, diagram, extraLabel, extraValue } = props;
    return (
      <div >
            <div >
                <Statistic title={title} value={titleInfo}/>
            </div>
            <div style={{ height: 50 || 'auto' }}>
                {diagram}
            </div>
            <div style={{ marginTop: 5, paddingTop: 9 }}>
                <div style={{  margin: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                    <span>{extraLabel}</span>
                    <span style={{marginLeft: 8}}>{extraValue}</span>
                </div>
            </div>
      </div>
    );
  };

const currentStatusRow = ({data}) => {
    return (
    <Row gutter={24}>
        <Col {...topColResponsiveProps}>
            <Card 
                bordered={false}  
                bodyStyle={{ padding: '20px 24px 8px 24px' }} 
                hoverable
            >
                {
                    renderCardContent({
                        title:"Current Height", 
                        titleInfo:data.current_block.stacks_block_height, 
                        diagram:(<div>......</div>), 
                        extraLabel:"Current Bitcoin Block:", 
                        extraValue:data.current_block.bitcoin_block.block_height
                    })
                }
            </Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card bordered={false}  bodyStyle={{ padding: '20px 24px 8px 24px' }} hoverable>
                {
                    renderCardContent({
                        title:"Current Burn-Fee Amount", 
                        titleInfo:data.current_burn_fee.data_20[19], 
                        diagram:(<MiniArea data={data.current_burn_fee.data_20}/>), 
                        extraLabel:"Average Burn Fee:", 
                        extraValue:data.current_burn_fee.avg
                    })
                }
            </Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card bordered={false}  bodyStyle={{ padding: '20px 24px 8px 24px' }} hoverable>
                {
                    renderCardContent({
                        title:"Current Miner Amount", 
                        titleInfo:data.current_miner.data_20[19], 
                        diagram:(<MiniArea data={data.current_miner.data_20}/>), 
                        extraLabel:"Average Miner Amount:", 
                        extraValue:data.current_miner.avg})
                }
            </Card>
        </Col>
    </Row>
    )
}

export default currentStatusRow;
import { Col, Row, Card, Divider } from 'antd';
import { Statistic } from 'antd';
import MiniArea from './MiniArea'
import MiniColoum from './MiniColoum'
const { Meta } = Card;
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8,
    style: { marginBottom: 24 },
};

const renderCardContent = (props) => {
    const { title, titleInfo, diagram, extraLabel, extraValue } = props;
    console.log(extraLabel)
    return (
      <div >
            <div >
                <Statistic title={title} value={titleInfo}/>
            </div>
            <div style={{ height: 45 || 'auto' }}>
                {diagram}
            </div>
            <div style={{ marginTop: 8, paddingTop: 9 }}>
                <div style={{  margin: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                    <span>{extraLabel}</span>
                    <span style={{marginLeft: 8}}>{extraValue}</span>
                </div>
            </div>
      </div>
    );
  };

const currentStatusRow = () => {
    
    return (
    <Row gutter={24}>
        <Col {...topColResponsiveProps}>
            <Card 
                bordered={false}  
                bodyStyle={{ padding: '20px 24px 8px 24px' }} 
                hoverable
            >
                {renderCardContent({title:"当前区块高度", titleInfo:5130, diagram:(<MiniArea a="123"/>), extraLabel:"比特币当前区块", extraValue:"675432"})}
            </Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card bordered={false}  bodyStyle={{ padding: '20px 24px 8px 24px' }} hoverable>
            {renderCardContent({title:"当前Burn-Fee数量", titleInfo:28135467, diagram:(<MiniArea a="123"/>), extraLabel:"比特币当前区块", extraValue:"675432"})}
            </Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card bordered={false}  bodyStyle={{ padding: '20px 24px 8px 24px' }} hoverable>
            {renderCardContent({title:"当前矿工数量", titleInfo:7, diagram:(<MiniColoum a="123"/>), extraLabel:"比特币当前区块", extraValue:"675432"})}
            </Card>
        </Col>
    </Row>
    )
}

export default currentStatusRow;
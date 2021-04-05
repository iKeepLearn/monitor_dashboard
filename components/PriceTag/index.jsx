import { thousands } from '../../utils'
const PriceTag = ({ price }) => {
    return <div className="flex align-center price-tag text-white">
        <div className="flex align-center">
            <svg viewBox="0 0 22 22" className="price-stx">
                <path d="M4.18817 0.940674L9.37024 8.99389M9.37024 8.99389H0.266602M9.37024 8.99389H12.7316" className="price-stx_d"></path>
                <path d="M17.9129 0.940674L12.7308 8.99389H21.8345" className="price-stx_d"></path>
                <path d="M4.18817 21.4407L9.37024 13.3875M9.37024 13.3875H0.266602M9.37024 13.3875H12.7316" className="price-stx_d"></path>
                <path d="M17.9129 21.4407L12.7308 13.3875H21.8345" className="price-stx_d"></path>
            </svg>
            <div>${thousands(price.stxprice)}</div>
        </div>


        <div className="flex align-center margin-left">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="btc-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"></path><line x1="8" y1="6" x2="8" y2="18"></line><line x1="8" y1="12" x2="14" y2="12"></line><line x1="9" y1="3" x2="9" y2="6"></line><line x1="13" y1="3" x2="13" y2="6"></line><line x1="9" y1="18" x2="9" y2="21"></line><line x1="13" y1="18" x2="13" y2="21"></line></svg>
            <div>${thousands(price.btcprice)}</div>
        </div>

    </div>
}

export default PriceTag
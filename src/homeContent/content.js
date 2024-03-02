import PopuplarProducts from "./popularPrd";
import ProductsForHome from "./homeproduct";


function ContentHome(){
    const propName = [
        {
            id: '454554',
            sku: 'ucht-7854125478'
        },
        {
            id: '8955423',
            sku: 'ucht-45214785'
        }
    ]
    
    return(
        <>
            <PopuplarProducts></PopuplarProducts>
            <ProductsForHome name={propName}></ProductsForHome>
        </>
    )
}

export default ContentHome;
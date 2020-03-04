import React, { Component } from 'react' 
import { Table, Typography,Button, Row, Col } from 'antd'
const { Title , Paragraph, Text } = Typography

export class Cart extends Component { 
    render() {
        const { totalPrice, productList, handlerRemove, handlerSave } = this.props
        const columns = [
            {
                title: "Picture",
                dataIndex: "product.image",
                render : url => <img 
                                    src = { url } 
                                    width = { 50 } 
                                    height = { 50 }  /> 
            },
            {
                title: "Name",
                dataIndex: "product.name"
            },
            {
                title: "Unit",
                dataIndex: "unit"
            },
            {
                title: "Unit price",
                dataIndex: "product.price" 
            },
            {
                title: "Remove", 
                dataIndex: "product",
                render:  product => <Button type="danger" shape="circle" icon="delete" onClick={ handlerRemove(product) }></Button>
            }
        ]
        return (
            <Table 
                columns = { columns }
                dataSource = { productList }
                title = { () => <h2><Text  type="warning" > { 'Cart' } </Text ></h2> }
                footer = { () => <Row type="flex" justify="space-between"> <Col span={12}><Text mark> { 'Total : ' + totalPrice } </Text></Col> <Col span={12}><Button type="primary" onClick={ handlerSave } >{ 'Save' }</Button>  </Col> </Row>  }
            />
        )
    }
}

export default Cart

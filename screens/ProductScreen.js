import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ProductEntry from './Entery/ProductEntry';
import ProductManage from './Entery/ProductManage';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
        m_id: this.props.navigation.state.params.m_id,
    };
  }
 
  componentDidMount(){
      this.getData()
  }
  getData = async () => {
    const { m_id } = this.state;
    return fetch('http://172.20.10.3/myApp/goodSearch.php', {
      method: 'POST',
      header: {
          Accept: 'application/json',
          'Contect-type': 'application/json',
      },
      body: JSON.stringify({
        m_id: m_id,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson,
      }, function(){
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    if(this.state.data == null ){
        return(
          
          <ProductEntry 
          m_id={this.state.m_id}
          navigate={this.props.navigation.navigate}
          setParams={this.props.navigation.setParams}/>
        )
      }
        return (
            <ProductManage
            m_id={this.state.m_id}
            setParams={this.props.navigation.setParams}
            navigate={this.props.navigation.navigate} />
        );
    }
  
}

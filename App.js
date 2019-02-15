import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button, Label} from 'native-base';

class App extends Component {

  proses = () => {}
  constructor(){
    super();
    this.state={
      massa:0,
      tinggi:0,
      diagnosis:'',
      indekMassa:0,
      set:false
    }
  }

  proses=()=>{
    var beratBadan = parseInt(this.state.massa)
    var tinggiBadan = parseInt(this.state.tinggi)/100
    var massaTubuh = beratBadan/Math.pow(tinggiBadan,2)
    var diagnosa =''
    if(massaTubuh<18.5){
      diagnosa='BB Anda kurang'
    }else if(massaTubuh>=18.5 && massaTubuh<=24.9){
      diagnosa='BB Anda ideal'
    }else if(massaTubuh>=25.0 && massaTubuh<=29.9){
      diagnosa ='BB Anda berlebih'
    }else if(massaTubuh>=30.0 && massaTubuh<=39.9){
      diagnosa='BB Anda sangat berlebih'
    }else{
      diagnosa='Anda obesitas'
    }
    this.setState({
      massa:beratBadan,
      tinggi:tinggiBadan,
      indekMassa:massaTubuh,
      diagnosis:diagnosa,
      set:true
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Text style={{color:'white'}}>INDEKS MASSA TUBUH</Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel><Label>Massa (kg)</Label>
              <Input onChangeText={(angka1)=>this.setState({massa:angka1})} value={this.state.massa} />
            </Item>
            <Item floatingLabel last><Label>Tinggi (cm)</Label>
              <Input onChangeText={(angka2)=>this.setState({tinggi:angka2})} value={this.state.tinggi} />
            </Item>
          </Form>

          <Button full onPress={()=>{this.proses();}}>
            <Text>Hitung IMT</Text>
          </Button> 

          {this.state.set &&
            <Text hidden="true">
              {'\n'}<Text style={{color:'blue', alignItems:'center', flex:1}}>Massa tubuh:</Text>{'\n'}
              {this.state.massa} kg{'\n'}
              {'\n'}Tinggi badan:{'\n'}
              {this.state.tinggi} m{'\n'}
              {'\n'}Indeks Massa Tubuh:{'\n'}
              {this.state.indekMassa}{'\n'}
              {'\n'}Diagnosa:{'\n'}
              {this.state.diagnosis}
            </Text>
          }
        </Content>
        <Footer></Footer>
      </Container>
    );
  }
}

export default App;
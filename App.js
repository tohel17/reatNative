import React,{ Component }  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       str:'work under progress!!'
    }
  }
  
  chnageText=()=>{
    this.setState({
      str:'button pressed'
    })
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.str}</Text>
      <Button title="change" onPress={this.chnageText}/>
    </View>
    )

  }
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

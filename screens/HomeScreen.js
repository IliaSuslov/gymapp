import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import ImageExercise1 from '../components/ImageExercise1';
import InputTest from '../components/InputTest';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   title: "Home"
  };
  handlePress() {
    console.log('1234567');
  }

  constructor(props){
    super(props);
    this.state = {
      exercises: [{name: '1'},{type: '2'} ]
    }
  }
  getExercises() {
    console.log(223);
    Database.getExercises( (exercises) => {
      console.log(exercises);
      this.setState({
      exercises: exercises
      })
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        
          <ScrollView
            vertical
          >
              <ImageExercise
                handlePress={() => this.props.navigation.navigate('SingleExercise', { name: "Benchpress"})}
                title={'Bench press'}
                description={'Lorem ipsum dolor sit amet in vina veritas'}
                imageSource={require('../assets/images/exercises.jpg')}/>

          </ScrollView>
          
          <Button
          title="Show Exercise"
          onPress={() => this.props.navigation.navigate('SingleExercise', { name: "Benchpress"})}
        />
          <Button
          title="Get exercise"
          onPress={() => {this.getExercises()}}
          />
           
          <FlatList
            data={Object.values(this.state.exercises)}
            renderItem={({item}) => <Text>{item.name}</Text>} 
          />
          <Text>1234</Text>
          <InputTest value={'Placeholder'}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F2C94C',
  },
});


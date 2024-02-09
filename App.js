//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// create a component
const App = () => {
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [score, setScore]=useState(0);
  const [showScore, setShowScore]=useState(false);
  const quizData = [
    {
      question: 'what is capital of India?',
      options: ['Chandigarh', 'Goa', 'New Delhi', 'Mumbai'],
      answer: 'New Delhi',
    },
    {
      question: 'Larget animal in the world?',
      options: ['Elephant', 'Blue whale', 'Hippopotamus', 'iraffe'],
      answer: 'Blue whale',
    }
  ]

  const handleAnswer=(selectedAnswer)=>{
     const answer = quizData[currentQuestion]?.answer;
     if(answer===selectedAnswer){
      setScore((prevScore)=>prevScore + 1);
     }
     else{
      alert("try again")
     }
  }
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{ quizData[currentQuestion]?.question}</Text>
        {quizData[currentQuestion]?.options.map((item)=>{
          return <TouchableOpacity onPress={()=>handleAnswer(item)} style={styles.optionContainer}>
            <Text style={styles.optionStyle}>{item}</Text>
          </TouchableOpacity>
        })}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  questionContainer: {
    backgroundColor: '@DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius:5,
  },
  optionStyle:{
    color:'green',
    padding:5,
    alignSelf:'center',
    fontSize:18,
    fontWeight:'800'
  },
  optionContainer:{
    borderColor:'black',
    borderWidth:2,
    marginTop:15,

  },
  questionText:{
    fontSize:24,

  }
});

//make this component available to the app
export default App;

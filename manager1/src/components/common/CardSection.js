import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  //Making style take an array enables passing more styles later on in different
  // parts of the program, passing props.style will override any defined styles
  // on this page. This is necessary if we want to edit specific components we create
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [counter, setCounter] = useState(10);

    const handleClicking = () => {
      setCounter(counter + 1);
    };

    return (
      <OriginalComponent handleClicking={handleClicking} counter={counter} />
    );
  }

  return NewComponent;
}

export default UpdatedComponent;

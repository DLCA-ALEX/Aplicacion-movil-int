import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownMenu from 'react-native-dropdown-menu';
import styles from './styless';

const AdminPanelScreen = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = [
    ['Perfil', 'Rutinas', 'Dietas'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Panel Administrativo</Text>
      <DropDownMenu
        style={{ flex: 1 }}
        dropdownStyle={{ flex: 1, backgroundColor: styles.container.backgroundColor }}
        optionTextStyle={{ color: '#fff' }}
        selectedOption={selectedOption}
        onOptionSelect={(index) => setSelectedOption(index)}
        options={options}
      />
      {selectedOption === 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Perfil</Text>
          <Text style={styles.sectionText}>Aquí puedes editar tu perfil de usuario.</Text>
        </View>
      )}
      {selectedOption === 1 && (
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Rutinas</Text>
          <Text style={styles.sectionText}>Aquí puedes ver y editar tus rutinas de ejercicio.</Text>
        </View>
      )}
      {selectedOption === 2 && (
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Dietas</Text>
          <Text style={styles.sectionText}>Aquí puedes ver y editar tus dietas alimenticias.</Text>
        </View>
      )}
    </View>
  );
};

export default AdminPanelScreen;

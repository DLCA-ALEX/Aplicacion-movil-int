import { StyleSheet } from 'react-native';

const colors = {
  primary: '#000000', // verde
  secondary: '#000000', // negro
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;

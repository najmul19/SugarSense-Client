import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  progressContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  progressText: {
    fontSize: 16,
    color: '#3b5998',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b5998',
    borderRadius: 4,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3b5998',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
    color: '#424242',
  },
  description: {
    fontSize: 12,
    marginBottom: 8,
    color: '#757575',
    fontStyle: 'italic',
  },
  required: {
    color: '#d32f2f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#d32f2f',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 120,
  },
  prevButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3b5998',
  },
  prevButtonText: {
    color: '#3b5998',
    fontWeight: '600',
    marginLeft: 8,
  },
  nextButton: {
    backgroundColor: '#3b5998',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: '#28a745',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    color: '#3b5998',
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  exampleBox: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3b5998',
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3b5998',
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 16,
  },
  predictionContainer: {
  marginTop: 20,
  alignItems: 'center',
},
predictionText: {
  fontSize: 18,
  fontWeight: 'bold',
},
diabetic: {
  color: '#d32f2f', // red
},
nonDiabetic: {
  color: '#28a745', // green
},

});

export default styles
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles";
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [form, setForm] = useState({
    GenHlth: "", HighBP: "", BMI: "", Age: "", HighChol: "", CholCheck: "", Income: "", Sex: "",
    HeartDiseaseorAttack: "", HvyAlcoholConsump: "", AnyHealthcare: "", DiffWalk: "",
    PhysActivity: "", Smoker: "", Veggies: "", Fruits: "", Education: "", Stroke: ""
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: string, value: string | number) => {
  if (key === "BMI") {
    setForm({ ...form, [key]: value.toString().replace(/[^0-9.]/g, "") });
  } else {
    setForm({ ...form, [key]: Number(value) });  
  }
};

const [prediction, setPrediction] = useState<string | null>(null);

//   const handleSubmit = async () => {
//     setSubmitted(true);
//     for (const key in form) {
//       if (form[key as keyof typeof form] === "") {
//         Alert.alert("Missing Information", `Please fill in the ${key} field`);
//         return;
//       }
//     }
    
//     try {
//       const response = await fetch("https://sugarsense-server.onrender.com/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         // body: JSON.stringify(form),
//         body: JSON.stringify(
//   Object.fromEntries(
//     Object.entries(form).map(([k, v]) => [k, Number(v)])
//   )
// ),

//       });

//       const result = await response.json();
//       if (result.prediction) {
//         Alert.alert("Diabetes Prediction", result.prediction);

//         Alert.alert("Diabetes Prediction Result", 
//           `Based on the information provided:\n\n${result.prediction === "Diabetic" ? 
//           "Our analysis indicates a higher risk of diabetes. We recommend consulting with a healthcare professional for further evaluation." : 
//           "Our analysis indicates a lower risk of diabetes. Maintain a healthy lifestyle with regular checkups."}`);
//       } else {
//         Alert.alert("Analysis Error", result.error || "Unable to process your information. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Connection Error", "Failed to connect to the prediction service. Please check your connection and try again.");
//     }
//   };


const handleSubmit = async () => {
  setSubmitted(true);
  for (const key in form) {
    if (form[key as keyof typeof form] === "") {
      Alert.alert("Missing Information", `Please fill in the ${key} field`);
      return;
    }
  }

  try {
    const response = await fetch("https://sugarsense-server.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, Number(v)])
        )
      ),
    });

    const result = await response.json();
    if (result.prediction) {
      setPrediction(result.prediction); 
    } else {
      Alert.alert("Analysis Error", result.error || "Unable to process your information. Please try again.");
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Connection Error", "Failed to connect to the prediction service. Please check your connection and try again.");
  }
};




  const formSections = [
    {
      title: "Personal Information",
      fields: ["Age", "Sex", "Income", "Education"]
    },
    {
      title: "Health Metrics",
      fields: ["BMI", "GenHlth", "HighBP", "HighChol", "CholCheck"]
    },
    {
      title: "Lifestyle Factors",
      fields: ["PhysActivity", "HvyAlcoholConsump", "Smoker", "Veggies", "Fruits"]
    },
    {
      title: "Medical History",
      fields: ["HeartDiseaseorAttack", "Stroke", "DiffWalk", "AnyHealthcare"]
    }
  ];


const fieldLabels = {
  GenHlth: "General Health (1=Excellent, 5=Poor)",
  HighBP: "High Blood Pressure (0=No, 1=Yes)",
  BMI: "Body Mass Index",
  Age: "Age Category",
  HighChol: "High Cholesterol (0=No, 1=Yes)",
  CholCheck: "Cholesterol Check in 5 Years (0=No, 1=Yes)",
  Income: "Income Level",
  Sex: "Biological Sex (0=Female, 1=Male)",
  HeartDiseaseorAttack: "Heart Disease or Attack (0=No, 1=Yes)",
  HvyAlcoholConsump: "Heavy Alcohol Consumption (0=No, 1=Yes)",
  AnyHealthcare: "Any Healthcare Coverage (0=No, 1=Yes)",
  DiffWalk: "Difficulty Walking (0=No, 1=Yes)",
  PhysActivity: "Physical Activity (0=No, 1=Yes)",
  Smoker: "Smoker (0=No, 1=Yes)",
  Veggies: "Consume Vegetables Daily (0=No, 1=Yes)",
  Fruits: "Consume Fruits Daily (0=No, 1=Yes)",
  Education: "Education Level",
  Stroke: "Ever Had Stroke (0=No, 1=Yes)"
};


const fieldOptions = {
  Age: [
    { label: "18-24", value: 1 },
    { label: "25-29", value: 2 },
    { label: "30-34", value: 3 },
    { label: "35-39", value: 4 },
    { label: "40-44", value: 5 },
    { label: "45-49", value: 6 },
    { label: "50-54", value: 7 },
    { label: "55-59", value: 8 },
    { label: "60-64", value: 9 },
    { label: "65-69", value: 10 },
    { label: "70-74", value: 11 },
    { label: "75-79", value: 12 },
    { label: "80+", value: 13 }
  ],
  Education: [
    { label: "No School", value: 1 },
    { label: "Elementary", value: 2 },
    { label: "Some High School", value: 3 },
    { label: "High School Graduate", value: 4 },
    { label: "Some College", value: 5 },
    { label: "College Graduate", value: 6 }
  ],
  Income: [
    { label: "Less than $10,000", value: 1 },
    { label: "$10,000 - $15,000", value: 2 },
    { label: "$15,000 - $20,000", value: 3 },
    { label: "$20,000 - $25,000", value: 4 },
    { label: "$25,000 - $35,000", value: 5 },
    { label: "$35,000 - $50,000", value: 6 },
    { label: "$50,000 - $75,000", value: 7 },
    { label: "$75,000 or more", value: 8 }
  ]
};


  const renderSection = () => {
    const section = formSections[currentSection];
    
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        
       {section.fields.map((key) => (
  <View key={key} style={styles.inputContainer}>
    <Text style={styles.label}>
      {key} <Text style={styles.required}>*</Text>
    </Text>
    <Text style={styles.description}>
      {fieldLabels[key as keyof typeof fieldLabels]}
    </Text>

  
    {fieldOptions[key as keyof typeof fieldOptions] ? (
      <Picker
  selectedValue={form[key as keyof typeof form]}
  style={styles.input}
  onValueChange={(value) => handleChange(key, value)}  
>
  <Picker.Item label={`Select ${key}`} value="" />
  {fieldOptions[key as keyof typeof fieldOptions].map((option) => (
    <Picker.Item
      key={option.value}
      label={option.label}
      value={option.value}  
    />
  ))}
</Picker>

    ) : (
      <TextInput
        style={[
          styles.input,
          submitted && form[key as keyof typeof form] === "" && styles.inputError,
        ]}
        placeholder={`Enter value for ${key}`}
        keyboardType="numeric"
        value={form[key as keyof typeof form]}
        onChangeText={(text) => handleChange(key, text)}
      />
    )}

    {submitted && form[key as keyof typeof form] === "" && (
      <Text style={styles.errorText}>This field is required</Text>
    )}
  </View>
))}

      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.header}>
       {/* <Ionicons name="medkit" size={32} color="white" style={styles.headerIcon} /> */}
        <Ionicons name="pulse" size={32} color="white" style={styles.headerIcon} />

        <Text style={styles.title}>Diabetes Risk Predictor</Text>
        <Text style={styles.subtitle}>ML-Powered Early Detection System</Text>
      </LinearGradient>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Section {currentSection + 1} of {formSections.length}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${((currentSection + 1) / formSections.length) * 100}%` }]} />
          </View>
        </View>
        
        {renderSection()}
        
        <View style={styles.buttonContainer}>
          {currentSection > 0 && (
            <TouchableOpacity 
              style={[styles.button, styles.prevButton]}
              onPress={() => setCurrentSection(currentSection - 1)}
            >
              <Ionicons name="arrow-back" size={18} color="#3b5998" />
              <Text style={styles.prevButtonText}>Previous</Text>
            </TouchableOpacity>
          )}
          
          {currentSection < formSections.length - 1 ? (
            <TouchableOpacity 
              style={[styles.button, styles.nextButton]}
              onPress={() => setCurrentSection(currentSection + 1)}
            >
              <Text style={styles.nextButtonText}>Next</Text>
              <Ionicons name="arrow-forward" size={18} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}
            >
              <Ionicons name="analytics" size={20} color="white" />
              <Text style={styles.submitButtonText}>Analyze Risk</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={24} color="#3b5998" />
          <Text style={styles.infoText}>
            This assessment uses a machine learning model trained on health data to evaluate diabetes risk.
            All fields must be completed with the values shown in the examples for accurate prediction.
          </Text>
        </View>
        
        <View style={styles.exampleBox}>
        <Text style={styles.exampleTitle}>How to Fill the Form:</Text>
        <Text style={styles.exampleText}>
            GenHlth: 3 (General Health, 1=Excellent → 5=Poor){"\n"}
            HighBP: 1 (High Blood Pressure, 0=No, 1=Yes){"\n"}
            BMI: 25 (Body Mass Index){"\n"}
            Age: 9 (Age Category, see dropdown){"\n"}
            HighChol: 0 (High Cholesterol, 0=No, 1=Yes){"\n"}
            CholCheck: 1 (Cholesterol Check in 5 Years, 0=No, 1=Yes){"\n"}
            Income: 6 (Income Level, see dropdown){"\n"}
            Sex: 0 (0=Female, 1=Male){"\n"}
            HeartDiseaseorAttack: 0 (0=No, 1=Yes){"\n"}
            HvyAlcoholConsump: 0 (0=No, 1=Yes){"\n"}
            AnyHealthcare: 1 (0=No, 1=Yes){"\n"}
            DiffWalk: 0 (0=No, 1=Yes){"\n"}
            PhysActivity: 1 (0=No, 1=Yes){"\n"}
            Smoker: 1 (0=No, 1=Yes){"\n"}
            Veggies: 1 (0=No, 1=Yes){"\n"}
            Fruits: 0 (0=No, 1=Yes){"\n"}
            Education: 5 (Education Level, see dropdown){"\n"}
            Stroke: 0 (0=No, 1=Yes)
        </Text>
    </View>


        {prediction && (
        <View style={styles.predictionContainer}>
            <Text
            style={[
                styles.predictionText,
                prediction === "Diabetic" ? styles.diabetic : styles.nonDiabetic
            ]}
            >
            {prediction === "Diabetic"
                ? "High Risk: Diabetic"
                : "Low Risk: Non-Diabetic"}
            </Text>
        </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}


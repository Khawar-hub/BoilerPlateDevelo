import React,{useState} from 'react';
import { Text, View, PermissionsAndroid, FlatList, TextInput, TouchableOpacity,Image,CheckBox } from 'react-native';
import { ScreenWrapper} from '../../components/ScreenWrapper';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Modal from "react-native-modal";
import ModalC from './modal';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Score, SelectedAns } from '../../Redux/Actions/Quiz';
import { width } from 'react-native-dimension';
export default function Dashboard(props) {
  const dispatch=useDispatch()
  const question = useSelector((state) => state.Quiz.questions);
  const score = useSelector((state) => state.Quiz.score);
  const selectedAns = useSelector((state) => state.Quiz.SelectedAns);
  const [stateRole, setStateRole] = React.useState('');
  const[count,setcount]=useState(1)
  const [isModalVisible, setModalVisible] = useState(false);
 
  React.useEffect(()=>{
    setcount(0)
  },[])
  const showModal = () => {
    setModalVisible(true)
  }
  // React.useEffect(()=>{
  //   console.log(question)
  // },[])
 const next=()=>{
  
   if(stateRole==="")
   {
      alert("Select Answer")
   }
   else{
   if(count===4)
   {
     showModal()
    
   }
   else
   {
     
     if(question[count].correct===selectedAns)
     {
       console.log('matched')
        dispatch(Score(score+5))
        console.log(score)
        setcount(count+1)
        setStateRole('')
     }
     else{
      console.log('NOt matched')
      setcount(count+1)
      setStateRole('')
     }
   
   }

  
 }}
 const prev=()=>{
   if(count===0){

   }
   else
  setcount(count-1)
}
const[start,setStart]=useState(false)
const startQuiz=()=>{
    setStart(true)
}
  return (
    <>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.5}
        animationIn={'bounceIn'}
        animationOut={'bounceOut'}
        isVisible={isModalVisible}>
        <ModalC score={score}/>
      </Modal>
      <ScreenWrapper statusBarColor={AppColors.transparent} barStyle="light-content">
        <View style={styles.mainViewContainer}>
         
          {start?
          <Timer totalDuration={120000} msecs start={start}
          options={options}
          handleFinish={showModal}
           />: <TouchableOpacity onPress={startQuiz} style={[styles.button,{marginBottom:20,width:width(60)}]}>
           <Text style={styles.btnText}>Start</Text>

         </TouchableOpacity>}
          {!start?null:
          <>
          <Text style={styles.questionText}>Q:{count+1} {question[count].question}</Text>
          <View style={styles.questionRow}>
            <View style={styles.choice}>
          <RadioButton disabled={start} color="#FD2A5A"
                                value={question[count].ans1}
                                status={stateRole === 'ans1' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('ans1'),dispatch(SelectedAns(question[count].ans1))}}
                                
                            />
          <Text style={styles.questionText}>{question[count].ans1}</Text>
          </View>
          <View style={styles.choice}>
          <RadioButton disabled={start} color="#FD2A5A"
                                value={question[count].ans2}
                                status={stateRole === 'ans2' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('ans2'),dispatch(SelectedAns(question[count].ans2))}}
                            />
          <Text style={styles.questionText}>{question[count].ans2}</Text>
          </View>
          <View style={styles.choice}>
          <RadioButton disabled={start} color="#FD2A5A"
                                value={question[count].ans3}
                                status={stateRole === 'ans3' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('ans3'), dispatch(SelectedAns(question[count].ans3)) }}
                            />
          <Text style={styles.questionText}>{question[count].ans3}</Text>
          </View>
          <View style={styles.choice}>
          <RadioButton disabled={start} color="#FD2A5A"
                                value={question[count].ans4}
                                status={stateRole === 'ans4' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('ans4'), dispatch(SelectedAns(question[count].ans4))}}
                            />
          <Text style={styles.questionText}>{question[count].ans4}</Text>
          </View>
          
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity disabled={start} onPress={prev} style={styles.button}>
                <Text style={styles.btnText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={start} onPress={next}  style={styles.button}>
                <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>

          </View>
         
</>}
          
        </View>

        {/* <Button  title="Logout" onPress={logoutMethod} /> */}
      </ScreenWrapper>
    </>
  );
}

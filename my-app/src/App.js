import './App.css';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const txt = {
  joinCommunity: 'Join our commmunity',
  dayGuarrantee: '38-day, hassle free, money back guarrantee',
  gainAccess: 'Gain access to our full library of tutorials along with expert code reviews',
  perfect: 'Perfect for any developer who are serious about homing their skills ',
  monthlySub : 'Monthly subscription',
  dollar: '29$',
  perMonth: 'per month',
  fullAccess: 'Full access for less than 1$ a day',
  signUp: 'Sign up',
  whyUS: 'Why Us',
  msgs: [
    'Tutorials by industry experts',
    'Peer and expert code review',
    'coding exercises',
    'Acess our github repos',
    'community Forum',
    'New videos every week'
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main'> 
          <div id='topDiv' className='topContainer'>
            <Title level={4} style={{ color: '#3db5b0' }}>{txt.joinCommunity}</Title>
            <Text style={{ color: '#c5d674', fontSize: '18px', fontweight: 'bold  ' }}>{txt.dayGuarrantee}</Text>
            <Text style={{ color: '#b2b6c1', fontSize: '18px', fontweight: 'bold  ' }}>{txt.perfect}</Text>
          </div>
          <div id='bottomDiv' className='bottomContainer'>
            <div id='bottom-left-div' className='bottomLeft'>
              <Text className='heading'>{txt.monthlySub}</Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text level={2} style={{ margin: '36px' }}> {txt.dollar}</Text>
                <Text style={{ color: '#ffffff77', fontSize: '16px', marginLeft: '8px' }}>{txt.perMonth}</Text>
              </div>
              <Text style={{ color: '#efefefdd', fontSize: '16px' }}>{txt.fullAccess}</Text>
              <button className="button">{txt.signUp}</button>
            </div>
            <div id='bottom-right-div' className='bottomRight'>
              <Text className='heading' style={{ marginBotton: '12px' }}>{txt.whyUS}</Text>
              {txt.msgs.map(msg => <Text style={{ color: '#ffffff99', fontSize: '16px', marginTop: '4px' }}>{ msg}</Text>)}
            </div>
          </div> 
        </div>
      </header>
    </div>
  );
}
   
   export default App;
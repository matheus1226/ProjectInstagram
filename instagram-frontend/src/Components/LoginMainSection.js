import {React, useState} from 'react'
import HeroImg from '../Assets/hero-img.png'
import api from '../Services/api'
import InputStandart from './InputStandart'
import {useNavigate} from 'react-router-dom';
import login from '../Utils/login'

export default function LoginMainSection({updateUserId}) {
  const [ username, setUserName] = useState('');
  const [ password, setPassword] = useState('');
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate();

  async function loginHandler(e) {
      e.preventDefault();
      setLoading(true)
      try{

        const response = await api.post('/login',{
          username,
          password
        })

        login(response)

        const { data } = response
        updateUserId(data.data._id)
        

        navigate('/feed');

      }catch(err){
        alert('Erro ao fazer login, tente novamente')
        setLoading(false)
      }
    
  }

  return (
    <main>
        <div className='form-login-register'>
            <img src={HeroImg} alt='Logo do Instagram'/>
            <form>
                {loading ?
                    <h1>Conectando...</h1> :
                    <>
                        <h1>Entrar</h1>
                        <fieldset>
                            <InputStandart 
                                title='Usuário' 
                                type='text'
                                state={username}
                                setState={e=>setUserName(e.target.value)}
                            />
                            <InputStandart 
                                title='Senha' 
                                type='password'
                                state={password}
                                setState={e=>setPassword(e.target.value)}
                            />
                        </fieldset>
                        <button onClick={loginHandler}>Conectar</button>
                    </>
                }                    
            </form>                
        </div>
    </main>
)
}
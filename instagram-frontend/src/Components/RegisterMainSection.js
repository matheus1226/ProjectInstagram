import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'
import api from '../Services/api'
import login from '../Utils/login'

export default function RegisterMainSection({updateUserId}) {
    const [ show , setShow] = useState(1);
    const [ username, setUserName] = useState('');
    const [ password, setPassword] = useState('');
    const [ name, setName ] = useState('');
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const handleButtonClick = (e, showNumber) => {
        e.preventDefault();
        setShow(showNumber);
    };

    async function registrationHandler(e){
      e.preventDefault()
      setLoading(true)
      try{
        const response = await api.post('/users',{
            username,
            password,
            name,
            description,
            site,
            avatar

        })

        login(response)

        const { data } = response
        updateUserId(data.data._id)

        navigate('/feed');
      }catch(err){
        setLoading(false)
        console.log(err)
        alert("Erro ao efetuar cadastro. Tente novamente!")
      }
    }

    

  return (
    <main> 
        <div className='form-login-register'>
            <img src={HeroImg} alt='Logo do Instagram'/>
              <form>
                {loading ? <h1>Criando usuário...</h1>
                :
                <>
                 <h1>Cadastra-se</h1>
                {show === 1 ?
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
                    <InputStandart 
                      title='Nome' 
                      type='text'
                      state={name}
                      setState={e=>setName(e.target.value)}
                      />
                </fieldset> :
                <fieldset>
                    <InputStandart 
                      title='Descrição' 
                      type='text'
                      state={description}
                      setState={e=>setDescription(e.target.value)}
                      />
                    <InputStandart 
                      title='Site' 
                      type='text'
                      state={site}
                      setState={e=>setSite(e.target.value)}
                      />
                    <InputStandart 
                      title='Avatar' 
                      type='text'
                      state={avatar}
                      setState={e=>setAvatar(e.target.value)}
                      />
                </fieldset>
                }
                <div className='form-navigation'>
                    {show === 1 ?
                    <>
                        <button
                            style={{ background: '#0095f6'}} 
                            onClick={(e) => handleButtonClick(e, 1)}
                        >1</button>
                        <button 
                            onClick={(e) => handleButtonClick(e, 2)}
                            >2</button>
                    </> :
                    <>
                    <button
                            onClick={(e) => handleButtonClick(e, 1)}
                    >1</button>
                    <button
                            style={{ background : '#0095f6'}}
                            onClick={(e) => handleButtonClick(e, 1)}
                    >2</button>
                    </>
                    }
                    {avatar && site && description && name && password && username && <button 
                    className='submit'
                    onClick={registrationHandler} 
                    >Finalizar</button>}  
                </div>
                </>
                }
              </form>
        </div>  
      </main>
  )
}
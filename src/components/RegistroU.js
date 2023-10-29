import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useState} from 'react'
import {useAuth} from '../firebase/context'
import {useNavigate} from 'react-router-dom'


const RegistroU = ()=> 
{

    const  [user,setUser]= useState({
        correo: '',
        pass:'',
    });
        const {signup} = useAuth();
        const navigate= useNavigate();
        const [error, setError]=useState();


    const handleChange = ({target: {name,value} }) =>{
       setUser({...user,[name]:value})
    }

    const handleSubmit  = async (e)=>{
        e.preventDefault()
        try{
          await  signup(user.correo,user.pass)
            navigate('/')
        }catch(error){
            console.log(error.message);
            setError(error.message);
        }
        
    }
    
        
    const formik=useFormik({
            initialValues:{
            name:'',
            cedula:'',
            user:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            name:Yup.string()
                    .min(4,'el nombre debe de tener como minimo 4 carateres')
                    .required('el campo nombre es requerido'),
            cedula:Yup.number()
                    .min(8,'tiene que tener mimino 8 cifras')
                    
                    .required('el campo cedula es requerido'),
        
            user:Yup.string()
                    .min(5,'su nombre de usuario debe de tener como minimo 5 carteres ')
                    .required('el campo usuario es requerido'),
            email:Yup.string()
                    .min(2,'dos carateres')
                    .matches(
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        'El correo debe contener el carácter @ y tener un formato válido')
                    .required('el campo correo es requerido'),
            password:Yup.string()
                        .min(8,'la contraseña tiene que tener como minimo 8 caracteres')
                        .matches(
                            /^(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
                            'La contraseña debe contener al menos 1 mayúscula, 1 carácter especial y 3 dígitos'
                          )
                        .required('el campo contraseña es requerido')

        }),
        onSubmit: RegistroU =>{

            try{
            
                
                 
                
            
           
            }
            catch(e){
                console.log(e.target.name, e.target.value);
            }
        }
        })
        
        return(

            <>
        
                <div className="flex w-full h-screen">
                    <div className="w-full flex items-center justify-center lg:w-1/2">
                        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>

                            {error && <p>{error}</p> }


                            <form
                            
                            
                                onSubmit={handleSubmit}
                            >
                                <h1 className='text-5xl font-semibold'>Registrate para continuar </h1>
                                <p className='font-medium text-lg text-gray-500 mt-4'>El registro ayudara a que tengas una mejor experiencia</p>
                                <div className='mt-6'>
                                 <div>
                                        <label className='tet-lg font-medium'htmlFor='name'>Nombre</label>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='name'
                                            type='text'
                                            name="nombre"
                                            placeholder='Ingresa tu nombre completo'
                                           //value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        
                                        />
                                    </div>
                                    {formik.touched.name && formik.errors.name ? (
                                        <div>
                                            <p className='font-bold text-red-700'>ocurrio un error</p>
                                            <p>{formik.errors.name}</p>
                                        </div>
                                    ):null}
                                    <div>
                                        <label className='tet-lg font-medium'htmlFor='cedula'>Cedula</label>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='cedula'
                                            type='number'
                                            name="cedula"
                                            placeholder='solo numeros'
                                            min="0"
                                            value={formik.values.cedula}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        
                                        
                                        />
                                    </div>
                                    {formik.touched.cedula && formik.errors.cedula ? (
                                        <div>
                                            <p className='font-bold text-red-700'>ocurrio un error</p>
                                            <p>{formik.errors.cedula}</p>
                                        </div>
                                    ):null}
                                    <div>
                                        <label className='tet-lg font-medium'htmlFor='user'>Usuario</label>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='user'
                                            type='text'
                                            name="usuario"
                                            placeholder='Ingresa tu usuario preferido '
                                            //value={formik.values.user}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    {formik.touched.user && formik.errors.user ? (
                                        <div>
                                            <p className='font-bold text-red-700'>ocurrio un error</p>
                                            <p>{formik.errors.user}</p>
                                        </div>
                                    ):null}
                                    <div>
                                        <label className='tet-lg font-medium'htmlFor='email'>Correo</label>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='email'
                                            type='text'
                                            name="correo"
                                            placeholder='Ingresa tu correo'
                                            //value={formik.values.email}
                                            onChange={handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>
                                            <p className='font-bold text-red-700'>ocurrio un error</p>
                                            <p>{formik.errors.email}</p>
                                        </div>
                                    ):null}
                                    <div>
                                        
                                    <label className='tet-lg font-medium'htmlFor='password'>Contraseña</label>
                                        <input
                                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                            id='password'
                                            type='text'
                                            name="pass"
                                            placeholder='Ingresa tu contraseña'
                                           // value={formik.values.password}
                                            onChange={handleChange}
                                            onBlur={formik.handleBlur}
                                            
                                            
                                        />
                                    </div>
                                    {formik.touched.password && formik.errors.password? (
                                        <div>
                                            <p className='font-bold text-red-700'>ocurrio un error</p>
                                            <p>{formik.errors.password}</p>
                                        </div>
                                    ):null}
                                        <div className='mt-8 flex flex-col gap-y-4'>
                                            
                                            <input
                                            type='submit'
                                            className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'
                                            value='registrar'
                                            
                                            />
                                            <Link to="/">
                                            <button className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Devolverse</button>                      
                                            </Link>
                                        </div>
                                </div>
                            </form>
                        </div>
                    
                    </div>
                    
                    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
                    </div>
                </div>

        </> 
    );
}
export default RegistroU;
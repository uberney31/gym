import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const Proposito = () => {
 

  const formik = useFormik({
    initialValues: {
      categoria: '',
    },
    validationSchema: Yup.object({
      categoria: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .required('El campo es obligatorio'),
    }),
    onSubmit: Proposito => {
      
      try {
        
      } catch (e) {
        console.error(e);
      }
    }
  })

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>

            

              <h1 className='text-5xl font-semibold'>Tipo de ejercicio deseado</h1>
              <form 
              
              onSubmit={formik.handleSubmit}
              
              >
              <div className='mt-6'>
                <div>
                  <label className='text-lg font-medium' htmlFor='categorias'>Categoría</label>
                  
                  <select
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    id='categorias'
                    value={formik.values.categoria}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value=" ">---seleccione---</option>
                    <option value="cardio">cardio</option>
                    <option value="calistenia">calistenia</option>
                    <option value="baile">baile</option>
                    <option value="kickboxer">kickboxer</option>
                  </select>
                </div>
                {formik.touched.categoria && formik.errors.categoria ? (
                  <div>
                    <p className='font-bold text-red-700'>Ocurrió un error</p>
                    <p>{formik.errors.categoria}</p>
                  </div>
                ) : null}

                <div className='mt-8 flex flex-col gap-y-4'>
                <input
                  type='submit'
                  className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'
                  value='guardar'
                                            
                />
                  
                  <Link to="/">
                    <div className='mt-8 flex flex-col gap-y-4'>
                      <button
                        className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'
                      >
                        Devolver
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              </form>
            
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Proposito;

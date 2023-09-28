import {TABS} from '../redux/actions/type'
import { useDispatch } from 'react-redux'
import { getAllTodos, toggleTab } from '../redux/actions'

export const Tabs = ({currentTab}) => {
    console.log(currentTab)
    const dispatch = useDispatch()
    return (
        <div className='flex justify-center mb-3 '>
            <div>
            {TABS.map((tab,key)=>( 
                <button 
                onClick={()=> dispatch(toggleTab(tab))}
                className={`border ${tab === currentTab ? ' bg-slate-950 text-white' : 'text-black'} rounded-md px-2 py-1 hover:shadow-lg mx-3`}
               
                >
                    {tab}
                </button>
            ))}

            </div>
            
        </div>
    )
}
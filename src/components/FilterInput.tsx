import { useDispatch } from 'react-redux';
import { filterChange } from '../store/posts';

function FilterInput() {
    const dispatch = useDispatch()

    const filterChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterChange(event.target.value))
    }

    console.log('Filter Input')
    return (
        <div className='filter-inut_wrapper'>
            <input onChange={filterChangeHandler}></input>
        </div>
    )
}

export default FilterInput
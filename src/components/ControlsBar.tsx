import FilterInput from './FilterInput';
import SortingDropdown from './SortingDropdown';
import PostsPerPageButtons from './PostsPerPageButtons';

function ControlsBar() {

    return (
        <div className='controls-bar_wrapper'>
            <FilterInput/>
            <SortingDropdown/>
            <PostsPerPageButtons/>
        </div>
    )
}

export default ControlsBar
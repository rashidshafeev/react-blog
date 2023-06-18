import React from 'react'; 
import { ButtonGroup } from 'react-bootstrap'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { pageCountUpdate } from '../store/posts';
import PaginationButton from './PaginationButton';


function PaginationControls() {
    const dispatch = useDispatch()


    // const pageCount : number = useSelector((state: RootState) => state.posts.pageCount);
    const currentPage : number = useSelector((state: RootState) => state.posts.currentPage);
    const postCount : number = useSelector((state: RootState) => state.posts.postCount);
    const perPage : number = useSelector((state: RootState) => state.posts.perPage);

    let pageCount : number
    (postCount % perPage) === 0 ? pageCount = postCount / perPage : pageCount = Math.ceil(postCount / perPage)
    
    dispatch(pageCountUpdate(pageCount))

    // if (currentPage > pageCount) {
    //     dispatch(switchPage(pageCount))
    // } 
    // else if (currentPage === 0) {
    //     dispatch(switchPage(1))
    // }
    
    const pagesArray = []
    for (let i = 1; i <= pageCount; i++) {
        pagesArray.push(i);
    } 
    console.log(pageCount)
    console.log('Pagination Controls')
    // console.log(posts)
    
    return (
        <div className='pagination-controls_wrapper'>
            <ButtonGroup>
                {pagesArray.map( page =>(
                    <PaginationButton key={page} current={page === currentPage} page={page}/>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default React.memo(PaginationControls)

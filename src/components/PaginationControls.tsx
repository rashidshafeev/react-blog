import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { Navbar, Container, Offcanvas, Button, Nav, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { switchPage } from '../store/posts';
import PaginationButton from './PaginationButton';


function PaginationControls() {
    const dispatch = useDispatch()

    const posts = useSelector((state: RootState) => state.posts);

    let pagesCount : number
    (posts.totalCount % posts.perPage) === 0 ? pagesCount = posts.totalCount / posts.perPage - 1 : pagesCount = posts.totalCount / posts.perPage
    const pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    } 

    const switchPageHandler = (page : number) => {
        dispatch(switchPage({page: page}))
    }
    console.log('Pagination Controls')
    console.log(posts)
    console.log(pagesCount)
    
    return (
        <div className='pagination-controls_wrapper'>
            <ButtonGroup>
                {pagesArray.map( page =>(
                    <PaginationButton page={page}/>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default React.memo(PaginationControls)

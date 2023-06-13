import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { Navbar, Container, Offcanvas, Button, Nav, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { switchPage } from '../store/posts';

type PaginationButtonProps = {
    page: number
}

function PaginationButton({page} : PaginationButtonProps) {
    const dispatch = useDispatch()

    const switchPageHandler = () => {
        dispatch(switchPage({page: page}))
    }

    console.log('Pagination Button')
    
    return (
            <Button onClick={switchPageHandler}>{page}</Button>
    )
}

export default React.memo(PaginationButton)

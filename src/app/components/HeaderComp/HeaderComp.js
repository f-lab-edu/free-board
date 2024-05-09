import Link from 'next/link';
import React from 'react';
import { IconButton } from '@mui/material';
import {
    HomeOutlined,
    PersonOutlineOutlined,
    LoginOutlined
} from '@mui/icons-material';

function HeaderComp(props) {
    const FBLogo = () => {
        return (
            <div className='w-10 h-10 flex justify-start items-center relative right-2.5'>
                <div className='h-10'>
                    <div className='w-2.5 h-2.5 bg-black rounded-full' />
                </div>
                <div className='text-3xl font-bold tracking-[-.15em] pt-1.5'>
                    FB
                </div>
            </div>
        )
    }
    return (
        <div className="sticky top-0 bg-white z-50 border-b">
            <div className='flex justify-between py-2.5 px-10'>
                <FBLogo />
                <div className='w-36 flex justify-around items-center'>
                    <div>
                        <Link href="/">
                            <IconButton aria-label="home">
                                <HomeOutlined />
                            </IconButton>
                        </Link>
                    </div>
                    <div>
                        <Link href="/mypage">
                            <IconButton aria-label="mypage">
                                <PersonOutlineOutlined />
                            </IconButton>
                        </Link>
                    </div>
                    <div>
                        <Link href="/login">
                            <IconButton aria-label="login">
                                <LoginOutlined />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComp;
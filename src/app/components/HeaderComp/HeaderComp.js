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
        let colonSize = "5px";
        const logoColon = {
            width: colonSize,
            height: colonSize,
            backgroundColor: "black",
            borderRadius: "50px",
            marginBottom: "3px",
        };
        return (
            <>
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        // backgroundColor: "red",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            height: "40px",
                            display: "block",

                        }}
                    >
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                backgroundColor: "black",
                                borderRadius: "50px",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            letterSpacing: "-6px",
                            paddingTop: "5px",
                        }}
                    >
                        FB
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="header">
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 40px",
                }}
            >
                <FBLogo />
                <div style={{
                    width: "140px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
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
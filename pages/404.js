import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from "../public/errror.png"
const Error = () => {
    return (
        <div>
            <Image src={img} width={1400} height={50}>

            </Image>
            <Link className='btn btn-primary' href='/'>Back to home</Link>
        </div>
    );
};

export default Error;
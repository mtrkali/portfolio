import React from 'react';
import fakeCode from '../fakeCode/fakeCode';

const CodeBackground = () => {
    return (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <pre className='text-red-400 text- lg opacity-10 animate-codeMove'>
                {fakeCode}
            </pre>
        </div>
    );
};

export default CodeBackground;
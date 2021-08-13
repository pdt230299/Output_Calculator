import React, { useState } from 'react';
import mathImg from './img/math.png';
function App() {
    /* eslint no-eval: 0 */

    const [input, setInput] = useState('');
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach((item) => {
        calcBtns.push(
            <button
                className='text-2xl font-light p-4 w-1/3 hover:bg-gray-200'
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}>
                {item}
            </button>
        );
    });

    return (
        <div className='  flex flex-col  items-center h-screen bg-gray-400'>
            <div className='flex'>
                <img className='w-52' src={mathImg} alt='math' />
            </div>
            <h1 className='font-normal mb-3 text-5xl text-gray-700'>
                YOUR CALCULATOR
            </h1>

            <div className='flex flex-col w-1/4  bg-gray-300 rounded-lg'>
                <div className='w-full h-20 bg-gray-200 rounded-t-lg p-2'>
                    {input}
                </div>
                <div className='w-full flex justify-around '>
                    <button
                        className='text-2xl font-light flex-1 hover:bg-gray-200'
                        onClick={() =>
                            setInput(input.substr(0, input.length - 1))
                        }>
                        Clear
                    </button>
                    <button
                        className='text-2xl font-light flex-1 hover:bg-gray-200'
                        onClick={() => setInput('')}
                        value=''>
                        AC
                    </button>
                    <button
                        className='text-2xl font-light p-4 w-20 hover:bg-gray-200'
                        onClick={(e) => setInput(input + e.target.value)}
                        value='/'>
                        /
                    </button>
                </div>
                <div className='flex w-full '>
                    <div className='flex flex-wrap'>{calcBtns}</div>

                    <div className='flex flex-col'>
                        <button
                            className='p-4  text-2xl font-light w-20 hover:bg-gray-200'
                            onClick={(e) => setInput(input + e.target.value)}
                            value='+'>
                            +
                        </button>
                        <button
                            className='p-4  text-2xl font-light w-20 hover:bg-gray-200'
                            onClick={(e) => setInput(input + e.target.value)}
                            value='-'>
                            -
                        </button>
                        <button
                            className='p-4  text-2xl font-light w-20 hover:bg-gray-200'
                            onClick={(e) => setInput(input + e.target.value)}
                            value='*'>
                            *
                        </button>

                        <button
                            className='p-4  text-2xl font-light w-20 bg-gray-200 rounded-br-lg hover:bg-gray-500 '
                            onClick={(e) => {
                                try {
                                    setInput(
                                        String(eval(input)).length > 3 &&
                                            String(eval(input)).includes('.')
                                            ? String(eval(input).toFixed(4))
                                            : String(eval(input))
                                    );
                                } catch (e) {
                                    console.log(e);
                                }
                            }}
                            value='='>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

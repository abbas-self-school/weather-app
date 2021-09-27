import React from 'react';

const Form = (props) => {
    return ( 
        <form onSubmit={props.getWeather} 
            className="flex flex-row flex-nowrap border-2 border-blue-400 p-4"
        >
            <input type="text" name="city" placeholder="city..."
                className="bg-gray-200 border-0 focus:outline-none focus:border-0 p-4 w-[39%] mr-[1%] "
            />
            <input type="text" name="country" placeholder="country..."
                className="bg-gray-200 border-0 focus:outline-none focus:border-0 p-4 w-[39%] mr-[1%] "
            />
            <button 
                className="w-[19%] mr-[1%] bg-blue-400 border border-blue-400 text-white transition-all duration-300
                hover:bg-white hover:border hover:border-blue-400 hover:text-blue-400"
            >
                Get Weather
            </button>
        </form>
    );
}

export default Form;
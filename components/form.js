import React from 'react';

const Form = (props) => {
    return ( 
        <form onSubmit={props.getWeather} 
            className="border-2 border-blue-400 p-4 mt-16"
        >
            <input type="text" name="city" placeholder="city..."
                className="bg-gray-200 border-0 focus:outline-none focus:border-0 p-4
                w-[49%] mr-[2%] xl:w-[39%] xl:mr-[1%] text-xs xl:text-lg"
            />
            <input type="text" name="country" placeholder="country..."
                className="bg-gray-200 border-0 focus:outline-none focus:border-0 p-4 
                w-[49%] xl:w-[39%] xl:mr-[1%] text-xs xl:text-lg"
            />
            <button 
                className="w-full xl:w-[19%] xl:mr-[1%] bg-blue-400 border border-blue-400 text-white 
                transition-all duration-300 mt-3 xl:mt-0 text-xs xl:text-lg py-4
                hover:bg-white hover:border hover:border-blue-400 hover:text-blue-400"
            >
                Get Weather
            </button>
        </form>
    );
}

export default Form;
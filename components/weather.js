import React from 'react';

const Weather = (props) => {

    return ( 
        <div className="flex flex-col flex-nowrap mt-4">
            {
                props.temperature && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">temperature: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.temperature}</span>
                </p>
            }
            {
                props.city && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">city: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.city}</span>
                </p>
            }
            {
                props.country && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">country: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.country}</span>
                </p>
            }
            {
                props.humidity && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">humidity: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.humidity}</span>
                </p>
            }
            {
                props.description && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">description: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.description}</span>
                </p>
            }
            {
                props.error && 
                <p className="text-xl xl:text-4xl text-gray-700 my-3 p-4 bg-blue-200">error: 
                    <span className="text-sm xl:text-2xl text-gray-700 float-right">{props.error}</span>
                </p>
            }
        </div>
    );
}


export default Weather;
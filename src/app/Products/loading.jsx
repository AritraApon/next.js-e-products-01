import React from 'react';

const loading = () => {
    return (
        <div>
             <div className="flex min-h-screen items-center justify-center space-x-1">
                <div className="h-4 w-1 bg-blue-500 animate-pulse"></div>
                <div className="h-6 w-1 bg-blue-500 animate-pulse delay-150"></div>
                <div className="h-8 w-1 bg-blue-500 animate-pulse delay-300"></div>
            </div>
        </div>
    );
};

export default loading;
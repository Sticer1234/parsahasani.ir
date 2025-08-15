import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'

function LoadingScreen() {
    return (
        <div className="fixed flex items-center justify-center min-w-full min-h-[100vh] bg-[rgb(16, 16, 16)]  z-1000000000">
            <Ring2
                size="40"
                stroke="2"
                strokeLength="0.25"
                bgOpacity="0.2"
                speed="0.6"
                color="white"
            />
        </div>
    )
}

export default LoadingScreen;
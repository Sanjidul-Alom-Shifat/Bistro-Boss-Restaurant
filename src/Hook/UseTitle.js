import { useEffect } from "react"

const UseTitle = (title) => {
    useEffect(() => { 
        document.title = `Bistro Boss | ${title}`;
    }, [title]);
}

export default UseTitle;
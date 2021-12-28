import React, { useRef } from "react";

const SearchBox = ({
    data = [],
    setData= () => {},
    elements = []
}) => {
    const handleSearchElements = (event) => {
        let filterData = [];
        data.forEach((item) => {
            for (const key in item) {
                if(item[key] && elements.includes(key)){
                    if (item[key].toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                        filterData.push(item);
                        break;
                    }
                }
               
            }
        })
        console.log(filterData)
        setData(filterData);
    }
    return(
        <div>
            <input onChange={handleSearchElements} />
        </div>
    )
}

export default SearchBox;

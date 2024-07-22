

const RestaurantCategory=({data})=>{
    console.log(data);

    return(
        <div>
        {/* Header */}
        <div className="w-full bg-gray-50 shadow-lg p-4">
            <span>{data.title}</span>
            <span>😍</span>
        </div>
        {/* Header */}
        </div>
    )
}

export default RestaurantCategory;
export default function RevenueCard({
    title,
    amount,
    orderCount
}) {

    return <div className="bg-white rounded shadow-md p-5  ">

        <div className="flex p-2 text-gray-700">
            <div>
                {title}

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

        </div>
        <div className="flex  justify-between ">
            <div className="flex font-semibold text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {amount}

            </div>
            <div className="flex flex-col justify-center">

                {orderCount ? <div className="text-blue-800 underline flex flex-col justify-center font-semibold">
                    {orderCount} order(s){">"}
                </div> : null}
            </div>
        </div>

    </div>
}
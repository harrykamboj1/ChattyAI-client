export const fetchResponse = async (chat) => {
    try {
        // after depoloyment you should change the fetch URL below
        const response = await fetch('Place the url here you get from server side', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join(" \n ")
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
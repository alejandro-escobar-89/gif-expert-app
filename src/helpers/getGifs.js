export const getGifs = async (category) => {
    const apiKey = 'd0RlG1eP43hGL126o5oqm0xyY2WTk4T6';
    const limit = 10;
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`);
    const {data} = await response.json();

    return data.map(gifData => ({
        id: gifData.id,
        title: gifData.title,
        url: gifData.images.downsized.url,
    }));
};
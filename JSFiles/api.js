export const accessKey = "K-rfew2XnTROCxcBYb20U5mh_w0-Zl2yd2DQ_RLhK5w";

export async function fetchImages(inputData, page) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;  // Return the results
}

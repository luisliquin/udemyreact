const getImagen = async() => {
    try {
        const apiKey = '0RK8G2s7F8JoSXsbuhhhQOEOtk3j4945';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = await data.images.original;
        const img = await document.createElement('img');
        img.src = url;
        document.body.append(img);    
    } catch (error) {
        console.error(error)
    }
}

getImagen();
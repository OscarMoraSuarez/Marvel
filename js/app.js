const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cc2668a17a9472060fe4a43ad84766d6&hash=b79b867ec4dc43280c88150ac707ce33';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                console.log(json, 'RES.JSON')

            })
    }
};
marvel.render();